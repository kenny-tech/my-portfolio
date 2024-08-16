import React from 'react';
import './Skills.css';
import { skills } from '../../data/skills';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="skills-text">
              <h2>Skills</h2>
              <ul className="skills-list">
                {skills.map(skill => (
                  <li key={skill.id}>{skill.name}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
