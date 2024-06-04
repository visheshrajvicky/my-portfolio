import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2>Contact</h2>
      <div className="contact-content">
        <p>Feel free to reach out to me!</p>
        <div className="contact-info">
          <a href="https://linkedin.com/in/vishesh-raj-56078a119"><FaLinkedin /></a>
          <a href="https://github.com/visheshrajvicky"><FaGithub /></a>
          <a href="mailto:visheshrajvicky@gmail.com"><FaEnvelope /></a>
          <a href="tel:+918586871780"><FaPhone /></a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
