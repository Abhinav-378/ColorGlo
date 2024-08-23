import React from 'react'
import Projects from './Projects'
import img1 from '../../assets/projects/bseat1.jpg'
import img2 from '../../assets/projects/bseat2.jpg'

function ProjectsBusinessClassSeat() {
  return (
    <>
        <Projects heading="Rolls Royce Door Panel" img1={img1} img2={img2} content1='Business class seats appear faded, worn out, and marred with creases.' content2='Color Glo’s special leather color restoration formula has removed all creases and restored the leather it’s original look, finish and feel.'/>
    </>
  )
}

export default ProjectsBusinessClassSeat
