import React, { useState } from 'react';
import Projects from './Projects';
import Skills from './Skills';
import './App.css';

export default function App() {
  const [top, setTop] = useState(false)

  const checkScroll = () => {
    if (!top && window.pageYOffset > 850) {
      setTop(true)
    } else if (top && window.pageYOffset <= 850) {
      setTop(false)
    }
  }

  const scrollTop = () => {
    window.scrollTo({top: 0, behavior: "smooth"})
  }

  window.addEventListener('scroll', checkScroll)

  return (
    <div className="App">
      <header id="main">
        <div>
          <h1 className="name"> <span className="bouncy">&lt;</span><span className="bouncy">B</span><span className="bouncy">r</span><span className="bouncy">a</span><span className="bouncy">n</span><span className="bouncy">d</span><span className="bouncy">o</span><span className="bouncy">n</span> <span className="bouncy">B</span><span className="bouncy">l</span><span className="bouncy">a</span><span className="bouncy">c</span><span className="bouncy">k</span><span className="bouncy">/</span><span className="bouncy">&gt;</span> </h1>
        </div>
        <h4>A Seattle-based Full Stack Web Developer</h4>
        <nav>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
      <button style={{display: top ? "block" : "none"}} onClick={scrollTop} id="back-to-top" title="Go to top">&nbsp;&uarr;&nbsp;</button>
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
