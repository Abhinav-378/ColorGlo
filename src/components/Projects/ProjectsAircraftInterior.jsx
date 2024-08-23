import React from 'react'
import Projects from './Projects'
import img1 from '../../assets/projects/aircraftPanel1.jpg'
import img2 from '../../assets/projects/aircraftPanel2.jpg'
function ProjectsAircraftInterior() {
  return (
    <>
        <Projects heading="Aircraft Interior Panel" img1={img1} img2={img2} content1='The interior ceiling panel is covered with hair dye stains.' content2='Color Glo formula has removed all the tough stains on the vinyl. The polished surface is looking new.'/>
    </>
  )
}

export default ProjectsAircraftInterior
