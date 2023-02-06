/* eslint-disable quotes */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-filename-extension */
import React from "react";
import styles from "./form.module.css";

function Form() {
  return (
    <section>
      <div className={styles.contactMe}>
        <h2 className={styles.title}>💬 Contact me!</h2>
        <form
          className={styles.form}
          action="https://formsubmit.co/andres.pablo.cespedes@gmail.com"
          method="POST"
        >
          <div className={styles.info}>
            <label htmlFor="name">Name</label>
            <input
              id="name"
              placeholder="Write your name here"
              type="text"
              name="name"
              required
            />
          </div>
          <div>
            <input type="hidden" name="_subject" value="New Mail !!!" />
          </div>
          <div className={styles.info}>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              placeholder="Write your email here"
              type="email"
              name="email"
              required
            />
          </div>
          <div className={styles.info}>
            <label>Please, send a message!</label>
            <textarea
              placeholder="280 characters max"
              name="message"
              maxLength="280"
              rows="7"
              cols="24"
              required
            />
          </div>
          <button className={styles.sendBtn} type="submit">
            📨 Send 📨
          </button>
        </form>
      </div>
    </section>
  );
}

export default Form;
