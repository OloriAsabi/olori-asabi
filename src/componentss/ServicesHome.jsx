import React from 'react'
import { services } from '../context/data';

const ServicesHome = () => {
  return (
    <div className='bg-white grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 pt-5 gap-4 dark:text-white dark:bg-black justify-center items-center shadow-black container mx-auto'>
      {services.slice(0, 4).map((service) => (
        <div key={service.id} className="border-solid border-2 p-5 hover:bg-black hover:text-white  hover:dark:text-black hover:dark:bg-white rounded-2xl cursor-pointer w-full h-full border-gray-500">
          <div className='text-5xl text-gray-500 mb-5'>{service.icon}</div>
          <h1 className='text-xl uppercase font-bold'>{service.title}</h1>
          <p className='text-gray-500 font-extralight pt-3 service-text'>{service.info}</p>
        </div>
      ))}
    </div>
  )
}

export default ServicesHome