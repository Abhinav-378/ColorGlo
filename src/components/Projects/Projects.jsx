import React, { useEffect } from 'react'
import ProjectsCard from './ProjectsCard'
import AOS from "aos";
import "aos/dist/aos.css";

function Projects({heading, img1, img2, content1, content2}) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div className='py-24 mt-16 bg-gradient-to-b from-orange-200 via-orange-100 to-white text-center mb-8'>
        <h1 className='text-5xl font-bold mb-5'>{heading}</h1>
        <p className='text-xl font-medium'>Projects &rarr; {heading}</p>
      </div>
      <div className='flex flex-col md:flex-row mx-4 md:mx-12'>
        <ProjectsCard data-aos={"fade-right"} title="Before" img={img1} content={content1} />
        <ProjectsCard title="After" img={img2} content={content2} data-aos={"fade-left"}/>
      </div>
    </div>
  )
}

export default Projects;
