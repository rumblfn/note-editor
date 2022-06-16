import { FC, useState } from "react";
import styles from './style.module.scss'

interface BoldTextNoteProps {
    removeAction: () => void;
    content: string;
    handleText: (value: string) => void;
}

export const BoldTextNote: FC<BoldTextNoteProps> = ({
    content, handleText, removeAction
}) => {
    const [aboutEditorMode, setAboutEditorMode] = useState<boolean>(false)
    const [inputValue, setInputValue] = useState<string>('');

  return (
    <div className={styles['action-box']}>
      <div onClick={() => {
          setAboutEditorMode(true);
        }}
      >
        {content ? <p>
            <b>{content}</b>
          </p>
        : <span>
            Click here to change
        </span>}
      </div>
      {aboutEditorMode && <div>
          <textarea
            onBlur={(e) => {
              setAboutEditorMode(true);
              handleText(e.target.value);
            }}
            onChange={(e) => setInputValue(e.target.value)}
            defaultValue={inputValue}
          />
      </div>
      }
      <span onClick={removeAction} 
        className={styles["action-box-rm"]}
      >
        <i className="fa-solid fa-xmark" />
      </span>
    </div>
  );
};
