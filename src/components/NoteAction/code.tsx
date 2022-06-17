import { FC, useState } from "react";
import { useComboboxControls } from "react-datalist-input";
import { DataList } from "../DataListInput";
import { DefaultTextArea } from "../DefaultTextArea";
import { Button } from "../NoteWhiteList/Button";
import { SyntaxCode } from "../SyntaxCode";
import { Xmark } from "../Xmark";
import { ClearInput } from "../Xmark/clearInput";
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
      {aboutEditorMode ? 
        <DefaultTextArea 
          handleText={handleText}
          content={content}
          variant='code'
        />
      : <SyntaxCode 
          content={content} 
          setValue={setAboutEditorMode} 
          value={value} 
      />}
      {aboutEditorMode && (
        <div className={styles["data-list-input-box"]}>
          <DataList 
            setValue={handleLang} 
            value={value} 
          />
          <ClearInput setValue={setValue}/>
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
