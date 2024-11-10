import React from 'react'

const Skills = () => {
  return (
    <div id="skills" className="container pt-32">
    
  
        <div className='grid md:grid-cols-2 gap-20 items-center'> 
    <div> 
        <h2 className='text-4xl md:text-5xl font-bold'> Technologies I work with </h2>
        <p className='text-[#605678] pt-2'>
        Welcome to my portfolio! I am a dedicated developer with a strong foundation in TypeScript, Java, HTML, CSS, and Next.js. My work focuses on creating robust and responsive web applications that emphasize user experience and clean design. Here, you will find projects showcasing my ability to blend creativity with technical expertise, building interactive and efficient solutions tailored to meet modern web standards.
        </p>
    </div>
    <div> 
        <div className='grid grid-col-1  text-[#3B1C32] text-xl sm:text-4xl'>
            <div className='space-y-2'> 
                <h2> Typscript </h2>
                <h2> Next.js </h2>
                <h2> Tailwind CSS </h2>
                <h2> HTML </h2>
                <h2> CSS </h2>
                </div>
        

        </div>
    </div>
    </div>
    </div>
  )
}

export default Skills
