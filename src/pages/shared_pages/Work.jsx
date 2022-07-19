import React,  { useState, useEffect }  from 'react'
import {  AiFillGithub } from 'react-icons/ai';
import { FaLink } from 'react-icons/fa'
import { FiFigma } from 'react-icons/fi'
import { urlFor, client } from '../../client';


const Work = () => {
    const [works, setWorks] = useState([]); 
    // const [expanded, setExpanded] = useState(false)
    const [filterPersonalProjects, setFilterPersonalProjects] = useState([]);
    const [activeFilter, setActiveFilter] = useState('All');

    useEffect(() => {
        const query = '*[_type == "personalProjects"]'
    
        client.fetch(query).then((data) => {
          setWorks(data);
        //   setFilterPersonalProjects(expanded ? data : data.slice(0, 5));
        setFilterPersonalProjects(data)
        });
    
      }, []);

        
    const handleWorkFilter = (item) => {
        setActiveFilter(item);
    
        setTimeout(() => { 
          if (item === 'All') {
            setFilterPersonalProjects(works)
          } else {
            setFilterPersonalProjects(works.filter((work) => work.tags.includes(item)));
          }
        }, 100);
      };
  return (
    <div className=''>
        <div className="text-center items-center shadow-black w-full p-3 flex-wrap flex-row flex justify-center space-x-4 space-y-2">
        {['Angular', 'React.js', "React Native",'Next.js', 'All'].map((item, index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`bg-black text-white w-18 dark:text-black dark:bg-white rounded text-center p-2 cursor-pointer hover:bg-gray-500 font-medium ${activeFilter === item ? 'item-active' : ''}`}
          >
            {item}
          </div>
        ))}
      </div>
      <div>
      <div
        className="text-center mt-5 shadow-black p-3 grid lg:grid-cols-2 gap-y-10 md:grid-cols-2 gap-4 sm:grid-cols-1"
         > 
         {filterPersonalProjects.map((work, index) => (
          <div className="h-screen  mb-20" key={index}>
            <div
              className="h-1/2 object-cover hover:opacity-100 relative"
            >
              <img src={urlFor(work.imgUrl)} className="block h-full" alt={work.name} />
             <div className="w-full overlays text-white text-center transition ease-in delay-150 absolute h-full top-0  bottom-0 left-0 right-0">
              <h4 className="font-extrabold text-center translate-y-44">{work.title}</h4>
              <p className="text-center translate-y-44">{work.tags[0]}</p>  
              <div className="flex justify-between p-5 text-center translate-y-60 cursor-pointer">  
              <a href={work.projectLink} target="_blank" title='Link' className='icon' rel="noreferrer">
                 <div
                    className="hover:text-4xl"
                  >
                    <FaLink title='Link' fontSize={20}  className="hover:text-3xl" />
                  </div>
                </a>
                 <a href={work.codeLink} target="_blank" title='Github Link' className='icon' rel="noreferrer">
                  <div
                    className=""
                  >
                    <AiFillGithub title='GitHub Link' fontSize={20}  className="hover:text-3xl"/>
                  </div>
                </a>

                <a href={work.figmaLink} target="_blank" title='Figma Link' className='icon' rel="noreferrer">
                  <div

                  >
                    <FiFigma title='Figma Link'  fontSize={20}  className="hover:text-3xl"/>
                  </div>
                </a>
              </div>
            </div>       
            </div>

            <div className="">
              <p className="text-justify text-xl font-extralight" style={{ marginTop: 10 }}>{work.description}</p>
            </div>
          </div>
        ))}
       
      </div>
      {/* <div className='app__flex'>
        <button type="button" className='ShowMore-btn' onClick={() => setExpanded(!expanded)}>
          {expanded ? 'Show Less' : 'Show More'} 
        </button>
        </div> */}
      </div>
    </div>
  )
}

export default Work