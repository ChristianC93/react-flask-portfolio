import React from 'react'
import '../styles/BackGround2Styles.css';


function BackGround2({ heading, text }) {
  return (
    <div className='background-2'>
        <div className='heading'>
          <h1>{ heading }</h1>
          <p>{ text }</p>  
        </div>
    </div>
  )
}

export default BackGround2