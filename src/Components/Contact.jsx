import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../Css/Contact.css';

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_x3u35js', 'template_x6fokdj', form.current, 'mhVsvImPiL6A9eM5F')
      .then(
        (result) => {
          console.log(result.text);
          // Clear the form fields after successful submission
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="form-container">
      <label className="label">Name</label>
      <input type="text" name="from_name" className="input-field" />
      <label className="label">Email</label>
      <input type="email" name="email" className="input-field" />
      <label  className="label" htmlFor="topic">Topic</label>
      <input type="text" name="topic" className="input-field" />
      <label className="label">Message</label>
      <textarea name="message" className="input-field" />
      <input type="submit" value="Send" className="submit-button" />
    </form>
  );
}