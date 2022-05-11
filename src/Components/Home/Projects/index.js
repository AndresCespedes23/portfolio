/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './projects.module.css';

function Projects() {
  return (
    <section>
      <h2>Featured Projects</h2>
      <div>
        <h3>Bennu</h3>
        <div>
          <p>A responsive landing website for an NFT collection</p>
          <p>
            This was my first job for a startup.
            I took ownership of the whole project.
          </p>
          <img className={styles.bennu} src={`${process.env.PUBLIC_URL}/img/projects/bennu.png`} alt="bennu" />
        </div>
        <a href="https://github.com/AndresCespedes23/bennu-app" target="_blank" rel="noreferrer">
          <button type="button">SOURCE CODE</button>
        </a>
        <a href="https://bennu-app.vercel.app/" target="_blank" rel="noreferrer">
          <button type="button">LIVE PROJECT</button>
        </a>
      </div>
      <div>
        <h3>Crypto Tracker</h3>
        <div>
          <p>A web application to track cryptocurrency prices</p>
          <p>
            On the header, there is a dropdown which allows you to view
            the prices in USD dollars or in ARG pesos
          </p>
          <img className={styles.tracker} src={`${process.env.PUBLIC_URL}/img/projects/crypto.png`} alt="crypto-tracker" />
        </div>
        <a href="https://github.com/AndresCespedes23/crypto-currency-tracker" target="_blank" rel="noreferrer">
          <button type="button">SOURCE CODE</button>
        </a>
        <a href="https://crypto-currency-tracker-gray.vercel.app/" target="_blank" rel="noreferrer">
          <button type="button">LIVE PROJECT</button>
        </a>
      </div>
      <div>
        <h3>Mindset</h3>
        <div>
          <p>A web application that facilites job interviews</p>
          <p>
            This was the final project of a intensively course
            I go through dictate by company named Radium Rocket
          </p>
          <p>
            I worked along with a team of 8 people and we developed the app using the M.E.R.N stack.
          </p>
          <img className={styles.mindset} src={`${process.env.PUBLIC_URL}/img/projects/mindset.png`} alt="mindset" />
        </div>
        <a href="https://github.com/AndresCespedes23/Dami-MindSet-app" target="_blank" rel="noreferrer">
          <button type="button">SOURCE CODE</button>
        </a>
        <a href="https://dami-mind-set-app.vercel.app/postulants" target="_blank" rel="noreferrer">
          <button type="button">LIVE PROJECT</button>
        </a>
      </div>
      <Link to="/projects">
        <button type="button">View all projects</button>
      </Link>
    </section>
  );
}

export default Projects;
