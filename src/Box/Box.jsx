import React, { useState } from 'react'
import "./Box.css"

const Box = () => {
    const[block1,setBlock1]=useState()
  return (
   <div>
     <div className='wrapper'>
        <div className='row1 row'>
        <div className='block'>1</div>
        <div className='block'>2</div>
        <div className='block'>3</div>
        </div>

        <div className='row2 row'>
        <div className='block'>4</div>
        <div className='block'>5</div>
        <div className='block'>6</div>
        </div>

        <div className='row3 row'>
        <div className='block'>7</div>
        <div className='block'>8</div>
        <div className='block'>9</div>
        </div>
    </div>
   </div>
  )
}

export default Box