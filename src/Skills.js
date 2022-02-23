import React, { useState, useEffect } from 'react';
import Projects from './Projects';
import mongoDB from './img/mongodb-icon.svg';
import graphQL from './img/graphql-icon.svg';
import nodeJS from './img/nodejs-icon.svg';
import resume from './img/Resume.pdf';

export default function Skills() {
  const [top, setTop] = useState(false)

  useEffect(() => {
    let elementArr = Array.from(document.querySelectorAll('span'))
    elementArr.forEach((element) => {
      bounce(element)
    })
  }, [])


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

  const bounce = (e) => {
    let letter;
    if (!e.target) {
      letter = e
    } else {
      letter = e.target
    }

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

  return (
    <div>
      <div className="App">
          <header id="main">
            <div id="nameContainer">
              <h1 className="name"> <span className="bouncy" onMouseEnter={(e) => bounce(e)}>&lt;</span><span className="bouncy" onMouseEnter={(e) => bounce(e)}>B</span><span className="bouncy" onMouseEnter={(e) => bounce(e)}>R</span><span className="bouncy" onMouseEnter={(e) => bounce(e)}>A</span><span className="bouncy" onMouseEnter={(e) => bounce(e)}>N</span><span className="bouncy" onMouseEnter={(e) => bounce(e)}>D</span><span className="bouncy" onMouseEnter={(e) => bounce(e)}>O</span><span className="bouncy" onMouseEnter={(e) => bounce(e)}>N</span> <span className="bouncy" onMouseEnter={(e) => bounce(e)}>B</span><span className="bouncy" onMouseEnter={(e) => bounce(e)}>L</span><span className="bouncy" onMouseEnter={(e) => bounce(e)}>A</span><span className="bouncy" onMouseEnter={(e) => bounce(e)}>C</span><span className="bouncy" onMouseEnter={(e) => bounce(e)}>K</span><span className="bouncy" onMouseEnter={(e) => bounce(e)}>/</span><span className="bouncy" onMouseEnter={(e) => bounce(e)}>&gt;</span> </h1>
            </div>
            <h4>A Seattle-based Full Stack Web Developer</h4>
            <nav className="headerLinkContainer">
              <a className='headerLink' href="#skills">Skills</a>
              <a className='headerLink' href="#projects">Projects</a>
              <a className='headerLink' href="#contact">Contact</a>
            </nav>
          </header>
          <button style={{display: top ? "block" : "none"}} onClick={scrollTop} id="back-to-top" title="Go to top">&nbsp;&uarr;&nbsp;</button>
        </div>
      <div className="skills" id="skills">
        <h1 className="sub-heading">Skills</h1>
        <hr />
        <div>
          <a className="skill-atag" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer" aria-label="Javascript"><i className="fab fa-js"></i></a>
          <a className="skill-atag" href="https://reactjs.org/" target="_blank" rel="noopener noreferrer" aria-label="React"><i className="fab fa-react"></i></a>
          <a className="skill-atag" href="https://graphql.org/" target="_blank" rel="noopener noreferrer" aria-label="GraphQL"><img className="skill-icon-img" src={graphQL} alt="mongodb logo"/></a>
          <a className="skill-atag" href="https://nodejs.org/en/" target="_blank" rel="noopener noreferrer" aria-label="Node.js"><img className="skill-icon-img" src={nodeJS} alt="mongodb logo"/></a>
          <a className="skill-atag" href="https://www.mongodb.com/" target="_blank" rel="noopener noreferrer" aria-label="MongoDB"><img className="skill-icon-img" src={mongoDB} alt="mongodb logo"/></a>
          <a className="skill-atag" href="https://www.python.org/" target="_blank" rel="noopener noreferrer" aria-label="Python"><i className="fab fa-python"></i></a>
          <a className="skill-atag" href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank" rel="noopener noreferrer" aria-label="HTML"><i className="fab fa-html5"></i></a>
          <a className="skill-atag" href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank" rel="noopener noreferrer" aria-label="CSS"><i className="fab fa-css3"></i></a>
        </div>
        <p>For a full list of my skills and qualifications check out my <a className="resume" href={resume} target="_blank" rel="noopener noreferrer">resume</a>.</p>
        <Projects />
      </div>
    </div>
  )
}