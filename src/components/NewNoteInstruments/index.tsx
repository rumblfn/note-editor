import { FC } from "react";
import { NoteActionTypes, NoteAction } from "../../types/note";

interface Props {
    setActions: (newState: NoteAction[] | 
                    ((prevState: NoteAction[]) 
                        => NoteAction[])) 
                => void;
}

export const NewNoteInstruments:FC<Props> = ({setActions}) => {
    return (
        <div className="newArticleInstruments">
            <div className="mainInstruments">
                <button className="instrument"
                    onClick={() => {
                        setActions(prevState => [
                            ...prevState,
                            {
                                type: NoteActionTypes.HEADING,
                                content: ''
                            }
                        ])
                    }}
                >
                    <i className="fa-solid fa-heading"/>
                </button>
                <button className="instrument"
                    onClick={() => {
                        setActions(prevState => [
                            ...prevState,
                            {
                                type: NoteActionTypes.QUOTE,
                                content: ''
                            }
                        ])
                    }}
                >
                    <i className="fa-solid fa-quote-left"/>
                </button>
                <button className="instrument"
                    onClick={() => {
                        setActions(prevState => [
                            ...prevState,
                            {
                                type: NoteActionTypes.IMAGE,
                                content: ''
                            }
                        ])
                    }}
                >
                    <i className="fa-solid fa-image"/>
                </button>
                <button className="instrument"
                    onClick={() => {
                        setActions(prevState => [
                            ...prevState,
                            {
                                type: NoteActionTypes.LINK,
                                content: '',
                                linkTitle: ''
                            }
                        ])
                    }}
                >
                    <i className="fa-solid fa-link"/>
                </button>
                <button className="instrument"
                    onClick={() => {
                        setActions(prevState => [
                            ...prevState,
                            {
                                type: NoteActionTypes.TEXT,
                                content: ''
                            }
                        ])
                    }}
                >
                    <i className="fa-solid fa-font"></i>
                </button>
                <button className="instrument"
                    onClick={() => {
                        setActions(prevState => [
                            ...prevState,
                            {
                                type: NoteActionTypes.ITALIC_TEXT,
                                content: ''
                            }
                        ])
                    }}
                >
                    <i className="fa-solid fa-italic"/>
                </button>
                <button className="instrument"
                    onClick={() => {
                        setActions(prevState => [
                            ...prevState,
                            {
                                type: NoteActionTypes.CODE_TEXT,
                                content: '',
                                language: ''
                            }
                        ])
                    }}
                >
                    <i className="fa-solid fa-code"/>
                </button>
                <button className="instrument"
                    onClick={() => {
                        setActions(prevState => [
                            ...prevState,
                            {
                                type: NoteActionTypes.BOLD_TEXT,
                                content: ''
                            }
                        ])
                    }}
                >
                    <i className="fa-solid fa-bold"/>
                </button>
                <button className="instrument"
                    onClick={() => {
                        setActions(prevState => [
                            ...prevState,
                            {
                                type: NoteActionTypes.PRE_TEXT,
                                content: []
                            }
                        ])
                    }}
                >
                    <i className="fa-solid fa-tree"/>
                </button>
            </div>
        </div>
    )
}