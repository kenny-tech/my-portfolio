import React from 'react';
import './About.css';

const AboutMe: React.FC = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-3">
            <img
              src="https://via.placeholder.com/300"
              alt="Your Name"
              className="img-fluid about-image"
            />
          </div>
          <div className="col-md-9">
            <div className="about-text">
              <h2>Your Name</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin euismod tincidunt quam, eget dapibus elit fermentum vel.</p>
              <p>Fusce ut sapien vehicula, posuere sapien id, aliquet lectus. Praesent id metus magna. Quisque tincidunt velit non velit posuere bibendum.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
