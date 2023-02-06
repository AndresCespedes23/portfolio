/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import styles from './social-media.module.css';

function SocialMedia() {
  return (
    <div className={styles.contact}>
      <div className={styles.contactIcons}>
        <a href="https://github.com/AndresCespedes23" target="_blank" rel="noreferrer">
          <img className={styles.icons} src={`${process.env.PUBLIC_URL}/img/github.png`} alt="github" />
        </a>
      </div>
      <div className={styles.contactIcons}>
        <a href="https://www.linkedin.com/in/andres-pablo-cespedes/" target="_blank" rel="noreferrer">
          <img className={styles.icons} src={`${process.env.PUBLIC_URL}/img/linkedin.png`} alt="linkedin" />
        </a>
      </div>
    </div>
  );
}

export default SocialMedia;
