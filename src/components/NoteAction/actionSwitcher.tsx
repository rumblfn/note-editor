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
    let content = action.content

    useEffect(() => {console.log(content)}, [content])

    switch (action.type) {
        case NoteActionTypes.HEADING:
            return <HeadingNote content={content}/>
        case NoteActionTypes.QUOTE:
            return <QuoteNote content={content}/>
        case NoteActionTypes.IMAGE:
            return <ImageNote content={content}/>
        case NoteActionTypes.TEXT:
            return <TextNote content={content}/>
        case NoteActionTypes.ITALIC_TEXT:
            return <ItalicTextNote content={content}/>
        case NoteActionTypes.CODE_TEXT:
            return <CodeNote
                    language={action.language}
                    content={content}
                />
        case NoteActionTypes.BOLD_TEXT:
            return <BoldTextNote content={content}/>
        default:
            return null
    }
}