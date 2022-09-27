import React from 'react'

function CardBody({body}) {
  return (
    <div className='note-card__body'>
        <p>{body}</p>
    </div>
  )
}

export default CardBody