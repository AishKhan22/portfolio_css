import React from 'react';
import './About.css'; // Import the custom CSS file

const About = () => {
  return (
    <div id='about' className='container pt-32'>
      <h2 className='text-2xl text-[#6A1E55] md:text-4xl'> About Me </h2>
      <p className='text-[#3B1C32] pt-4 pb-4'> 
        I am a passionate developer skilled in TypeScript, Java, HTML, CSS, and Next.js. I focus on creating responsive, user-friendly web applications with clean code and great design. Always eager to learn, I aim to build innovative solutions that enhance user experience.
      </p>
    </div>
  );
};

export default About;
