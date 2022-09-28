import React from 'react'
import CardBody from './CardBody'
import CardFooter from './CardFooter'
import CardHeader from './CardHeader'

function NoteCard({id, title, body, createdAt, onDelete, onArchiveOrActive, isArchived}) {
  return (
    <div className='note-card'>
        <CardHeader title={title}/>
        <CardBody body={body}/>
        <CardFooter id={id} createdAt={createdAt} onDelete={onDelete} onArchiveOrActive={onArchiveOrActive} isArchived={isArchived} />
    </div>
  )
}

export default NoteCard