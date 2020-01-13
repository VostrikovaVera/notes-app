import React from "react";
import { setSearchValue } from '../../actions/notes.actions';
import {connect} from 'react-redux';
import './NotesNav.scss';
import NoteItem from '../note-item/NoteItem';

const NotesNav = ({ notes, searchValue, setSearchValue }) => {

    if (!notes) {
        return null;
    }

    return (
        <div className="Notes-nav">
            <div className="Notes-search">
                <input
                    type="text"
                    placeholder="Search"
                    value={searchValue}
                    onChange={(e) => {setSearchValue(e.target.value)}}
                />
            </div>
            <ul className="notes-list">
                {Object.entries(notes).filter((noteItem) => {
                    const [noteData] = noteItem;

                    return searchValue !== '' ?
                        noteData.title.toLowerCase().includes(searchValue.toLowerCase()) :
                        true;
                }).map(([noteId, noteData]) => {
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

const mapStateToProps = state => {
    return {
        notes: state.notes,
        searchValue: state.searchValue
    };
};

const mapDispatchToProps = {
    setSearchValue
};

export default connect(mapStateToProps, mapDispatchToProps)(NotesNav);



/*
{Object.entries(notes).map(([noteId, noteData]) => {
    return <NoteItem
        key={noteId}
        noteId={noteId}
        noteData={noteData}
    />;
})}*/
