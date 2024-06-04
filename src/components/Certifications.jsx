import React from 'react';
import { FaCertificate } from 'react-icons/fa';
import './Certifications.css';

const certifications = [
  {
    title: 'Complete Ethical Hacking Penetration Testing Bootcamp 2021',
    provider: 'Udemy',
    link: 'https://drive.google.com/file/d/16olM5dytysDthbHlfa-T1YiIJU4en4zS/view?usp=sharing',
  },
  {
    title: 'Build a Blockchain and Cryptocurrency || Full Stack Edition',
    provider: 'Udemy',
    link: 'https://drive.google.com/file/d/1nc0z1NsSNZMl8pHdgS9W94kbGo2dAoJD/view?usp=sharing',
  },
  {
    title: 'Hyperledger Fabric 2.x Deployment',
    provider: 'Udemy',
    link: 'https://drive.google.com/file/d/1Njs54I8OL16HmBz9BpymzP9kIpjAc0ug/view?usp=sharing',
  },
];

const CertificationCard = ({ certification }) => (
  <div className="certification-card">
    <div className="cert-icon">
      <FaCertificate />
    </div>
    <div className="cert-content">
      <h3>{certification.title}</h3>
      <p>{certification.provider}</p>
      <a href={certification.link} target="_blank" rel="noopener noreferrer" className="cert-link">
        View Certificate
      </a>
    </div>
  </div>
);

const Certifications = () => (
  <section id="certifications" className="certifications">
    <h2>Certifications</h2>
    <div className="cert-container">
      {certifications.map((certification, index) => (
        <CertificationCard certification={certification} key={index} />
      ))}
    </div>
  </section>
);

export default Certifications;
