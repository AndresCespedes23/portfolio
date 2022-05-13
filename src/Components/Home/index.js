/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import NavBar from '../Shared/DesktopNavBar';
import styles from './home.module.css';

function Home() {
  return (
    <>
      <section className={styles.main}>
        <div className={styles.presentation}>
          <h1>👋 Hi, I'm Andrés Céspedes.</h1>
          <img className={styles.profile} src={`${process.env.PUBLIC_URL}/img/yo - copia.png`} alt="andres-cespedes" />
          <h2>👨‍💻 A fullstack Javascript developer from Argentina.</h2>
          <p>
            I enjoy solving complex problems.
            Frequently praised as detail-oriented by my peers,
            I can be relied upon to help your company achieve its goals by providing
            sustainable and scalable solutions.
          </p>
        </div>
        <div className={styles.contact}>
          <div className={styles.contactIcons}>
            <a href="https://github.com/AndresCespedes23" target="_blank" rel="noreferrer">
              <img src={`${process.env.PUBLIC_URL}/img/github.png`} alt="github" />
            </a>
          </div>
          <div className={styles.contactIcons}>
            <a href="https://www.linkedin.com/in/andres-pablo-cespedes/" target="_blank" rel="noreferrer">
              <img src={`${process.env.PUBLIC_URL}/img/linkedin.png`} alt="linkedin" />
            </a>
          </div>
          <div>
            <a href="mailto:andres.pablo.cespedes@gmail.com" target="_blank" rel="noreferrer">
              <img src={`${process.env.PUBLIC_URL}/img/email.png`} alt="mail" />
            </a>
          </div>
        </div>
      </section>
      <NavBar />
    </>
  );
}

export default Home;
