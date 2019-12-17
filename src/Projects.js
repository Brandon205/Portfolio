import React, { useState } from 'react';
import cubeX from './img/cubeX.png';
import trailWeather from './img/trailWeather.png';
import potterGo from './img/potterGo.png';
import adventureAwaits from './img/adventureAwaits.png';

export default function Projects() {
  const [project1, setProject1] = useState(false);
  const [project2, setProject2] = useState(false);
  const [project3, setProject3] = useState(false);
  const [project4, setProject4] = useState(false);

  let content1, content2, content3, content4;
  switch (true) {
    case (project1):
      content1 = (
        <>
        <img className="project-img-blur" src={cubeX} alt="cubeX home page" />
          <div className="project-details">
            <h1>cubeX</h1>
            <hr />
            <div className="button">
              <a href="https://sheltered-reef-38980.herokuapp.com/" target="_blank" rel="noopener noreferrer">Live Site</a>
            </div>
            <div className="button">
              <a href="https://github.com/Brandon205/cubeX" target="_blank" rel="noopener noreferrer">Code</a>
            </div>
          </div>
        </>
      );
      break;
    case (project2):
      content2 = (
        <>
          <img className="project-img-blur" src={potterGo} alt="Potter Go home page" />
          <div className="project-details">
            <h1>PotterGo</h1>
            <hr />
            <div className="button">
              <a href="https://github.com/Brandon205/PotterGo" target="_blank" rel="noopener noreferrer">Code</a>
            </div>
          </div>
        </>
      );
      break;
    case (project3):
      content3 = (
        <>
          <img className="project-img-blur" src={adventureAwaits} alt="Adventure Awaits home page" />
          <div className="project-details">
          <h1>Adventure Awaits</h1>
          <hr />
          <div className="button">
            <a href="https://boiling-depths-32027.herokuapp.com/" target="_blank" rel="noopener noreferrer">Live Site</a>
          </div>
            <div className="button">
              <a href="https://github.com/Brandon205/adventure-awaits" target="_blank" rel="noopener noreferrer">Code</a>
            </div>
          </div>
        </>
      );
      break;
    case (project4):
      content4 = (
        <>
          <img className="project-img-blur" src={trailWeather} alt="Trail Weather home page" />
          <div className="project-details">
          <h1>Trail Weather</h1>
          <hr />
          <div className="button">
            <a href="https://fast-coast-44019.herokuapp.com/" target="_blank" rel="noopener noreferrer">Live Site</a>
          </div>
            <div className="button">
              <a href="https://github.com/Brandon205/TrailWeather" target="_blank" rel="noopener noreferrer">Code</a>
            </div>
          </div>
        </>
      );
      break;
      default:
        content1 = ''
        content2 = ''
        content3 = ''
        content4 = '';
  }
  return (
    <div id="projects" className="projects">
      <h1>Projects</h1>
      <main className="project-container">
        <div className="project1" onMouseEnter={() => setProject1(true)} onMouseLeave={() => setProject1(false)}>
          {project1 ? content1 : <img className="project-img" src={cubeX} alt="cubeX home page" /> }
        </div>
        <div className="project1-description">
          <section className="frameworks">
            <p>React</p>
            <p>GraphQL</p>
            <p>Node.js</p>
            <p>Express</p>
          </section>
          <p>A MERN app that uses GraphQL and Apollo for all of the database calls and manipulations along with React with hooks for the front end. It is a simple app that will allow users to time themselves while solving a Rubik’s cube, it also has many data-analysis features like averages and a graph, for the user to track their times in more visual ways.</p><br/>
        </div>
        <div className="project2" onMouseEnter={() => setProject2(true)} onMouseLeave={() => setProject2(false)}>
          {project2 ? content2 : <img className="project-img" src={potterGo} alt="Potter Go home page" /> }
        </div>
        <div className="project2-description">
          <section className="frameworks">
            <p>React</p>
            <p>Node.js</p>
            <p>Express</p>
          </section>
          <p>A 1 day hackathon project that was made by me and one other developer, along with a group of 3 UX Designers. It is a simplistic MERN app that uses MapBox to place images at certain locations that the user would have to go to. It also reaches out to an external Harry Potter api to get information, like wands, from the Harry Potter series. Our project placed 1st in the hackathon.</p>
        </div>
        <div className="project3" onMouseEnter={() => setProject3(true)} onMouseLeave={() => setProject3(false)}>
          {project3 ? content3 : <img className="project-img" src={adventureAwaits} alt="Adventure Awaits home page" /> }
        </div>
        <div className="project3-description">
          <section className="frameworks">
            <p>React</p>
            <p>Node.js</p>
            <p>Express</p>
          </section>
          <p>A MongoDB, Express, React, Node.js (MERN) app, that was created by a team of developers. Using React for the front end made the website very quick and responsive, while on the backend Node, Express, and MongoDB handle a JWT authentication system along with that will allow for users to have their own secure accounts.</p>
        </div>
        <div className="project4" onMouseEnter={() => setProject4(true)} onMouseLeave={() => setProject4(false)}>
          {project4 ? content4 : (<img className="project-img" src={trailWeather} alt="Trail Weather home page" />) }
        </div>
        <div className="project4-description">
          <section className="frameworks">
            <p>EJS</p>
            <p>Node.js</p>
            <p>Express</p>
          </section>
          <p>A full stack web app that is used to help plan your hikes more accordingly with the weather. This app uses HTML, a templating language called EJS, CSS, and Javascript to lay out the foundation along with a database and 3 APIs including Mapbox and the DarkSky API to provide information to the user about any weather or hike information they need.</p>
        </div>
      </main>
    </div>
  );
}
