import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Bidding from './Bidding';
import Skills from './Skills';
// import CatchComponent from './CatchComponent';
import './App.css';

export default function App() {
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <div className="App">
        <main>
          <Switch>
            <Route exact path="/" component={Skills} />
            <Route exact path="/bidding-software" component={Bidding} />
            {/* <Route component={CatchComponent} /> */}
          </Switch>
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
    </HashRouter>
  );
}
