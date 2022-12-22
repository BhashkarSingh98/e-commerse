import React from 'react'

const Child = (props) => {
  return (
    <div>
        <h1>child</h1>
        <h1>{props.name}</h1>
    </div>
  )
}

export default Child