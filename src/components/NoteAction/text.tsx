import { FC, useContext, useState } from "react";
import { DefaultTextArea } from "../DefaultTextArea";
import { Xmark } from "../Xmark";
import NoteActionsContextHandlers from "./context";
import styles from './style.module.scss'

interface TextNoteProps {
    content: string;
    tags: string[]
}

export const TextNote:FC<TextNoteProps> = ({
    content, tags
}) => {
    const [inputValue, setInputValue] = useState<string>(content);
    const [aboutEditorMode, setAboutEditorMode] = useState<boolean>(false)

    const contextStore = useContext(NoteActionsContextHandlers)

    if (!contextStore?.handleText && !contextStore?.removeAction && !contextStore?.handleLang)
        return <></>

    const {handleText, removeAction} = contextStore

    return (
        <div className={styles["action-box"]}>
            <DefaultTextArea 
                content={content}
                handleText={handleText}
                variant='plain'
            />
            <p className={styles['tags-box']}>{tags.join(', ')}</p>
            <Xmark removeAction={removeAction} />
        </div>
    )
}