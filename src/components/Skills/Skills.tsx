import React from 'react';
import './Skills.css';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="skills-text">
              <h2>Skills</h2>
              <ul className="skills-list">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>React Native</li>
                <li>Redux</li>
                <li>NextJs</li>
                <li>PHP</li>
                <li>Laravel</li>
                <li>Bootstrap</li>
                <li>Tailwind</li>
                <li>NodeJs</li>
                <li>ExpressJs</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
