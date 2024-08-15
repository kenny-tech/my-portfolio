import React from 'react';
import './AboutMe.css';

const AboutMe: React.FC = () => {
  return (
    <section id="about" className="about-section">
      <div className="card about-card">
        <img src="https://via.placeholder.com/150" alt="Your Name" className="about-image" />
        <div className="about-text">
          <h2>Your Name</h2>
          <p>Write a short description about yourself here. You can talk about your experience, what you do, and your passions.</p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
