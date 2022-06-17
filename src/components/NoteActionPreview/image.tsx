import { FC } from "react";
import styles from './style.module.scss'

interface ImageProps {
    content: string;
}

export const Image:FC<ImageProps> = ({content}) => {
    if (content) 
        return (
            <img className={styles['img-action']}
                src={content} 
                alt="картинка"
            />
        )
    return null
}