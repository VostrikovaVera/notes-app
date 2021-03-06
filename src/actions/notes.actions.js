import axios from "axios";
import { GET_NOTES, SET_ACTIVE, HANDLE_NOTE_CHANGE, SAVE_NOTE, SET_SEARCH_VALUE, LOADER_STATUS_CHANGE, LOG_IN } from "../constants/action-types";
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

export const handleNoteChange = (param, value, id) => {
    return (dispatch) => {
        dispatch({
            type: HANDLE_NOTE_CHANGE,
            payload: {
                param: param,
                value: value,
                id: id
            }
        })
    };
};

export const saveNote = (note, id) => {
    return async (dispatch) => {
        try {
            dispatch({
                type: LOADER_STATUS_CHANGE,
                payload: true
            });
            await axios.patch(`${apiUrl}/notes/${id}/.json`, {
                content: note.content,
                category: note.category
                
            });
            dispatch({
                type: LOADER_STATUS_CHANGE,
                payload: false
            });
            dispatch({
                type: SAVE_NOTE,
                payload: {
                    content: note.content,
                    category: note.category,
                    id: id
                }
            })
        } catch (err) {
            console.log(err);
        }
    };
};

export const setSearchValue = (searchValue) => {
    return (dispatch) => {
        dispatch({
            type: SET_SEARCH_VALUE,
            payload: searchValue
        })
    };
};

export const logIn = (name, email) => {
    return async (dispatch) => {
        try {
            await axios.post(`${apiUrl}`, {
                loginData: {
                    name: name,
                    email: email
                }
            });
            dispatch({
                type: LOG_IN,
                payload: {
                    name: name,
                    email: email
                }
            })
        } catch (err) {
            console.log(err);
        }
    };
};
