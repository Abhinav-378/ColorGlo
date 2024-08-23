import React from 'react';

function ProjectsCard({title, img, content,'data-aos': dataAos}) {
  return (
    <div  data-aos={dataAos} className='flex flex-col rounded-xl overflow-hidden mx-4 my-4 md:mx-8 md:my-0 bg-white shadow-lg flex-1 md:w-1/2'>
      <h1 className='bg-orange-100 text-lg font-semibold px-3 py-2'>{title}</h1>
      <div className='overflow-hidden flex-1'>
        <img 
          src={img} 
          alt="" 
          className='w-full h-full object-cover transform transition-transform duration-300 hover:scale-110' 
        />
      </div>
      <p className='px-2 py-3 bg-orange-100'>{content}</p>
    </div>
  )
}

export default ProjectsCard;
