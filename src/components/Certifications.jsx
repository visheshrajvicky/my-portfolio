import React from 'react';
import { FaCertificate } from 'react-icons/fa';
import './Certifications.css';

const certifications = [
  {
    title: 'Foundations of Cybersecurity',
    provider: 'Courera: Google',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/9/97/Coursera-Logo_600x600.svg',
    link: 'https://drive.google.com/file/d/1ODUSM6-1TTJRZvt8jQO2DH-xz7KNMqeD/view?usp=sharing',
  },

  {
    title: 'Play It Safe: Manage Security Risks',
    provider: 'Courera: Google',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/9/97/Coursera-Logo_600x600.svg',
    link: 'https://drive.google.com/file/d/1j94lmwJV8Eq8fHEuG-o8wSBL3iPXLwap/view?usp=sharing',
  },

  {
    title: 'Blockchain Security',
    provider: 'Courera: InfoSec',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/9/97/Coursera-Logo_600x600.svg',
    link: 'https://drive.google.com/file/d/1ZdFEGP5_gWz5DfXpjJIFtW7JJtysN4tT/view?usp=sharing',
  },

  {
    title: 'Complete Ethical Hacking Penetration Testing Bootcamp 2021',
    provider: 'Udemy',
    logo: 'https://cdn.cookielaw.org/logos/c7d0d27d-e055-4572-8927-d3c994df5f60/3275d2bc-df67-4c87-81ed-bdfb982b90c2/a3df5d54-4eba-4aeb-9fb3-189c22118d8c/udemy-logo.png',
    link: 'https://drive.google.com/file/d/16olM5dytysDthbHlfa-T1YiIJU4en4zS/view?usp=sharing',
  },
  {
    title: 'Build a Blockchain and Cryptocurrency || Full Stack Edition',
    provider: 'Udemy',
    logo: 'https://cdn.cookielaw.org/logos/c7d0d27d-e055-4572-8927-d3c994df5f60/3275d2bc-df67-4c87-81ed-bdfb982b90c2/a3df5d54-4eba-4aeb-9fb3-189c22118d8c/udemy-logo.png',
    link: 'https://drive.google.com/file/d/1nc0z1NsSNZMl8pHdgS9W94kbGo2dAoJD/view?usp=sharing',
  },
  {
    title: 'Hyperledger Fabric 2.x Deployment',
    provider: 'Udemy',
    logo: 'https://cdn.cookielaw.org/logos/c7d0d27d-e055-4572-8927-d3c994df5f60/3275d2bc-df67-4c87-81ed-bdfb982b90c2/a3df5d54-4eba-4aeb-9fb3-189c22118d8c/udemy-logo.png',
    link: 'https://drive.google.com/file/d/1Njs54I8OL16HmBz9BpymzP9kIpjAc0ug/view?usp=sharing',
  },
];

const CertificationCard = ({ certification }) => (
  <div className="certification-card">
    <div className="cert-icon">
      <FaCertificate />
      <img
        src={certification.logo}
        alt={certification.provider}
        width={50}
        height={50}
        style={{ backgroundColor: '#fff' }}
      />
    </div>
    <div className="cert-content">
      <h3 style={{ height: "84px" }}>{certification.title}</h3>
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
