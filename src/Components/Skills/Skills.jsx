import React from "react";
import "./Skills.css";
import rect from "../../assets/react.png";
import redux from "../../assets/redux.svg";
import next from "../../assets/next.png";

const Skills = () => {
  return (
    <>
      <div className="mainskills">
        <h1>My Tools</h1>
        <div className="skillsdiv">
          <div className="frontend" >
            <div >
              <h2> Frontend </h2>
            </div>
            <div className="frontenditems">
            <div className="react">
              <img src={rect} alt="" className="reactimg" />
              React JS
            </div>
            <div className="react">
              <img src={redux} alt="" className="reactimg" />
              Redux
            </div>
            <div className="react">
              <img src={next} alt="" className="reactimg" />
              Next JS
            </div>
          </div>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Skills;
