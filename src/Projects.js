import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import bid from './img/Bid-Summary.webp'
// import trailWeather from './img/trailWeather.webp';
import guitario from './img/guitario.webp';
import potterGo from './img/potterGo.webp';
import bidOld from './img/Bid-Summary.png';
import hueLite from './img/HueLite.webp';
// import trailWeatherOld from './img/trailWeather.png';
import guitarioOld from './img/guitario.png';
import potterGoOld from './img/potterGo.png';
import hueLiteOld from './img/HueLite.png';

export default function Projects() {
  const [project1, setProject1] = useState(false);
  const [project2, setProject2] = useState(false);
  const [project3, setProject3] = useState(false);
  const [project4, setProject4] = useState(false);

  const scrollTop = () => {
    window.scrollTo({top: 0, behavior: "smooth"})
  }

  let content1, content2, content3, content4;
  switch (true) {
    case (project1):
      content1 = (
        <>
          <picture className="project-img-blur">
            <source srcSet={bid} type="image/webp" />
            <source srcSet={bidOld} type="image/jpeg" /> 
            <img className="project-img-blur" src={bidOld} alt="cubeX home page" />
          </picture>
          <div className="project-details">
            <h1 className="project-title">PrimeBid Excel</h1>
            <hr />
            <div className="button">
              <Link to="/bidding-software" onClick={scrollTop}>Example</Link>
            </div>
          </div>
        </>
      );
      break;
    case (project2):
      content2 = (
        <>
          <picture>
            <source srcSet={guitario} type="image/webp" />
            <source srcSet={guitarioOld} type="image/jpeg" /> 
            <img className="project-img-blur" src={guitarioOld} alt="Trail Weather home page" />
          </picture>
          <div className="project-details">
          <h1 className="project-title">Guitario</h1>
          <hr />
          <div className="button">
            <a href="https://brandon205.github.io/guitario/" target="_blank" rel="noopener noreferrer">Live Demo</a>
          </div>
            <div className="button">
              <a href="https://github.com/Brandon205/guitario" target="_blank" rel="noopener noreferrer">Github</a>
            </div>
          </div>
        </>
      );
      break;
    case (project3):
      content3 = (
        <>
          <picture>
            <source srcSet={hueLite} type="image/webp" />
            <source srcSet={hueLiteOld} type="image/jpeg" /> 
            <img className="project-img-blur" src={hueLiteOld} alt="Adventure Awaits home page" />
          </picture>
          <div className="project-details">
          <h1 className="project-title">Hue Lite</h1>
          <hr />
          <div className="button">
            <a href="https://brandon205.github.io/hue-lights" target="_blank" rel="noopener noreferrer">Live Demo</a>
          </div>
            <div className="button">
              <a href="https://github.com/Brandon205/hue-lights" target="_blank" rel="noopener noreferrer">Github</a>
            </div>
          </div>
        </>
      );
      break;
    case (project4):
      content4 = (
        <>
          <picture>
            <source srcSet={potterGo} type="image/webp" />
            <source srcSet={potterGoOld} type="image/jpeg" /> 
            <img className="project-img-blur" src={potterGoOld} alt="Potter Go home page" />
          </picture>
          <div className="project-details">
            <h1 className="project-title">PotterGo</h1>
            <hr />
            <div className="button">
              <a href="https://github.com/Brandon205/PotterGo" target="_blank" rel="noopener noreferrer">Github</a>
            </div>
          </div>
        </>
      );
      break;
      default:
        content1 = ''
        content2 = ''
        content3 = ''
        content4 = ''
  }

  return (
    <div id="projects" className="projects">
      <h1 className="sub-heading">Projects</h1>
      <hr/>
      <main className="project-container">
        <div className="project1" onMouseEnter={() => setProject1(true)} onMouseLeave={() => setProject1(false)}>
          {project1 ? content1 : <picture>
            <source srcSet={bid} type="image/webp" />
            <source srcSet={bidOld} type="image/jpeg" /> 
            <img className="project-img" src={bidOld} alt="bidding software summary page" />
          </picture> }
        </div>
        <div className="project1-description">
          <section className="frameworks">
            <p>Excel</p>
            <p>Visual Basics for Applications</p>
          </section>
          <p>An Excel-based software that uses a large VBA codebase to take and analyze bids, finding the most cost effective ones. Has many features inspired by a now deprecated program called PrimeBid.</p><br/>
        </div>
        <div className="project2" onMouseEnter={() => setProject2(true)} onMouseLeave={() => setProject2(false)}>
          {project2 ? content2 : <picture>
            <source srcSet={guitario} type="image/webp" />
            <source srcSet={guitarioOld} type="image/jpeg" /> 
            <img className="project-img" src={guitarioOld} alt="Potter Go home page" />
          </picture> }
        </div>
        <div className="project2-description">
          <section className="frameworks">
            <p>React Native</p>
            <p>Web Audio API</p>
          </section>
          <p>Small and lightweight app that works on Android, IOS, and the Web. Built mostly with React Native, it is designed to help users learn the fretboard of a guitar. Uses the Web Audio API to listen and analyze user audio that can check if they are playing the right note, and it will also display the current note the user is playing.</p>
        </div>
        <div className="project3" onMouseEnter={() => setProject3(true)} onMouseLeave={() => setProject3(false)}>
          {project3 ? content3 : <picture>
            <source srcSet={hueLite} type="image/webp" />
            <source srcSet={hueLiteOld} type="image/jpeg" /> 
            <img className="project-img" src={hueLiteOld} alt="Adventure Awaits home page" />
          </picture> }
        </div>
        <div className="project3-description">
          <section className="frameworks">
            <p>React</p>
            <p>Axios</p>
            <p>Hue API</p>
          </section>
          <p>Hue Lite is a simple and easy to use website that has little to no setup in order to control your Hue lights. Using React, Axios and the Hue Developer API this simple website allows for basic Hue controls from your browser with very little setup!</p>
        </div>
        <div className="project4" onMouseEnter={() => setProject4(true)} onMouseLeave={() => setProject4(false)}>
          {project4 ? content4 : <picture>
            <source srcSet={potterGo} type="image/webp" />
            <source srcSet={potterGoOld} type="image/jpeg" /> 
            <img className="project-img" src={potterGoOld} alt="Trail Weather home page" />
          </picture> }
        </div>
        <div className="project4-description">
          <section className="frameworks">
            <p>EJS</p>
            <p>Node.js</p>
            <p>Express</p>
          </section>
          <p>A 2 day hackathon project that was made by me and one other developer, along with a group of 3 UX Designers. It is a simplistic MERN app that uses MapBox to place images at certain locations that the user would have to go to. It also reaches out to an external Harry Potter api to get information, like wands, from the Harry Potter series. Our project placed 1st in the hackathon.</p>
        </div>
      </main>
    </div>
  );
}
