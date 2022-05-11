/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Form from './Form';

function Footer() {
  return (
    <section>
      <div>
        <a href="https://github.com/AndresCespedes23" target="_blank" rel="noreferrer">
          <img src={`${process.env.PUBLIC_URL}/img/github.png`} alt="github" />
          <p>Github</p>
        </a>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/andres-pablo-cespedes/" target="_blank" rel="noreferrer">
          <img src={`${process.env.PUBLIC_URL}/img/linkedin.png`} alt="linkedin" />
          <p>LinkedIn</p>
        </a>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/andres-pablo-cespedes/" target="_blank" rel="noreferrer">
          <img src={`${process.env.PUBLIC_URL}/img/email.png`} alt="mail" />
          <p>andres.pablo.cespedes@gmail.com</p>
        </a>
      </div>
      <Form />
    </section>
  );
}

export default Footer;
