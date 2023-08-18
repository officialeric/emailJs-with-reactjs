import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function App(){

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_l308psi', 'template_sip9hiq', form.current, 'PM8Tl3yTTHSgEezcq')
      .then((result) => {
          alert(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  

return (
  <form ref={form} onSubmit={sendEmail}>
    <label>Name</label>
    <input type="text" name="user_name" />
    <label>Email</label>
    <input type="email" name="user_email" />
    <label>Message</label>
    <textarea name="message" />
    <input type="submit" value="Send" />
  </form>
);
}

export default App;