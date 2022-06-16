import { FC } from "react";
import { NoteAction } from "../../types/note";
import styles from './instrument.module.scss'

interface InstrumentProps {
    handleNewAction: (obj: NoteAction) => void,
    action: NoteAction,
    awesomeClass: string
}

export const Instrument:FC<InstrumentProps> = ({handleNewAction, action, awesomeClass}) => {
    return (
        <button className={styles['instrument']}
            onClick={() => {
                handleNewAction(action)
            }}
        >
            <i className={`fa-solid ${awesomeClass}`}/>
        </button>
    )
}