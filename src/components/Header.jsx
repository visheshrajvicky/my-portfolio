import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome, FaUserTie, FaProjectDiagram, FaCode, FaCertificate, FaGraduationCap } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { useMediaQuery } from 'react-responsive';
import './Header.css';

const Header = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <header className="header">
      <h1>Vishesh Raj</h1>
      <IconContext.Provider value={{ size: '1.5em' }}>
        <nav>
          <NavLink exact to="/" activeClassName="active" className={isMobile ? "icon-link" : ""}><FaHome /> Homedf</NavLink>
          <NavLink to="/experience" activeClassName="active" className={isMobile ? "icon-link" : ""}><FaUserTie /> Experience</NavLink>
          <NavLink to="/projects" activeClassName="active" className={isMobile ? "icon-link" : ""}><FaProjectDiagram /> Projects</NavLink>
          <NavLink to="/skills" activeClassName="active" className={isMobile ? "icon-link" : ""}><FaCode /> Skills</NavLink>
          <NavLink to="/certifications" activeClassName="active" className={isMobile ? "icon-link" : ""}><FaCertificate /> Certifications</NavLink>
          <NavLink to="/education" activeClassName="active" className={isMobile ? "icon-link" : ""}><FaGraduationCap /> Education</NavLink>
        </nav>
      </IconContext.Provider>
    </header>
  );
};

export default Header;
