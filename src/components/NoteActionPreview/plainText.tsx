import { FC } from "react";
import styles from './style.module.scss'

interface PlainTextProps {
    content: string;
    variant: string;
}

export const PlainText:FC<PlainTextProps> = ({content, variant}) => {
    return (
        <pre className={styles[variant]}>
            {content}
        </pre>
    )
}