import React, { useState, useEffect } from 'react';
import { HashLink } from 'react-router-hash-link';
import Projects from './Projects';
import resume from './img/resume.pdf';

import { AiOutlineProject } from 'react-icons/ai';
import { BiCodeAlt } from 'react-icons/bi';
import { CgProfile } from 'react-icons/cg';
import { FaReact, FaNodeJs, FaPython, FaHtml5, FaCss3 } from 'react-icons/fa';
import { SiJavascript, SiMongodb, SiNextdotjs } from 'react-icons/si';
import { TbBrandReactNative } from 'react-icons/tb';

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
            <div className='header-div'>
              <div id="nameContainer">
                <h1 className="name"> 
                  <span className="bouncy" onMouseEnter={(e) => bounce(e)}>&lt;</span>
                  <span className="bouncy" onMouseEnter={(e) => bounce(e)}>B</span>
                  <span className="bouncy" onMouseEnter={(e) => bounce(e)}>R</span>
                  <span className="bouncy" onMouseEnter={(e) => bounce(e)}>A</span>
                  <span className="bouncy" onMouseEnter={(e) => bounce(e)}>N</span>
                  <span className="bouncy" onMouseEnter={(e) => bounce(e)}>D</span>
                  <span className="bouncy" onMouseEnter={(e) => bounce(e)}>O</span>
                  <span className="bouncy" onMouseEnter={(e) => bounce(e)}>N</span>&nbsp;
                  <span className="bouncy" onMouseEnter={(e) => bounce(e)}>B</span>
                  <span className="bouncy" onMouseEnter={(e) => bounce(e)}>L</span>
                  <span className="bouncy" onMouseEnter={(e) => bounce(e)}>A</span>
                  <span className="bouncy" onMouseEnter={(e) => bounce(e)}>C</span>
                  <span className="bouncy" onMouseEnter={(e) => bounce(e)}>K</span>
                  <span className="bouncy" onMouseEnter={(e) => bounce(e)}>/</span>
                  <span className="bouncy" onMouseEnter={(e) => bounce(e)}>&gt;</span>
                </h1>
              </div>
              <h4>A Seattle-based Full Stack Web Developer</h4>
              <nav className="headerLinkContainer">
                <HashLink to="/#skills" className='headerLink'><BiCodeAlt /> Skills</HashLink>
                <HashLink to="/#projects" className='headerLink'><AiOutlineProject /> Projects</HashLink>
                <HashLink to="/#contact" className='headerLink'><CgProfile /> Contact</HashLink>
              </nav>
            </div>
          </header>
          <button style={{display: top ? "block" : "none"}} onClick={scrollTop} id="back-to-top" title="Go to top"><span id="top-arrow">^</span></button>
        </div>
      <div className="skills" id="skills">
        <h1 className="sub-heading">Skills</h1>
        <hr />
        <div className='skills-container'>
          <a className="skill-atag" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer" aria-label="Javascript"><SiJavascript /></a>
          <a className="skill-atag" href="https://reactjs.org/" target="_blank" rel="noopener noreferrer" aria-label="React"><FaReact /></a>
          <a className="skill-atag" href="https://reactnative.dev/" target="_blank" rel="noopener noreferrer" aria-label="React Native"><TbBrandReactNative /></a>
          <a className="skill-atag" href="https://nextjs.org/" target="_blank" rel="noopener noreferrer" aria-label="Next JS"><SiNextdotjs /></a>
          <a className="skill-atag" href="https://nodejs.org/en/" target="_blank" rel="noopener noreferrer" aria-label="Node.js"><FaNodeJs /></a>
          <a className="skill-atag" href="https://www.python.org/" target="_blank" rel="noopener noreferrer" aria-label="Python"><FaPython /></a>
          <a className="skill-atag" href="https://www.mongodb.com/" target="_blank" rel="noopener noreferrer" aria-label="MongoDB"><SiMongodb /></a>
          <a className="skill-atag" href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank" rel="noopener noreferrer" aria-label="HTML"><FaHtml5 /></a>
          <a className="skill-atag" href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank" rel="noopener noreferrer" aria-label="CSS"><FaCss3 /></a>
        </div>
        <p>For a full list of my skills and qualifications check out my <a className="resume" href={resume} target="_blank" rel="noopener noreferrer">resume</a>.</p>
        <Projects />
      </div>
    </div>
  )
}