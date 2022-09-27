import React from 'react'
import CardBody from './CardBody'
import CardFooter from './CardFooter'
import CardHeader from './CardHeader'

function NoteCard({id, title, body, createdAt, onDelete, onArchive}) {
  return (
    <div className='note-card'>
        <CardHeader title={title}/>
        <CardBody body={body}/>
        <CardFooter id={id} createdAt={createdAt} onDelete={onDelete} onArchive={onArchive} />
    </div>
  )
}

export default NoteCard