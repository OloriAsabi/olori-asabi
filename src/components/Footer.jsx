import React from 'react'
// import { FaGithubSquare, FaLinkedin, FaTwitter} from 'react-icons/fa';
// import { AiFillMail } from "react-icons/ai";

const Footer = () => {
  return (
    <div className=" books p-5 w-screen dark:text-white dark:bg-black bg-whit3 text-black">
    <div className="flex justify-between items-center p-4 shadow-black">
    <div>
        <a href='mailto:developeroloriasabi@gmail.com' className='hover:text-2xl'>
      {/* <AiFillMail fontSize={28} /> */}
      <p className='footer-text text-2xl'>Mail</p></a>
    </div>
    <div>
        <a href='https://www.linkedin.com/in/ashabilateefatoduntan/' className='hover:text-2xl'>
      {/* <FaLinkedin fontSize={28} /> */}
      <p className='footer-text text-2xl'>LinkedIn</p></a>
    </div>
    <div>
        <a href='https://github.com/OloriAsab' className='hover:text-2xl'>
        {/* <FaGithubSquare fontSize={28} /> */}
        <p className='footer-text text-2xl'>GitHub</p></a>
    </div>
    <div>
        <a href='https://www.twitter.com/olorii_ashabi' className='hover:text-2xl'>
        {/* <FaTwitter fontSize={28} /> */}
        <p className='footer-text text-2xl'>Twitter</p></a>
    </div>
  </div>
    <p className="dark:text-white dark-bg-black text-black text-center mt-20 footer-text" >
      © 2022 All rights reserved by oloriasabi.com
    </p>
  </div>
  )
}

export default Footer