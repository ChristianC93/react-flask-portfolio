import React, { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import Projects from './routes/Projects';
import Home from './routes/Home';

function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('/projects')
    .then(resp => resp.json())
    .then(data => {
      setProjects(data)
    })
  }, [])

  console.log(projects)

  return (
    <div>
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/projects' element={ <Projects /> }/>
      </Routes>
    </div>
  )
}

export default App