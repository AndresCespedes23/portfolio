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
            <label className={styles.inputTitle} htmlFor="name">
              Name
            </label>
            <input id="name" type="text" name="name" required />
          </div>
          <div>
            <input type="hidden" name="_subject" value="New Mail !!!" />
          </div>
          <div className={styles.info}>
            <label className={styles.inputTitle} htmlFor="email">
              Email
            </label>
            <input id="email" type="email" name="email" required />
          </div>
          <div className={styles.info}>
            <label className={styles.inputTitle}>Please, send a message!</label>
            <textarea
              name="message"
              maxLength="500"
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
