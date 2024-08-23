import React from 'react'
import Projects from './Projects'
import img1 from '../../assets/projects/rollsRoyceDoor1.jpg'
import img2 from '../../assets/projects/rollsRoyceDoor2.jpg'

function ProjectRollsRoyce() {
  return (
    <>
        <Projects heading="Rolls Royce Door Panel" img1={img1} img2={img2} content1='Rolls Royce door interior panel appears faded, stained, and worn.' content2='Color Glo’s leather based formula has removed the scuffs, scratches and given the leather a good polish, leaving it looking as good as new.'/>
    </>
  )
}

export default ProjectRollsRoyce
