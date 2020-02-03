import React from "react";
import { setSearchValue } from '../../actions/notes.actions';
import {connect} from 'react-redux';
import './NotesNav.scss';
import Accordion from '../accordion/Accordion';

const NotesNav = ({ notes, searchValue, categories, setSearchValue }) => {

    if (!notes) {
        return null;
    }

    let filteredNotes = Object.entries(notes).filter(([noteId, noteData]) => {
        const title = noteData.title.toLowerCase();
        const searchVal = searchValue.toLowerCase();

        return searchValue !== '' ?
            title.includes(searchVal) :
            true;
    });

    let notesByCategories = {};
    filteredNotes.forEach(([noteId, noteData]) => {
        const categoryId = noteData.category;

        if (!notesByCategories[categoryId]) {
            const currentCategory = {
                name: categories[categoryId],
                notes: []
            };
            notesByCategories[categoryId] = currentCategory;
        }

        const currentNote = {
            id: noteId,
            title: noteData.title
        };

        notesByCategories[categoryId].notes.push(currentNote);
    });

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
            <Accordion list={notesByCategories} />
        </div>
    );
};

const mapStateToProps = state => {
    return {
        categories: state.categories,
        notes: state.notes,
        searchValue: state.searchValue
    };
};

const mapDispatchToProps = {
    setSearchValue
};

export default connect(mapStateToProps, mapDispatchToProps)(NotesNav);