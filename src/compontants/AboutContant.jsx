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
            <p>Hey there! 👋 I'm Mukunth, a dedicated front-end developer with one year of experience in HTML, CSS, JavaScript, React.js, Bootstrap, and version control with Git and GitHub. I am passionate about creating seamless and visually appealing web experiences. I thrive on staying ahead of industry trends, and my collaborative spirit ensures smooth teamwork, utilizing Git for effective version control. With a user-centric approach, I aim to craft engaging and intuitive interfaces. Let's collaborate and bring innovative web solutions to life! 🚀</p>
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
            <div className="education">
              <h1>EDUCATION</h1>
              <h2>AGRUCHAND MANULL JAIN COLLEGE</h2>
              <p>B.COM(MAKKETING MANAGEMENT)-2022</p>
            </div>
            <div className="exp">
              <h1>EXPERIENCE</h1>
              <h2>APTIVE TECHNOLOGY</h2>
              <h5>FRONT-END DEVELOPER -0CT(2022-2023)</h5>
              <p>With over a year of dedicated experience as a front-end developer at Aptive Technology, I have honed my skills in HTML, CSS, and JavaScript, establishing a solid foundation for web development. My proficiency extends to React.js, where I have a strong grasp of fundamental concepts and have delved into more advanced features such as hooks and context API. Throughout my tenure, I have actively contributed to the development of responsive and visually appealing user interfaces. I am committed to staying abreast of industry trends, continuously expanding my knowledge base, and embracing emerging technologies. Beyond technical skills, my experience has cultivated effective collaboration and communication skills, enabling me to work seamlessly within development teams. As I pursue excellence in my field, I am passionate about crafting optimal user experiences and contributing to innovative and impactful projects in the dynamic landscape of front-end development.</p>
            </div>
        </div>
    </div>
  )
}

export default AboutContant
