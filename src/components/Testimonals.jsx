import React, { useState, useEffect } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

import { urlFor, client } from '../client';

const Testimonals = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [testimonials, setTestimonials] = useState([]);
    const [brands, setBrands] = useState([]);

    const handleClick = (index) => {
        setCurrentIndex(index);
      };
    
      useEffect(() => {
        const query = '*[_type == "testimonials"]';
        const brandsQuery = '*[_type == "brands"]';
    
        client.fetch(query).then((data) => {
          setTestimonials(data);
        });
    
        client.fetch(brandsQuery).then((data) => {
          setBrands(data);
        });
      }, []);

  return (
    <div className='text-center'>
    <h2 className="text-center text-3xl services p-5 font-extrathin">Testimonials</h2>

    {testimonials.length && (
      <>
        <div className="block">
          <img src={urlFor(testimonials[currentIndex].imgurl)} className="rounded-full h-48 w-48 m-5 ml-auto mr-auto " alt={testimonials[currentIndex].name} />
          <div className="">
            <p className="text-2xl m-5 w-1/2 text-center ml-auto mr-auto text-center">{testimonials[currentIndex].feedback}</p>
            <div>
              <h4 className="mt-10 font-bold text-2xl">{testimonials[currentIndex].name}</h4>
              <p className="text-2xl font-bold text-gray-500 m-5">{testimonials[currentIndex].company}</p>
            </div>
          </div>
        </div>

        <div className="flex justify-evenly">
          <div className="bg-black text-white dark:text-black mb-10 dark:bg-white rounded text-center p-2 cursor-pointer hover:text-3xl font-medium" onClick={() => handleClick(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)}>
            <HiChevronLeft fontSize={28}/>
          </div>

          <div className="bg-black text-white dark:text-black mb-10 dark:bg-white rounded text-center p-2 cursor-pointer hover:text-3xl font-medium" onClick={() => handleClick(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)}>
            <HiChevronRight fontSize={28} />
          </div>
        </div>
      </>
    )}

    <div className="">
      {brands.map((brand) => (
        <div
          key={brand._id}
        >
          <img src={urlFor(brand.imgUrl)} alt={brand.name} />
        </div>
      ))}
    </div>
  </div>
  )
}

export default Testimonals