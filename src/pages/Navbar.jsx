import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';  

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
      </ul>
    </nav>
    </>
  );
};

export default Navbar;

