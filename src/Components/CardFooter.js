import React from 'react'
import CardButton from './CardButton'
import { showFormattedDate } from "../Utils/InitialData";

function CardFooter({id, createdAt, onDelete, onArchiveOrActive, isArchived}) {
  return (
    <div className='note-card__footer'>
        <h5>{showFormattedDate(createdAt)}</h5>
        <CardButton id={id} onDelete={onDelete} onArchiveOrActive={onArchiveOrActive} isArchived={isArchived} />
    </div>
  )
}

export default CardFooter