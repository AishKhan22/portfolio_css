import React from 'react';
import { MdMenuOpen } from 'react-icons/md';
import './Navbar.css'; // Import the custom CSS

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-content">
        {/* Logo or Name */}
    
        <div className="navbar-logo">Aisha AK </div>

        {/* Navbar Links */}
        <ul className="navbar-links">
          <li className="menu-link">
            <a href="#hero">Home</a>
          </li>
          <li className="menu-link">
            <a href="#about">About</a>
          </li>
          <li className="menu-link">
            <a href="#projects">Projects</a>
          </li>
          <li className="menu-link">
            <a href="#skills">Skills</a>
          </li>
          <li className="menu-link">
            <a href="#contact">Contact</a>
          </li>
        </ul>

        {/* Hamburger Menu Icon */}
        <MdMenuOpen className="menu-icon" size={30} />
      </div>
    </div>
  );
};

export default Navbar;
