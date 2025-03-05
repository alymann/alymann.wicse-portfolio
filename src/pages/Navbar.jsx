import React from 'react';
import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Navbar.css';  

// import Home from './Home.jsx'
// import About from './About.jsx'
// import Contact from './Contact.jsx'
// import Projects from './Projects.jsx'
// import Resume from './Resume.jsx'

function Navbar() {
  return (
    <>
    <nav className="my-navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <a href="/#">Home</a>
        </li>
        <li className="navbar-item">
          <a href="/#about">About</a>
        </li>
        <li className="navbar-item">
          <a href="/#projects">Projects</a>
        </li>
        <li className="navbar-item">
          <Link to="/resume">Resume</Link>
        </li>
        {/* <li className="navbar-item">
          <a href="#contact">
          <FontAwesomeIcon icon="fa-brands fa-linkedin" />
          </a>
        </li> */}
      </ul>
    </nav>
    </>
  );
};

export default Navbar;
