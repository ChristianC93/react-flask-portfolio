import React from 'react'
import { Link } from 'react-router-dom'
import { FaLinkedin, FaMailBulk } from 'react-icons/fa';
import { GrGithub } from 'react-icons/gr';
import '../styles/FooterStyles.css';

function Footer() {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
                <div className='email'>
                    <FaMailBulk size={ 20 } style={{ color: 'white', marginRight: "2rem" }} />
                    <div>
                        <p>castillochristian3@gmail.com</p>
                    </div>
                </div>
            </div>
            <div className='right'>
                <h4>About Me</h4>
                <p>A software developer, lifelong learner, new yorker, and big fan of FromSoftware.</p>
                <div className='socials'>
                    <Link to='https://github.com/ChristianC93'><GrGithub size={ 30 } style={{ color: 'white', marginRight: "1rem" }} /></Link> 
                    <FaLinkedin size={ 30 } style={{ color: 'white', marginRight: "1rem" }} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer