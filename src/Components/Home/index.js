/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import NavBar from '../Shared/DesktopNavBar';
import SocialMedia from '../Shared/SocialMedia';
import styles from './home.module.css';

function Home() {
  return (
    <>
      <section className={styles.main}>
        <div className={styles.presentation}>
          <h1 className={styles.title}>👋 Hi, I'm Andrés Céspedes.</h1>
          <img className={styles.profile} src={`${process.env.PUBLIC_URL}/img/yo - copia.png`} alt="andres-cespedes" />
          <h2 className={styles.subtitle}>👨‍💻 A fullstack software developer from Argentina.</h2>
          <p>
            I enjoy solving complex problems.
            Frequently praised as detail-oriented by my peers,
            I can be relied upon to help your company achieve its goals by providing
            sustainable and scalable solutions.
          </p>
        </div>
        <SocialMedia />
      </section>
      <NavBar />
    </>
  );
}

export default Home;
