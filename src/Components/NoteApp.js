import React, { Component } from 'react'
import Navbar from './Navbar';
import NoteContent from './NoteContent';
import { getInitialData } from "../Utils/InitialData";

class NoteApp extends Component {
    constructor(props){
        super(props);

        this.state = {
            notes :  getInitialData()
        }

        this.onAddNoteEventHandler = this.onAddNoteEventHandler.bind(this);
        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onArchiveOrActiveHandler = this.onArchiveOrActiveHandler.bind(this);
        this.onSearchNotesEventHandler = this.onSearchNotesEventHandler.bind(this);
    }

    onSearchNotesEventHandler(event){
        const searchValue = event.target.value.toUpperCase();

        let notes = this.state.notes;
        if (event.target.value.length !== 0) {
            const filteredNotes = this.state.notes.filter(note => {
                if (note.title.toUpperCase().indexOf(searchValue) > -1) {
                    return note
                }
            });

            this.setState({filteredNotes})
            console.log(notes)
        } else {
            notes = this.state.notes;
        }
        

        
    }

    onAddNoteEventHandler({title, body}){
        this.setState((prevState) => {
            return {
                notes : [
                    ...prevState.notes,
                    {
                        id: +new Date(),
                        title,
                        body,
                        createdAt : new Date(),
                        archived : false
                    }
                ]
            }
        })
    }

    onArchiveOrActiveHandler(id, isArchived){
        const notes = this.state.notes.filter(note => note.id === id);
        
        const updateNotes = {
            id: notes[0].id,
            title : notes[0].title,
            body : notes[0].body,
            createdAt : notes[0].createdAt,
            archived : isArchived
        }
        console.log(updateNotes)

        this.onDeleteHandler(notes[0].id);
        this.onUpdateHandler(updateNotes);
    }

    onUpdateHandler(notes){
        this.setState((prevState) => {
            return {
                notes : [
                    ...prevState.notes,
                    notes
                ]
            }
        });
    }
    
    onDeleteHandler(id){
        const notes = this.state.notes.filter(note => note.id !== id);
        this.setState({notes})
    }

    render() {

    return (
      <div className='note-app'>
        <Navbar onSearch={this.onSearchNotesEventHandler} />
        <NoteContent notes={this.state.notes} addNote={this.onAddNoteEventHandler} onDelete={this.onDeleteHandler} onArchiveOrActive={this.onArchiveOrActiveHandler} />
      </div>
    )
  }
}

export default NoteApp;
