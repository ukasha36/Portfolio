import React from 'react'
import { useState } from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import './navbar.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [showNav, setShowNav] = useState(false);

    const toggleShowNavbar = () => {
      setShowNav(!showNav);
   

    };

    const closeNavbar = () => {
      setShowNav(false);
  };
  
  const name1 = "Ukasha";
const name2 = "Shabbir";

const result1 = "<" + name1 + " / " + name2 + ">";


    return (
      <div>
        <nav className="navbarMain">
            <div className='navbar'>
            <Link  to="/">
            <h3 className='logo'>{result1} </h3>
            </Link>

            <ul className='navul'>
          
                <Link  to="/about">
                <li>About</li>
                </Link>
                <Link  to="/skills">
                <li>SKills</li>
                </Link>
                <Link  to="/experience">
                <li>Experience</li>
                </Link>
                <Link  to="/projects">
                <li>Projects</li>
                </Link>
                <Link  to="/contact">
                <li>Hire Me</li>
                </Link>
                <a href="https://github.com/ukasha36" className="navbtn"> Github Profile</a>
             </ul>


              
              
          
          </div>

          <div  className='open' onClick={toggleShowNavbar} >  <RxHamburgerMenu /> </div>
  
          {/* responsive navbar */}
          <div className={`responsiveNav ${showNav ? "openNav" : "closeNav"} `}>
            <ul className='mobileul'>
            <div onClick={toggleShowNavbar}><IoClose className='closebtn' /></div>

          <Link  to="/"  onClick={closeNavbar}>
                <li>Home</li>
                </Link>
                <Link  to="/about"  onClick={closeNavbar}>
                <li>About</li>
                </Link>
                <Link  to="/skills" onClick={closeNavbar}>
                <li>SKills</li>
                </Link>
                <Link  to="/experience" onClick={closeNavbar}>
                <li>Experience</li>
                </Link>
                <Link  to="/projects" onClick={closeNavbar}>
                <li>Projects</li>
                </Link>
                <Link  to="/contact" onClick={closeNavbar}>
                <li>Contact Me</li>
                </Link>

            </ul>
  
          </div>
        </nav>
      </div>
    );
  };
  

export default Navbar