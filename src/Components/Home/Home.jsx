import React from 'react'
import './Home.css'
import Typewriter from 'typewriter-effect';
import { Link } from 'react-router-dom';
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const Home = () => {
  return (
    <div className='maindiv'>
      <h1>Muhammad Ukasha</h1>
      <div className='typewriter'>
       <span> I am a </span>
      <Typewriter
        options={{
          strings: [ " Developer" , " Programmer" , " AI enthusiast",  " Freelancer" ],
          autoStart: true,
          loop: true,
        }}
        className="typewriter-text"
      />
      </div>
      <div className='divicon'>
      <Link to="https://www.linkedin.com/in/muhammad-ukasha-8211ba242/" target="_blank" rel="noopener noreferrer">
      <FaLinkedinIn className='icon' />
      </Link>
      <Link to="https://github.com/ukasha36" target="_blank" rel="noopener noreferrer">
      <FaGithub className='icon' />
            </Link>
      <Link to="mailto:ukashashabbir36@gmail.com"  rel="noopener noreferrer">
      <IoMdMail className='icon' />
            </Link>
      </div>

    </div>

  )
}

export default Home