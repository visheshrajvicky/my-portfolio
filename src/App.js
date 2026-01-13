import React from 'react';
import './App.css';

import Navbar from './components/Navbar';
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
      <Navbar />
      <div className="App">
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
