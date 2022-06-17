import { FC } from "react";
import { DefaultTextArea } from "../DefaultTextArea";
import { Xmark } from "../Xmark";
import styles from './style.module.scss'

interface HeadingNoteProps {
    handleText: (value: string) => void;
    content: string;
    removeAction: () => void;
}

export const HeadingNote:FC<HeadingNoteProps> = ({
    handleText, content, removeAction
}) => {
    return (
        <div className={styles["action-box"]}>
            <DefaultTextArea 
                variant="heading" 
                content={content} 
                handleText={handleText}
            />
            <Xmark removeAction={removeAction} />
        </div>
    )
}