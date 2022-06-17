import { FC, useState } from "react";
import { Xmark } from "../Xmark";
import styles from './style.module.scss'

interface PreTextNoteProps {
    removeAction: () => void;
    content: string;
    handleText: (value: string) => void;
}

export const PreTextNote: FC<PreTextNoteProps> = ({
    content, handleText, removeAction
}) => {
    const [inputValue, setInputValue] = useState<string>(content);
    const [aboutEditorMode, setAboutEditorMode] = useState<boolean>(false)

  return (
    <div className={styles["action-box"]}>
      <div onClick={() => {setAboutEditorMode(true)}}>
        {content ? 
          <pre>{content}</pre>
          : <span>
            Click here to change
          </span>
        }
      </div>
      {aboutEditorMode &&
        <div>
          <textarea
            onBlur={(e) => {
              setAboutEditorMode(true);
              handleText(e.target.value);
            }}
            onChange={(e) => setInputValue(e.target.value)}
            defaultValue={inputValue }
          />
        </div>
      }
      <Xmark removeAction={removeAction} />
    </div>
  );
};
