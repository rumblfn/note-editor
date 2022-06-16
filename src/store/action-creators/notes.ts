import { Dispatch } from "react";
import { addNoteAction, NoteAction } from "../../types/note";

export const addNote = (
    title: string, 
    actions: NoteAction[], 
    id: string,
) => {
    return async (dispatch: Dispatch<addNoteAction>) => {
        dispatch({payload: { id, title, actions }})
    }
}