/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import NavBar from '../Shared/DesktopNavBar';
import SocialMedia from '../Shared/SocialMedia';
import Form from './Form';
import styles from './contact.module.css';

function Contact() {
  return (
    <>
      <section className={styles.main}>
        <Form />
        <SocialMedia />
      </section>
      <NavBar />
    </>
  );
}

export default Contact;
