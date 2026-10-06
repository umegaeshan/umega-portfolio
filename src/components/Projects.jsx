import "./Projects.css";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function Projects() {
  const projects = [
    {
      id: 1,
      title: "UniMate",
      description: "A student to-do and productivity mobile application built using Java.",
      image: "/projects/unimate.jpg",
      tech: ["Java", "Android Studio", "XML"],
      github: "https://github.com/umegaeshan",
      live: "#",
    },

    {
      id: 2,
      title: "Advanced Login Page",
      description: "A login and registration system with validations using PHP.",
      image: "/projects/advanced-login.jpg",
      tech: ["PHP", "HTML", "CSS", "MySQL"],
      github: "https://github.com/umegaeshan",
      live: "#",
    },

    {
      id: 3,
      title: "Portfolio Website",
      description: "A modern personal portfolio website showcasing my skills and projects.",
      image: "/projects/portfolio.jpg",
      tech: ["React", "Vite", "CSS"],
      github: "https://github.com/umegaeshan/umega-portfolio",
      live: "https://umega-portfolio.vercel.app/",
    },

    {
      id: 4,
      title: "GoviMart",
      description: "A web marketplace platform for farmers and resellers.",
      image: "/projects/govimart.jpg",
      tech: ["React", "Tailwind CSS", "JavaScript"],
      github: "https://github.com/umegaeshan",
      live: "#",
    },

    {
      id: 5,
      title: "Flower Ordering System",
      description: "A flower ordering web application built using React and Firebase.",
      image: "/projects/flower-ordering.jpg",
      tech: ["React", "Firebase", "CSS"],
      github: "https://github.com/umegaeshan",
      live: "#",
    },
  ];

  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        <div className="section-heading">
          <p>My Recent Work</p>
          <h2>
            Featured <span>Projects</span>
          </h2>
        </div>

        <p className="projects-intro">
          Here are some of the projects I have worked on while learning and building
          my skills in web development, mobile application development and software solutions.
        </p>

        <div className="projects-grid">
          {projects.map((project) => (
            <div className="project-card" key={project.id}>
              <div className="project-image-wrapper">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />

                <div className="project-overlay">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="project-btn"
                  >
                    <FaGithub /> Code
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="project-btn"
                  >
                    <FaExternalLinkAlt /> Live
                  </a>
                </div>
              </div>

              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="project-tech">
                  {project.tech.map((item, index) => (
                    <span key={index}>{item}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;