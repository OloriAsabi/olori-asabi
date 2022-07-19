import React from 'react'
import { PersonalProjects, Work } from './shared_pages'

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


import {  Navigation, Pagination } from "swiper";

const Portfolio = () => {
  return (
    <div className='bg-white text-black dark:text-white dark:bg-black p-5 services'>
    <p className='text-gray-500 font-bold mb-3'>MY PORTFOLIO</p>
    <h1 className='font-medium text-2xl'>CREATIVE WORKS</h1>
    <div >
      <Swiper
        slidesPerView={1}
        spaceBetween={3}
        speed={400}
        direction={'horizontal'}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper bg-white text-black dark:text-white dark:bg-black"
      >
        
         <SwiperSlide>
          <div className='h-screen overflow-y-scroll overscroll-contain p-10'>
              <h2 className='font-bold text-xl text-center p-5 text-gray-500 services'>Works And Freelances</h2>
               <Work/>       
          </div>
         </SwiperSlide>

        <SwiperSlide>
          <div className='h-screen overflow-y-scroll overscroll-contain p-10'>
          <h2 className='font-bold p-5 text-xl text-gray-500 services'>Personal Projects</h2>
          <PersonalProjects />
          </div>
          </SwiperSlide>
  
      </Swiper>
    </div>
  </div>

  )
}

export default Portfolio