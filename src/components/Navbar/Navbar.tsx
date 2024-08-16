import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar: React.FC = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">Kehinde Adegbesan</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              {isHomePage ? (
                <a className="nav-link" href="#about">About Me</a>
              ) : (
                <Link className="nav-link" to="/#about">About Me</Link>
              )}
            </li>
            <li className="nav-item">
              {isHomePage ? (
                <a className="nav-link" href="#portfolio">My Portfolio</a>
              ) : (
                <Link className="nav-link" to="/#portfolio">My Portfolio</Link>
              )}
            </li>
            <li className="nav-item">
              {isHomePage ? (
                <a className="nav-link" href="#skills">Skills</a>
              ) : (
                <Link className="nav-link" to="/#skills">Skills</Link>
              )}
            </li>
            <li className="nav-item">
              {isHomePage ? (
                <a className="nav-link" href="#contact">Contact</a>
              ) : (
                <Link className="nav-link" to="/#contact">Contact</Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
