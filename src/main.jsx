import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css'
import App from './App.jsx'
import Resume from './pages/Resume.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App/>} />
        <Route path="/home" element={<App/>} />
        <Route path="/resume" element={<Resume/>} />
      </Routes> 
    </Router>
  </StrictMode>
)

