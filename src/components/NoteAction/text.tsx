import { FC, useState } from "react";
import styles from './style.module.scss'

interface TextNoteProps {
    removeAction: () => void;
    content: string;
    handleText: (value: string) => void;
}

export const TextNote:FC<TextNoteProps> = ({
    content, handleText, removeAction
}) => {
    const [inputValue, setInputValue] = useState<string>(content);
    const [aboutEditorMode, setAboutEditorMode] = useState<boolean>(false)

    return (
        <div className={styles["action-box"]}>
            <div onClick={() => {setAboutEditorMode(true)}}>
                {content ? 
                    <p>{content}</p>
                    : <span>Click here to change</span>
                }
            </div>
            {aboutEditorMode &&
                <textarea 
                    onBlur={(e) => {
                        setAboutEditorMode(true); 
                        handleText(e.target.value)
                    }}
                    onChange={e => setInputValue(e.target.value)}
                    defaultValue={inputValue}
                />
            }
            <span onClick={removeAction} 
                className={styles["action-box-rm"]}
            >
                <i className="fa-solid fa-xmark" />
            </span>
        </div>
    )
}