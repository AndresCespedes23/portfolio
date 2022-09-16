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
          🏠
        </Link>
        <Link className={styles.navLinks} to="/portfolio">
          💼
        </Link>
        <Link className={styles.navLinks} to="/contact">
          💬
        </Link>
      </ul>
    </nav>
  );
}

export default MobileNav;
