import { FC, useState } from "react";
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
            <input 
                onBlur={(e) => {handleText(e.target.value)}}
                type="text" placeholder="Some quote here"
                onChange={e => setInputValue(e.target.value)}
                value={inputValue}
            />
            <span onClick={removeAction} 
                className={styles["action-box-rm"]}
            >
                <i className="fa-solid fa-xmark" />
            </span>
        </div>
    )
}