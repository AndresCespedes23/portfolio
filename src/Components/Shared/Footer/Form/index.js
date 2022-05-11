/* eslint-disable react/jsx-filename-extension */
import React from 'react';

function Form() {
  return (
    <form>
      <h2>Contact Me</h2>
      <input type="text" placeholder="Name*" required />
      <input type="email" placeholder="Email*" required />
      <input type="text" placeholder="Message*" required />
      <button type="submit">SEND</button>
    </form>
  );
}

export default Form;
