/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import NavBar from '../Shared/DesktopNavBar';
import styles from './all-projects.module.css';

function AllProjects() {
  return (
    <>
      <section className={styles.main}>
        <article>
          <h3>Bennu</h3>
          <div>
            <img className={styles.news} src={`${process.env.PUBLIC_URL}/img/projects/bennu.png`} alt="bennu" />
            <p>A responsive landing website for an NFT collection</p>
            <p>
              This was my first job for a startup.
              I took ownership of the whole project.
            </p>
          </div>
          <a href="https://github.com/AndresCespedes23/bennu-app" target="_blank" rel="noreferrer">
            <button type="button">SOURCE CODE</button>
          </a>
          <a href="https://bennu-app.vercel.app/" target="_blank" rel="noreferrer">
            <button type="button">LIVE PROJECT</button>
          </a>
        </article>
        <article>
          <h3>Crypto Tracker</h3>
          <div>
            <img className={styles.news} src={`${process.env.PUBLIC_URL}/img/projects/crypto.png`} alt="crypto-tracker" />
            <p>A web application to track cryptocurrency prices</p>
            <p>
              On the header, there is a dropdown which allows you to view
              the prices in USD dollars or in ARG pesos
            </p>
          </div>
          <a href="https://github.com/AndresCespedes23/crypto-currency-tracker" target="_blank" rel="noreferrer">
            <button type="button">SOURCE CODE</button>
          </a>
          <a href="https://crypto-currency-tracker-gray.vercel.app/" target="_blank" rel="noreferrer">
            <button type="button">LIVE PROJECT</button>
          </a>
        </article>
        <article>
          <h3>Mindset</h3>
          <div>
            <img className={styles.news} src={`${process.env.PUBLIC_URL}/img/projects/mindset.png`} alt="mindset" />
            <p>A web application that facilites job interviews</p>
            <p>
              This was the final project of a intensively course
              I go through dictate by company named Radium Rocket
            </p>
            <p>
              I worked along with a team of 8 people
              and we developed the app using the M.E.R.N stack.
            </p>
          </div>
          <a href="https://github.com/AndresCespedes23/Dami-MindSet-app" target="_blank" rel="noreferrer">
            <button type="button">SOURCE CODE</button>
          </a>
          <a href="https://dami-mind-set-app.vercel.app/postulants" target="_blank" rel="noreferrer">
            <button type="button">LIVE PROJECT</button>
          </a>
        </article>
        <article>
          <div>
            <h3>News</h3>
            <div>
              <img className={styles.news} src={`${process.env.PUBLIC_URL}/img/projects/first-html.png`} alt="crypto-tracker" />
              <p>This was my first work</p>
              <p>
                It was the first assignment I did for a course in software development.
                The company tdictates the course was Radium Rocket.
              </p>
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
              <img className={styles.news} src={`${process.env.PUBLIC_URL}/img/projects/carpincho-news.png`} alt="carpincho-news" />
              <p>This was my first time doing a responsive website</p>
              <p>
                It was the first assignment I did for a course in software development.
                The company tdictates the course was Radium Rocket.
              </p>
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
              <img className={styles.news} src={`${process.env.PUBLIC_URL}/img/projects/js-exercises.png`} alt="js-exercises" />
              <p>This was my first time using Javascript</p>
              <p>
                It was the first assignment I did for a course in software development.
                The company tdictates the course was Radium Rocket.
              </p>
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
              <img className={styles.news} src={`${process.env.PUBLIC_URL}/img/projects/la-news.png`} alt="la-news" />
              <p>This was my first time using Javascript</p>
              <p>
                It was the first assignment I did for a course in software development.
                The company tdictates the course was Radium Rocket.
              </p>
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
              <img className={styles.news} src={`${process.env.PUBLIC_URL}/img/projects/dapp.png`} alt="dapp" />
              <p>This was my first time using Javascript</p>
              <p>
                It was the first assignment I did for a course in software development.
                The company tdictates the course was Radium Rocket.
              </p>
            </div>
            <a href="https://github.com/AndresCespedes23/moralis-dapp" target="_blank" rel="noreferrer">
              <button type="button">SOURCE CODE</button>
            </a>
            <a href="https://andrescespedes23.github.io/moralis-dapp/" target="_blank" rel="noreferrer">
              <button type="button">LIVE PROJECT</button>
            </a>
          </div>
        </article>
      </section>
      <NavBar />
    </>
  );
}

export default AllProjects;
