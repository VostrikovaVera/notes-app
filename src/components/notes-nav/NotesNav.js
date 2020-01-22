import React from "react";
import { setSearchValue } from '../../actions/notes.actions';
import {connect} from 'react-redux';
import './NotesNav.scss';
import NoteItem from '../note-item/NoteItem';

const NotesNav = ({ notes, searchValue, categories, setSearchValue }) => {

    if (!notes) {
        return null;
    }
    
    const accordionToggle = (e) => {
        const accordionBtn = e.target;

        accordionBtn.classList.toggle('open');
    };

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
            <ul>
                {Object.entries(categories).map(([categoryId, categoryData]) => {
                    return <li key={categoryId}>
                        <p className="accordion-btn" onClick={(e) => {accordionToggle(e)}}>
                            {categoryData}
                        </p>
                        <ul className="notes-list accordion-body">
                            {Object.entries(notes).filter(([noteId, noteData]) => {
                                const title = noteData.title.toLowerCase();
                                const searchVal = searchValue.toLowerCase();
                                const category = noteData.category;
                                return searchValue !== ''
                                    ? title.includes(searchVal) && category === categoryId
                                    : category === categoryId;
                            }).map(([noteId, noteData]) => {
                                return <NoteItem
                                    key={noteId}
                                    noteId={noteId}
                                    noteData={noteData}
                                />;
                            })}
                        </ul>
                    </li>;
                })}
            </ul>
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



/*
{Object.entries(notes).map(([noteId, noteData]) => {
    return <NoteItem
        key={noteId}
        noteId={noteId}
        noteData={noteData}
    />;
})}*/
