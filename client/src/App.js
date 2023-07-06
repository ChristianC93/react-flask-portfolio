import React, { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import Projects from './routes/Projects';
import Home from './routes/Home';
import About from './routes/About';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/projects')
    .then(resp => resp.json())
    .then(data => {
      setData(data)
    })
  }, [])

  console.log(data)

  return (
    <div>
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/projects' element={ <Projects projects={ data.projects } /> }/>
        <Route path='/about' element={ <About /> } />
      </Routes>
    </div>
  )
}

export default App