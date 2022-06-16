import { NoteActionReducer, NoteActionTypesReducer, NoteState } from "../../types/note"

const initialState: NoteState = {
    notes: []
}

export const articleReducer = (state = initialState, action: NoteActionReducer) => {
    switch (action.type) {
        case NoteActionTypesReducer.ADD_NOTE:
            return { ...state,
                notes: [
                    ...state.notes,
                    action.payload
                ]
            }
        default:
            return state
    }
}