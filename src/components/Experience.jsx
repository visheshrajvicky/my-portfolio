import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Experience.css';
import experienceAnimation from '../helpers/code.json';
import AnimationLottie from "../helpers/animation-lottie";
import exyntraLogo from '../assets/logo-exyntra.svg';
import onegenLogo from '../assets/1gen.png';

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
          <a href="https://www.exyntra.com/" target="_blank" rel="noopener noreferrer" className="card-ex" onClick={toggleDetails}>
            <img src={exyntraLogo} alt="Exyntra Technologies Logo" className="company-logo" />
            <div className="job-summary">
              <h3>Senior Integration Engineer</h3>
              <h4>Exyntra Technologies Private Limited</h4>
              <p>OCT 2025 - Present</p>
            </div>
          </a>
          <br />

          <a href="https://www.1gen.io/" target="_blank" rel="noopener noreferrer" className="card-ex" onClick={toggleDetails}>
            <img src={onegenLogo} alt="1GEN Social Innovation Labs Logo" className="company-logo" />
            <div className="job-summary">
              <h3>Senior Blockchain Engineer | Project Lead</h3>
              <h4>1GEN Social Innovation Labs Pvt Ltd</h4>
              <p>2022 - AUG 2025</p>
            </div>
          </a>

          <br />

          <a href="https://www.1gen.io/" target="_blank" rel="noopener noreferrer" className="card-ex" onClick={toggleDetails}>
            <img src={onegenLogo} alt="1GEN Social Innovation Labs Logo" className="company-logo" />
            <div className="job-summary">
              <h3>Blockchain Engineer</h3>
              <h4>1GEN Social Innovation Labs Pvt Ltd</h4>
              <p>2021 - 2022</p>
            </div>
          </a>

          {showDetails && (
            <motion.div
              className="job-details"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <ul>
                <li>Leading the design and implementation of scalable data pipelines to ingest data from multiple sources including REST APIs, relational databases, and cloud storage into Elasticsearch.</li>
                <li>Architected a Meltano-inspired ELT framework with modular connectors and transformers, establishing standards for source onboarding and pipeline extensibility.</li>
                <li>Engineered and deployed blockchain protocols and smart contracts, increasing transaction processing efficiency by 20% and supporting over 5+ active projects.</li>
                <li>Mentored and guided a team of 5+ junior engineers, leading code reviews that reduced bugs by 35% and ensured adherence to industry best practices.</li>
                <li>Spearheaded the development of critical features for blockchain-based applications, driving 15% growth in platform adoption.</li>
                <li>Developed and deployed blockchain solutions, including smart contracts and DApps, contributing to the successful launch of 5+ projects.</li>
              </ul>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
