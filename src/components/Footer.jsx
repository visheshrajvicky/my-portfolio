import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaHeart } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Vishesh Raj</h3>
          <p>Project Lead | Blockchain Developer | Security Researcher</p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <div className="footer-links">
            <a href="#home">Home</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#education">Education</a>
            <a href="#certifications">Certifications</a>
          </div>
        </div>

        <div className="footer-section">
          <h4>Connect With Me</h4>
          <div className="footer-social">
            <a href="https://linkedin.com/in/vishesh-raj-56078a119" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://github.com/visheshrajvicky" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="mailto:visheshrajvicky@gmail.com">
              <FaEnvelope />
            </a>
            <a href="tel:+918586871780">
              <FaPhone />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          &copy; {currentYear} Vishesh Raj. Made with <FaHeart className="heart-icon" /> using React
        </p>
      </div>
    </footer>
  );
};

export default Footer;
