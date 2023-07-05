import React from 'react'
import { FaHome, FaLinkedin, FaMailBulk } from 'react-icons/fa';
import { GrGithub } from 'react-icons/gr';

function Footer() {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
                <div className='location'>
                    <FaHome size={ 20 } style={{ color: 'white', marginRight: "2rem" }} />
                    <div>
                        <p></p>
                        <p></p>
                    </div>
                </div>
                <div className='email'>
                    <FaMailBulk size={ 20 } style={{ color: 'white', marginRight: "2rem" }} />
                    <div>
                        <p>castillochristian3@gmail.com</p>
                    </div>
                </div>
            </div>
            <div className='right'>
                <h4>About Me</h4>
                <p>An aspiring Full Stack Software Developer</p>
                <div className='socials'>
                    <GrGithub size={ 30 } style={{ color: 'white', marginRight: "1rem" }} />
                    <FaLinkedin size={ 30 } style={{ color: 'white', marginRight: "1rem" }} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer