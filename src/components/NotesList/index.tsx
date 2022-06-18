import { FC, useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import FilteredTagsContext from "../../context";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { NoteAction, OneNote } from "../../types/note";
import ActionSwitcherPreview from "../NoteActionPreview";
import styles from './style.module.scss'

interface NotesListProps {
    setActions: (newState: NoteAction[] | 
        ((prevState: NoteAction[]) 
            => NoteAction[])) 
    => void
}

const checkTagExist = (tags: string[], sub: string) => {
    return tags.find((tag: string) => {
        if (tag) {
            if (tag.includes(sub)) {
                return true
            }
        }
        return false
    })
}

const FilterNotes = (notes: OneNote[], tags: string[]) => {
    const notesToRender: OneNote[] = []
    notes.forEach(note => {
        if (note.tags) {
            for (let tag of tags) {
                if (tag) {
                    if (checkTagExist(note.tags, tag)) {
                        notesToRender.push(note)
                        break;
                    }
                }
            }
        }
    })
    return notesToRender
}

export const NotesList:FC<NotesListProps> = ({setActions}) => {
    const navigate = useNavigate()
    const {notes} = useTypedSelector(state => state.note)
    const {removeNote} = useActions()

    const context = useContext(FilteredTagsContext)

    const tags = useMemo(() => {
        if (context && context.tags)
            return context.tags
        return []
    }, [context])

    let notesToRender = useMemo(() => FilterNotes(notes, tags), [notes, tags])

    if (!notesToRender.length) {
        notesToRender = notes
    }

    const handleEdit = (note: OneNote) => {
        setActions(note.actions)
        navigate('/new')
    }

    const handleRemove = (id: string) => {
        removeNote(id)
    }

    return <div className={styles['notes-box']}>
        {notesToRender.map(note => 
            <section className={styles['note-box']} key={note.id}>
                <div className={styles['tool-bar']}>
                    <h3 className={styles.heading}>{note.title}</h3>
                    <div className={styles.tools}>
                        <span onClick={() => {
                            handleEdit(note)
                        }} className={styles.tool}>
                            <i className="fa-solid fa-pen-to-square"/>
                        </span>
                        <span onClick={() => {
                            handleRemove(note.id)
                        }} className={styles['tool']}>
                            <i className="fa-solid fa-trash"/>
                        </span>
                    </div>
                </div>
                {note.actions.map(action => <ActionSwitcherPreview action={action}/>)}
            </section>
        )}
    </div>
}