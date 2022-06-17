import { FC, useContext } from "react";
import NoteActionsContext from "../../routes/NewNote/context";
import { NoteActionTypes, NoteAction, ImageAction } from "../../types/note";
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
    
    const returnAction = (type: any): NoteAction => ({
        type, content: '', tags: []
    })

    return (
        <div className={styles['instrument-list-box']}>
            <div className={styles['instrument-list']}>
                <Instrument 
                    handleNewAction={handleNewAction} 
                    awesomeClass='fa-heading' 
                    action={returnAction(NoteActionTypes.HEADING)}
                />
                <Instrument 
                    handleNewAction={handleNewAction} 
                    awesomeClass='fa-quote-left' 
                    action={returnAction(NoteActionTypes.QUOTE)}
                />
                <Instrument
                    handleNewAction={handleNewAction} 
                    awesomeClass='fa-image' 
                    action={{
                        type: NoteActionTypes.IMAGE, 
                        content: '',
                    }}
                />
                <Instrument 
                    handleNewAction={handleNewAction} 
                    awesomeClass='fa-font' action={returnAction(NoteActionTypes.TEXT)}
                />
                <Instrument 
                    handleNewAction={handleNewAction} 
                    awesomeClass='fa-italic' 
                    action={returnAction(NoteActionTypes.ITALIC_TEXT)}
                />
                <Instrument 
                    handleNewAction={handleNewAction} 
                    awesomeClass='fa-code' 
                    action={{
                        type: NoteActionTypes.CODE_TEXT, 
                        content: '', language: ''
                    }}
                />
                <Instrument 
                    handleNewAction={handleNewAction} 
                    awesomeClass='fa-bold' 
                    action={returnAction(NoteActionTypes.BOLD_TEXT)}
                />
            </div>
        </div>
    )
}