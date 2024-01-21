import React from "react";
import "./FooterStyle.css";
import {
  FaHome,
  FaPhone,
  FaMailBulk,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome
              size={20}
              style={{ color: "yellow", marginRight: "2rem" }}
            />
            <div>
              <p>no,16 kasthuri bai street</p>
              <p>vandavasi,thiruvannamalai-604408</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "yellow", marginRight: "2rem" }}
              />
              7339411286
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "yellow", marginRight: "2rem" }}
              />
              <a href="mailto:mukuntharaj93@gmail.com">mukuntharaj93@gmail.com</a>
            </h4>
          </div>
        </div>

        <div className="right">
          <h4>About mukunth</h4>
          <p>
            myself mukunth and am a frontend developer with obbesed in coding
          </p>
          <div className="social">
            <a href="https://github.com/mukunth30">
              <FaGithub
                size={20}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
            </a>
            <a href="https://twitter.com/MercMukunth">
              <FaTwitter
                size={20}
                style={{ color: "lightblue", marginRight: "1rem" }}
              />
            </a>
            <a href="https://www.instagram.com/hyits_merc?igsh=YmMzdHhpcXk5b3Qw">
              <FaInstagram
                size={20}
                style={{ color: "orange", marginRight: "1rem" }}
              />
            </a>
            <a href="www.linkedin.com/in/mukuntha-raj">
              <FaLinkedin
                size={20}
                style={{ color: "blue", marginRight: "1rem" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
