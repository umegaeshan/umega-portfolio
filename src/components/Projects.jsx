import "./Projects.css";

import {
  FaGithub,
  FaExternalLinkAlt,
  FaGlobe,
} from "react-icons/fa";


function Projects() {

  const projects = [

    /* ========================================
       GEMLINK
    ======================================== */

    {
      id: 1,

      title: "GemLink",

      description:
        "A full-stack gemstone marketplace built using the MERN stack with buyer and seller features.",

      image: "/projects/gemlink.png",

      tech: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "JWT",
      ],

      github:
        "https://github.com/umegaeshan/GemLink-MERN",

      live:
        "https://gemlink-umega.duckdns.org/",
    },


    /* ========================================
       AWS RESILIENT WEB HOSTING LAB
    ======================================== */

    {
      id: 2,

      title: "AWS Resilient Web Hosting Lab",

      description:
        "A resilient AWS web architecture using multiple EC2 instances, an Application Load Balancer and custom VPC networking.",

      image: "/projects/aws-resilient-web.png",

      tech: [
        "AWS",
        "EC2",
        "ALB",
        "VPC",
        "Nginx",
        "Linux",
      ],

      github:
        "https://github.com/umegaeshan/Aws-Resilient-web-lab",

      live: "",
    },


    /* ========================================
       AWS CLOUD NETWORK LAB
    ======================================== */

    {
      id: 3,

      title: "AWS Cloud Network Lab",

      description:
        "An AWS VPC networking and Linux web server lab featuring EC2, Nginx, SSH and network troubleshooting.",

      image: "/projects/aws-cloud-network.png",

      tech: [
        "AWS",
        "VPC",
        "EC2",
        "Linux",
        "Nginx",
        "SSH",
      ],

      github:
        "https://github.com/umegaeshan/Aws-cloud-network-lab",

      live: "",
    },


    /* ========================================
       CEYLOTRIP
    ======================================== */

    {
      id: 4,

      title: "CeyloTrip",

      description:
        "A Java-based travel application project developed while learning application design and software development.",

      image: "/projects/ceylotrip.png",

      tech: [
        "Java",
        "Application Development",
      ],

      github:
        "https://github.com/umegaeshan/CeyloTrip",

      live: "",
    },


    /* ========================================
       GRR E-COMMERCE
    ======================================== */

    {
      id: 5,

      title: "GrR E-Commerce",

      description:
        "An e-commerce web application developed to practice modern web development and online shopping functionality.",

      image: "/projects/grr-ecommerce.png",

      tech: [
        "JavaScript",
        "Web Development",
        "E-Commerce",
      ],

      github:
        "https://github.com/umegaeshan/GrR-ECommerce",

      live:
        "https://gr-r-e-commerce.vercel.app/",
    },


    /* ========================================
       SARASAVI LIBRARY
    ======================================== */

    {
      id: 6,

      title: "Sarasavi Library Management System",

      description:
        "A C# based library management system designed to manage books and common library operations.",

      image: "/projects/sarasavi-library.png",

      tech: [
        "C#",
        "Database",
        "Desktop Application",
      ],

      github:
        "https://github.com/umegaeshan/Sarasavi-Library-Management-System",

      live: "",
    },

  ];


  return (

    <section
      className="projects"
      id="projects"
    >

      <div className="projects-container reveal">


        {/* =====================================
            SECTION HEADING
        ===================================== */}

        <div className="section-heading">

          <p>
            Things I've Built
          </p>

          <h2>
            Featured <span>Projects</span>
          </h2>

        </div>


        <p className="projects-intro">

          A selection of projects I have built while developing
          my skills in web development, cloud computing,
          networking and software development.

        </p>



        {/* =====================================
            PROJECT GRID
        ===================================== */}

        <div className="projects-grid">


          {projects.map((project) => (

            <article
              className="project-card"
              key={project.id}
            >


              {/* PROJECT IMAGE */}

              <div className="project-image-wrapper">

                <img
                  src={project.image}
                  alt={`${project.title} project`}
                  className="project-image"
                />


                {/* IMAGE OVERLAY */}

                <div className="project-overlay">


                  {/* LIVE DEMO */}

                  {project.live && (

                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-btn project-live-overlay"
                    >

                      <FaGlobe />

                      Live Demo

                    </a>

                  )}


                  {/* SOURCE CODE */}

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-btn"
                  >

                    <FaGithub />

                    View Code

                  </a>

                </div>

              </div>



              {/* =====================================
                  PROJECT CONTENT
              ===================================== */}

              <div className="project-content">


                <h3>
                  {project.title}
                </h3>


                <p className="project-description">
                  {project.description}
                </p>



                {/* TECHNOLOGIES */}

                <div className="project-tech">

                  {project.tech.map(
                    (technology, index) => (

                      <span key={index}>
                        {technology}
                      </span>

                    )
                  )}

                </div>



                {/* =====================================
                    BUTTONS
                ===================================== */}

                <div className="project-actions">


                  {/* LIVE DEMO BUTTON */}

                  {project.live && (

                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-live-button"
                    >

                      <FaGlobe />

                      Live Demo

                      <FaExternalLinkAlt />

                    </a>

                  )}


                  {/* GITHUB BUTTON */}

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-github-button"
                  >

                    <FaGithub />

                    GitHub

                    <FaExternalLinkAlt />

                  </a>

                </div>

              </div>

            </article>

          ))}

        </div>



        {/* =====================================
            MORE PROJECTS
        ===================================== */}

        <div className="more-projects">

          <p>
            Explore more of my projects and source code.
          </p>


          <a
            href="https://github.com/umegaeshan"
            target="_blank"
            rel="noopener noreferrer"
          >

            <FaGithub />

            View My GitHub

            <FaExternalLinkAlt />

          </a>

        </div>

      </div>

    </section>

  );

}

export default Projects;