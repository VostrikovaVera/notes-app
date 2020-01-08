import { combineReducers } from "redux";
import { GET_NOTES, SET_ACTIVE, HANDLE_NOTE_CONTENT_CHANGE } from "../constants/action-types";

const initialState = {
    activeNoteId: null,
    notes: null
};

function notesReducer(state = initialState, action) {
    switch (action.type) {
        case GET_NOTES:
            return {
                ...state,
                notes: action.payload.notes,
                activeNoteId: action.payload.activeNote.id
            };

        case SET_ACTIVE:
            return {
                ...state,
                activeNoteId: action.payload
            };

        case HANDLE_NOTE_CONTENT_CHANGE:
            return {
                ...state,
                notes: Object.entries(state.notes).map(([noteId, noteData]) => {
                    return {
                        [noteData.content]: noteId === action.payload.id ? action.payload.content : noteData.content
                    }
                })
            };

        default:
            return state;
    }
}

export default notesReducer;