import React from "react";
import { HiMenu } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import logo from '../assests/1.png'
import ThemeSettings from "../components/ThemeSettings";  

const Navbar = () => {
const [toggleMenu, setToggleMenu] = React.useState(false);

  return (
   <nav className="w-screen bg-white sticky h-20 flex md:justify-center dark:text-white dark:bg-black justify-between items-center p-4 shadow-black">
     <div className="md:flex-[1.5] flex-start justify-center items-center">
        <a href="/">
        <img src={logo} alt="logo" className="w-22 h-12 object-cover dark:text-white  dark:bg-white rounded-none cursor-pointer" />
        </a>
      </div>
      <ul className="text-black nav-list font-bold md:flex hidden list-none dark:text-white flex-row justify-between items-center flex-1">
      <li className='mx-4 active:text-[#ededed] cursor-pointer  hover:text-2xl dark:text-white my-2 text-lg' onClick={() => setToggleMenu(false)}>
              <a  href='/' >
            Home
             </a>
              </li>   
              <li className='mx-4 active:text-[#ededed] cursor-pointer  hover:text-2xl dark:text-white my-2 text-lg' onClick={() => setToggleMenu(false)}><a href='https://dev.to/oloriasabi' target="_blank" rel="noreferrer">Blog</a></li>
        {['Services', 'Portfolio', 'Contact'].map((item, i) => (
            <li className='mx-4 active:text-[#ededed] cursor-pointer dark:text-white hover:text-2xl ' key={i} >
            <a  href={`/${item}`} >
            {item}
           </a>
            </li>
        ))}
       <ThemeSettings />
      </ul>
      <div className="flex relative justify-center items-center">
        <div className=" md:hidden mr-3 mb-2">
        <ThemeSettings  />
        </div>
        {!toggleMenu && (
          <HiMenu fontSize={28} className="text-black md:hidden hover:animate-spin cursor-pointer  dark:text-white" onClick={() => setToggleMenu(true)} />
        )}
        {toggleMenu && (
          <AiOutlineClose fontSize={28} className="text-black md:hidden cursor-pointer  dark:text-white" onClick={() => setToggleMenu(false)} />
        )} 
        {toggleMenu && (
          <ul
            className="nav-list fixed transition ease-in delay-3 top-20 right-0 left-0 bottom-0 bg-white p-3 dark:bg-black dark:text-white w-screen h-48 z-5 shadow-2xl md:hidden list-none
             justify-center rounded-md text-black "
          >
             <li className='mx-4 transition ease-in delay-150 active:text-[#ededed]  hover:scale-x-95  cursor-pointer text-sm lg:tex-2xl dark:text-white my-2 text-lg' onClick={() => setToggleMenu(false)}>
              <a  href='/' >
            Home
             </a>
              </li>
              <li className='mx-4 active:text-[#ededed] cursor-pointer  hover:text-2xl dark:text-white my-2 text-lg' onClick={() => setToggleMenu(false)}><a className="text-sm text-lg" href='https://dev.to/oloriasabi' target="_blank" rel="noreferrer">Blog</a></li>
            {['Services', 'Portfolio', 'Contact'].map(
              (item, index) => 
              <li className='mx-4 transition ease-in delay-150 active:text-[#ededed] hover:scale-x-95  cursor-pointer text-sm lg:text-2xl  dark:text-white my-2 text-lg' key={index} onClick={() => setToggleMenu(false)}>
              <a  href={`/${item}`} >
              {item}
             </a>
              </li>
            )}
          </ul>
        )}
      </div>
   </nav>
  )
}

export default Navbar