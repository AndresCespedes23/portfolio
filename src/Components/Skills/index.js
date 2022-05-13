/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import NavBar from '../Shared/DesktopNavBar';
import styles from './skills.module.css';

function Skills() {
  return (
    <>
      <section className={styles.main}>
        <div>
          <h2>My tech stack</h2>
          <img className={styles.mongo} src={`${process.env.PUBLIC_URL}/img/mern/mongodb-icon-1.svg`} alt="mongodb" />
          <img className={styles.express} src={`${process.env.PUBLIC_URL}/img/mern/express.png`} alt="expressjs" />
          <img className={styles.react} src={`${process.env.PUBLIC_URL}/img/mern/react.png`} alt="react" />
          <img className={styles.node} src={`${process.env.PUBLIC_URL}/img/mern/nodejs.svg`} alt="nodejs" />
        </div>
        <div>
          <h2>What I do with the M.E.R.N stack ?</h2>
          <img className={styles.fullstack} src={`${process.env.PUBLIC_URL}/img/mern/fullstack.svg`} alt="fullstack" />
        </div>
      </section>
      <NavBar />
    </>
  );
}

export default Skills;
