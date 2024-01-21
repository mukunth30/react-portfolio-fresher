import "./HeroimgStyle.css"
import React from 'react'
import IntroImg from "../assets/IntroImg.png"
import { Link } from "react-router-dom"

export const Heroimg = () => {
  return (
    <div className="hero">
        <div className="mask ">
            <img className="into-img" src={IntroImg} alt="IntroImg"/>
        </div>
        <div className="content">
            <p>YO, THIS IS MUKUNTHA RAJ</p>
            <h1>UI DEVELOPER.</h1>
            <div>
                <Link to="/project" className="btn">PROJECTS</Link>
                <Link to="/contact" className="btn btn-light">CONTACT</Link>
            </div>
        </div>
    </div>
  )
}
export default Heroimg;