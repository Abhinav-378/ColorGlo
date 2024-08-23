import React from 'react'
import Projects from './Projects'
import img1 from '../../assets/projects/acpanel1.jpg'
import img2 from '../../assets/projects/acpanel2.jpg'

function ProjectAcPanel() {
  return (
    <>
        <Projects heading="Vehicle  AC Panel" img1={img1} img2={img2} content1='Vehicle air conditioning panel sports a number of dents, appears faded, and is covered with scratches.' content2='Color Glo has repaired and restored to the original plastic with a special formula designed for plastic and evened out the dents leaving the panel looking brand new.'/>
    </>
  )
}

export default ProjectAcPanel
