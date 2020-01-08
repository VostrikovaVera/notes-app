import React from 'react';
import './NoteBody.scss';
import NoteControls from './note-controls/NoteControls';
import NoteContent from './note-content/NoteContent';

const NoteBody = ({ notes }) => {

    return (
        <div className="Note-body">
            <NoteControls notes={notes} />
            <NoteContent notes={notes} />
        </div>
    );
};

export default NoteBody;
