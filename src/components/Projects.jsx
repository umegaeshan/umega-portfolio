import "./Projects.css";

import {
  FaGithub,
  FaExternalLinkAlt,
  FaAndroid,
  FaNetworkWired,
  FaBook,
  FaPlane,
  FaTasks,
  FaUserLock,
} from "react-icons/fa";

function Projects() {

  const projects = [
    {
      title: "UniMate",
      description:
        "An Android application developed to provide useful features for university students and improve the student experience.",
      technologies: ["Java", "XML", "Firebase", "Android Studio"],
      icon: <FaAndroid />,
      category: "Mobile Application",
      github:
        "https://github.com/umegaeshan/UniMate-using-javaP",
    },

    {
      title: "Advanced Login Page",
      description:
        "A login and registration system with form validation, authentication and database integration.",
      technologies: ["PHP", "MySQL", "HTML", "CSS"],
      icon: <FaUserLock />,
      category: "Web Development",
      github:
        "https://github.com/umegaeshan/Adavnces-login-page-with-validations",
    },

    {
      title: "Enterprise Network Architecture",
      description:
        "A network architecture project designed using routing, VLANs, security configurations and network infrastructure concepts.",
      technologies: ["Cisco", "VLAN", "ACL", "Networking"],
      icon: <FaNetworkWired />,
      category: "Networking",
      github:
        "https://github.com/umegaeshan/Enterprise-Network-Architecture-VicHotel",
    },

    {
      title: "Sarasavi Library Management System",
      description:
        "A library management system created to manage books, users and common library operations.",
      technologies: ["C#", "Database", "Desktop App"],
      icon: <FaBook />,
      category: "Software Development",
      github:
        "https://github.com/umegaeshan/Sarasavi-Library-Management-System",
    },

    {
      title: "CeyloTrip",
      description:
        "A travel related application project created to practice application development and software design concepts.",
      technologies: ["Java", "UI Design", "Application"],
      icon: <FaPlane />,
      category: "Application Development",
      github:
        "https://github.com/umegaeshan/CeyloTrip",
    },

    {
      title: "MyToDoApp",
      description:
        "A simple task management application for creating and organizing daily tasks.",
      technologies: ["Java", "Mobile", "Task Management"],
      icon: <FaTasks />,
      category: "Mobile Application",
      github:
        "https://github.com/umegaeshan/MyToDoApp",
    },
  ];


  return (
    <section className="projects" id="projects">

      <div className="projects-container reveal">

        {/* HEADING */}

        <div className="section-heading">

          <p>Things I've Built</p>

          <h2>
            My <span>Projects</span>
          </h2>

        </div>


        <p className="projects-intro">
          A selection of projects I've worked on while learning
          web development, mobile development, networking and
          software technologies.
        </p>


        {/* PROJECT GRID */}

        <div className="projects-grid">

          {projects.map((project, index) => (

            <div className="project-card" key={index}>

              {/* TOP */}

              <div className="project-top">

                <div className="project-icon">
                  {project.icon}
                </div>

                <span className="project-category">
                  {project.category}
                </span>

              </div>


              {/* PROJECT INFO */}

              <h3 className="project-title">
                {project.title}
              </h3>

              <p className="project-description">
                {project.description}
              </p>


              {/* TECHNOLOGIES */}

              <div className="project-technologies">

                {project.technologies.map((technology, techIndex) => (

                  <span key={techIndex}>
                    {technology}
                  </span>

                ))}

              </div>


              {/* BUTTON */}

              <div className="project-buttons">

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="github-project-btn"
                >
                  <FaGithub />

                  View Code
                </a>

              </div>

            </div>

          ))}

        </div>


        {/* MORE PROJECTS */}

        <div className="more-projects">

          <p>
            Want to see more of my work?
          </p>

          <a
            href="https://github.com/umegaeshan"
            target="_blank"
            rel="noreferrer"
          >
            View My GitHub

            <FaExternalLinkAlt />
          </a>

        </div>

      </div>

    </section>
  );
}

export default Projects;