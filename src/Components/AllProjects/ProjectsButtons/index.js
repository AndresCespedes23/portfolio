/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import styles from './projects-buttons.module.css';

function ProjectsBtns() {
  return (
    <div className={styles.btns}>
      <a href="https://github.com/AndresCespedes23/bennu-app" target="_blank" rel="noreferrer">
        <button type="button">SOURCE CODE</button>
      </a>
      <a href="https://bennu-app.vercel.app/" target="_blank" rel="noreferrer">
        <button type="button">LIVE PROJECT</button>
      </a>
    </div>
  );
}

export default ProjectsBtns;
