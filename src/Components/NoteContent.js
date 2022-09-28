import React from 'react'
import NoteForm from './NoteForm'
import NoteList from './NoteList'

function NoteContent({notes, addNote, onDelete, onArchiveOrActive}) {
  return (
    <div className='note-app__content-wrapper'>
      <NoteList notes={notes} onDelete={onDelete} onArchiveOrActive={onArchiveOrActive} />
      <NoteForm addNote={addNote} />
    </div>
  )
}

export default NoteContent