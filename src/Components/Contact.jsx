import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../Css/Contact.css';

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_x3u35js', 'template_x6fokdj', form.current, 'mhVsvImPiL6A9eM5F')
      .then(
        (result) => {
          console.log(result.text + "123");
          toast.success('Email sent successfully'); 
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          toast.error('Error sending email'); 
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="form-container">
      <h3 className='FooterSubtitle'>Contact</h3>

      <label className="label">Name</label>
      <input type="text" name="from_name" required="true" placeholder="John Doe" className="input-field" />
      <label className="label">Email</label>
      <input type="email" name="email" required="true" placeholder="John@Doe.com"className="input-field" />
      <label className="label" htmlFor="topic">Topic</label>
      <input type="text" name="topic" required="true" placeholder="Colaboration"className="input-field" />
      <label className="label">Message</label>
      <textarea name="message" required="true" placeholder="I would like to..." className="input-field" />
      <input type="submit" value="Send" className="submit-button" />
      <ToastContainer />

    </form>
  );
}
