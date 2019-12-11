import React from 'react';
import WhoIAm from './WhoIAm';
import Projects from './Projects';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <nav>
        <div>
          <a href="#main">Brandon</a>
        </div>
        <div>
          <a href="#who-i-am">Skills</a>{' | '}
          <a href="#projects">Projects</a>{' | '}
          <a href="#contact">Contact</a>
        </div>
      </nav>
      <header>
        <h1>&lt;Brandon Black /&gt;</h1>
        <p>Full Stack Web Developer</p>
      </header>
      <main>
        <WhoIAm />
        <Projects />
      <h1>Contact</h1>
      <p>Feel free to email me at brandonblack02@gmail.com</p>
      </main>
    </div>
  );
}
