import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BsTelephone } from 'react-icons/bs'


const Contact = () => {
  return (
    <div id='contact' className='pt-32 container pb-20' >
        <div className=' grid md:grid-cols-2 gap-10'>
            <div className='space-y-8'> 
                <h2 className='text-3xl'>  Get in touch </h2>
                <p className='text-[#6A1E55] text-[18px] pt-2'>
                Do not hesitate to reach out via email or phone
                </p>
                <div className='flex gap-3 items-center'>
                  <AiOutlineMail size={25} /> aish.khan712@gmail.com </div>

                  <div className='flex gap-3 items-center'>
                  <BsTelephone size={25} /> 090078601 </div>
            
            </div>
            
        </div>
        </div>
  )
}

export default Contact
