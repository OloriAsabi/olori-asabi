import React from 'react'
import { Route, Routes, useLocation } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Blog, Contact, Portfolio, Home, Services, About } from "./pages";


import "swiper/css";
import "swiper/css/pagination";

import { Mousewheel, Pagination } from "swiper";

const AnimatedRoutes = () => {
    const location = useLocation();

  return (

    <Swiper
    direction={"horizontal"}
    slidesPerView={1}
    spaceBetween={10}
    mousewheel={true}
    pagination={{
      clickable: true,
    }}
    modules={[Mousewheel, Pagination]}
    className="mySwiper bg-white text-black dark:text-white dark:bg-black"
    >
    <SwiperSlide><Home/></SwiperSlide>
    <SwiperSlide><About/> </SwiperSlide>
    <SwiperSlide><Services/></SwiperSlide>
    <SwiperSlide><Portfolio/></SwiperSlide>
    <SwiperSlide><Blog/></SwiperSlide>
    <SwiperSlide><Contact/></SwiperSlide> 

    </Swiper>  
            // <AnimatePresence>
            // <Routes         
            // location={location}
            //  key={location.pathname}
            //  >
            //   <Route path='/' element={<Home/>}/>
            //   <Route path='/about' element={<About/>}/>
            //   <Route path='/services' element={<Services/>}/>
            //   <Route path='/portfolio' element={<Portfolio/>}/>
            //   <Route path='/blog' element={<Blog/>}/>
            //   <Route path='/contact' element={<Contact/>}/>
            // </Routes>
            // </AnimatePresence>
  )
}

export default AnimatedRoutes