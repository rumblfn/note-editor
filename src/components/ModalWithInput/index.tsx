import { FC } from "react";
import styles from './style.module.scss'

interface ModalWithInputProps {
    setActive: (value: boolean) => void;
    setSubmitted: (value: boolean) => void;
    setTitle: (value: string) => void;
}

export const ModalWithInput:FC<ModalWithInputProps> = ({setActive, setSubmitted, setTitle}) => {
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
                    <button onClick={() => {
                        setActive(false);
                        setSubmitted(true);
                    }}>
                        Add
                    </button>
                </div>
            </div>
        </div>
    )
}