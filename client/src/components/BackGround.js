import React from 'react'
import texture from '../assets/texture.jpg'
import { Link } from 'react-router-dom';
import '../styles/BackGroundStyles.css'

function BackGround() {
  return (
    <div className='background'>
        <div className='mask'>
            <img className='intro-img' src={ texture } alt='intro-img'/>
        </div>
        <div className='content'>
            <h1>Software Developer</h1>
            <div>
                <Link to='/projects' className='btn'>Projects</Link>
                <Link to='/about' className='btn btn-light'>About</Link>    
            </div>
        </div>
    </div>
  )
}

export default BackGround