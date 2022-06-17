import { FC, useState } from "react";
import styles from './style.module.scss'

interface DefaultTextAreaProps {
    content: string;
    handleText: (value: string) => void;
    variant: string;
}

export const DefaultTextArea:FC<DefaultTextAreaProps> = ({
    content, handleText, variant
}) => {
    const [inputValue, setInputValue] = useState<string>(content);

    const handleKeyDown = (e: any) => {
        e.target.style.height = 'inherit';
        e.target.style.height = `${e.target.scrollHeight}px`;
      }

    return (
        <textarea 
            className={styles[variant]}
            onBlur={(e) => {
                handleText(e.target.value)
            }}
            onInput={handleKeyDown}
            placeholder={variant}
            onChange={e => setInputValue(e.target.value)}
            value={inputValue}
        />
    )
}