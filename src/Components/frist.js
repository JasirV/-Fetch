import { Button } from 'bootstrap'
import React, { useState } from 'react'

const Frist = () => {
    const intialCount=0;
    const [count,SetCount]=useState(intialCount);
    const incrimentFive=()=>{
        for(let i=0;i<5;i++){
            SetCount(preCount=>preCount+1)
        }
    }
  return (
    <div>
        <h1>{count}</h1>
        <button className='bg-success m-2'onClick={()=>SetCount(intialCount)}>Rest</button>
        <button className='bg-success m-2'onClick={()=>SetCount(preCount=>preCount+1)}>+</button>
        <button className='bg-danger m-2'onClick={()=>SetCount(preCount=>preCount-1)}>-</button>
        <button className='bg-warnnig m2' onClick={incrimentFive}>Incriment 5</button>
    </div>
  )
}

export default Frist