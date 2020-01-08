import axios from "axios";
import { GET_NOTES, SET_ACTIVE, HANDLE_NOTE_CONTENT_CHANGE } from "../constants/action-types";
import {url as apiUrl} from '../constants/Api';

export const getNotes = () => {
    return async (dispatch) => {
        try {
            const {data} = await axios.get(`${apiUrl}/.json`);
            dispatch({type: GET_NOTES, payload: data});
        } catch (err) {
            console.log(err);
        }
    };
};

export const setActiveNote = (id) => {
    return async (dispatch) => {
        try {
            await axios.put(`${apiUrl}/activeNote.json`, {
                id
            });
            dispatch({
                type: SET_ACTIVE,
                payload: id
            })
        } catch (err) {
            console.log(err);
        }
    };
};

export const handleNoteContentChange = (noteContent, id) => {
    return (dispatch) => {
        dispatch({
            type: HANDLE_NOTE_CONTENT_CHANGE,
            payload: {
                content: noteContent,
                id: id
            }
        })
    };
};

/*export const saveNote = (noteContent, id) => {
    return async (dispatch) => {
        try {
            await axios.put(`${apiUrl}/notes/${id}/content`, {
                noteContent
            });
            dispatch({
                type: HANDLE_NOTE_CONTENT_CHANGE,
                payload: {
                    content: noteContent,
                    id: id
                }
            })
        } catch (err) {
            console.log(err);
        }
    };
};*/
