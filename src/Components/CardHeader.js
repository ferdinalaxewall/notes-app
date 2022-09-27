import React from 'react'

function CardHeader({title}) {
  return (
    <div className='note-card__header'>
        <h3 className='note-card__title'>{title}</h3>
    </div>
  )
}

export default CardHeader