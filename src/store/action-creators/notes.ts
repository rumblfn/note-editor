import { Dispatch } from "react";
import { AddNoteAction, NoteAction, NoteActionTypesReducer } from "../../types/note";

export const addNote = (
    title: string, 
    actions: NoteAction[], 
    id: string,
    tags: string[],
) => {
    return async (dispatch: Dispatch<AddNoteAction>) => {
        dispatch({
            type: NoteActionTypesReducer.ADD_NOTE,
            payload: { id, title, actions, tags }
        })
    }
}