import React from 'react'
import "./AboutStyle.css"
import {FaBootstrap, FaCss3,  FaHtml5,  FaJs, FaReact,} from "react-icons/fa";
import { DiGithubFull,DiNodejs } from "react-icons/di";
import { TbBrandRedux } from "react-icons/tb";
const AboutContant = () => {
  return (
    <div className='about'>
        <div className="left">
            <div className='abt-me'>
                <h1>WHO AM I ?</h1>
            <p>Hello! 👋 I'm a fresh React.js front-end developer with a background in marketing management. I hold a B.Com degree in Marketing Management, and I've recently acquired skills in front-end development through my studies at Aimore Technology. Passionate about creating intuitive and user-friendly web interfaces, I'm excited to contribute my skills to the dynamic world of web development. Let's build something amazing together! 🚀</p>
            </div>
            <div className="skills">
            <h1>SKILLS</h1>
            <h4>
            <FaHtml5
                size={60}
                style={{ color: "#d9610b", marginRight: "1rem" }}
              />
              <FaCss3
                size={60}
                style={{ color: "skyblue", marginRight: "1rem" }}
              />
                <FaJs
                  size={60}
                  style={{ color: "orange", marginRight: "1rem" }}
                />
                <FaReact
                  size={60}
                  style={{ color: "skyblue", marginRight: "1rem" }}
                />
              <DiNodejs
                size={60}
                style={{ color: "green", marginRight: "1rem" }}
              />
              <DiGithubFull 
                size={60}
                style={{ color: "#d9980b", marginRight: "1rem" }}
              />
              <FaBootstrap
                  size={60}
                  style={{ color: "purple", marginRight: "1rem" }}
                />
                <TbBrandRedux
                  size={60}
                  style={{ color: "#936cbd", marginRight: "1rem" }}
                />
            </h4>
            </div>
            <div className='lol'>
                <h1>EDUCATION</h1>
            </div>
            <div className="education">
                <div className="clg">
                <h2>COLLEGE:</h2>
                <h3>AGRUCHAND MANMUKK JAIN COLLEGE-CHENNAI</h3>
                <p>B.COM(MARKETING MANAGEMENT)-2022</p>
                </div>
                <div className="course">
                <h2>CERTIFICATE:</h2>
                <h3>AIMORE TECHNOLOGY-CHENNAI</h3>
                <p>REACT FRONT-END DEVELOPER-2022</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContant