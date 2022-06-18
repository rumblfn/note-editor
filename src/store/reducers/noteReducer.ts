import { NoteActionReducer, NoteActionTypesReducer, NoteState } from "../../types/note"

const initialState: NoteState = {
    notes: []
}

export const noteReducer = (state = initialState, action: NoteActionReducer) => {
    switch (action.type) {
        case NoteActionTypesReducer.ADD_NOTE:
            return { ...state,
                notes: [
                    ...state.notes,
                    action.payload
                ]
            }
        case NoteActionTypesReducer.REMOVE_NOTE:
            return { ...state,
                notes: [...state.notes.filter(note => note.id !== action.payload)]
            }
        default:
            return state
    }
}