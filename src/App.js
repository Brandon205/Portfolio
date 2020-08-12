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
  
  const bounce = (e) => {
    let letter = e.target
    if (letter.classList.contains("rubberBand")) {
      letter.classList.remove("rubberBand")
      letter.classList.add("rubberBand")
    } else {
      letter.classList.add("rubberBand")
    }
    setTimeout(() => {
      letter.classList.remove("rubberBand")
    }, 1500)
  }

  window.addEventListener('scroll', checkScroll)

  return (
    <div className="App">
      <header id="main">
        <div>
          <h1 className="name"> <span className="bouncy" onMouseEnter={(e) => bounce(e)}>&lt;</span><span className="bouncy" onMouseEnter={(e) => bounce(e)}>B</span><span className="bouncy" onMouseEnter={(e) => bounce(e)}>r</span><span className="bouncy" onMouseEnter={(e) => bounce(e)}>a</span><span className="bouncy" onMouseEnter={(e) => bounce(e)}>n</span><span className="bouncy" onMouseEnter={(e) => bounce(e)}>d</span><span className="bouncy" onMouseEnter={(e) => bounce(e)}>o</span><span className="bouncy" onMouseEnter={(e) => bounce(e)}>n</span> <span className="bouncy" onMouseEnter={(e) => bounce(e)}>B</span><span className="bouncy" onMouseEnter={(e) => bounce(e)}>l</span><span className="bouncy" onMouseEnter={(e) => bounce(e)}>a</span><span className="bouncy" onMouseEnter={(e) => bounce(e)}>c</span><span className="bouncy" onMouseEnter={(e) => bounce(e)}>k</span><span className="bouncy" onMouseEnter={(e) => bounce(e)}>/</span><span className="bouncy" onMouseEnter={(e) => bounce(e)}>&gt;</span> </h1>
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
          <p>Feel free to send me a message on LinkedIn or email me at brandonblack02@gmail.com</p>
          <div className="icons">
            <a href="https://twitter.com/brandonblack02" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
            <a href="https://www.linkedin.com/in/brandonblack02/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
            <a href="https://github.com/Brandon205" target="_blank" rel="noopener noreferrer" aria-label="Github"><i className="fab fa-github-square social-icons"></i></a>
          </div>
        </div>
      </main>
    </div>
  );
}
