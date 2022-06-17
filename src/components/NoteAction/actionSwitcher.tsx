import { FC, useEffect } from "react"
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
    const content = action.content

    switch (action.type) {
        case NoteActionTypes.HEADING:
            return <HeadingNote 
                content={content} 
                tags={action.tags}
        />
        case NoteActionTypes.QUOTE:
            return <QuoteNote 
                content={content} 
                tags={action.tags}
        />
        case NoteActionTypes.IMAGE:
            return <ImageNote content={content}/>
        case NoteActionTypes.TEXT:
            return <TextNote 
                content={content} 
                tags={action.tags}
        />
        case NoteActionTypes.ITALIC_TEXT:
            return <ItalicTextNote 
                content={content} 
                tags={action.tags}
        />
        case NoteActionTypes.CODE_TEXT:
            return <CodeNote
                    language={action.language}
                    content={content}
                />
        case NoteActionTypes.BOLD_TEXT:
            return <BoldTextNote 
                content={content} 
                tags={action.tags}
        />
        default:
            return null
    }
}