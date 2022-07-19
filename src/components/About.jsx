import React, { useState, useEffect} from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import {  client } from '../client';

import Books from './Books';
import  Quotes  from './Quotes';

const About = () => {
  const [abouts, setAbouts] = useState([]);

  const [readMore, setReadMore] = useState(false);


  useEffect(() => {
    const query = '*[_type == "abouts"]';
    client.fetch(query)
    .then((data) => {
      setAbouts(data)
    })
  },[])
  return (
    <div className=' bg-white text-black dark:text-white dark:bg-black mt-5 '>
     <h1 className='text-center about-text font-extrabold text-2xl  p-5'>About Me</h1>
    <div className='flex items-center flex-col justify-center  p-5'>
    <div className=''>
     <div className='mt-10'>
        <Quotes />
     </div>
    </div>

    <div className='p-5'>
        {abouts.map((about, index) => (
          <div
          className=""
          key={about.title + index}
          >
            <h2 className='italic font-medium' style={{ marginTop: 20 }}>{about.title} with Modern techniques</h2>
            <h2 className='text-gray-500 tracking-wide text-justify  text-xl' style={{ marginTop: 20 }}>{about.description}</h2>
            <h5 className='hover:underline-offset-4'><a href='https://audiomack.com/iamdjtifa' className='decoration-solid cursor-pointer hover:underline-offset-4'>@iamdjtifa</a></h5>
          </div>
        ))}
      </div>
    </div>

    <div className='books  w-screen'>
      <header className='flex justify-between p-5'>
      <h4 className='italic font-medium texl-3xl'>Learn More About Me</h4>
      <button className="" onClick={()=>setReadMore(!readMore)}>
      {readMore ? <AiOutlineMinus className='hover:animate-bounce border-none' fontSize={28} /> : <AiOutlinePlus className='hover:animate-bounce border-none'  fontSize={28}/>} 
       </button> 
       </header>
       <div>
       {readMore && <Books/> }
       </div>
       </div>
  </div>
  )
} 

export default About