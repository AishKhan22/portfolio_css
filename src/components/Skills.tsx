import React from 'react';
import './Skills.css'; // Import the custom CSS file

const Skills = () => {
  return (
    <div id="skills" className="skills-container">
        <div className='skills-content'>
            <div> 
                <h2 className='skills-title'>Technologies I work with</h2>
                <p className='skills-description'>
                    Welcome to my portfolio! I'm a dedicated developer with a strong foundation in TypeScript, Java, HTML, CSS, and Next.js. My work focuses on creating robust and responsive web applications that emphasize user experience and clean design. Here, you'll find projects showcasing my ability to blend creativity with technical expertise, building interactive and efficient solutions tailored to meet modern web standards.
                </p>
            </div>
            <div className='skills-list'>
                <div className='skills-item'> 
                    <h3> TypeScript </h3>
                </div>
                <div className='skills-item'> 
                    <h3> Next.js </h3>
                </div>
                <div className='skills-item'> 
                    <h3> Tailwind CSS </h3>
                </div>
                <div className='skills-item'> 
                    <h3> HTML </h3>
                </div>
                <div className='skills-item'> 
                    <h3> CSS </h3>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Skills;
