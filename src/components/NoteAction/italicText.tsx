import { FC, useContext, useState } from "react";
import { DefaultTextArea } from "../DefaultTextArea";
import { Xmark } from "../Xmark";
import NoteActionsContextHandlers from "./context";
import styles from './style.module.scss'

interface ItalicTextNoteProps {
    content: string;
    tags: string[]
}

export const ItalicTextNote:FC<ItalicTextNoteProps> = ({
    content, tags
}) => {
    const contextStore = useContext(NoteActionsContextHandlers)

    if (!contextStore?.handleText && !contextStore?.removeAction && !contextStore?.handleLang)
        return <></>

    const {handleText, removeAction} = contextStore

    return (
        <div className={styles["action-box"]}>
            <DefaultTextArea 
                handleText={handleText}
                content={content}
                variant='italic'
            />
            <p>{tags.join(', ')}</p>
            <Xmark removeAction={removeAction} />
        </div>
    )
}