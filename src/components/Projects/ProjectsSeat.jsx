import React from 'react'
import Projects from './Projects'
import img1 from '../../assets/projects/seat1.jpg'
import img2 from '../../assets/projects/seat2.jpg'

function ProjectsSeat() {
  return (
    <>
        <Projects heading="Seat" img1={img1} img2={img2} content1='Bentley leather upholstery faded and bolster wear.' content2='Worn section repaired and leather surface restored to original shade.'/>
    </>
  )
}

export default ProjectsSeat
