/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Presentation from './Presentation';
import Skills from './Skills';
import Projects from './Projects';
import Footer from '../Shared/Footer';

function Home() {
  return (
    <section>
      <Presentation />
      <Skills />
      <Projects />
      <Footer />
    </section>
  );
}

export default Home;
