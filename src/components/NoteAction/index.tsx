import { FC } from "react";
import { NoteAction, NoteActionTypes } from "../../types/note";
import { HeadingNote } from "./heading";
import { QuoteNote } from "./quote";
import { ImageNote } from "./image";
import { LinkNote } from "./link";
import { TextNote } from "./text";
import { ItalicTextNote } from "./italicText";
import { CodeNote } from "./code";
import { BoldTextNote } from "./bold";
import { PreTextNote } from "./preText";

interface Props {
    index: number;
    action: NoteAction;
    actions: NoteAction[];
    setActions: (newState: NoteAction[] | 
        ((prevState: NoteAction[]) 
            => NoteAction[])) 
    => void;
}

export const NoteActionComponent:FC<Props> = ({action, actions, setActions, index}) => {

    const removeAction = () => {
        setActions([
            ...actions.slice(0, index),
            ...actions.slice(index + 1, actions.length),
        ])
    }

    const handleText = (text: string) => {
        const currentAction = actions[index]
        currentAction.content = text;

        setActions([
            ...actions.slice(0, index),
            currentAction,
            ...actions.slice(index + 1, actions.length),
        ])
    }

    const handleLang = (text: string) => {
        const currentAction = actions[index]
        if (currentAction.type === NoteActionTypes.CODE_TEXT) {
            currentAction.language = text;
        }

        setActions([
            ...actions.slice(0, index),
            currentAction,
            ...actions.slice(index + 1, actions.length),
        ])
    }

    const handleLinkTitle = (linkTitle: string) => {
        const currentAction = actions[index]

        if (currentAction.type === NoteActionTypes.LINK) {
            currentAction.linkTitle = linkTitle;
        }

        setActions([
            ...actions.slice(0, index),
            currentAction,
            ...actions.slice(index + 1, actions.length),
        ])
    }

    switch (action.type) {
        case NoteActionTypes.HEADING:
            return (
                <HeadingNote 
                    content={action.content}
                    handleText={handleText}
                    removeAction={removeAction}
                />
            )
        case NoteActionTypes.QUOTE:
            return (
                <QuoteNote 
                    content={action.content}
                    handleText={handleText}
                    removeAction={removeAction}
                />
            )
        case NoteActionTypes.IMAGE:
            return (
                <ImageNote 
                    content={action.content}
                    handleText={handleText}
                    removeAction={removeAction}
                />
            )
        case NoteActionTypes.LINK:
            return (
                <LinkNote
                    content={action.content}
                    handleText={handleText}
                    removeAction={removeAction}
                    handleLinkTitle={handleLinkTitle}
                    linkTitleAction={action.linkTitle}
                />
            )
        case NoteActionTypes.TEXT:
            return (
                <TextNote
                    content={action.content}
                    handleText={handleText}
                    removeAction={removeAction}
                />
            )
        case NoteActionTypes.ITALIC_TEXT:
            return (
                <ItalicTextNote
                    content={action.content}
                    handleText={handleText}
                    removeAction={removeAction}
                />
            )
        case NoteActionTypes.CODE_TEXT:
            return (
                <CodeNote
                    handleLang={handleLang}
                    language={action.language}
                    content={action.content}
                    handleText={handleText}
                    removeAction={removeAction}
                />
            )
        case NoteActionTypes.BOLD_TEXT:
            return (
                <BoldTextNote
                    content={action.content}
                    handleText={handleText}
                    removeAction={removeAction}
                />
            )
        case NoteActionTypes.PRE_TEXT:
            return (
                <PreTextNote
                    content={action.content[0]}
                    handleText={handleText}
                    removeAction={removeAction}
                />
            )
    }
}