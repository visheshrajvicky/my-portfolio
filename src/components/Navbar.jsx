import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      <nav className="navbar">
        <div className="logo">Vishesh Raj</div>
        <div className={`menu ${isOpen ? 'open' : ''}`}>
          <Link to="home" smooth={true} duration={1000} onClick={closeMenu}>Home</Link>
          <Link to="experience" smooth={true} duration={1000} onClick={closeMenu}>Experience</Link>
          <Link to="skills" smooth={true} duration={1000} onClick={closeMenu}>Skills</Link>
          <Link to="projects" smooth={true} duration={1000} onClick={closeMenu}>Projects</Link>
          <Link to="contact" smooth={true} duration={1000} onClick={closeMenu}>Contact</Link>
        </div>
        <div className="toggle" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </nav>
      {isOpen && <div className="menu-backdrop" onClick={closeMenu}></div>}
    </>
  );
};

export default Navbar;
