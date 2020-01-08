import React from "react";
import { setActiveNote } from '../../actions/notes.actions';
import {connect} from 'react-redux';
import './NoteItem.scss';

const NoteItem = ({ setActiveNote, noteId, noteData, activeNoteId }) => {
    const { title } = noteData;

    return (
        <li className={`Note-item ${noteId === activeNoteId ? 'active' : ''}`}
            onClick={() => { setActiveNote(noteId) }}
        >{title}</li>
    );
};

const mapStateToProps = state => {
    return {
        activeNoteId: state.activeNoteId
    };
};

const mapDispatchToProps = {
    setActiveNote
};

export default connect(mapStateToProps, mapDispatchToProps)(NoteItem);
