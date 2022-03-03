import React from "react";
import me from "../assets/me.JPG";
import "../css/Contact.css";
import { GoMail, GoMarkGithub } from "react-icons/go";
import { GrLinkedin } from "react-icons/gr";

export default function Contact() {
  return (
    <div className="container mt-3">
      <div className="card p-3 mb-3 main-body">
        <div className="banner">
          <h1>Hello, Welcome to my Contact Page!</h1>
        </div>
        <div className="d-flex  mt-3">
          <img className="mr-3" src={me} alt="Developer" />
          <div className="justifyparent">
            <div className="d-flex container-fluid justify-content-center">
              <h3>Giriprasath</h3>
            </div>
            <br />
            <br />
            <h4>Contact Me :</h4>
            <a
              className="text-dark"
              rel="noreferrer"
              target="_blank"
              href="mailto:giriarjun1995@gmail.com"
            >
              <h5>{<GoMail />} : giriarjun1995@gmail.com</h5>
            </a>
            <a
              className="text-dark"
              rel="noreferrer"
              target="_blank"
              href="https://https://github.com/Giricr7"
            >
              <h5>{<GoMarkGithub />} : Giricr7</h5>
            </a>
            <a
              className="text-dark"
              rel="noreferrer"
              target="_blank"
              href="https://www.linkedin.com/in/giri-prasath-671977140/"
            >
              <h5>{<GrLinkedin />} : Giriprasath</h5>
            </a>
            <div className="margin">
              <h4>Technologies Used : </h4>
              <ul className="skill">
                <li>Html</li>
                <li>CSS</li>
                <li>Node js</li>
                <li>Express js</li>
                <li>React js</li>
                <li>MongoDB</li>
              </ul>
            </div>

            <h4>About Me :</h4>
            <p className="contentjustify">
              Hi, My Name is Giriprasath from Erode, Tamilnadu ,
              India. I completed my Fullstack Developer Course from a very good Institute. I like creating and designing websites. This is
              my project for Fullstack Development.
            </p>
          </div>
        </div>
        </div>
    </div>
  );
}
