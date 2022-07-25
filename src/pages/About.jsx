import React, { useState, useEffect} from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import {  client } from '../client';
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
        <div className='bg-white text-black dark:bg-black dark:text-white'>
        <div className='container mx-auto h-screen'>
        <div className='flex items-center flex-col justify-center p-5'>
            <div className='border rounded border-black dark:border-white mt-10'>
            <div className='mt-10'>
                <Quotes />
            </div>
            </div>

    <div className='container mx-auto'>
        {abouts.map((about, index) => (
          <div
          className=""
          key={about.title + index}
          >
            <h2 className='font-bold text-2xl' style={{ marginTop: 20 }}>{about.title} with Modern techniques</h2>
            <h2 className='text-gray-500 tracking-wide text-justify text-sm  lg:text-xl' style={{ marginTop: 20, lineHeight: '30px' }}>{about.description}</h2>
            <h5 className='hover:underline-offset-4 underline text-xl'><a href='https://audiomack.com/iamdjtifa' className='decoration-solid cursor-pointer hover:underline-offset-4'>@iamdjtifa</a></h5>
          </div>
        ))}
      </div>
    </div>
        </div>
        </div>
  )
}

export default About