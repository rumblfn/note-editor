import { FC, useState, useRef } from "react";
import DatalistInput, { useComboboxControls } from "react-datalist-input";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { DefaultTextArea } from "../DefaultTextArea";
import { Button } from "../NoteWhiteList/Button";
import { Xmark } from "../Xmark";
import styles from "./style.module.scss";

interface CodeNoteProps {
  removeAction: () => void;
  content: string;
  handleText: (value: string) => void;
  handleLang: (value: string) => void;
  language: string;
}

export const CodeNote: FC<CodeNoteProps> = ({
  content,
  handleLang,
  language,
  handleText,
  removeAction,
}) => {
  const [aboutEditorMode, setAboutEditorMode] = useState<boolean>(true);

  const { setValue, value } = useComboboxControls({
    initialValue: language,
    isExpanded: true,
  });

  return (
    <div className={styles["action-box"]}>
      {aboutEditorMode ? (<>
        <DefaultTextArea 
          handleText={handleText}
          content={content}
          variant='code'
        />
      </>
      ) : (
        <div
          className={styles["action-box-simple-text"]}
          onClick={() => {
            setAboutEditorMode(true);
          }}
        >
          <SyntaxHighlighter language={value} style={docco}>
            {content ? content : "Click here to change"}
          </SyntaxHighlighter>
        </div>
      )}
      {aboutEditorMode && (
        <div className={styles["data-list-input-box"]}>
          <DatalistInput
            style={{ width: "fit-content" }}
            placeholder="Type your lang here"
            label=""
            value={value}
            setValue={handleLang}
            items={[
              { id: "python", value: "python" },
              { id: "javascript", value: "javascript" },
              { id: "typescript", value: "typescript" },
              { id: "php", value: "php" },
              { id: "elixir", value: "elixir" },
              { id: "reasonml", value: "reasonml" },
            ]}
          />
          <span
            onClick={() => {
              setValue("");
            }}
          >
            <i
              className={`fa-solid fa-delete-left 
                ${styles["data-list-input-clear"]}`}
            />
          </span>
        </div>
      )}
      {aboutEditorMode && 
        <Button 
          valueToSet={false}
          handler={setAboutEditorMode}
          text='submit'
          variant="small"
        />
      }
      <Xmark removeAction={removeAction} />
    </div>
  );
};
