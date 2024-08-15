import React from 'react';
import About from '../components/About/About';
import Portfolio from '../components/Portfolio/Portfolio';
import Skills from '../components/Skills/Skills';
import Contact from '../components/Contact/Contact';

const Home: React.FC = () => {
  return (
    <div>
      <About />
      <Portfolio />
      <Skills />
      <Contact />
    </div>
  );
};

export default Home;
