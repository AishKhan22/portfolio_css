import React from 'react'
import { MdMenuOpen } from "react-icons/md";


const Navbar = () => {
  return (
    <div className="container pt-6">
  <div className="flex justify-between items-center">
    {/* Logo or Name */}
    <div className=" text-xl font-bold">Aisha AK</div>

    {/* Navbar Links */}
    <ul className="flex gap-10 lg:gap-16 md:flex">
      <li className="menulink">
        <a href="#hero">Home</a>
      </li>
      <li className="menulink">
        <a href="#about">About</a>
      </li>
      <li className="menulink">
        <a href="#projects">Projects</a>
      </li>
      
      <li className="menulink">
     <a href="#skills">Skills</a>
     </li>


      <li className="menulink">
        <a href="contact">Contact</a>
      </li>
    </ul>
    <MdMenuOpen  className='md:hidden' size={30}/>
  </div>
</div>



  )
}

export default Navbar