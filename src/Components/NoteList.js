import React from 'react'
import NoteItem from './NoteItem'

function NoteList({notes, onDelete, onArchive}) {

  const archivedNotes = [], activeNotes = [];
  notes.map((note) => note.archived === true ? archivedNotes.push(note) : activeNotes.push(note))

  return (
    <section className='note-app__note'>
      <h1 className='note-app__section-title'><i className='bx bx-archive'></i> Archived Notes</h1>
      <NoteItem notes={activeNotes} onDelete={onDelete} onArchive={onArchive} />
      <h1 className='note-app__section-title'><i className='bx bx-notepad'></i> Active Notes</h1>
      <NoteItem notes={archivedNotes} onDelete={onDelete} onArchive={onArchive} />
    </section>
  )
}

export default NoteList