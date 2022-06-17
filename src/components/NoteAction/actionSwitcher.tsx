import { FC } from "react"
import { NoteAction, NoteActionTypes } from "../../types/note"
import { BoldTextNote } from "./bold"
import { CodeNote } from "./code"
import { HeadingNote } from "./heading"
import { ImageNote } from "./image"
import { ItalicTextNote } from "./italicText"
import { QuoteNote } from "./quote"
import { TextNote } from "./text"

interface ActionSwitcherProps {
    action: NoteAction;
}

export const ActionSwitcher:FC<ActionSwitcherProps> = ({action}) => {

    switch (action.type) {
        case NoteActionTypes.HEADING:
            return <HeadingNote content={action.content}/>
        case NoteActionTypes.QUOTE:
            return <QuoteNote content={action.content}/>
        case NoteActionTypes.IMAGE:
            return <ImageNote content={action.content}/>
        case NoteActionTypes.TEXT:
            return <TextNote content={action.content}/>
        case NoteActionTypes.ITALIC_TEXT:
            return <ItalicTextNote content={action.content}/>
        case NoteActionTypes.CODE_TEXT:
            return <CodeNote
                    language={action.language}
                    content={action.content}
                />
        case NoteActionTypes.BOLD_TEXT:
            return <BoldTextNote content={action.content}/>
        default:
            return null
    }
}