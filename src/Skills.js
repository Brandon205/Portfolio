import React from 'react';
import Projects from './Projects';
import mongoDB from './img/mongodb-icon.svg';
import graphQL from './img/graphql-icon.svg';
import nodeJS from './img/nodejs-icon.svg';
import resume from './img/Resume.pdf';

export default function Skills() {
  return (
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
  )
}