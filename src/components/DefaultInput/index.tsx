import { ChangeEvent, FC, FocusEvent, useState } from "react";
import styles from './style.module.scss'

interface DefaultInputProps {
    content: string;
    ref?: any;
    onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
}

export const DefaultInput:FC<DefaultInputProps> = ({
    content, ref, onBlur, onChange, placeholder
}) => {
    const [inputValue, setInputValue] = useState<string>(content);

    return (
        <input ref={ref}
            className={styles.input}
            onBlur={onBlur}
            type='text'
            placeholder={placeholder ? placeholder : "Type your link here"}
            onChange={(e) => {
                setInputValue(e.target.value);
                if (onChange) {
                    onChange(e)
                }
            }}
            value={inputValue}
        />
    )
}