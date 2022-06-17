import { FC } from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import styles from './style.module.scss'

export const NotesPage:FC = () => {
    const {notes} = useTypedSelector(state => state.note)
    console.log(notes)

    return (
        <div className={styles['notes-box']}>
            <h2>Notes</h2>
            {notes.map(note => 
                <div key={note.id}>
                    <h4>{note.title}</h4>
                    {note.actions.map(action => <></>)}
                </div>
            )}
        </div>
    )
}