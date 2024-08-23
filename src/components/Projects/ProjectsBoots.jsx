import React from 'react'
import Projects from './Projects'
import img1 from '../../assets/projects/boots1.jpg'
import img2 from '../../assets/projects/boots2.jpg'
function ProjectsBoots() {
  return (
    <>
        <Projects heading="Boots" img1={img1} img2={img2} content1='These boots look like they’ve been put to good use. Notice the discolored patches and faded color.' content2='Color Glo’s restoration kit saves the day for these beautiful pair of boots. The patches have been taken care of the boots have received a color infusion.'/>
    </>
  )
}

export default ProjectsBoots
