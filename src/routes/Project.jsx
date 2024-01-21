import React from 'react'
import Heroimg2 from '../compontants/Heroimg2'
import Navbar from '../compontants/Navbar'
import Footer from '../compontants/Footer'
import Work from '../compontants/Work'
const Project = () => {
  return (
    <div>
      <Navbar/>
      <Heroimg2 heading="PROJECTS." text="Some of my recent works"/>
      <Work />
      <Footer/>
    </div>
  )
}

export default Project;