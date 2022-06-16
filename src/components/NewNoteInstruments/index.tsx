import { FC } from "react";
import { NoteActionTypes, NoteAction } from "../../types/note";
import { Instrument } from "./instrument";

interface Props {
    setActions: (newState: NoteAction[] | 
                    ((prevState: NoteAction[]) 
                        => NoteAction[])) 
                => void;
}

export const NewNoteInstruments:FC<Props> = ({setActions}) => {
    
    const handleNewAction = (action: NoteAction) => {
        setActions(prev => [
            ...prev, action
        ])
    }

    return (
        <div className="newArticleInstruments">
            <div className="mainInstruments">
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
                    awesomeClass='fa-link' action={{
                        type: NoteActionTypes.LINK, 
                        content: '', linkTitle: ''
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
                <Instrument 
                    handleNewAction={handleNewAction} 
                    awesomeClass='fa-tree' action={{
                        type: NoteActionTypes.PRE_TEXT, 
                        content: []
                    }}
                />
            </div>
        </div>
    )
}