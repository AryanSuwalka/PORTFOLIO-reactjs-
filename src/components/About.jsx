
import React from 'react';
import '../styles/About.css';
import myimage from '../assests/_MG_0031-removebg-preview.png';

const About = () => {
    return (
        <section id="about" className="intro_name section">
            <div className="yellow">
                <img src={myimage} alt="Aryan Suwalka" />
            </div>
            <div className="blue">
                <div className="intro_text">
                    <h1>Aryan Suwalka</h1>
                    <h2>Merging creativity and technology to shape the online experiences of tomorrow.</h2>
                    <p>Crafting future-forward online experiences through creative design and innovative technology, I ensure brands stand out and engage audiences effectively.</p>
                    <p><a href="#about">Read More....</a></p>
                </div>
            </div>
        </section>
    );
};

export default About;
