import React from 'react';
import AboutMe from '../components/AboutMe/AboutMe';
import MyPortfolio from '../components/MyPortfolio/MyPortfolio';
import Skills from '../components/Skills/Skills';
import Contact from '../components/Contact/Contact';

const Home: React.FC = () => {
  return (
    <div>
      <AboutMe />
      <MyPortfolio />
      <Skills />
      <Contact />
    </div>
  );
};

export default Home;
