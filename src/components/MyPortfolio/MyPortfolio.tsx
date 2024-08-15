import React from 'react';
import { Link } from 'react-router-dom';
import './MyPortfolio.css';

const MyPortfolio: React.FC = () => {
  return (
    <section id="portfolio" className="portfolio-section">
      <h2>My Portfolio</h2>
      <div className="portfolio-cards">
        {[...Array(5)].map((_, index) => (
          <div key={index} className="card portfolio-card">
            <img src="https://via.placeholder.com/150" alt={`Portfolio ${index + 1}`} />
            <div className="portfolio-text">
              <h3>Project Title {index + 1}</h3>
              <p>Brief description of the project. This could include the technologies used and the problem it solves.</p>
              <Link to="/portfolio" className="view-more-link">View More</Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MyPortfolio;
