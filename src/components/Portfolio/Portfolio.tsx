import React from 'react';
import { portfolioItems } from '../../data/portfolioItems';
import './Portfolio.css';

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="portfolio-section">
      <div className="container">
        <h2 className="text-center">My Portfolio</h2>
        <div className="row">
          {portfolioItems.map(item => (
            <div className="col-md-6 mb-4" key={item.id}>
              <div className="row align-items-center">
                <div className="col-md-6">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="img-fluid portfolio-image"
                  />
                </div>
                <div className="col-md-6">
                  <div className="portfolio-text">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <a href={item.url} className="text-link" target="_blank" rel="noopener noreferrer">
                      Check It Out
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-4">
          <a href="/portfolio" className="btn btn-primary" rel="noopener noreferrer">
            View more
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
