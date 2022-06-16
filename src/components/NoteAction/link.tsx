import { FC, useRef, useState } from "react";
import styles from './style.module.scss'

interface LinkNoteProps {
    linkTitleAction: string;
    removeAction: () => void;
    content: string;
    handleText: (value: string) => void;
    handleLinkTitle: (value: string) => void;
}

export const LinkNote: FC<LinkNoteProps> = ({
    linkTitleAction, content,
    removeAction, handleText, handleLinkTitle
}) => {
    const [linkTitle, setLinkTitle] = useState<string>(linkTitleAction);
    const [aboutEditorMode, setAboutEditorMode] = useState<boolean>(false);
    const [inputValue, setInputValue] = useState<string>(content);
    const linkInputRef = useRef<any>(null);

  return (
    <div className={styles["action-box"]}>
      <div onClick={() => {setAboutEditorMode(true)}}>
        {content ? <div>
            <a href={`${content}`}>
              {linkTitleAction}
            </a>
          </div>
        : <span>
            Click here to change
          </span>
        }
      </div>
      {aboutEditorMode && <div>
        <input ref={linkInputRef}
          className="input-default"
          type="text"
          placeholder="Type your link here"
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
        />
        <input onBlur={(e) => {
            handleText(linkInputRef.current.value)
            handleLinkTitle(e.target.value);
          }}
          type="text"
          placeholder="Type your title for link here"
          onChange={(e) => setLinkTitle(e.target.value)}
          value={linkTitle}
        />
      </div>}
      <span onClick={removeAction} 
        className={styles["action-box-rm"]}
      >
        <i className="fa-solid fa-xmark" />
      </span>
    </div>
  );
};
