/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useState } from 'react';
import Projects from './Projects';
import Skills from './Skills';
import './App.css';

export default function App() {
  const [nav, setNav] = useState('none')

  return (
    <div className="App">
      <nav className="mobile">
        <div>
          <a href="#main"><span className="nav-name">Brandon</span></a>
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
        <div>
          <h1 className="name" id="main"> <span className="bouncy">&lt;</span><span className="bouncy">B</span><span className="bouncy">r</span><span className="bouncy">a</span><span className="bouncy">n</span><span className="bouncy">d</span><span className="bouncy">o</span><span className="bouncy">n</span> <span className="bouncy">B</span><span className="bouncy">l</span><span className="bouncy">a</span><span className="bouncy">c</span><span className="bouncy">k</span><span className="bouncy">/</span><span className="bouncy">&gt;</span> </h1>
        </div>
          <h4>A Seattle-based Full Stack Web Developer</h4>
      </header>
      <main>
        <Skills />
        <Projects />
        <div className="contact">
          <h1 id="contact">Contact</h1>
          <hr />
          <p>Feel free to email me at brandonblack02@gmail.com</p>
          <div className="icons">
            <a href="https://twitter.com/brandonblack02" className="fa fa-twitter" target="_blank" rel="noopener noreferrer"></a>
            <a href="https://www.linkedin.com/in/brandonblack02/" className="fa fa-linkedin" target="_blank" rel="noopener noreferrer"></a>
            <a href="https://github.com/Brandon205" className="fa fa-github" target="_blank" rel="noopener noreferrer"></a>
          </div>
        </div>
      </main>
    </div>
  );
}
