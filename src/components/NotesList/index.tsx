import { FC, useContext } from "react";
import FilteredTagsContext from "../../context";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { OneNote } from "../../types/note";
import { ActionSwitcherPreview } from "../NoteActionPreview";
import styles from './style.module.scss'

export const NotesList:FC = () => {
    const {notes} = useTypedSelector(state => state.note)
    const context = useContext(FilteredTagsContext)
    if (!context || !context.tags)
        return null
    const { tags } = context

    let notesToRender: OneNote[] = []

    const checkTagExist = (tags: string[], sub: string) => {
        return tags.find((tag: string) => {
            if (tag) {
                if (tag.includes(sub)) {
                    return true
                }
            }
        })
    }


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

    if (!notesToRender.length) {
        notesToRender = notes
    }

    return <div className={styles['notes-box']}>
        {notesToRender.map(note => 
            <section className={styles['note-box']} key={note.id}>
                <h3 className={styles.heading}>{note.title}</h3>
                {note.actions.map(action => <ActionSwitcherPreview action={action}/>)}
            </section>
        )}
    </div>
}