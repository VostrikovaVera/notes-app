import React from "react";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './Accordion.scss';
import NoteItem from '../note-item/NoteItem';

const Accordion = ({ list }) => {

    if (!list) {
        return null;
    }

    const accordionToggle = (e) => {
        const accordionBtn = e.target;

        accordionBtn.classList.toggle('open');
    };

    return (
            <ul>
                {Object.entries(list).map(([categoryId, categoryData]) => {
                    return (
                        <li key={categoryId}>
                            <p className="accordion-btn" onClick={(e) => {accordionToggle(e)}}>
                                {categoryData.name}
                            </p>
                            <ul className="notes-list accordion-body">
                                <ReactCSSTransitionGroup
                                    transitionName="Note-item"
                                    transitionEnterTimeout={5000}
                                    transitionLeaveTimeout={3000}>
                                    {categoryData.notes.map((note) => {
                                        return <NoteItem
                                            key={note.id}
                                            noteId={note.id}
                                            title={note.title}
                                        />;
                                    })}
                                </ReactCSSTransitionGroup>
                            </ul>
                        </li>
                    )
                })}
            </ul>
    );
};

export default Accordion;