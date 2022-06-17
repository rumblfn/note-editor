import { FC } from "react";
import styles from '../NoteAction/style.module.scss'

interface XmarkProps {
    removeAction: () => void;
}

export const Xmark:FC<XmarkProps> = ({removeAction}) => {
    return (
        <span onClick={removeAction} 
            className={styles["action-box-rm"]}
        >
            <i className="fa-solid fa-xmark" />
        </span>
    )
}