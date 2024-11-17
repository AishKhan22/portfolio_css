import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsTelephone } from 'react-icons/bs';
import './Contact.css'; // Import custom CSS

const Contact = () => {
  return (
    <div id="contact" className="contact-container">
      <div className="contact-grid">
        <div className="contact-details">
          <h2 className="contact-title">Get in touch</h2>
          <p className="contact-description">
            Don't hesitate to reach out via email or phone
          </p>
          <div className="contact-item">
            <AiOutlineMail size={25} />
            <span>aish.khan712@gmail.com</span>
          </div>
          <div className="contact-item">
            <BsTelephone size={25} />
            <span>090078601</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
