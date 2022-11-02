import React from 'react'

function proparray({array}) {
  return (
    <div>
        <h1 className='heading-text'>{array.join(',')}</h1>
    </div>
  )
}

export default proparray