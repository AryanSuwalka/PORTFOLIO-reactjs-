import React from 'react';
import '../styles/Info.css'; // Ensure this path matches your project's structure

import logo from '../assests/logo.png';
import phoneIcon from '../assests/phone.svg';
import mailIcon from '../assests/mail.svg';
import fbIcon from '../assests/fb.svg';
import instaIcon from '../assests/insta.svg';
import xIcon from '../assests/x.svg';
import linkedinIcon from '../assests/linkdein.svg';


const Info = () => (
  <section className="info_section">
    <img src={logo} alt="logo photo" />
    <div>
      <h3>Information</h3>
      <ul>
        <li>About Us</li>
        <li>Testimonials</li>
        <li>Blog</li>
        <li>Events</li>
        <li>News</li>
      </ul>
    </div>
    <div>
      <h3>Helpful Links</h3>
      <ul>
        <li>Services</li>
        <li>Testimonials</li>
        <li>Terms & Conditions</li>
        <li>Privacy Policy</li>
      </ul>
    </div>
    <div>
      <h3>Contact Us</h3>
      <ul>
        <li><img src={phoneIcon} alt="phone icon" /> +916376932419</li>
        <li><img src={mailIcon} alt="mail icon" /> aryansuwalka302@gmail.com</li>
        <li>
          <img src={fbIcon} alt="facebook icon" />
          <img src={instaIcon} alt="instagram icon" />
          <img src={xIcon} alt="x icon" />
          <img src={linkedinIcon} alt="linkedin icon" />
        </li>
      </ul>
    </div>
  </section>
);

export default Info;
