import React from 'react';
import '../styles/Header.css';

const Header = () => {
    return (
        <header>
            <nav>
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact Us</a>
            </nav>
        </header>
    );
};

export default Header;
