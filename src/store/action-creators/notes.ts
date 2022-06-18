import { Dispatch } from "react";
import { AddNoteAction, NoteAction, NoteActionTypes, NoteActionTypesReducer, RemoveNoteAction } from "../../types/note";

export const addNote = (
    title: string, 
    actions: NoteAction[], 
    id: string,
) => {
    return async (dispatch: Dispatch<AddNoteAction>) => {
        const tags: string[] = []
        actions.forEach(action => {
            if (action.type !== NoteActionTypes.IMAGE 
                && action.type !== NoteActionTypes.CODE_TEXT
            ) {
                tags.push(...action.tags)
            }
        })

        dispatch({
            type: NoteActionTypesReducer.ADD_NOTE,
            payload: { id, title, actions, tags }
        })
    }
}

export const removeNote = (id: string) => {
    return async (dispatch: Dispatch<RemoveNoteAction>) => {
        dispatch({
            type: NoteActionTypesReducer.REMOVE_NOTE,
            payload: id
        })
    }
}