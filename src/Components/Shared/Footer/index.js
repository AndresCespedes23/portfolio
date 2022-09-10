/* eslint-disable quotes */
/* eslint-disable react/jsx-filename-extension */
import React from "react";
import styles from "./footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <img
        className={styles.logo}
        src={`${process.env.PUBLIC_URL}/img/svg/hollowed-boxes.svg`}
        alt="tintin rocket"
      />
      <p className={styles.copyright}> Copyright © 2022 Andrés Céspedes. All rights reserved.</p>
      <img
        className={styles.logo}
        src={`${process.env.PUBLIC_URL}/img/svg/hollowed-boxes.svg`}
        alt="tintin rocket"
      />
    </footer>
  );
}

export default Footer;
