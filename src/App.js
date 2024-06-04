import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import './App.css';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';

import Home from './components/Home';
// import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Certifications from './components/Certifications';

const App = () => {
  return (
    <div className="App">
      <nav className="nav">
        <ul>
          <li>
            <Link to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          {/* <li>
            <Link to="about" smooth={true} duration={500}>
              About
            </Link>
          </li> */}
          <li>
            <Link to="experience" smooth={true} duration={500}>
              Experience
            </Link>
          </li>
          <li>
            <Link to="projects" smooth={true} duration={500}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="skills" smooth={true} duration={500}>
              Skills
            </Link>
          </li>
          <li>
            <Link to="education" smooth={true} duration={500}>
              Education
            </Link>
          </li>
          <li>
            <Link to="certifications" smooth={true} duration={500}>
              Certifications
            </Link>
          </li>
        </ul>
      </nav>
      <Home />
      {/* <About /> */}
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Certifications />
    </div>
  );
};

export default App;
