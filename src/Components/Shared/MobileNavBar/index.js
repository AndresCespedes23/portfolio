/* eslint-disable quotes */
/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { Link } from "react-router-dom";
import styles from "./mobile-nav.module.css";

function MobileNav() {
  return (
    <nav className={styles.navbar}>
      <ul>
        <Link className={styles.navLinks} to="/">
          <img
            className={styles.navIcon}
            src={`${process.env.PUBLIC_URL}/img/house.png`}
            alt="house"
          />
        </Link>
        <Link className={styles.navLinks} to="/portfolio">
          <img
            className={styles.navIcon}
            src={`${process.env.PUBLIC_URL}/img/portfolio (1).png`}
            alt="portfolio"
          />
        </Link>
        <Link className={styles.navLinks} to="/contact">
          <img
            className={styles.navIcon}
            src={`${process.env.PUBLIC_URL}/img/paper-plane (1).png`}
            alt="paper-plane"
          />
        </Link>
      </ul>
    </nav>
  );
}

export default MobileNav;
