import React from 'react'

function CardButton({id, onDelete, onArchiveOrActive, isArchived}) {
  let button;
  if (isArchived === true) {
    
  } else {
    
  }
  return (
    <div className='note-card__button'>
        <button id='delete' title='Delete Note' onClick={() => onDelete(id)}><i className='bx bx-trash'></i></button>
        { 
          isArchived === true ? <button id='active' title='Active Note' onClick={() => onArchiveOrActive(id, false)}><i className='bx bx-check-circle'></i></button> : <button id='archive' title='Archive Note' onClick={() => onArchiveOrActive(id, true)}><i className='bx bx-archive-in'></i></button>
        }
    </div>
  )
}

export default CardButton