import React, { FC } from "react"
import { NoteAction, NoteActionTypes } from "../../types/note"
import { SyntaxCodePreview } from "./code";
import { Heading } from "./heading";
import { Image } from "./image";
import { PlainText } from "./plainText";
import { Text } from "./text";

interface ActionSwitcherProps {
    action: NoteAction;
}

const ActionSwitcherPreview:FC<ActionSwitcherProps> = ({action}) => {

    switch (action.type) {
        case NoteActionTypes.HEADING:
            return <Heading variant="heading" content={action.content}/>
        case NoteActionTypes.QUOTE:
            return <Text variant="quote" content={action.content}/>
        case NoteActionTypes.IMAGE:
            return <Image content={action.content}/>
        case NoteActionTypes.TEXT:
            return <PlainText variant="plain" content={action.content} />
        case NoteActionTypes.ITALIC_TEXT:
            return <Text variant="italic" content={action.content}/>
        case NoteActionTypes.CODE_TEXT:
            return <SyntaxCodePreview
                    language={action.language}
                    content={action.content}
                />
        case NoteActionTypes.BOLD_TEXT:
            return <Text variant="bold" content={action.content}/>
        default:
            return null
    }
}

export default ActionSwitcherPreview