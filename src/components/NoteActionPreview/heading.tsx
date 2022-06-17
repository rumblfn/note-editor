import { FC } from "react";
import styles from './style.module.scss'

interface HeadingProps {
    content: string;
    variant: string;
}

export const Heading:FC<HeadingProps> = ({
    content, variant
}) => {
    return (
        <h4 className={styles[variant]}>{content}</h4>
    )
}