import React from "react";
import "./Projects.css";
import { projects } from "../../data/Data";
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const Projects = () => {
  AOS.init();
  return (
    <div className="mainproject">
      <div className="skillstitle">
        <h2 data-aos="fade-down"> Projects</h2>
        <p>
          I have worked on a wide range of projects. Here are some of my
          projects.
        </p>
      </div>

      <div className="projectdiv">
        {/* Render first three project boxes */}
        <div className="project-row">
          {projects.slice(0, 3).map((val, idx) => (
            <div className="projectbox" data-aos="fade-up" key={idx}>
              <ul className="projectul">
                <div>
                  <img src={val.image} alt={val.title} className="projectimg" />
                </div>
                <li className="jobli"> 
                  {val.tags && (
                    <ul className="tagsli">
                      {val.tags.map((el, i) => (
                        <li key={i}>{el}</li>
                      ))}
                    </ul>
                  )}
                </li>
                <div className="jobdetails">
                  <li className="jobli projectrole">{val.title}</li>
                  <li className="jobli projectdate">{val.date}</li>
                </div>
                <li className="jobli jobdesc">{val.description}</li>
              </ul>
            </div>
          ))}
        </div>

        {/* Render the remaining project boxes */}
        <div className="project-row" >
          {projects.slice(3).map((val, idx) => (
            <div className="projectbox" data-aos="fade-up" key={idx + 3}>
              <ul className="projectul">
                <div>
                  <img src={val.image} alt={val.title} className="projectimg" />
                </div>
                <li className="jobli"> 
                  {val.tags && (
                    <ul className="tagsli">
                      {val.tags.map((el, i) => (
                        <li key={i}>{el}</li>
                      ))}
                    </ul>
                  )}
                </li>
                <div className="jobdetails">
                  <li className="jobli projectrole">{val.title}</li>
                  <li className="jobli projectdate">{val.date}</li>
                </div>
                <li className="jobli jobdesc">{val.description}</li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
