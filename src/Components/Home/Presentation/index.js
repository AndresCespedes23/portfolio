/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import styles from './presentation.module.css';

function Presentation() {
  return (
    <section className={styles.main}>
      <div>
        <h1>👋 Hi, I'm Andrés Céspedes.</h1>
        <h2>👨‍💻 A fullstack Javascript developer from Argentina.</h2>
        <p>
          I enjoy solving complex problems.
          Frequently praised as detail-oriented by my peers,
          I can be relied upon to help your company achieve its goals by providing
          sustainable and scalable solutions.
        </p>
      </div>
      <div>
        <a href="https://github.com/AndresCespedes23" target="_blank" rel="noreferrer">
          <img src={`${process.env.PUBLIC_URL}/img/github.png`} alt="github" />
        </a>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/andres-pablo-cespedes/" target="_blank" rel="noreferrer">
          <img src={`${process.env.PUBLIC_URL}/img/linkedin.png`} alt="linkedin" />
        </a>
      </div>
    </section>
  );
}

export default Presentation;
