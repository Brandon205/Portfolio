import React, { useState } from 'react';

export default function Projects() {
  const [project1, setProject1] = useState(false);
  const [project2, setProject2] = useState(false);
  const [project3, setProject3] = useState(false);
  const [project4, setProject4] = useState(false);

  let content1, content2, content3, content4;
  switch (true) {
    case (project1):
      content1 = (
        <div className="project-details">
          <h1>cubeX</h1>
          <hr/>
          <div className="button">
            <a href="#">Live Site</a>
          </div>
          <div className="button">
            <a href="#">Code</a>
          </div>
        </div>
      );
      break;
    case (project2):
      content2 = (
        <div className="project-details">
        <h1>PotterGo</h1>
        <hr/>
        <div className="button">
          <a href="#">Code</a>
        </div>
      </div>
      );
      break;
    case (project3):
      content3 = (
        <div className="project-details">
        <h1>Adventure Awaits</h1>
        <hr/>
        <div className="button">
          <a href="#">Live Site</a>
        </div>
        <div className="button">
          <a href="#">Code</a>
        </div>
      </div>
      );
      break;
    case (project4):
      content4 = (
        <div className="project-details">
        <h1>Trail Weather</h1>
        <hr/>
        <div className="button">
          <a href="#">Live Site</a>
        </div>
        <div className="button">
          <a href="#">Code</a>
        </div>
      </div>
      );
      break;
      default:
        content1 = ''
        content2 = ''
        content3 = ''
        content4 = '';
  }
  return (
    <div className="projects">
      <h1>Projects</h1>
      <main className="project-container">
        <div>
          <div className="project" onMouseEnter={() => setProject1(true)} onMouseLeave={() => setProject1(false)}>
            {content1}
          </div>
          <div className="project" onMouseEnter={() => setProject2(true)} onMouseLeave={() => setProject2(false)}>
            {content2}
          </div>
        </div>
        <div>
          <div className="project" onMouseEnter={() => setProject3(true)} onMouseLeave={() => setProject3(false)}>
            {content3}
          </div>
          <div className="project" onMouseEnter={() => setProject4(true)} onMouseLeave={() => setProject4(false)}>
            {content4}
          </div>
        </div>
      </main>
    </div>
  );
}
