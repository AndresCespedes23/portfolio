/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import styles from './header.module.css';

function Header() {
  return (
    <header>
      <div>
        <h1>Andres Cespedes</h1>
      </div>
      <nav>
        <ul className={styles.linkPages}>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
