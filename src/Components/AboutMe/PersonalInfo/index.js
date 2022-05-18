/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
import React from 'react';
import styles from './personal-info.module.css';

function PersonalInfo({
  emoji,
  title,
  info,
}) {
  return (
    <div className={styles.main}>
      <div className={styles.emoji}>{emoji}</div>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.info}>{info}</p>
    </div>
  );
}

export default PersonalInfo;
