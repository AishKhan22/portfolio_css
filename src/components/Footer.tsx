import React from 'react';
import './Footer.css'; // Import custom CSS

const Footer = () => {
  return (
    <div className="footer-container">
      <p>&copy; {new Date().getFullYear()} Aisha AK. All Rights Reserved.</p>
    </div>
  );
};

export default Footer;
