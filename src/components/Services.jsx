import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Button1 from './Button1';

function Services({ title, heading, subheading, img, children }) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <h1 className="text-4xl md:text-6xl font-bold mb-4 flex justify-center items-center text-center pt-8 h-[40vh] bg-gradient-to-b from-orange-200 via-orange-100 to-white">
        {title}
      </h1>
      <div className="flex flex-col md:flex-row mx-6 md:mx-24 items-center justify-center">
        <div data-aos="zoom-in-right" className="flex flex-col justify-center items-start w-full md:w-[50vw] p-4"> 
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            {heading}
          </h2>
          <h2 className="text-xl md:text-xl font-medium mb-4">
            {subheading}
          </h2>
          <Button1 />
        </div>
        <div data-aos="zoom-in-left" className=" w-full md:w-[40vw] p-4">
          <img src={img} alt={title} className="w-full h-auto object-cover rounded-xl" />
        </div>
      </div>
      <div className="p-4 text-base md:text-lg mx-2 md:mx-10 my-8 leading-7 md:leading-9">
        {children}
      </div>
    </>
  );
}

export default Services;
