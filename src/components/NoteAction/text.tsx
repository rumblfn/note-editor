import { FC, useContext, useState } from "react";
import { Xmark } from "../Xmark";
import NoteActionsContextHandlers from "./context";
import styles from './style.module.scss'

interface TextNoteProps {
    content: string;
}

export const TextNote:FC<TextNoteProps> = ({
    content
}) => {
    const [inputValue, setInputValue] = useState<string>(content);
    const [aboutEditorMode, setAboutEditorMode] = useState<boolean>(false)

    const contextStore = useContext(NoteActionsContextHandlers)

    if (!contextStore?.handleText && !contextStore?.removeAction && !contextStore?.handleLang)
        return <></>

    const {handleText, removeAction} = contextStore

    return (
        <div className={styles["action-box"]}>
            <div onClick={() => {setAboutEditorMode(true)}}>
                {content ? 
                    <pre>{content}</pre>
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
            <Xmark removeAction={removeAction} />
        </div>
    )
}