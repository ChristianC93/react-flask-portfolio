import React from 'react';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path='/projects' element={ <Projects /> }/>
      </Routes>
    </div>
  )
}

export default App