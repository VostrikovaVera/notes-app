import React from 'react';
import { saveNote } from '../../../actions/notes.actions';
import {connect} from 'react-redux';
import Loader from '../../loader/Loader';
import './NoteControls.scss';

const NoteControls = ({ notes, activeNoteId, saveNote }) => {

    if(!notes) {
        return null;
    }

    return (
        <div className="Note-controls">
            <button onClick={() => {saveNote(notes[activeNoteId], activeNoteId)}}>Save</button>
            <Loader />
        </div>
    );
};

const mapStateToProps = state => {
    return {
        notes: state.notes,
        activeNoteId: state.activeNoteId
    };
};

const mapDispatchToProps = {
    saveNote
};

export default connect(mapStateToProps, mapDispatchToProps)(NoteControls);
