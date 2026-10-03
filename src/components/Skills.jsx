import { useState } from "react";

import "./Skills.css";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaPhp,
  FaPython,
  FaJava,
  FaNetworkWired,
  FaAws,
  FaGitAlt,
  FaGithub,
  FaLinux,
  FaDatabase,
  FaCode,
  FaMobileAlt,
  FaWind,
  FaPaperPlane,
  FaLaptopCode,
  FaCertificate,
  FaTimes,
  FaExternalLinkAlt,
} from "react-icons/fa";

function Skills() {
  // Selected skill for certificate popup
  const [selectedSkill, setSelectedSkill] = useState(null);

  const skills = [
    {
      name: "HTML5",
      icon: <FaHtml5 />,
      category: "Frontend",

      certificates: [
        {
          title: "Web Design for Beginners",
          issuer: "Web Development",
          file: "/certificates/web-design.jpg",
        },
      ],
    },

    {
      name: "CSS3",
      icon: <FaCss3Alt />,
      category: "Frontend",

      certificates: [
        {
          title: "Web Design for Beginners",
          issuer: "Web Development",
          file: "/certificates/web-design.jpg",
        },
      ],
    },

    {
      name: "JavaScript",
      icon: <FaJs />,
      category: "Programming",
      certificates: [],
    },

    {
      name: "React",
      icon: <FaReact />,
      category: "Frontend",
      certificates: [],
    },

    {
      name: "Tailwind CSS",
      icon: <FaWind />,
      category: "Frontend",
      certificates: [],
    },

    {
      name: "PHP",
      icon: <FaPhp />,
      category: "Backend",

      certificates: [
        {
          title: "Learn PHP and MySQL for Web Application and Web Development",
          issuer: "Web Development",
          file: "/certificates/my-sql.jpg",
        },
      ],
    },

    {
      name: "Java",
      icon: <FaJava />,
      category: "Programming",
      certificates: [],
    },

    {
      name: "Python",
      icon: <FaPython />,
      category: "Programming",
      certificates: [],
    },

    {
      name: "Flutter",
      icon: <FaMobileAlt />,
      category: "Mobile Development",
      certificates: [],
    },

    {
      name: "Dart",
      icon: <FaCode />,
      category: "Programming",
      certificates: [],
    },

    {
      name: "MySQL",
      icon: <FaDatabase />,
      category: "Database",

      certificates: [
        {
          title: "Learn PHP and MySQL for Web Application and Web Development",
          issuer: "Database & Web Development",
          file: "/certificates/my-sql.jpg",
        },
      ],
    },

    {
      name: "AWS",
      icon: <FaAws />,
      category: "Cloud",

      certificates: [
        {
          title: "AWS Academy Graduate - Cloud Architecting",
          issuer: "AWS Academy",
          file: "/certificates/aws-cloud.jpg",
        },
      ],
    },

    {
      name: "Git",
      icon: <FaGitAlt />,
      category: "Version Control",
      certificates: [],
    },

    {
      name: "GitHub",
      icon: <FaGithub />,
      category: "Development",

      certificates: [
        {
          title: "GitHub Certificate",
          issuer: "GitHub",
          file: "/certificates/github.jpg",
        },
      ],
    },

    {
      name: "VS Code",
      icon: <FaLaptopCode />,
      category: "Development Tool",
      certificates: [],
    },

    {
      name: "Postman",
      icon: <FaPaperPlane />,
      category: "API Testing",

      certificates: [
        {
          title: "API Testing with Postman",
          issuer: "Postman",
          file: "/certificates/postman.png",
        },
      ],
    },

    {
      name: "Linux",
      icon: <FaLinux />,
      category: "Operating System",

      certificates: [
        {
          title: "Linux Certificate",
          issuer: "Linux",
          file: "/certificates/linux.jpg",
        },
      ],
    },

    {
      name: "Networking",
      icon: <FaNetworkWired />,
      category: "Network",

      certificates: [
        {
          title: "Computer Networks and Network Security",
          issuer: "Network Security",
          file: "/certificates/network-security.jpg",
        },

        {
          title: "Cisco Networking Certificate",
          issuer: "Cisco Networking",
          file: "/certificates/cisco.jpg",
        },
      ],
    },
  ];

  // Open certificate modal only if certificates exist
  const openCertificates = (skill) => {
    if (skill.certificates.length > 0) {
      setSelectedSkill(skill);
    }
  };

  // Close certificate modal
  const closeCertificates = () => {
    setSelectedSkill(null);
  };

  return (
    <section className="skills" id="skills">
      <div className="skills-container reveal">

        {/* =========================
            SECTION HEADING
        ========================= */}

        <div className="section-heading">
          <p>What I Work With</p>

          <h2>
            Skills & <span>Technologies</span>
          </h2>
        </div>

        <p className="skills-intro">
          Technologies and tools I use while learning, developing projects
          and exploring web development, cloud computing and computer
          networking.
        </p>


        {/* =========================
            SKILLS GRID
        ========================= */}

        <div className="skills-grid">

          {skills.map((skill, index) => (
            <div
              className={`skill-card ${
                skill.certificates.length > 0
                  ? "certificate-skill"
                  : ""
              }`}
              key={index}
              onClick={() => openCertificates(skill)}
            >

              {/* SKILL ICON */}

              <div className="skill-icon">
                {skill.icon}
              </div>


              {/* SKILL DETAILS */}

              <div className="skill-info">
                <h3>
                  {skill.name}
                </h3>

                <p>
                  {skill.category}
                </p>
              </div>


              {/* CERTIFICATE BADGE */}

              {skill.certificates.length > 0 && (
                <div className="certificate-badge">

                  <FaCertificate />

                  <span>
                    {skill.certificates.length === 1
                      ? "Certificate"
                      : `${skill.certificates.length} Certificates`}
                  </span>

                </div>
              )}

            </div>
          ))}

        </div>

      </div>


      {/* =========================
          CERTIFICATE MODAL
      ========================= */}

      {selectedSkill && (
        <div
          className="certificate-overlay"
          onClick={closeCertificates}
        >

          <div
            className="certificate-modal"
            onClick={(event) => event.stopPropagation()}
          >

            {/* CLOSE BUTTON */}

            <button
              className="certificate-close"
              onClick={closeCertificates}
              aria-label="Close certificate window"
            >
              <FaTimes />
            </button>


            {/* MODAL HEADING */}

            <div className="certificate-modal-heading">

              <div className="certificate-main-icon">
                {selectedSkill.icon}
              </div>

              <div>
                <span>
                  Certificates
                </span>

                <h2>
                  {selectedSkill.name}
                </h2>
              </div>

            </div>


            <p className="certificate-modal-description">
              Certificates I have earned related to{" "}
              {selectedSkill.name}.
            </p>


            {/* =========================
                CERTIFICATE LIST
            ========================= */}

            <div className="certificate-list">

              {selectedSkill.certificates.map(
                (certificate, index) => (

                  <div
                    className="certificate-item"
                    key={index}
                  >

                    {/* CERTIFICATE ICON */}

                    <div className="certificate-item-icon">
                      <FaCertificate />
                    </div>


                    {/* CERTIFICATE DETAILS */}

                    <div className="certificate-item-info">

                      <span>
                        {certificate.issuer}
                      </span>

                      <h3>
                        {certificate.title}
                      </h3>

                    </div>


                    {/* VIEW BUTTON */}

                    <a
                      href={certificate.file}
                      target="_blank"
                      rel="noreferrer"
                    >
                      View Certificate

                      <FaExternalLinkAlt />
                    </a>

                  </div>

                )
              )}

            </div>

          </div>

        </div>
      )}

    </section>
  );
}

export default Skills;