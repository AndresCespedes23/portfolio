/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import NavBar from '../Shared/DesktopNavBar';
import { personalInfo } from './data';
import PersonalInfo from './PersonalInfo';
import styles from './about.module.css';

function AboutMe() {
  return (
    <>
      <div className={styles.main}>
        <h2 className={styles.title}>🙋‍♂️ About Me 🙋‍♂️</h2>
        <div>
          {personalInfo?.map((personal) => (
            <PersonalInfo key={personal.title} {...personal} />
          ))}
        </div>
      </div>
      <NavBar />
    </>
  );
}

export default AboutMe;
