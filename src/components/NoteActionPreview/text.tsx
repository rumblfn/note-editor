import { FC } from "react";
import styles from './style.module.scss'

interface TextProps {
    content: string;
    variant: string;
}

export const Text:FC<TextProps> = ({
    content, variant
}) => {
    return (
        <div className={styles[variant]}>
            <p>{content}</p>
        </div>
    )
}