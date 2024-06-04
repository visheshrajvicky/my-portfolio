import React, { useState, useRef, useEffect } from 'react';
import { FaEthereum, FaNetworkWired, FaServer, FaShieldAlt } from 'react-icons/fa';
import './Skills.css';

const Skills = () => {
  const allSkills = [
    {
      skill: "Ethereum",
      logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Ethereum_logo_2014.svg"
    },
    {
      skill: "Hyperledger",
      logo: "https://www.hyperledger.org/hubfs/Hyperledger_Project%20Logos_Master_Hyperledger_Fabric.svg"
    },
    {
      skill: "Smart Contracts",
      logo: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Contract_Flat_Icon.svg"
    },
    {
      skill: "Solidity",
      logo: "https://skillicons.dev/icons?i=solidity"
    },
    {
      skill: "Web3.js",
      logo: "https://web3.foundation/favicon-32x32.png?v=b42e267cde5ba4e9f49fdf55868fa0fb"
    },
    {
      skill: "Nmap",
      logo: "https://nmap.org/images/nmap-logo-256x256.png"
    },
    {
      skill: "Wireshark",
      logo: "https://www.wireshark.org/assets/img/wireshark-logo.png"
    },
    {
      skill: "Network Security",
      logo: "https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcQLDkY7hwKlI3p6r383CoUrg8SGeq3fhmXaiYV_z5TkuPNFFCkMNeW7hpX-04K01VZS"
    },
    {
      skill: "Analysis",
      logo: "https://cdn.paperpile.com/guides/img/content-analysis-illustr-400x400.png?v=246"
    },
    {
      skill: "Nodejs",
      logo: "https://nodejs.org/static/images/logo.svg"
    },
    {
      skill: "NPM",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Npm-logo.svg/1024px-Npm-logo.svg.png"
    },
    {
      skill: "Expressjs",
      logo: "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png"
    },
    {
      skill: "MongoDB",
      logo: "https://webassets.mongodb.com/_com_assets/cms/mongodb-logo-rgb-j6w271g1xn.jpg"
    },
    {
      skill: "Python",
      logo: "https://www.python.org/static/community_logos/python-logo-master-v3-TM.png"
    },
    {
      skill: "Flask",
      logo: "https://flask.palletsprojects.com/en/2.0.x/_images/flask-logo.png"
    },
    {
      skill: "React",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
    },
    {
      skill: "JavaScript",
      logo: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
    },
    {
      skill: "HTML",
      logo: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg"
    },
    {
      skill: "CSS",
      logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg"
    },
    {
      skill: "Pen Testing",
      logo: "https://pentest-tools.com/images/logos/pentesttools-logomark.svg"
    },
    {
      skill: "Vulnerability",
      logo: "https://ih1.redbubble.net/image.452180694.4771/flat,750x,075,f-pad,750x1000,f8f8f8.u1.jpg"
    },
    {
      skill: "Cryptography",
      logo: "https://media.licdn.com/dms/image/C5612AQHmCP3w-r6k0Q/article-cover_image-shrink_720_1280/0/1630841963428?e=1723075200&v=beta&t=HOs9V8qTj5xO4-VI5iNOqgMi7yWukPOencZF5C8dX9c"
    }
  ];

  const blockchainSkills = allSkills.slice(0, 5);
  const networkSkills = allSkills.slice(5, 9);
  const backendSkills = allSkills.slice(9, 19);
  const securitySkills = allSkills.slice(19, 22);

  const scrollContainerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [currentSkills, setCurrentSkills] = useState(allSkills);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    let scrollInterval;

    const startScrolling = () => {
      scrollInterval = setInterval(() => {
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth ) {
          scrollContainer.scrollLeft = 0;
        } else {
          scrollContainer.scrollBy({ left: 1, behavior: 'smooth' });
        }
      }, 20);
    };

    // if ( isHovered) {
      startScrolling();
    // }

    return () => clearInterval(scrollInterval);
  }, [isHovered]);

  const handleMouseEnter = (skills) => {
    setCurrentSkills(skills);
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setCurrentSkills(allSkills);
    setIsHovered(false);
  };

  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>
      <div className="skills-content">
        <div
          className="skill"
          onMouseEnter={() => handleMouseEnter(blockchainSkills)}
          onMouseLeave={handleMouseLeave}
        >
          <FaEthereum />
          <h3>Blockchain</h3>
        </div>
        <div
          className="skill"
          onMouseEnter={() => handleMouseEnter(networkSkills)}
          onMouseLeave={handleMouseLeave}
        >
          <FaNetworkWired />
          <h3>Networking</h3>
        </div>
        <div
          className="skill"
          onMouseEnter={() => handleMouseEnter(backendSkills)}
          onMouseLeave={handleMouseLeave}
        >
          <FaServer />
          <h3>MERN STACK</h3>
        </div>
        <div
          className="skill"
          onMouseEnter={() => handleMouseEnter(securitySkills)}
          onMouseLeave={handleMouseLeave}
        >
          <FaShieldAlt />
          <h3>Security</h3>
        </div>
      </div>

      <div
        className="auto-scroll"
        ref={scrollContainerRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {currentSkills.map((skill, id) => (
          <div
            className="skill-card"
            key={id}
          >
            <div className="card-inner">
              <div className="card-divider" />
              <div className="card-content">
                <div className="skill-icon">
                  <img
                    src={skill.logo}
                    alt={skill.skill}
                    width={50}
                    height={50}
                  />
                </div>
                <p className="skill-name">{skill.skill}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
