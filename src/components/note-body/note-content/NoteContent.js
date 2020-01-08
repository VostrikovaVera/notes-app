import React, {useState, useEffect} from 'react';
import { handleNoteContentChange } from '../../../actions/notes.actions';
import {connect} from 'react-redux';
import './NoteContent.scss';

const NoteContent = ({ notes, activeNoteId, handleNoteContentChange }) => {
    //const [inputValue, setInputValue] = useState();

    if(!notes) {
        return null;
    }

    /*const handleChange = e => {
        setInputValue(e.target.value);
    };*/
    
    

    return (
        <div className="Note-content">
            <textarea 
                value={notes[activeNoteId].content} 
                onChange={(e) => {handleNoteContentChange(e.target.value, activeNoteId)}} />
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
    handleNoteContentChange
};

export default connect(mapStateToProps, mapDispatchToProps)(NoteContent);