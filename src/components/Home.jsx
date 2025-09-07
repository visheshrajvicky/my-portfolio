import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';
import mypic from '../assets/mypic.png';
import google from '../assets/googleCyber.png';
import blockchain from '../assets/blokchain.png';
import './Home.css';
import {ReactTyped, Typed} from 'react-typed';

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
          <img src={mypic} alt="My Photo" />
        </div>

        <h1>Vishesh Raj</h1>
        <ReactTyped
          className="typed-text"
          strings={[
            'Project Lead',
            'Blockchain Developer',
            'Smart Contract Developer',
            'Security Researcher',
            'Cybersecurity Enthusiast',
            // 'Decentralized Systems Advocate',
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
              'A skilled Project Lead of Blockchain and Security Teams with 3 years of relevant experience. I have done research in blockchain and information security for 2 years during my master\'s and I have been part of several private bug bounty programs on HackerOne for penetration and security testing with a proven track record of success in extraordinary results. Deep understanding of distributed ledger, blockchain design principles, and various protocols and environments. Currently appointed as a Project Lead of 10 member teams, building ultimate apps for environmental enthusiasts and changemakers project "EarthBeat" available on Android and iOS.',
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
