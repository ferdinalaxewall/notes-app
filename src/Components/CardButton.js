import React from 'react'

function CardButton({id, onDelete, onArchive}) {
  return (
    <div className='note-card__button'>
        <button id='delete' title='Delete Note' onClick={() => onDelete(id)}><i className='bx bx-trash'></i></button>
        <button id='archive' title='Archive Note' onClick={() => onArchive(id)}><i className='bx bx-archive-in'></i></button>
    </div>
  )
}

export default CardButton