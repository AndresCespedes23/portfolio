/* eslint-disable react/jsx-filename-extension */
import React from 'react';

function Form() {
  return (
    <>
      <h2>Contact Me</h2>
      <form action="https://formsubmit.co/andres.pablo.cespedes@gmail.com" method="POST">
        <input placeholder="Name*" type="text" name="name" required />
        <input type="hidden" name="_subject" value="New Mail !!!" />
        <input placeholder="Email*" type="email" name="email" required />
        <textarea placeholder="write your message here*" name="message" required />
        <button type="submit">Send</button>
      </form>
    </>
  );
}

export default Form;
