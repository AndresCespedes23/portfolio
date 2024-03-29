/* eslint-disable react/jsx-boolean-value */
/* eslint-disable quotes */
/* eslint-disable react/jsx-filename-extension */
import React from "react";
import Header from "../Shared/Header";
import SocialMedia from "../Shared/SocialMedia";
import Form from "./Form";
import styles from "./contact.module.css";
import Footer from "../Shared/Footer";
import MobileNav from "../Shared/MobileNavBar";

function Contact() {
  return (
    <>
      <Header />
      <section className={styles.main}>
        <Form />
        <SocialMedia />
        <Footer />
        <MobileNav />
      </section>
    </>
  );
}

export default Contact;
