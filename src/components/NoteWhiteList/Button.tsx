import { FC } from "react";
import styles from './Button.module.scss'

interface ButtonProps {
    handler: (value: boolean) => void;
    valueToSet?: boolean;
    text?: string;
    variant?: string;
}

export const Button:FC<ButtonProps> = ({
    handler, valueToSet = true, text = 'Next', variant = 'default'
}) => {
    return (
        <button 
            className={`${styles.button} ${styles[variant]}`} 
            onClick={() => {handler(valueToSet)}}
        >
            <span>{text}</span>
        </button>
    )
}