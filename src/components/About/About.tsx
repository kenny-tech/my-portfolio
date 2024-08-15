import React from "react";
import "./About.css";

const AboutMe: React.FC = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-3">
            <img
              src="/images/kenny.jpg"
              alt="Your Name"
              className="img-fluid about-image"
            />
          </div>
          <div className="col-md-9">
            <div className="about-text">
              <h2>Kehinde Adegbesan</h2>
              <p>
                A creative and efficient software engineer with a can-do
                attitude, phenomenal time management skills, and a strong user
                focus. With over 6 years of experience in software development
                cutting across different sectors like Health, Fintech,
                Education, E-commerce, Food Delivery etc., the result is apps
                that solve human problems and increase revenue for the company.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
