import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Info from './components/Info';
import Footer from './components/Footer';
import Mywork from './components/Mywork';

import './App.css';

function App() {
  return (
    <div>
      <Header />
      <About />
      <Projects />
      <Skills />
      <Mywork />
      <Contact />
      <Info />
      <Footer />
    </div>
  );
}

export default App;

