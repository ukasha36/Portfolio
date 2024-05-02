import React from "react";
import "./About.css";
import img from "../../assets/ukasha.jpg";
import AnimatedNumbers from "../Animatednumbers/AnimatedNumbers";

const About = () => {
  return (
    <>
      <div className="aboutmain">
        <h1>Passion Fuels Purpose! </h1>
        <div className="aboutdiv">
          <div className="abouttext">
            <h4>BIOGRAPHY:</h4>
            <br />
            <p>
              Hi, I am Muhammad Ukasha, I am a MERN Stack web developer with
              over 1+ year of experience. I have a passion for building
              innovative and user-friendly applications. I am proficient in all
              aspects of the MERN Stack, including ReactJs , NextJs and NodeJS.
              <br />
              <br />
              I am also proficient in a variety of other programming languages
              and technologies, including Java, Python, and C/C++. I am
              responsible for developing and maintaining a variety of software
              applications. I work with a team of engineers to deliver
              high-quality products on time and within budget.
              <br />
              <br />
              Additionally, coding is not just my profession but also my
              passion, and I often find joy in exploring new technologies,
              solving challenging problems, and building innovative solutions.
              When not immersed in lines of code, you can often find me
              engrossed in a good book, further broadening my knowledge and
              perspective on various subjects.
            </p>
          </div>

          <div className="aboutimg">
            <img src={img} alt="" className="img" />
          </div>
        </div>

        <div className="animatednumbers">
          <div className="number1">
            <div>
              <AnimatedNumbers value={50} />
              <span>+</span>
            </div>

            <h2>Satisfied Clients</h2>
          </div>
          <div className="number2">
            <div>
              <AnimatedNumbers value={20} />
              <span>+</span>
            </div>
            <h2> Projects </h2>
          </div>
          <div className="number3">
            <div>
              <AnimatedNumbers value={1} />
              <span>+</span>
            </div>
            <h2> Experience </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
