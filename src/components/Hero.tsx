import React from 'react';
import Navbar from './Navbar';
import './Hero.css'; // Import the custom CSS

const Hero = () => {
  return (
    <div id="hero" className="hero-container">
      <Navbar />
      <div className="hero-content">
        <div className="hero-placeholder"></div>
        <div className="hero-text">
          <div>
            <p>This is</p>
            <p>Aisha</p>
            <p>Khan</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
