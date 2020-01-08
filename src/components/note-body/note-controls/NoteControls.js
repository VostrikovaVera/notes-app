import React from 'react';
import { changeNote } from '../../../actions/notes.actions';
import {connect} from 'react-redux';
import './NoteControls.scss';

const NoteControls = ({ notes, activeNoteId }) => {

    if(!notes) {
        return null;
    }

    return (
        <div className="Note-controls">
            <button>Save</button>
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
    //changeNote
};

export default connect(mapStateToProps, mapDispatchToProps)(NoteControls);



//<button onClick={() => {changeNote(notes.activeNoteId.content, activeNoteId)}}>Save</button>