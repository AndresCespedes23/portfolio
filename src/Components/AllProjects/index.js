/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './all-projects.module.css';
import Header from '../Shared/Header';
import Footer from '../Shared/Footer';

function AllProjects() {
  return (
    <section>
      <Header />
      <article>
        <div>
          <h3>News</h3>
          <div>
            <p>This was my first work</p>
            <p>
              It was the first assignment I did for a course in software development.
              The company tdictates the course was Radium Rocket.
            </p>
            <img className={styles.news} src={`${process.env.PUBLIC_URL}/img/projects/first-html.png`} alt="crypto-tracker" />
          </div>
          <a href="https://github.com/AndresCespedes23/noticia" target="_blank" rel="noreferrer">
            <button type="button">SOURCE CODE</button>
          </a>
          <a href="https://andrescespedes23.github.io/noticia/" target="_blank" rel="noreferrer">
            <button type="button">LIVE PROJECT</button>
          </a>
        </div>
      </article>
      <article>
        <div>
          <h3>Carpincho News</h3>
          <div>
            <p>This was my first time doing a responsive website</p>
            <p>
              It was the first assignment I did for a course in software development.
              The company tdictates the course was Radium Rocket.
            </p>
            <img className={styles.news} src={`${process.env.PUBLIC_URL}/img/projects/carpincho-news.png`} alt="carpincho-news" />
          </div>
          <a href="https://github.com/AndresCespedes23/cespedes-a-basd-2021-class-3" target="_blank" rel="noreferrer">
            <button type="button">SOURCE CODE</button>
          </a>
          <a href="https://andrescespedes23.github.io/cespedes-a-basd-2021-class-3/" target="_blank" rel="noreferrer">
            <button type="button">LIVE PROJECT</button>
          </a>
        </div>
      </article>
      <article>
        <div>
          <h3>Javascript Exercises</h3>
          <div>
            <p>This was my first time using Javascript</p>
            <p>
              It was the first assignment I did for a course in software development.
              The company tdictates the course was Radium Rocket.
            </p>
            <img className={styles.news} src={`${process.env.PUBLIC_URL}/img/projects/js-exercises.png`} alt="js-exercises" />
          </div>
          <a href="https://github.com/AndresCespedes23/cespedes-a-basd-2021-class-4" target="_blank" rel="noreferrer">
            <button type="button">SOURCE CODE</button>
          </a>
          <a href="https://andrescespedes23.github.io/cespedes-a-basd-2021-class-4/" target="_blank" rel="noreferrer">
            <button type="button">LIVE PROJECT</button>
          </a>
        </div>
      </article>
      <article>
        <div>
          <h3>Los Angeles News</h3>
          <div>
            <p>This was my first time using Javascript</p>
            <p>
              It was the first assignment I did for a course in software development.
              The company tdictates the course was Radium Rocket.
            </p>
            <img className={styles.news} src={`${process.env.PUBLIC_URL}/img/projects/la-news.png`} alt="la-news" />
          </div>
          <a href="https://github.com/AndresCespedes23/cespedes-a-basd-2021-class-4-corrections" target="_blank" rel="noreferrer">
            <button type="button">SOURCE CODE</button>
          </a>
          <a href="https://andrescespedes23.github.io/cespedes-a-basd-2021-class-4-corrections/" target="_blank" rel="noreferrer">
            <button type="button">LIVE PROJECT</button>
          </a>
        </div>
      </article>
      <article>
        <div>
          <h3>Moralis Dapp</h3>
          <div>
            <p>This was my first time using Javascript</p>
            <p>
              It was the first assignment I did for a course in software development.
              The company tdictates the course was Radium Rocket.
            </p>
            <img className={styles.news} src={`${process.env.PUBLIC_URL}/img/projects/dapp.png`} alt="dapp" />
          </div>
          <a href="https://github.com/AndresCespedes23/moralis-dapp" target="_blank" rel="noreferrer">
            <button type="button">SOURCE CODE</button>
          </a>
          <a href="https://andrescespedes23.github.io/moralis-dapp/" target="_blank" rel="noreferrer">
            <button type="button">LIVE PROJECT</button>
          </a>
        </div>
      </article>
      <Link to="/">
        <button type="button">Home</button>
      </Link>
      <Footer />
    </section>
  );
}

export default AllProjects;
