/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import NavBar from '../Shared/DesktopNavBar';
import Loading from '../Shared/Loading';
import styles from './about.module.css';

function AboutMe() {
  return (
    <>
      <div className={styles.main}>
        <p>About Me</p>
      </div>
      <NavBar />
      <Loading />
    </>
  );
}

export default AboutMe;
