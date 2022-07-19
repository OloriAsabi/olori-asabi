import React from 'react';
import oloriasabi from "../assests/Ólòri Asàbí.mp4"

const Loader = () => {
  return (
    <div className='h-screen w-screen bg-[#ededed]'> 
    <video autoPlay="autoplay" className='h-full w-full'loop controls={false} muted>
        <source 
        src={oloriasabi}
        type="video/mp4"/>
    </video>
  </div>
  )
}

export default Loader