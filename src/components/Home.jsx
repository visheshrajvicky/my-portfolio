import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';
import mypic from '../assets/mypic.png';
import google from '../assets/googleCyber.png';
import blockchain from '../assets/blokchain.png';
import './Home.css';
import {ReactTyped} from 'react-typed';

const Home = () => {
  const controls = useAnimation();
  const [showAbout, setShowAbout] = useState(false);

  useEffect(() => {
    const sequence = async () => {
      await controls.start({ opacity: 1, x: 0, transition: { duration: 1.5 } });
      await controls.start({ x: '-95%', transition: { duration: 1.5 } });
      setShowAbout(true);
    };

    sequence();
  }, [controls]);

  return (
    <section id="home" className="home">
      <div className="background-image"></div>
      <motion.div
        className="content"
        initial={{ opacity: 0, x: -100 }}
        animate={controls}
      >
        <div className="myimages">
          <img src={mypic} alt="Vishesh Raj Profile" />
        </div>

        <h1>Vishesh Raj</h1>
        <ReactTyped
          className="typed-text"
          strings={[
            'Senior Integration Engineer',
            'Data Platform Architect',
            'Blockchain Engineer',
            'Security Researcher',
            'Full Stack Developer',
            'Cybersecurity Professional',
          ]}
          typeSpeed={40}
          backSpeed={50}
          loop
        />
        <div className="images">
          <img src={blockchain} alt="Blockchain" />
          <img src={google} alt="Cybersecurity" />
        </div>
        <div className="contact-info">
          <a href="https://linkedin.com/in/vishesh-raj-56078a119"><FaLinkedin /></a>
          <a href="https://github.com/visheshrajvicky"><FaGithub /></a>
          <a href="mailto:visheshrajvicky@gmail.com"><FaEnvelope /></a>
          <a href="tel:+918586871780"><FaPhone /></a>
        </div>
      </motion.div>

      {showAbout && (
        <motion.section
          id="about"
          className="about"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
        >
          <h2>About Me</h2>
          <ReactTyped
            className="typed-text"
            strings={[
              'Senior Integration Engineer with 4+ years of experience across data platforms, blockchain systems, and cybersecurity. Currently focused on designing scalable data pipelines and Meltano-inspired ELT frameworks to ingest, normalize, and index data from diverse sources into Elasticsearch. Strong background in security testing, distributed systems, and identity-centric architectures, with a proven ability to collaborate across product and engineering teams to build reliable, enterprise-grade data and identity platforms.',
            ]}
            typeSpeed={40}
            backSpeed={50}
            loop={false}
          />
        </motion.section>
      )}
    </section>
  );
};

export default Home;
