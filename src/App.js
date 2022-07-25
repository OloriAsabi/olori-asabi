import React, { useEffect, useState } from "react";
import { Loader, Navbar , ThemeSettings } from "./components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Blog, Contact, Portfolio, Home, Services, About } from "./pages";
import { AiFillHome, AiFillContacts} from 'react-icons/ai';
import { GrServices} from 'react-icons/gr';
import { BsFillPersonPlusFill } from 'react-icons/bs'
import logo from './assests/1.png'


import "swiper/css";
import "swiper/css/pagination";

import { Mousewheel, Pagination } from "swiper";
import { MdWork } from "react-icons/md";
import { TbWritingSign } from "react-icons/tb";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  // const slideMenu = [ <AiFillHome/>, <BsFillPersonPlusFill/>, <GrServices/>, <MdWork/>, <TbWritingSign/>, <AiFillContacts/>]

  const slideMenu = [ "Home", "About", "Services", "Portfolio", "Blog", "Contact"]

  useEffect(() => {
    setTimeout(() => 
        setIsLoading(false), 2000
        );
  })

  return (
    <div>
    {isLoading
    ?
      (
        <Loader/>
      )
      :
      (
       <div className="bg-white text-black dark:bg-black overflow-y-scroll h-screen overscroll-contain dark:text-white">
        <div className="">
          <nav className="w-screen bg-white shadow h-32 flex md:justify-center dark:text-white dark:bg-black justify-between items-center p-8 shadow-black">
          <div className="md:flex-[1.5] p-3 flex-start justify-center items-center">
              <a href="/">
              <img src={logo} alt="logo" className="w-22 h-12 object-cover dark:text-white dark:bg-white rounded-none cursor-pointer" />
              </a>
            </div>
            <ThemeSettings  />
          </nav>
       </div>
        <div>
        <Swiper
          direction={"horizontal"}
          slidesPerView={1}
          spaceBetween={10}
          mousewheel={true}
          pagination={{
            clickable: true,
            el: '.swiper-pagination',
            renderBullet: function (index, className) {
              return '<span class="' + className + '">' + (slideMenu[index]) + '</span>';
            },
          }}
          modules={[Pagination]}
          className="mySwiper bg-white text-black w-screen dark:text-white dark:bg-black"
          >
          <SwiperSlide className="h-screen"><Home/></SwiperSlide>
          <SwiperSlide className="h-screen"><About/></SwiperSlide>
          <SwiperSlide className="h-screen"><Services/></SwiperSlide>
          <SwiperSlide className="h-screen"><Portfolio/></SwiperSlide>
          <SwiperSlide className="h-screen"><Blog/></SwiperSlide>
          <SwiperSlide className="h-screen"><Contact/></SwiperSlide>    
          </Swiper>
          </div>    
          <div 
          className="
          swiper-pagination 
          dark:bg-black 
          bg-white
          text-black
          dark:text-white
          h-32
          p-3 
          nav-list 
          font-bold 
          flex
          justify-evenly 
          text-center 
          text-xl
          items-center"> 
          {
            slideMenu.map((el,index) => {
                return(
                  <li className="" key={index}>{el}</li>
                )
            }
            )
          }
          </div>
        </div>
      )
      }
      </div>
  );
}

export default App;
