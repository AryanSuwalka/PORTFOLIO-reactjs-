import React from 'react';
import '../styles/contact.css';
// Import the image
import formImage from '../assests/59-removebg-preview.png';


const Contact = () => {
    return (
      <section className="form_section">
        <img src={formImage} alt="Form Decoration" />
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit eius, adipisci blanditiis temporibus dolore,
          eligendi nulla aut assumenda atque cum culpa repellendus inventore quos quidem. Incidunt laboriosam odio labore fuga!
        </p>
        <div></div>
        <form action="">
          <label htmlFor="name">Full name:</label>
          <input type="text" name="name" id="name" placeholder="Enter your Name" required />
          <label htmlFor="mail">Email:</label>
          <input type="email" name="mail" id="mail" placeholder="Enter your Email" required />
          <label htmlFor="num">Phone Number:</label>
          <input type="number" name="num" id="num" placeholder="Enter your Phone Number" required />
          <label htmlFor="msg">Message:</label>
          <textarea name="message" id="msg" placeholder="Enter your Message"></textarea>
          <button type="submit">Submit</button>
        </form>
      </section>
    );
  };

export default Contact;









