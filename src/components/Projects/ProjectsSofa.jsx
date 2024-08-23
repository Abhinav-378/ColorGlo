import React from 'react'
import Projects from './Projects'
import img1 from '../../assets/projects/sofa1.jpg'
import img2 from '../../assets/projects/sofa2.jpg'


function ProjectsSofa() {
  return (
    <>
        <Projects heading="Leather Sofa" img1={img1} img2={img2} content1='This three-seater leather sofa was so worn out. Notice the deep creases and faded color patches. The owner wanted it gone.' content2='Color Glo’s leather restoration kit was able to repair and smoothen out all the deep creases. The sofa set was recolored in a rich brownish orange color. The result was so astounding that the owner couldn’t recognise his own sofa!'/>
    </>
  )
}

export default ProjectsSofa
