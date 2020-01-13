import React from 'react';
import './NoteBody.scss';
import NoteControls from './note-controls/NoteControls';
import NoteContent from './note-content/NoteContent';

const NoteBody = () => {

    return (
        <div className="Note-body">
            <NoteControls />
            <NoteContent />
        </div>
    );
};

export default NoteBody;
