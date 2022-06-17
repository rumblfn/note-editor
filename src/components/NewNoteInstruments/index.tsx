import { FC, useContext } from "react";
import NoteActionsContext from "../../routes/NewNote/context";
import { NoteActionTypes, NoteAction } from "../../types/note";
import { Instrument } from "./instrument";
import styles from './style.module.scss'

export const NewNoteInstruments:FC = () => {
    
    const contextStore = useContext(NoteActionsContext)
    if (!contextStore?.setActions) {
        return <></>
    }
    const {setActions} = contextStore
    
    const handleNewAction = (action: NoteAction) => {
        setActions(prev => [
            ...prev, action
        ])
    }

    return (
        <div className={styles['instrument-list-box']}>
            <div className={styles['instrument-list']}>
                <Instrument 
                    handleNewAction={handleNewAction} 
                    awesomeClass='fa-heading' action={{ 
                        type: NoteActionTypes.HEADING, 
                        content: '' 
                    }}
                />
                <Instrument 
                    handleNewAction={handleNewAction} 
                    awesomeClass='fa-quote-left' action={{
                        type: NoteActionTypes.QUOTE, 
                        content: ''
                    }}
                />
                <Instrument
                    handleNewAction={handleNewAction} 
                    awesomeClass='fa-image' action={{
                        type: NoteActionTypes.IMAGE, 
                        content: ''
                    }}
                />
                <Instrument 
                    handleNewAction={handleNewAction} 
                    awesomeClass='fa-font' action={{
                        type: NoteActionTypes.TEXT, 
                        content: ''
                    }}
                />
                <Instrument 
                    handleNewAction={handleNewAction} 
                    awesomeClass='fa-italic' action={{
                        type: NoteActionTypes.ITALIC_TEXT, 
                        content: ''
                    }}
                />
                <Instrument 
                    handleNewAction={handleNewAction} 
                    awesomeClass='fa-code' action={{
                        type: NoteActionTypes.CODE_TEXT, 
                        content: '', language: ''
                    }}
                />
                <Instrument 
                    handleNewAction={handleNewAction} 
                    awesomeClass='fa-bold' action={{
                        type: NoteActionTypes.BOLD_TEXT, 
                        content: ''
                    }}
                />
            </div>
        </div>
    )
}