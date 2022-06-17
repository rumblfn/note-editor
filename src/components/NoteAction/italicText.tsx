import { FC, useState } from "react";
import { DefaultTextArea } from "../DefaultTextArea";
import { Xmark } from "../Xmark";
import styles from './style.module.scss'

interface ItalicTextNoteProps {
    removeAction: () => void;
    content: string;
    handleText: (value: string) => void;
}

export const ItalicTextNote:FC<ItalicTextNoteProps> = ({
    content, handleText, removeAction
}) => {

    return (
        <div className={styles["action-box"]}>
            <DefaultTextArea 
                handleText={handleText}
                content={content}
                variant='italic'
            />
            <Xmark removeAction={removeAction} />
        </div>
    )
}