import React, { useState } from 'react';
// import WhoIAm from './WhoIAm';
import Projects from './Projects';
import Skills from './Skills';
import './App.css';

export default function App() {
  const [nav, setNav] = useState('none')

  return (
    <div className="App">
      <nav className="mobile">
        <div>
          <a href="#main">Brandon</a>
        </div>
        <div style={{'display': nav}} className="links">
          <a href="#skills">Skills</a>{' | '}
          <a href="#projects">Projects</a>{' | '}
          <a href="#contact">Contact</a>
        </div>
        <div className="hamburger" onClick={() => setNav(nav === 'none' ? "block" : 'none')}><i className="fa fa-bars"></i></div>
        <div className="desktop">
          <a href="#skills">Skills</a>{' | '}
          <a href="#projects">Projects</a>{' | '}
          <a href="#contact">Contact</a>
        </div>
      </nav>
      <header>
        <h1 id="main"> <span className="bouncy">&lt;</span><span className="bouncy">B</span><span className="bouncy">r</span><span className="bouncy">a</span><span className="bouncy">n</span><span className="bouncy">d</span><span className="bouncy">o</span><span className="bouncy">n</span> <span className="bouncy">B</span><span className="bouncy">l</span><span className="bouncy">a</span><span className="bouncy">c</span><span className="bouncy">k</span><span className="bouncy">/</span><span className="bouncy">&gt;</span> </h1>
        <p>Full Stack Web Developer</p>
      </header>
      <main>
        <Skills />
        <Projects />
      <h1 id="contact">Contact</h1>
      <p>Feel free to email me at brandonblack02@gmail.com</p>
      </main>
    </div>
  );
}
