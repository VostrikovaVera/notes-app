import { combineReducers } from "redux";
import { GET_NOTES, SET_ACTIVE, HANDLE_NOTE_CONTENT_CHANGE, SET_SEARCH_VALUE } from "../constants/action-types";

const initialState = {
    activeNoteId: null,
    notes: null,
    searchValue: '',
    isLoaderActive: false
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
            const {id, content, isLoaderActive} = action.payload;
            return {
                ...state,
                notes: {
                    ...state.notes,
                    isLoaderActive: isLoaderActive,
                    [id] : {
                        ...state.notes[id],
                        content: content
                    }
                }
            };
        
        case SET_SEARCH_VALUE:
            return {
                ...state,
                searchValue: action.payload
            };
    

        default:
            return state;
    }
}

export default notesReducer;