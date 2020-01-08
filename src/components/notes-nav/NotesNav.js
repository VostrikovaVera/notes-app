import React from "react";
import './NotesNav.scss';
import NoteItem from '../note-item/NoteItem';

const NotesNav = ({ notes }) => {

    if (!notes) {
        return null;
    }

    return (
        <div className="Notes-nav">
            <ul className="notes-list">
                {Object.entries(notes).map(([noteId, noteData]) => {
                    return <NoteItem
                            key={noteId}
                            noteId={noteId} 
                            noteData={noteData}
                    />;
                })}
            </ul>
        </div>
    );
};

export default NotesNav;