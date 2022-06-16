import { FC, useState, useRef } from "react";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import styles from './style.module.scss'

interface CodeNoteProps {
    removeAction: () => void;
    content: string;
    handleText: (value: string) => void;
    handleLang: (value: string) => void;
    language: string;
}

export const CodeNote: FC<CodeNoteProps> = ({
    content, handleLang, language, handleText, removeAction
}) => {
    const [inputValue, setInputValue] = useState<string>(content);
    const [aboutEditorMode, setAboutEditorMode] = useState<boolean>(false)
    const [lang, setLang] = useState<string>(language);
    const langInputRef = useRef<any>(null);

  return (
    <div className={styles["action-box"]}>
      <div
        className={styles["action-box-simple-text"]}
        onClick={() => {
          setAboutEditorMode(true);
        }}
      >
        <SyntaxHighlighter language={lang} style={docco}>
          {content ? content : "Click here to change"}
        </SyntaxHighlighter>
      </div>
      {aboutEditorMode && 
        <div>
          <input ref={langInputRef}
            type="text"
            placeholder="Type your lang here"
            onChange={(e) => setLang(e.target.value)}
            value={lang}
          />
          <textarea
            onBlur={(e) => {
              setAboutEditorMode(true);
              handleLang(langInputRef.current.value);
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
