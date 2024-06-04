import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">Vishesh Raj</div>
      <div className={`menu ${isOpen ? 'open' : ''}`}>
        <Link to="home" smooth={true} duration={1000} onClick={toggleMenu}>Home</Link>
        <Link to="experience" smooth={true} duration={1000} onClick={toggleMenu}>Experience</Link>
        <Link to="skills" smooth={true} duration={1000} onClick={toggleMenu}>Skills</Link>
        <Link to="projects" smooth={true} duration={1000} onClick={toggleMenu}>Projects</Link>
        <Link to="contact" smooth={true} duration={1000} onClick={toggleMenu}>Contact</Link>
      </div>
      <div className="toggle" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
};

export default Navbar;
