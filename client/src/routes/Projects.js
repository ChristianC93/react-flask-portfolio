import React from 'react'
import NavBar from '../components/NavBar';
import BackGround2 from '../components/BackGround2';
import Footer from '../components/Footer';
import ProjectCard from '../components/ProjectCard';

function Projects({ projects }) {
    console.log(projects)
  return (
    <div>
        <NavBar />
        <BackGround2 />
        {(typeof projects === "undefined") ? (
            <p>Loading...</p>
        ) : (projects.map((project, index) => {
            return (
                <ProjectCard key={ index } project={ project } />
            )
        }))}
        <Footer />
    </div>
  )
}

export default Projects