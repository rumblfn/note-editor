import { Dispatch } from "react";
import { AddNoteAction, NoteAction, NoteActionTypesReducer, RemoveNoteAction } from "../../types/note";

export const addNote = (
    title: string, 
    actions: NoteAction[], 
    id: string,
    tags: string[]
) => {
    return async (dispatch: Dispatch<AddNoteAction>) => {
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