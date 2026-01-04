import React from 'react';
import { Link } from 'react-scroll';
import './App.css';

import Home from './components/Home';
// import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Loader from './components/Loader';

const App = () => {
  return (
    <>
      <Loader />
      <div className="App">
      <nav className="nav">
        <ul>
          <li>
            <Link 
              to="home" 
              smooth={true} 
              duration={800}
              spy={true}
              activeClass="active"
              offset={-80}
            >
              Home
            </Link>
          </li>
          {/* <li>
            <Link to="about" smooth={true} duration={500}>
              About
            </Link>
          </li> */}
          <li>
            <Link 
              to="experience" 
              smooth={true} 
              duration={800}
              spy={true}
              activeClass="active"
              offset={-80}
            >
              Experience
            </Link>
          </li>
          <li>
            <Link 
              to="projects" 
              smooth={true} 
              duration={800}
              spy={true}
              activeClass="active"
              offset={-80}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link 
              to="skills" 
              smooth={true} 
              duration={800}
              spy={true}
              activeClass="active"
              offset={-80}
            >
              Skills
            </Link>
          </li>
          <li>
            <Link 
              to="education" 
              smooth={true} 
              duration={800}
              spy={true}
              activeClass="active"
              offset={-80}
            >
              Education
            </Link>
          </li>
          <li>
            <Link 
              to="certifications" 
              smooth={true} 
              duration={800}
              spy={true}
              activeClass="active"
              offset={-80}
            >
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
      <Footer />
      <ScrollToTop />
      </div>
    </>
  );
};

export default App;
