import React from "react";
import { portfolioItems } from "../data/portfolioItems";
import "../components/Portfolio/Portfolio.css";

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="portfolio-section">
      <div className="container">
        <h2 className="text-center">My Portfolio</h2>
        <div className="row">
          {portfolioItems.map((item) => (
            <div
              className="col-md-6 mb-4"
              key={item.id}
              style={{ padding: "0 30px" }}
            >
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
                    <div
                      dangerouslySetInnerHTML={{ __html: item.description }}
                    />
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Check it out
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
