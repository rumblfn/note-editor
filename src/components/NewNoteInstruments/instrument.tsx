import { FC } from "react";
import { NoteAction } from "../../types/note";

interface InstrumentProps {
    handleNewAction: (obj: NoteAction) => void,
    action: NoteAction,
    awesomeClass: string
}

export const Instrument:FC<InstrumentProps> = ({handleNewAction, action, awesomeClass}) => {
    return (
        <button className="instrument"
            onClick={() => {handleNewAction(action)}}
        >
            <i className={`fa-solid ${awesomeClass}`}/>
        </button>
    )
}