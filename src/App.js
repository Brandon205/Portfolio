import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Bidding from './Bidding';
import Skills from './Skills';
import './App.css';

import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

export default function App() {
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <div className="App">
        <main>
          <Route exact path="/" component={Skills} />
          <Route exact path="/bidding-software" component={Bidding} />
          <footer>
            <h1 id="contact">Contact</h1>
            <hr />
            <p>Feel free to send me a message on LinkedIn or email me at brandonblack02@gmail.com</p>
            <div className="icons">
              <a href="https://twitter.com/brandonblack02" className="social-icon" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><FaTwitter /></a>
              <a href="https://www.linkedin.com/in/brandonblack02/" className="social-icon" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
              <a href="https://github.com/Brandon205" className="social-icon" target="_blank" rel="noopener noreferrer" aria-label="Github"><FaGithub /></a>
            </div>
          </footer>
        </main>
      </div>
    </HashRouter>
  );
}
