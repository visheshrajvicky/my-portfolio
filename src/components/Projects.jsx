import React from 'react';
import { FaLock, FaEthereum, FaLeaf, FaCar, FaGithub, FaAndroid } from 'react-icons/fa';
import './Projects.css';
import cpabe from '../assets/cpabe.png';
import nfttree from '../assets/nfttree.png';
import car from '../assets/car.webp';

const securityProjects = [

  {
    title: 'Earthbeat',
    shortDescription: 'Android, iOS, To share your stories, actions and ideas for a more sustainable world.  Join the Earthbeat community and take part in building a better future, for the planet, for you, for everyone.',
    details: {
      technology: 'NodeJs, ExpressJs, MongoDb',
      categories: "Backend",
      programmingLanguage: 'NodeJs, JavaScript',
      date: 'July-2022 - Continue'
    },
    imageUrl: 'https://play-lh.googleusercontent.com/isDJzha8bqZu5yzEI_QXfBvLixmTAuqiDjTXDvsT5J1XG_AhlMmDo3LraBl7eEr6fuQ=w480-h960-rw',
    icon: <FaAndroid />,
    githubLink: 'https://play.google.com/store/apps/details?id=com.creativelo.mobileapp&hl=en_US' // Replace with your actual GitHub link
  },
  {
    title: 'Functional Encryption (CP-ABE)',
    shortDescription: 'Implemented Ciphertext-Policy Attribute-Based Encryption Scheme (CP-ABE).',
    details: {
      technology: 'Python3, Charm-Crypto library',
      categories: "Security",
      programmingLanguage: 'Python',
      date: 'April - May 2020'
    },
    imageUrl: cpabe,
    icon: <FaLock />,
    githubLink: 'https://github.com/visheshrajvicky/Functional-Encryption-CP-ABE-' // Replace with your actual GitHub link
  },


  {
    title: 'URL-CRAWLER',
    shortDescription: 'Developed an efficient URL crawler designed to extract and process web page data automatically. This tool systematically browses the internet, collecting valuable information from websites to support data analysis and web scraping tasks.',
    details: {
      technology: 'Python',
      categories: "Security Analysis",
      programmingLanguage: 'Python',
      date: 'June 2020 - March 2021'
    },
    imageUrl: 'https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_Web_Crawler.jpg',
    icon: <FaEthereum />,
    githubLink: 'https://github.com/visheshrajvicky/URL_Crawler' // Replace with your actual GitHub link
  }
];

const blockchainProjects = [
  {
    title: 'Blockchain-Based Authentication System',
    shortDescription: 'Advanced authentication system combining blockchain technology and self-signed certificates.',
    details: {
      technology: 'Ethereum, OpenSSL',
      categories: "Security & Blockchain",
      programmingLanguage: 'JavaScript',
      date: 'June 2020 - March 2021'
    },
    imageUrl: 'https://nordvpn.com/wp-content/uploads/blog-social-securing-cryptocurrency-a-way-out-of-the-hackers-target.svg',
    icon: <FaEthereum />,
    githubLink: 'https://github.com/visheshrajvicky/Blockchain-Based-Authentication' // Replace with your actual GitHub link
  },

  {
    title: 'Vehicle Lifecycle Tracker',
    shortDescription: 'Decentralized application to track and manage the lifecycle of vehicles using Hyperledger Fabric.',
    details: {
      technology: 'Hyperledger Fabric',
      categories: "Blockchain",
      programmingLanguage: 'JavaScript, Go',
      date: 'March 2021 - June 2021'
    },
    imageUrl: car,
    icon: <FaCar />,
    githubLink: 'https://github.com/yourusername/vehicle-lifecycle-tracker' // Replace with your actual GitHub link
  },
  {
    title: 'NFT for Trees',
    shortDescription: 'DApp to allow virtual ownership of trees using Ethereum blockchain.',
    details: {
      technology: 'Ethereum, React.js, Node.js, MongoDB',
      categories: "Blockchain",
      programmingLanguage: 'JavaScript',
      date: 'Jan 2021 - Feb 2021'
    },
    imageUrl: nfttree,
    icon: <FaLeaf />,
    githubLink: 'https://github.com/yourusername/nft-for-trees' // Replace with your actual GitHub link
  }
];

const ProjectCard = ({ project }) => (
  <div className="project-card">
    <div className="project-icon">{project.icon}</div>
    <img src={project.imageUrl} alt={project.title} className="project-image" />
    <div className="project-content">
      <h3>{project.title}</h3>
      <p style={{height: '76px'}}>{project.shortDescription}</p>
      <div className="project-details">
        <p><strong>Technology:</strong> {project.details.technology}</p>
        <p><strong>Programming Language:</strong> {project.details.programmingLanguage}</p>
        <p><strong>Date:</strong> {project.details.date}</p>
      </div>
      <div className='' style={{display: "flex", justifyContent:"space-between"}}>
          <a href={project.githubLink} className="project-github-link" target="_blank" rel="noopener noreferrer">
            <FaGithub /> View on GitHub
          </a>

          <h4 style={{marginTop:"2.2rem"}}>{project.details.categories}</h4>
      </div>
    </div>
  </div>
);

const Project = () => {
  return (
    <section id="projects" className="project-page">
      <h2>Projects</h2>
      <div className="project-sections">
        <div className="project-section">
          {/* <h3>Projects</h3> */}
          <div className="project-container">
            {securityProjects.map((project, index) => (
              <ProjectCard project={project} key={index} />
            ))}
          </div>
        </div>
        <div className="project-section">
          {/* <h3>Blockchain Projects</h3> */}
          <div className="project-container">
            {blockchainProjects.map((project, index) => (
              <ProjectCard project={project} key={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
