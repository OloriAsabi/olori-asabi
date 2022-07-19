import React from 'react'
import { BsWhatsapp } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import bg from '../assests/bg.png'
import{ About , PortfolioHome, ServicesHome, Testimonals}from '../components'

const Home = () => {
  return (
    <div className='bg-white text-black dark:bg-black dark:text-white'>
     <div className='w-screen h-screen '>
        <img src={bg} alt="" className='homepage h-full w-full' />
        <div className='bg-white text-black dark:bg-black shadow-transparent dark:text-white h-40 w-screen flex items-center justify-center absolute overlay '>
            <div className='ml-3'>
            <h1 className="text-3xl md:text-5xl font-medium">Hello, I am Olorì Àṣàbí</h1>
            <hr style={{ width: '100%', textAlign: 'center', margin: '10px', color: 'black'}}/>
            <ul className='flex justify-between md:text-2xl text-sm'>
                <li className='pl-3'>Frontend Developer</li>
                <li  className='pr-5'>Designer</li>
                <li  className='pr-3'>Web Services</li>
                <li  className=''>Technical Writer</li>
            </ul>
            </div>
        </div>
     </div>
    <div>
    <About/>
    </div>
    <div className='bg-white text-black dark:text-white dark:bg-black p-5 mt-5 services'>
      <p className='text-gray-500 font-bold mb-3'>WHAT I DO</p>
      <div className='flex justify-between'>
      <h1 className='font-medium text-2xl'>MY SERVICES</h1>
      <Link className='bg-black text-white dark:text-black dark:bg-white rounded text-center p-2 cursor-pointer hover:bg-gray-500 font-medium'
        to="/services">Show More</Link>
      </div>
      <ServicesHome/>
    </div>

    <div className='bg-white text-black dark:text-white dark:bg-black p-5 mt-5 services '>
      <p className='text-gray-500 font-bold mb-3'>MY PORTFOLIO</p>
      <div className='flex justify-between'>
      <h1 className='font-medium text-2xl'>CREATIVE WORKS</h1>
          <Link className='bg-black text-white dark:text-black dark:bg-white rounded text-center p-2 cursor-pointer hover:bg-gray-500 font-medium' 
          to='/portfolio'>
            Show More
            </Link>
            </div>   
      <PortfolioHome/>
    </div>

    <div className='books'>
      <Testimonals/>
    </div>

    <div className='mt-10 p-5 text-center'>
        <h1 className='text-center uppercase font-bold mb-5'>KEEP IN TOUCH</h1>
        <p className='chat text-xl text-gray-500 mb-5 text-center'>Do not hesitate to contact me with any questions. Feel free to drop in for a chat on whatsapp</p>
                <a href='https://api.whatsapp.com/send?phone=2348175509185'>
       <button className='bg-black text-white dark:text-black dark:bg-white text-center rounded-3xl p-3 cursor-pointer hover:bg-gray-700 font-medium'>
      <BsWhatsapp  fontSize={28} />
        </button>
        </a>
    </div>
    </div>
  )
}

export default Home