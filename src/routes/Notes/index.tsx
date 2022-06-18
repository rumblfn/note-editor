import { FC } from "react";
import { NotesList } from "../../components/NotesList";
import { NoteAction } from "../../types/note";
import styles from './style.module.scss'

interface NotesPageProps {
    setActions: (newState: NoteAction[] | 
        ((prevState: NoteAction[]) 
            => NoteAction[])) 
    => void
}

export const NotesPage:FC<NotesPageProps> = ({setActions}) => {

    return (
        <div className={styles['notes-box']}>
            <h2 className={styles['notes-heading']}>Notes</h2>
            <NotesList setActions={setActions}/>
        </div>
    )
}