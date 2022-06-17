import { FC, useState } from "react";
import { DefaultTextArea } from "../DefaultTextArea";
import { Xmark } from "../Xmark";
import styles from './style.module.scss'

interface BoldTextNoteProps {
    removeAction: () => void;
    content: string;
    handleText: (value: string) => void;
}

export const BoldTextNote: FC<BoldTextNoteProps> = ({
    content, handleText, removeAction
}) => {

  return (
    <div className={styles['action-box']}>
      <DefaultTextArea 
        variant="bold" 
        content={content} 
        handleText={handleText} 
      />
      <Xmark removeAction={removeAction} />
    </div>
  );
};
