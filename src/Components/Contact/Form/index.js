/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import styles from './form.module.css';

function Form() {
  return (
    <section>
      <div className={styles.contactMe}>
        <h2 className={styles.title}>Contact me!</h2>
        <form action="https://formsubmit.co/andres.pablo.cespedes@gmail.com" method="POST">
          <div>
            <input placeholder="Name*" type="text" name="name" required />
          </div>
          <div>
            <input type="hidden" name="_subject" value="New Mail !!!" />
          </div>
          <div>
            <input placeholder="Email*" type="email" name="email" required />
          </div>
          <div>
            <textarea placeholder="write your message here*" name="message" maxLength="140" rows="4" cols="50" required />
          </div>
          <button type="submit">Send</button>
        </form>
      </div>
    </section>
  );
}

export default Form;
