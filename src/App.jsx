import { useState } from 'react'
import './App.css'
import Navbar from './pages/Navbar.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Projects from './pages/Projects.jsx'
import Resume from './pages/Resume.jsx'

function App() {

  return (
    <>
    <div>
      <Navbar />
      <Home />
      <About />
      <Projects />
    </div>
    
    </>
  )
}

export default App
