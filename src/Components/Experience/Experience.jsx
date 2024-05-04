import React from "react";
import "./Experience.css";
import { experiences } from "../../data/Data.js";
import ExperienceItem from "./ExperienceItem.jsx";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
  
const Experience = () => {
  AOS.init();

  return (
    <>
      <div className="mainexperience">
        <div className="skillstitle">
          <h2> Experience</h2>
          <p>
            My work experience as a software engineer and working on different
            companies and projects.
          </p>
        </div>
        <div className="experiencediv" >
          <div className="jobs">
            <div className="verticalline"></div>
                 <ExperienceItem   experiences={experiences} />
      
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
