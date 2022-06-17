import { FC } from "react";
import { NotesList } from "../../components/NotesList";
import styles from './style.module.scss'

export const NotesPage:FC = () => {
    console.log(window.location.href)

    return (
        <div className={styles['notes-box']}>
            <h2 className={styles['notes-heading']}>Notes</h2>
            <NotesList />
        </div>
    )
}