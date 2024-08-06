import React from 'react';
import '../styles/Cards.css'; // Ensure this path matches your project's structure

const projects = [
    { id: 1, title: 'Responsive Layout', image: '../assests/Sresp8.png', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus ut quia quam corporis ipsam minus, eveniet iste quae...' },
    { id: 2, title: 'Hover Transition', image: '../assests/Screenshot (229).png', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus ut quia quam corporis ipsam minus, eveniet iste quae...' },
    { id: 3, title: 'Sportify Clone', image: '../assests/Screenshot (232).png', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus ut quia quam corporis ipsam minus, eveniet iste quae...' },
    { id: 4, title: 'Netflix Clone', image: '../assests/Screenshot (231).png', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus ut quia quam corporis ipsam minus, eveniet iste quae...' },
    // Add more projects as needed
];

const Projects = () => {
    return (
        <section id="projects" className="project_section">
            <h2 className="title">MY <span className="title_end">PROJECTS</span></h2>
            <div className="project-cards">
                {projects.map(project => (
                    <div key={project.id} className={`project-card project-card-${project.id}`}>
                        <img src={project.image} alt="portfolio-project-photo" />
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

export default Projects;
