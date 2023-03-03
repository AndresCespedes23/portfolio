/* eslint-disable react/jsx-boolean-value */
/* eslint-disable quotes */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-filename-extension */
import React from "react";
import Footer from "../Shared/Footer";
import Header from "../Shared/Header";
import MobileNav from "../Shared/MobileNavBar";
import SocialMedia from "../Shared/SocialMedia";
import styles from "./home.module.css";

function Home() {
  return (
    <>
      <Header />
      <section className={styles.main}>
        <div className={styles.presentation}>
          <div className={styles.homeTitles}>
            <h1 className={styles.homeTitle}>👋 Hi, I'm Andrés Céspedes.</h1>
            <h2 className={styles.homeSubtitle}>
              👨‍💻 A fullstack software developer from Argentina.
            </h2>
          </div>
          <img
            className={styles.profile}
            src={`${process.env.PUBLIC_URL}/img/pro1.jpeg`}
            alt="andres-cespedes"
          />
          <div className={styles.emoji}>🚀</div>
          <p>
            🔨🎨 I enjoy solving complex problems and craft astonishing apps.
          </p>
        </div>
        <SocialMedia />
        <Footer />
        <MobileNav />
      </section>
    </>
  );
}

export default Home;
