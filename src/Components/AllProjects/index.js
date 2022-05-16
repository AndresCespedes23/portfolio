/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import NavBar from '../Shared/DesktopNavBar';
import ProjectsBtns from './ProjectsButtons';
import styles from './all-projects.module.css';

function AllProjects() {
  return (
    <>
      <section className={styles.main}>
        <div className={styles.customShapeDividerTop1652667296}>
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className={styles.shapeFill} />
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className={styles.shapeFill} />
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className={styles.shapeFill} />
          </svg>
        </div>
        <article>
          <h3 className={styles.title}>Bennu</h3>
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
        <div className={styles.customShapeDividerBottom1652668866}>
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className={styles.shapeFill} />
          </svg>
        </div>
        <div className={styles.customShapeDividerTop1652668665}>
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className={styles.shapeFill} />
          </svg>
        </div>
        <article>
          <h3 className={styles.title}>Crypto Tracker</h3>
          <div className={styles.project}>
            <div className={styles.projectDescription}>
              <p>A web application to track cryptocurrency prices</p>
              <p>
                On the header, there is a dropdown which allows you to view
                the prices in USD dollars or in ARG pesos
              </p>
              <ProjectsBtns />
            </div>
            <div className={styles.imgContainer}>
              <img className={styles.news} src={`${process.env.PUBLIC_URL}/img/projects/crypto.png`} alt="crypto-tracker" />
            </div>
          </div>
        </article>
        <div className={styles.customShapeDividerBottom1652668866}>
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className={styles.shapeFill} />
          </svg>
        </div>
        <div className={styles.customShapeDividerTop1652668665}>
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className={styles.shapeFill} />
          </svg>
        </div>
        <article>
          <h3 className={styles.title}>Mindset</h3>
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
        <div className={styles.customShapeDividerBottom1652668866}>
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className={styles.shapeFill} />
          </svg>
        </div>
        <div className={styles.customShapeDividerTop1652668665}>
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className={styles.shapeFill} />
          </svg>
        </div>
        <article>
          <div>
            <h3 className={styles.title}>Carpincho News</h3>
            <div className={styles.project}>
              <div className={styles.projectDescription}>
                <p>This was my first time doing a responsive website</p>
                <p>
                  It was the first assignment I did for a course in software development.
                  The company tdictates the course was Radium Rocket.
                </p>
                <ProjectsBtns />
              </div>
              <div className={styles.imgContainer}>
                <img className={styles.news} src={`${process.env.PUBLIC_URL}/img/projects/carpincho-news.png`} alt="carpincho-news" />
              </div>
            </div>
          </div>
        </article>
        <div className={styles.customShapeDividerBottom1652668866}>
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className={styles.shapeFill} />
          </svg>
        </div>
        <div className={styles.customShapeDividerTop1652668665}>
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className={styles.shapeFill} />
          </svg>
        </div>
        <article>
          <div>
            <h3 className={styles.title}>Javascript Exercises</h3>
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
        <div className={styles.customShapeDividerBottom1652668866}>
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className={styles.shapeFill} />
          </svg>
        </div>
        <div className={styles.customShapeDividerTop1652668665}>
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className={styles.shapeFill} />
          </svg>
        </div>
        <article>
          <div>
            <h3 className={styles.title}>Los Angeles News</h3>
            <div className={styles.project}>
              <div className={styles.projectDescription}>
                <p>This was my first time using Javascript</p>
                <p>
                  It was the first assignment I did for a course in software development.
                  The company tdictates the course was Radium Rocket.
                </p>
                <ProjectsBtns />
              </div>
              <div className={styles.imgContainer}>
                <img className={styles.news} src={`${process.env.PUBLIC_URL}/img/projects/la-news.png`} alt="la-news" />
              </div>
            </div>
          </div>
        </article>
        <div className={styles.customShapeDividerBottom1652668866}>
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className={styles.shapeFill} />
          </svg>
        </div>
        <div className={styles.customShapeDividerTop1652668665}>
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className={styles.shapeFill} />
          </svg>
        </div>
        <article>
          <div>
            <h3 className={styles.title}>News</h3>
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
        <div className={styles.customShapeDividerBottom1652668866}>
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className={styles.shapeFill} />
          </svg>
        </div>
        <div className={styles.customShapeDividerTop1652668665}>
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className={styles.shapeFill} />
          </svg>
        </div>
        <article>
          <div>
            <h3 className={styles.title}>Moralis Dapp</h3>
            <div className={styles.project}>
              <div className={styles.projectDescription}>
                <p>This was my first time using Javascript</p>
                <p>
                  It was the first assignment I did for a course in software development.
                  The company tdictates the course was Radium Rocket.
                </p>
                <ProjectsBtns />
              </div>
              <div className={styles.imgContainer}>
                <img className={styles.news} src={`${process.env.PUBLIC_URL}/img/projects/dapp.png`} alt="dapp" />
              </div>
            </div>
          </div>
        </article>
        <div className={styles.customShapeDividerBottom1652666792}>
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className={styles.shapeFill} />
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className={styles.shapeFill} />
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className={styles.shapeFill} />
          </svg>
        </div>
      </section>
      <NavBar />
    </>
  );
}

export default AllProjects;
