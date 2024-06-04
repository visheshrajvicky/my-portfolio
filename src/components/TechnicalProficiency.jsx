import React from 'react';
import './TechnicalProficiency.css';

const TechnicalProficiency = () => {
  return (
    <section className="technical-proficiency">
      <h2>Technical Proficiency</h2>
      <div className="skills">
        <div className="blockchain-skills">
          <h3>Blockchain</h3>
          <ul>
            <li>Platforms: Ethereum, Quorum, Hyperledger Besu, Hyperledger Fabric</li>
            <li>Areas: NFTs, DeFi, DAO, DLT, Cryptocurrency</li>
            <li>Technologies: Web3, Smart Contracts, Consensus Protocols</li>
            <li>Tools: Remix, Truffle Suite, Ganache, MetaMask</li>
            <li>Skills: Solidity, Cryptography, System Design</li>
          </ul>
        </div>
        <div className="security-skills">
          <h3>Security</h3>
          <ul>
            <li>Penetration Testing Tools: BurpSuite, Nmap, Sqlmap, Wireshark</li>
            <li>Skills: Cryptography, Manual Penetration Testing, Ethical Hacking, Information Security</li>
            <li>Networking: OWASP attacks, Blockchain Security</li>
            <li>Operating Systems: Kali Linux, Windows, Mac, Ubuntu</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default TechnicalProficiency;
