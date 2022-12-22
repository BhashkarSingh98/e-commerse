import React, { useContext } from 'react'
import {data1,data2} from "./Contectuse"

const B = () => {
    const name=useContext(data1)
    const age=useContext(data2)
  return (
    <div>
        <h1>{name}</h1>
        <h1>{age}</h1>
    </div>
  )
}

export default B