import React from 'react';
import './Skills.css';

const Skills: React.FC = () => {
  const skills = ["HTML", "CSS", "JavaScript", "React", "React Native", "PHP", "Laravel", "Bootstrap", "Tailwind", "Java", "Spring Boot"];

  return (
    <section id="skills" className="skills-section">
      <h2>Skills</h2>
      <div className="skills-card">
        {skills.map((skill, index) => (
          <div key={index} className="skill">{skill}</div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
