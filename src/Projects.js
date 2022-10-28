import React from 'react';
import { Link } from 'react-router-dom';
import bid from './img/Bid-Summary.webp'
import guitario from './img/guitario.webp';
import potterGo from './img/potterGo.webp';
import bidOld from './img/Bid-Summary.png';
import dirtless from './img/dirtlessDetailing.webp';
import guitarioOld from './img/guitario.png';
import potterGoOld from './img/potterGo.png';
import dirtlessOld from './img/dirtlessDetailingOld.png';

export default function Projects() {
  const scrollTop = () => {
    window.scrollTo({top: 0, behavior: "smooth"})
  }

  return (
    <div id="projects" className="projects">
      <h1 className="sub-heading">Projects</h1>
      <hr style={{marginBottom: 40}} />
      <main className="project-container">
        {/* <div className="project1">
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
        </div>
        <div className="project1-description">
          <section className="frameworks">
            <p>Excel</p>
            <p>Visual Basics for Applications</p>
          </section>
          <p>An Excel-based software that uses a large VBA codebase to take and analyze bids, finding the most cost effective ones. Has many features inspired by a now deprecated program called PrimeBid.</p><br/>
        </div> */}
        <div className="proj-card">
          <picture className="project-img-blur">
            <source srcSet={bid} type="image/webp" />
            <source srcSet={bidOld} type="image/jpeg" />
            <img className="project-img-blur" src={bidOld} alt="Prime Bid Summary Page" />
          </picture>
          <div className="proj-desc">
            <a href='/bidding-software' className='proj-heading-link'>Prime Bid Excel</a>
            <div className="frameworks">
              <p>Excel</p>
              <p>Visual Basics for Applications</p>
            </div>
            <p className="desc">An Excel-based software that uses a large VBA codebase to take and analyze bids, finding the most cost effective ones. Has many features inspired by a now deprecated program called PrimeBid.</p>

            <a href="/bidding-software" className="readmore">Example</a>
          </div>
        </div>

        {/* <div className="project2">
          <>
          <picture>
            <source srcSet={guitario} type="image/webp" />
            <source srcSet={guitarioOld} type="image/jpeg" /> 
            <img className="project-img-blur project-img-border" src={guitarioOld} alt="Trail Weather home page" />
          </picture>
          <div className="project-details">
          <h1 style={{color: 'white'}} className="project-title">Guitario</h1>
          <hr />
          <div className="button">
            <a href="https://brandon205.github.io/guitario/" target="_blank" rel="noopener noreferrer">Live Demo</a>
          </div>
            <div className="button">
              <a href="https://github.com/Brandon205/guitario" target="_blank" rel="noopener noreferrer">Github</a>
            </div>
          </div>
        </>
        </div>
        <div className="project2-description">
          <section className="frameworks">
            <p>React Native</p>
            <p>Web Audio API</p>
          </section>
          <p></p>
        </div> */}
        <div className="proj-card">
          <picture className="project-img-blur">
            <source srcSet={guitario} type="image/webp" />
            <source srcSet={guitarioOld} type="image/jpeg" />
            <img className="project-img-blur" src={guitarioOld} alt="Guitario Home Page" />
          </picture>
          <div className="proj-desc">
            <a href='https://brandon205.github.io/guitario/' className='proj-heading-link'>Guitario</a>
            <div className="frameworks">
              <p>React Native</p>
              <p>Web Audio API</p>
            </div>
            <p className="desc">Small and lightweight app that works on Android, IOS, and the Web. Built with React Native, it is designed to help users learn the fretboard of a guitar. Uses the Web Audio API to listen and analyze incoming audio and can check if they are playing the right note, and it will also display the current note the user is playing.</p>

            <a href="https://brandon205.github.io/guitario/" className="readmore">Live Demo</a>
            <a href="https://github.com/Brandon205/guitario" className="readmore">Github</a>
          </div>
        </div>

        {/* <div className="project3">
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
        </div>
        <div className="project3-description">
          <section className="frameworks">
            <p>React</p>
            <p>Axios</p>
            <p>Hue API</p>
          </section>
          <p>Hue Lite is a simple and easy to use website that has little to no setup in order to control your Hue lights. Using React, Axios and the Hue Developer API this simple website allows for basic Hue controls from your browser with very little setup!</p>
        </div> */}
        <div className="proj-card">
          <picture className="project-img-blur">
            <source srcSet={dirtless} type="image/webp" />
            <source srcSet={dirtlessOld} type="image/jpeg" />
            <img className="project-img-blur" src={dirtlessOld} alt="Dirt-Less Detailing Home Page" />
          </picture>
          <div className="proj-desc">
            <a href='https://dirtless-detailing.vercel.app/' className='proj-heading-link'>Dirt-Less Detailing</a>
            <div className="frameworks">
              <p>React</p>
              <p>Next.js</p>
            </div>
            <p className="desc">A freelance website I created for Dirt-Less Detailing, a startup detailing company based out of Bonney Lake Washington. Created using React and Next.js to provide a fast and easily hosted website.</p>

            <a href="https://dirtless-detailing.vercel.app/" className="readmore">Dirt-Less Detailing</a>
          </div>
        </div>

        {/* <div className="project4">
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
        </div>
        <div className="project4-description">
          <section className="frameworks">
            <p>EJS</p>
            <p>Node.js</p>
            <p>Express</p>
          </section>
          <p></p>
        </div> */}
        <div className="proj-card">
          <picture className="project-img-blur">
            <source srcSet={potterGo} type="image/webp" />
            <source srcSet={potterGoOld} type="image/jpeg" />
            <img className="project-img-blur" src={potterGoOld} alt="PotterGO Home Page" />
          </picture>
          <div className="proj-desc">
            <a href='https://github.com/Brandon205/PotterGo' className='proj-heading-link'>PotterGO</a>
            <div className="frameworks">
              <p>EJS</p>
              <p>Node.js</p>
              <p>Express</p>
            </div>
            <p className="desc">A 2 day hackathon project that was made by me and one other developer, along with a group of 3 UX Designers. It is a simplistic MERN app that uses MapBox to place images at certain locations that the user would have to go to. It also reaches out to an external Harry Potter api to get information, like wands, from the Harry Potter series. Our project placed 1st in the hackathon.</p>

            <a href="https://github.com/Brandon205/PotterGo" className="readmore">Github</a>
          </div>
        </div>

      </main>
    </div>
  );
}
