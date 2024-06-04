import React from 'react';
import './Education.css';
import study from '../helpers/study.json';
import AnimationLottie from "../helpers/animation-lottie";
import collegeLogo1 from '../assets/iitjammu.png'; // replace with your college logo path
import collegeLogo2 from '../assets/rgpv.png'; // replace with your college logo path

const Education = () => {
  return (
    <section id="education" className="education">
      <div className="background-image"></div>
      <div className="" style={{width: '40%'}}>
        <div className="edu-anim">
          <AnimationLottie animationPath={study} />
        </div>
      </div>

      <div className="degree-container">
        <div className="degree">
          <div className="card">
            <div className='img-card'>
              <img src={collegeLogo1} alt="College Logo" className="college-logo1" />
            </div>
            <div className="job-summary">
              <h3>Master of Technology</h3>
              <h4>Indian Institute of Technology Jammu</h4>
              <span>CSE-Information Security</span>
              <div className='' style={{width:"90%", display:"flex", justifyContent:"space-between" }}>
                <p>CGPA: 8.17</p> 
                <p> | </p>
                <p>July 2015 - June 2021</p> 
              </div>
            </div>
          </div>
        </div>

        <div className="degree">
          <div className="card">
          <div className='img-card'>
              <img src={collegeLogo2} alt="College Logo" className="college-logo" />
            </div>
            <div className="job-summary">
              <h3>Bachelor Of Engineering</h3>
              <h4>Rajiv Gandhi Proudyogiki Vishwavidyalaya, Bhopal</h4>
              <span>Information Technology</span>

              <div className='' style={{width:"70%", display:"flex", justifyContent:"space-between" }}>
                <p>CGPA: 8.49</p>
                <p> | </p>
                <p>July 2015 - June 2021</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
