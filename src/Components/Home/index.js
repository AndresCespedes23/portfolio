/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import NavBar from '../Shared/DesktopNavBar';
import Presentation from './Presentation';

function Home() {
  return (
    <section>
      <Presentation />
      <NavBar />
    </section>
  );
}

export default Home;
