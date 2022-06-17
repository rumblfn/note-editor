import { FC, useContext, useState } from "react";
import { Xmark } from "../Xmark";
import NoteActionsContextHandlers from "./context";
import styles from './style.module.scss'

interface QuoteNoteProps {
    content: string;
}

export const QuoteNote:FC<QuoteNoteProps> = ({content}) => {
    const [inputValue, setInputValue] = useState<string>(content);

    const contextStore = useContext(NoteActionsContextHandlers)

    if (!contextStore?.handleText && !contextStore?.removeAction && !contextStore?.handleLang)
        return <></>

    const {handleText, removeAction} = contextStore

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