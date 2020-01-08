import React from 'react';
import './NotesPage.scss';
import NotesNav from '../notes-nav/NotesNav';
import NoteBody from '../note-body/NoteBody';

const NotesPage = ({ notes }) => {

    return (
        <div className="Notes-container">
            <NotesNav notes={notes} />
            <NoteBody notes={notes} />
        </div>
    );
};

export default NotesPage;