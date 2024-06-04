import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Experience.css';
import experienceAnimation from '../helpers/code.json';
import AnimationLottie from "../helpers/animation-lottie";
import companyLogo from '../assets/1gen.png'; // replace with your company logo path

const Experience = () => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <section id="experience" className="experience">
      <h2>Experience</h2>

      <div className="experience-content">
        <motion.div
          className="animation-container"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
        >
          <AnimationLottie animationPath={experienceAnimation} />
        </motion.div>

        <motion.div
          className="job-container"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
        >
          <div className="card-ex" onClick={toggleDetails}>
            <img src={companyLogo} alt="Company Logo" className="company-logo" />
            <div className="job-summary">
              <h3>Senior Blockchain Engineer</h3>
              <h4>1GEN Social Innovation Lab</h4>
              <p>1st July 2021 - Present</p>
            </div>
          </div>

          {showDetails && (
            <motion.div
              className="job-details"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <ul>
                <li>Built Dapps with different blockchain platforms, Ethereum and Hyperledger Fabric.</li>
                <li>Defined the structure of the Blockchain Development for the product team and defined the access control, security, and environment.</li>
                <li>All web application security testing, vulnerability assessment, and penetration testing are handled by me only.</li>
                <li>Finds vulnerabilities in servers and computers and secures them with patches.</li>
                <li>Coordinating with the dev team to ensure the closure of reported vulnerabilities by explaining the ease of exploitation and the issue's impact.</li>
                <li>Ports scan the server using NMAP and close all unnecessary ports to reduce the attack surface.</li>
              </ul>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
