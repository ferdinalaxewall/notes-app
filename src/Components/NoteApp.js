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
        this.onArchiveHandler = this.onArchiveHandler.bind(this);
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

    onArchiveHandler(id){
        const notes = this.state.notes.filter(contact => contact.id === id).map((filterNote) => {
            return filterNote
        });
        console.log(notes)
    }
    
    onDeleteHandler(id){
        const notes = this.state.notes.filter(contact => contact.id !== id);
        const updateNotes = {
            id: notes[0].id,
            title : notes[0].title,
            body : notes[0].body,
            createdAt : notes[0].createdAt,
            archived : true
        }
    }

    render() {

    return (
      <div className='note-app'>
        <Navbar />
        <NoteContent notes={this.state.notes} addNote={this.onAddNoteEventHandler} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} />
      </div>
    )
  }
}

export default NoteApp;
