import React from 'react';
import './Portfolio.css';

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="portfolio-section">
      <div className="container">
        <h2 className="text-center">My Portfolio</h2>
        <div className="row">
          {[...Array(8)].map((_, index) => (
            <div className="col-md-6 mb-4" key={index}>
              <div className="row align-items-center">
                <div className="col-md-6">
                  <img
                    src={`https://via.placeholder.com/300?text=Project+${index + 1}`}
                    alt={`Project ${index + 1}`}
                    className="img-fluid portfolio-image"
                  />
                </div>
                <div className="col-md-6">
                  <div className="portfolio-text">
                    <h3>Project {index + 1}</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin euismod tincidunt quam.</p>
                    <a href="#" className="text-link">View Work</a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <a href="/portfolio" className="btn btn-primary view-more-btn">View More</a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
