import React from 'react';
import profile from "../assets/IMG_7806.png";
import './AboutMe.css';

const AboutMe: React.FC = () => {
  return (
    <section className="about-me">
      <div className="about-me-container">
        <h2 className="about-me-title">About Me</h2>

        <div className="about-me-content">
          <div className="about-me-text">
            <p>
              Hi! I'm Muneeb Ali Asif, a passionate Computer Science student at Georgia Tech. 
              My interest in technology began at a young age, and I am now focused on developing 
              innovative software solutions and exploring the world of Artificial Intelligence. 
            </p>
            <p>
              Currently, I am diving deep into various technologies including AI, machine learning, 
              and robotics. When I’m not coding, you can find me participating in student clubs, 
              enjoying outdoor activities, or experimenting with new ideas in tech.
            </p>
          </div>

          <div className="about-me-image">
            <img 
              src={profile}
              alt="Muneeb Ali Asif" 
              className="profile-image" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;