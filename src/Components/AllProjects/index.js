/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import NavBar from '../Shared/DesktopNavBar';
import ProjectsBtns from './ProjectsButtons';
import styles from './all-projects.module.css';
import Loading from '../Shared/Loading';

function AllProjects() {
  return (
    <>
      <section className={styles.main}>
        <article>
          <h3>Bennu</h3>
          <div className={styles.project}>
            <div className={styles.imgContainer}>
              <img className={styles.news} src={`${process.env.PUBLIC_URL}/img/projects/bennu.png`} alt="bennu" />
            </div>
            <div className={styles.projectDescription}>
              <p>A responsive landing website for an NFT collection</p>
              <p>
                This was my first job for a startup.
                I took ownership of the whole project.
              </p>
              <ProjectsBtns />
            </div>
          </div>
        </article>
        <article>
          <h3>Crypto Tracker</h3>
          <div className={styles.project}>
            <div className={styles.imgContainer}>
              <img className={styles.news} src={`${process.env.PUBLIC_URL}/img/projects/crypto.png`} alt="crypto-tracker" />
            </div>
            <div className={styles.projectDescription}>
              <p>A web application to track cryptocurrency prices</p>
              <p>
                On the header, there is a dropdown which allows you to view
                the prices in USD dollars or in ARG pesos
              </p>
              <ProjectsBtns />
            </div>
          </div>
        </article>
        <article>
          <h3>Mindset</h3>
          <div className={styles.project}>
            <div className={styles.imgContainer}>
              <img className={styles.news} src={`${process.env.PUBLIC_URL}/img/projects/mindset.png`} alt="mindset" />
            </div>
            <div className={styles.projectDescription}>
              <p>A web application that facilites job interviews</p>
              <p>
                This was the final project of a intensively course
                I go through dictate by company named Radium Rocket
              </p>
              <p>
                I worked along with a team of 8 people
                and we developed the app using the M.E.R.N stack.
              </p>
              <ProjectsBtns />
            </div>
          </div>
        </article>
        <article>
          <div>
            <h3>Carpincho News</h3>
            <div className={styles.project}>
              <div className={styles.imgContainer}>
                <img className={styles.news} src={`${process.env.PUBLIC_URL}/img/projects/carpincho-news.png`} alt="carpincho-news" />
              </div>
              <div className={styles.projectDescription}>
                <p>This was my first time doing a responsive website</p>
                <p>
                  It was the first assignment I did for a course in software development.
                  The company tdictates the course was Radium Rocket.
                </p>
                <ProjectsBtns />
              </div>
            </div>
          </div>
        </article>
        <article>
          <div>
            <h3>Javascript Exercises</h3>
            <div className={styles.project}>
              <div className={styles.imgContainer}>
                <img className={styles.news} src={`${process.env.PUBLIC_URL}/img/projects/js-exercises.png`} alt="js-exercises" />
              </div>
              <div className={styles.projectDescription}>
                <p>This was my first time using Javascript</p>
                <p>
                  It was the first assignment I did for a course in software development.
                  The company tdictates the course was Radium Rocket.
                </p>
                <ProjectsBtns />
              </div>
            </div>
          </div>
        </article>
        <article>
          <div>
            <h3>Los Angeles News</h3>
            <div className={styles.project}>
              <div className={styles.imgContainer}>
                <img className={styles.news} src={`${process.env.PUBLIC_URL}/img/projects/la-news.png`} alt="la-news" />
              </div>
              <div className={styles.projectDescription}>
                <p>This was my first time using Javascript</p>
                <p>
                  It was the first assignment I did for a course in software development.
                  The company tdictates the course was Radium Rocket.
                </p>
                <ProjectsBtns />
              </div>
            </div>
          </div>
        </article>
        <article>
          <div>
            <h3>News</h3>
            <div className={styles.project}>
              <div className={styles.imgContainer}>
                <img className={styles.news} src={`${process.env.PUBLIC_URL}/img/projects/first-html.png`} alt="crypto-tracker" />
              </div>
              <div className={styles.projectDescription}>
                <p>This was my first work</p>
                <p>
                  It was the first assignment I did for a course in software development.
                  The company tdictates the course was Radium Rocket.
                </p>
                <ProjectsBtns />
              </div>
            </div>
          </div>
        </article>
        <article>
          <div>
            <h3>Moralis Dapp</h3>
            <div className={styles.project}>
              <div className={styles.imgContainer}>
                <img className={styles.news} src={`${process.env.PUBLIC_URL}/img/projects/dapp.png`} alt="dapp" />
              </div>
              <div className={styles.projectDescription}>
                <p>This was my first time using Javascript</p>
                <p>
                  It was the first assignment I did for a course in software development.
                  The company tdictates the course was Radium Rocket.
                </p>
                <ProjectsBtns />
              </div>
            </div>
          </div>
        </article>
      </section>
      <NavBar />
      <Loading />
    </>
  );
}

export default AllProjects;
