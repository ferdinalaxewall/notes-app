import React from 'react'
import NoteCard from './NoteCard'

function NoteItem({notes, onDelete, onArchiveOrActive}) {
  if (notes.length > 0) {
    return (
      <div className='note-app__card-wrapper'>
        {
          notes.map((note) => (
            <NoteCard key={note.id} id={note.id} title={note.title} body={note.body} createdAt={note.createdAt} onDelete={onDelete} onArchiveOrActive={onArchiveOrActive} isArchived={note.archived} />
          ))
        }
      </div>
    )
  } else {
    return (
        <p className='not-found-text'>Notes are empty</p>
    )
  }
}

export default NoteItem