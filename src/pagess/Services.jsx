import React from 'react'
import { services } from '../context/data';
import {BsWhatsapp} from 'react-icons/bs';
import { Testimonals } from '../components';

const Services = () => {
  return (
    <div className='bg-white text-black dark:text-white dark:bg-black '>
        <div className='p-5 services'>
      <p className='text-gray-500 font-bold mb-3'>WHAT I DO</p>
      <h1 className='font-medium text-3xl mb-5'>MY SERVICES</h1>
    <div className='bg-white grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4 dark:text-white dark:bg-black justify-center items-center shadow-black'>
        {services.map((service) => (
        <div key={service.id} className="border-solid border-2 p-5 hover:bg-gray-200 cursor-pointer rounded-2xl w-full h-full border-gray-500">
            <div className='text-5xl text-gray-700 mb-5'>{service.icon}</div>
            <h1 className='text-2xl uppercase font-bold'>{service.title}</h1>
            <p className='text-gray-500 font-extralight pt-3 service-text'>{service.info}</p>
        </div>
        ))}
  </div>
  </div>

  <div className='mt-5'>
    <div className='skills'>
        <div className='p-5'>
        <h1 className='mb-5 uppercase font-bold text-3xl'>Professional SKILLS</h1>
        <p className='text-gray-500 block w-full pb-3'>Over the years of experience I've picked up several professional skills and these are my skills  as I keep busy sharpening my axe for more skills.</p>
        <ul className=' text-center shadow-black w-full p-3 grid lg:grid-cols-4 md:grid-cols-2  gap-2 sm:grid-cols-1'>
            <li className='dark:text-black dark:bg-white cursor-pointer  hover:scale-x-105 
            transition 
            delay-3 
            ease-in bg-black text-white p-3 mb-3 rounded-xl'>React.js</li>
            <li className='dark:text-black dark:bg-white cursor-pointer  hover:scale-x-105 
            transition 
            delay-3 
            ease-in bg-black text-white p-3 mb-3 rounded-xl'>React-Native</li>
            <li className='dark:text-black dark:bg-white cursor-pointer  hover:scale-x-105 
            transition 
            delay-3 
            ease-in bg-black text-white p-3 mb-3 rounded-xl'>Next.js</li>
            <li className='dark:text-black dark:bg-white cursor-pointer  hover:scale-x-105 
            transition 
            delay-3 
            ease-inbg-black text-white p-3 mb-3 rounded-xl'>Angular</li>
            <li className='dark:text-black dark:bg-white cursor-pointer  hover:scale-x-105 
            transition 
            delay-3 
            ease-in bg-black text-white p-3 mb-3 rounded-xl'>HTML/CSS</li>
            <li className='dark:text-black dark:bg-white cursor-pointer  hover:scale-x-105 
            transition 
            delay-3 
            ease-in bg-black text-white p-3 mb-3 rounded-xl'>Tailwind CSS</li>
            <li className='dark:text-black dark:bg-white cursor-pointer  hover:scale-x-105 
            transition 
            delay-3 
            ease-in bg-black text-white p-3 mb-3 rounded-xl'>Material UI</li>
            <li className='dark:text-black dark:bg-white cursor-pointer  hover:scale-x-105 
            transition 
            delay-3 
            ease-in bg-black text-white p-3 mb-3 rounded-xl'>Bootstrap</li>
            <li className='dark:text-black dark:bg-white cursor-pointer hover:scale-x-105 
            transition 
            delay-3 
            ease-inbg-black text-white p-3 mb-3 rounded-xl'>Styled Coompnents</li>
        </ul>
        </div>
    </div>
    <div className='books'>
      <Testimonals/>
    </div>

    <div className='mt-10 p-5 text-center'>
        <h1 className='text-center uppercase font-bold mb-5'>KEEP IN TOUCH</h1>
        <p className='chat text-gray-500 mb-5 tex-xl text-center'>Do not hesitate to contact me with any questions. Feel free to drop in for a chat on whatsapp</p>
                <a href='https://api.whatsapp.com/send?phone=2348175509185'>
       <button className='bg-black text-white dark:text-black dark:bg-white text-center rounded-3xl p-3 cursor-pointer hover:bg-gray-700 font-medium'>
      <BsWhatsapp  fontSize={28} />
        </button>
        </a>
    </div>
  </div>
  </div>
  )
}

export default Services