import React from 'react'
import NavBar from '../components/NavBar'
import BackGround2 from '../components/BackGround2'
import '../styles/AboutStyles.css'
import Footer from '../components/Footer'

function About() {
    const aboutMe = <p id='about-me'>My name is Christian Castillo and I'm a Software Developer. I initially went to school to study pyschology, however after working around many people in the tech industry I was inspired and encouraged to pursue a career in tech. I enrolled in Flatiron School's software engineering cohort where I learned JavaScript/React as well as Ruby and Ruby on Rails. After graduating, I taught myself Python and Flask and am constantly honing my previous skills. I want to be a professional software developer because I love being able to build something from the ground up. The development process is challenging, rewarding and always exposes me to something new. I am also a big fan of FromSoftware's Souls series as each game tests my adaptability, patience, and ability to learn quickly, which I believe are skills that are essential for software development. I believe this is a perfect fit for me. </p>

    return (
        <div>
            <NavBar />
            <BackGround2 heading="About Me" text={aboutMe} />
            <Footer />
        </div>
    )
}

export default About