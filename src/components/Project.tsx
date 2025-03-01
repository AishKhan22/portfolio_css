import React from 'react';
import Heading from './Heading';
import Card from './Card';
import './Project.css'; // Import the custom CSS file

const data = [
    {
        id: 0,
        title: "Admission Form",
        desc: "Created a responsive and user-friendly admission form using HTML and CSS",
        img: "/admissionForm.PNG",
        tags: ["HTML" , "CSS"],
    },
    {
        id: 1,
        title: "Countdown Timer",
        desc: "A Next.js and Typescript powered website to track time with an interactive countdown feature",
        img: "/countdownTimer.PNG",
        tags: ["Next.Js", "Node", "CSS", "Typescript"],
    },
    {
        id: 2,
        title: "Static Interactive Resume",
        desc: "A TypeScript based interactive resume built with HTML and CSS, allowing users to showcase their skills dynamically",
        img: "/StaticResume.PNG",
        tags: ["HTML", "Node", "CSS", "Typescript"],
    },
    {
        id: 3,
        title: "Website's HomePage",
        desc: "Designed a responsive HTML and CSS homepage with intuitive navigation and a clean, user-friendly layout optimized for all devices",
        img: "/website.PNG",
        tags: ["HTML", "CSS"],
    },
];

const Project = () => {
  return (
    <div id='projects' className='project-container'>
        <Heading title='My Projects' />
        <div className='project-grid'>
            {data.map((el) => (
                <Card 
                    key={el.id}
                    title={el.title}
                    desc={el.desc}
                    img={el.img}
                    tags={el.tags}
                />
            ))}
        </div>
    </div>
  );
}

export default Project;
