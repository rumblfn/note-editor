import { FC, useContext, useState } from "react";
import { DefaultTextArea } from "../DefaultTextArea";
import { Xmark } from "../Xmark";
import NoteActionsContextHandlers from "./context";
import styles from './style.module.scss'

interface BoldTextNoteProps {
    content: string;
    tags: string[]
}

export const BoldTextNote: FC<BoldTextNoteProps> = ({content, tags}) => {
  
    const contextStore = useContext(NoteActionsContextHandlers)

    if (!contextStore?.handleText && !contextStore?.removeAction && !contextStore?.handleLang)
        return <></>

    const {handleText, removeAction} = contextStore

  return (
    <div className={styles['action-box']}>
      <DefaultTextArea 
        variant="bold" 
        content={content} 
        handleText={handleText} 
      />
      <p className={styles['tags-box']}>{tags.join(', ')}</p>
      <Xmark removeAction={removeAction} />
    </div>
  );
};
