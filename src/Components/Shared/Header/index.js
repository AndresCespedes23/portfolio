/* eslint-disable quotes */
/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { Link } from "react-router-dom";
import styles from "./header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <img
        className={styles.logo}
        src={`${process.env.PUBLIC_URL}/img/svg/tintin-rocket.png`}
        alt="tintin rocket"
      />
      <nav>
        <ul>
          <Link className={styles.navLinks} to="/">
            Home
          </Link>
          <Link className={styles.navLinks} to="/portfolio">
            Portfolio
          </Link>
          <Link className={styles.navLinks} to="/contact">
            Contact
          </Link>
        </ul>
      </nav>
    </header>
  );
}

export default Header;