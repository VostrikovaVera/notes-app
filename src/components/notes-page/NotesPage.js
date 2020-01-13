import React from 'react';
import './NotesPage.scss';
import NotesNav from '../notes-nav/NotesNav';
import NoteBody from '../note-body/NoteBody';

const NotesPage = () => {

    return (
        <div className="Notes-container">
            <NotesNav />
            <NoteBody />
        </div>
    );
};

export default NotesPage;