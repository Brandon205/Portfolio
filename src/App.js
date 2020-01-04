/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useState } from 'react';
import Projects from './Projects';
import Skills from './Skills';
import ReactGA from 'react-ga';
import './App.css';

const trackingId = "UA-118954435-2";
ReactGA.initialize(trackingId);

export default function App() {
  const [nav, setNav] = useState('none')

  return (
    <div className="App">
      <nav className="mobile" id="main">
        <div className="nav-name-div">
          <a href="#main"><span className="nav-name">Brandon</span></a>
        </div>
        <div style={{'display': nav}} className="links">
          <a href="#skills" onClick={() => setNav(nav === 'none' ? "inline" : 'none')}>Skills</a>
          <a href="#projects" onClick={() => setNav(nav === 'none' ? "inline" : 'none')}>Projects</a>
          <a href="#contact" onClick={() => setNav(nav === 'none' ? "inline" : 'none')}>Contact</a>
        </div>
        <div className="hamburger" onClick={() => setNav(nav === 'none' ? "inline" : 'none')}><i className="fa fa-bars"></i></div>
        <div className="desktop">
          <a href="#skills">Skills</a>&nbsp;&nbsp;&nbsp;&nbsp;
          <a href="#projects">Projects</a>&nbsp;&nbsp;&nbsp;&nbsp;
          <a href="#contact">Contact</a>
        </div>
      </nav>
      <header>
        <div>
          <h1 className="name"> <span className="bouncy">&lt;</span><span className="bouncy">B</span><span className="bouncy">r</span><span className="bouncy">a</span><span className="bouncy">n</span><span className="bouncy">d</span><span className="bouncy">o</span><span className="bouncy">n</span> <span className="bouncy">B</span><span className="bouncy">l</span><span className="bouncy">a</span><span className="bouncy">c</span><span className="bouncy">k</span><span className="bouncy">/</span><span className="bouncy">&gt;</span> </h1>
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
            <a href="https://twitter.com/brandonblack02" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
            <a href="https://www.linkedin.com/in/brandonblack02/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
            <a href="https://github.com/Brandon205" target="_blank" rel="noopener noreferrer"><i className="fab fa-github-square social-icons"></i></a>
          </div>
        </div>
      </main>
    </div>
  );
}
