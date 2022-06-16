import { FC } from "react";
import styles from './style.module.scss'

interface ModalWithInputProps {
    publishNote: () => void;
    setTitle: (value: string) => void;
    setActive: (value: boolean) => void;
}

export const ModalWithInput:FC<ModalWithInputProps> = ({publishNote, setTitle, setActive}) => {
    return (
        <div className={styles.modal} onClick={() => setActive(false)}>
            <div className={styles.modal__content} onClick={e => e.stopPropagation()}>
                <div>
                    <h4>Title for note</h4>
                    <input type="text"
                        placeholder="type title here"
                        onChange={e => setTitle(e.target.value)}
                    />
                </div>
                <div className={styles.modal__submit}>
                    <button onClick={publishNote}>
                        Add
                    </button>
                </div>
            </div>
        </div>
    )
}