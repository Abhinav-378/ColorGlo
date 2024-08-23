import React from 'react'
import Projects from './Projects'
import img1 from '../../assets/projects/officeChair1.jpg'
import img2 from '../../assets/projects/officeChair2.jpg'

function ProjectsOfficeChair() {
  return (
    <>
        <Projects heading="Office Chair" img1={img1} img2={img2} content1='The surface of this chair is covered with pen marks. These stains will not come out with water and using a detergent will cause discolored patches on the surface.' content2='Color Glo has removed all the ink stains as well as restored the original color of the chair. The chair looks new after Color Glo’s touch.'/>
    </>
  )
}

export default ProjectsOfficeChair
