import { FC, useState } from "react";
import { Xmark } from "../Xmark";
import styles from './style.module.scss'

interface QuoteNoteProps {
    handleText: (value: string) => void;
    content: string;
    removeAction: () => void;
}

export const QuoteNote:FC<QuoteNoteProps> = ({
    handleText, content, removeAction
}) => {
    const [inputValue, setInputValue] = useState<string>(content);

    return (
        <div className={styles["action-box"]}>
            <input className={styles['input-quote']}
                onBlur={(e) => {handleText(e.target.value)}}
                type="text" placeholder="Some quote here"
                onChange={e => setInputValue(e.target.value)}
                value={inputValue}
            />
            <Xmark removeAction={removeAction} />
        </div>
    )
}