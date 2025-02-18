import { useState } from 'react'
import './App.css'
import pic from './assets/aly.png'
import Navbar from './pages/Navbar.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'

function App() {

  return (
    <>
    <div>
      <Navbar />
      <Home />
      <About />
    </div>
    
    </>
  )
}

export default App
