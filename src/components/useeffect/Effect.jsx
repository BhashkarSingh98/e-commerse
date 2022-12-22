import React, { useEffect, useState } from 'react'

const Effect = () => {

    const [count,setcount]=useState(0)
    const [decrememt,setdecrememt]=useState(100)

    useEffect(()=>{
        console.log("useeffect called");
    },[])

    


  return (
    <div>
        <h1>useEffect</h1>
        <h1>{count}</h1>

        <button onClick={()=>setcount(count+1)}>inc</button>
        <h1>{decrememt}</h1>

        <button onClick={()=>setdecrememt(decrememt-1)}>dec</button>

    </div>
  )
}

export default Effect