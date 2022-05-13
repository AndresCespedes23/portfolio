/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import NavBar from '../Shared/DesktopNavBar';
import styles from './skills.module.css';

function Skills() {
  return (
    <>
      <section className={styles.main}>
        <h2>Tech stack</h2>
        <div className={styles.stack}>
          <div className={styles.tech}>
            <img className={styles.mern} src={`${process.env.PUBLIC_URL}/img/mern/mongodb.svg`} alt="mongodb" />
            <p>MongoDB Atlas</p>
          </div>
          <div className={styles.tech}>
            <img className={styles.mern} src={`${process.env.PUBLIC_URL}/img/mern/express.png`} alt="expressjs" />
            <p>ExpressJS</p>
          </div>
          <div className={styles.tech}>
            <img className={styles.mern} src={`${process.env.PUBLIC_URL}/img/mern/react.png`} alt="react" />
            <p>ReactJS</p>
          </div>
          <div className={styles.tech}>
            <img className={styles.mern} src={`${process.env.PUBLIC_URL}/img/mern/nodejs.svg`} alt="nodejs" />
            <p>NodeJS</p>
          </div>
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
