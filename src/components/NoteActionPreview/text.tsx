import { FC } from "react";
import styles from './style.module.scss'

interface TextProps {
    content: string;
    variant: string;
}

export const Text:FC<TextProps> = ({
    content, variant
}) => {
    if (content)
        return (
            <div className={styles[variant]}>
                <p>{content}</p>
            </div>
        )
    return null
}