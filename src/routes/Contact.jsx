import React from 'react'
import Navbar from '../compontants/Navbar'
import Footer from '../compontants/Footer'
import Form from '../compontants/Form'
import Heroimg2 from '../compontants/Heroimg2'
const Contact = () => {
  return (
    <div>
      <Navbar/>
      <Heroimg2 heading="CONTACT." text="Let's Have a Chat."/>
      <Form/>
      <Footer/>
    </div>
  )
}

export default Contact