import React from 'react';
import '../styles/mywork.css';

// Import images

import Sresp8 from '../assests/Sresp8.png';
import Screenshot229 from '../assests/Screenshot (229).png';
import Screenshot232 from '../assests/Screenshot (232).png';
import Screenshot231 from '../assests/Screenshot (231).png';
import Screenshot234 from '../assests/Screenshot (234).png';
import Screenshot235 from '../assests/Screenshot (235).png';

const projects = [
  { id: 1, imgSrc: Sresp8, title: 'responsive layout', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus ut quia quam corporis ipsam minus, eveniet iste quae...' },
  { id: 2, imgSrc: Screenshot229, title: 'Hover Transition', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus ut quia quam corporis ipsam minus, eveniet iste quae...' },
  { id: 3, imgSrc: Screenshot232, title: 'Sportify clone', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus ut quia quam corporis ipsam minus, eveniet iste quae...' },
  { id: 4, imgSrc: Screenshot231, title: 'Netflix clone', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus ut quia quam corporis ipsam minus, eveniet iste quae...' },
  { id: 5, imgSrc: Screenshot232, title: 'Sportify clone', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus ut quia quam corporis ipsam minus, eveniet iste quae...' },
  { id: 6, imgSrc: Screenshot231, title: 'Netflix clone', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus ut quia quam corporis ipsam minus, eveniet iste quae...' },
  { id: 7, imgSrc: Screenshot234, title: 'first webpage', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus ut quia quam corporis ipsam minus, eveniet iste quae...' },
  { id: 8, imgSrc: Screenshot235, title: 'Current Project', description: 'Architected a personal portfolio website showcasing diverse projects and skill sets. Utilized modern design principles for an engaging and responsive user experience...' }
];

const ProjectSection = () => {
  return (
    <section className="project_section">
      <h2 className="title">MY <span className="title_end"> PROJECTS</span></h2>
      <div className="project-cards">
        {projects.map(project => (
          <div key={project.id} className={`project-card project-card-${project.id}`}>
            <img src={project.imgSrc} alt={`portfolio-project-${project.id}`} />
            <div className="project-drawer">
              <h4>{project.title}</h4>
              <p>{project.description}</p>
              <p><a href="#read">Read More...</a></p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;



