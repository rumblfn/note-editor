import { FC } from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { ActionSwitcherPreview } from "../NoteActionPreview";
import styles from './style.module.scss'

export const NotesList:FC = () => {
    const {notes} = useTypedSelector(state => state.note)

    return <div className={styles['notes-box']}>
        {notes.map(note => 
            <section className={styles['note-box']} key={note.id}>
                <h3 className={styles.heading}>{note.title}</h3>
                {note.actions.map(action => <ActionSwitcherPreview action={action}/>)}
            </section>
        )}
    </div>
}