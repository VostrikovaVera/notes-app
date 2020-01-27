import { combineReducers } from "redux";
import { GET_NOTES, SET_ACTIVE, HANDLE_NOTE_CHANGE, SAVE_NOTE, SET_SEARCH_VALUE, LOADER_STATUS_CHANGE, LOG_IN } from "../constants/action-types";

const initialState = {
    activeNoteId: null,
    categories: null,
    notes: null,
    searchValue: '',
    isLoaderActive: false
};

function notesReducer(state = initialState, action) {
    switch (action.type) {
        case GET_NOTES:
            return {
                ...state,
                categories: action.payload.categories,
                notes: action.payload.notes,
                activeNoteId: action.payload.activeNote.id
            };

        case SET_ACTIVE:
            return {
                ...state,
                activeNoteId: action.payload
            };

        case HANDLE_NOTE_CHANGE:
            const {param, value, id} = action.payload;
            console.log(action.payload);
            console.log(param);
            console.log(value);

            return {
                ...state,
                notes: {
                    ...state.notes,
                    [id] : {
                        ...state.notes[id],
                        [param]: value
                    }
                }
            };

        case SAVE_NOTE: {
            const {id, content, category} = action.payload;
            return {
                ...state,
                notes: {
                    ...state.notes,
                    [id] : {
                        ...state.notes[id],
                        category: category,
                        content: content
                    }
                }
            };
        }

        
        case SET_SEARCH_VALUE:
            return {
                ...state,
                searchValue: action.payload
            };
        
        case LOADER_STATUS_CHANGE:
            return {
                ...state,
                isLoaderActive: action.payload
            };

        case LOG_IN:
            return {
                ...state,
                loginData: {
                    name: action.payload.name,
                    email: action.payload.email
                }
            };
    

        default:
            return state;
    }
}

export default notesReducer;