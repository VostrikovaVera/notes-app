import React from 'react';
import { handleNoteChange } from '../../../actions/notes.actions';
import {connect} from 'react-redux';
import { Editor } from '@tinymce/tinymce-react';
import './NoteContent.scss';

const NoteContent = ({ categories, notes, activeNoteId, handleNoteChange }) => {
    if(!notes) {
        return null;
    }

    const setNoteCategory = (e) => {
        const categoryName = e.level.content;

        // ?????????
        const categoryId = categories[categoryName];


        handleNoteChange('category', categoryId, activeNoteId);
    };

    return (
        <div className="Note-content">
            <input
                 className="Note-category"
                 type="text"
                 value={categories[notes[activeNoteId].category]}
                 onChange={setNoteCategory}
             />
            <Editor
                apiKey="y67t3yoahrjo2onjokbhpmx7fybw7wlfy50lklfv2tx8s71j"
                value={notes[activeNoteId].content}
                init={{
                  height: 500,
                  menubar: false,
                  plugins: [
                    'advlist autolink lists link image',
                    'charmap print preview anchor help',
                    'searchreplace visualblocks code',
                    'insertdatetime media table paste wordcount'
                  ],
                  toolbar:
                    'undo redo | formatselect | bold italic | \
                    alignleft aligncenter alignright | \
                    bullist numlist outdent indent'
                }}
                onChange={(e) => {handleNoteChange('content', e.level.content, activeNoteId)}}
            />
        </div>
    );
};

const mapStateToProps = state => {
    return {
        categories: state.categories,
        notes: state.notes,
        activeNoteId: state.activeNoteId
    };
};

const mapDispatchToProps = {
    handleNoteChange
};

export default connect(mapStateToProps, mapDispatchToProps)(NoteContent);