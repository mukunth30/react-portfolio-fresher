import React from 'react'
import Navbar from '../compontants/Navbar'
import Footer from '../compontants/Footer'
import Heroimg2 from '../compontants/Heroimg2'
import AboutContant from '../compontants/AboutContant'
const About = () => {
  return (
    <div>
      <Navbar/>
      <Heroimg2 heading="ABOUT." text="Im a friendly Front-End Developer👋🏻"/>
      <AboutContant/>
      <Footer/>
    </div>
  )
}

export default About
