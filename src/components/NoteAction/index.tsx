import { FC, useContext } from "react";
import NoteActionsContext from "../../routes/NewNote/context";
import { NoteAction, NoteActionTypes } from "../../types/note";
import { ActionSwitcher } from "./actionSwitcher";
import NoteActionsContextHandlers from "./context";

interface Props {
    index: number;
    action: NoteAction;
    actions: NoteAction[];
}

export const NoteActionComponent:FC<Props> = ({action, index, actions}) => {

    const contextStore = useContext(NoteActionsContext)
    if (!contextStore?.setActions) {
        return <></>
    }
    const {setActions} = contextStore

    const removeAction = () => {
        setActions([
            ...actions.slice(0, index),
            ...actions.slice(index + 1, actions.length),
        ])
    }

    const handleText = (text: string) => {
        const currentAction = actions[index]
        currentAction.content = text;

        if (currentAction.type !== NoteActionTypes.IMAGE 
            && currentAction.type !== NoteActionTypes.CODE_TEXT
        ) {
            const tags: string[] = []
            currentAction.content.split(' ').forEach(sub => {
                if (sub[0] === '#' && sub.length > 0) {
                    tags.push(sub)
                }
            })

            currentAction.tags = [...tags]
        }

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

    return (
        <NoteActionsContextHandlers.Provider value={{
            removeAction, handleText, handleLang
        }}>
            <ActionSwitcher action={action} />
        </NoteActionsContextHandlers.Provider>
    )
}