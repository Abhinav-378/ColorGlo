import React from 'react'
import Projects from './Projects'
import img1 from '../../assets/projects/bag1.jpg'
import img2 from '../../assets/projects/bag2.jpg'
function ProjectsBag() {
  return (
    <>
        <Projects heading="Heirloom Bag" img1={img1} img2={img2} content1='Torn, discoloured, scratched and ready for pasture describes this 50-year old heirloom bag. Wouldn’t it be easier to just buy a new one?' content2='Check it out same bag, new lease of life. Color Glo has repaired the tear, restored the leather, and recolored the handbag to the colour of the owner’s choice.'/>
    </>
  )
}

export default ProjectsBag
