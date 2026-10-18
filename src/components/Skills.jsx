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
  FaCheckCircle,
} from "react-icons/fa";


function Skills() {

  const [selectedSkill, setSelectedSkill] = useState(null);


  /* ========================================
     SKILLS & CERTIFICATES DATA
  ======================================== */

  const skills = [

    /* HTML */

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


    /* CSS */

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


    /* JAVASCRIPT */

    {
      name: "JavaScript",
      icon: <FaJs />,
      category: "Programming",
      certificates: [],
    },


    /* REACT */

    {
      name: "React",
      icon: <FaReact />,
      category: "Frontend",
      certificates: [],
    },


    /* TAILWIND */

    {
      name: "Tailwind CSS",
      icon: <FaWind />,
      category: "Frontend",
      certificates: [],
    },


    /* PHP */

    {
      name: "PHP",
      icon: <FaPhp />,
      category: "Backend",

      certificates: [
        {
          title:
            "Learn PHP and MySQL for Web Application and Web Development",

          issuer: "Web Development",

          file: "/certificates/my-sql.jpg",
        },
      ],
    },


    /* JAVA */

    {
      name: "Java",
      icon: <FaJava />,
      category: "Programming",
      certificates: [],
    },


    /* PYTHON */

    {
      name: "Python",
      icon: <FaPython />,
      category: "Programming",
      certificates: [],
    },


    /* FLUTTER */

    {
      name: "Flutter",
      icon: <FaMobileAlt />,
      category: "Mobile Development",
      certificates: [],
    },


    /* DART */

    {
      name: "Dart",
      icon: <FaCode />,
      category: "Programming",
      certificates: [],
    },


    /* MYSQL */

    {
      name: "MySQL",
      icon: <FaDatabase />,
      category: "Database",

      certificates: [
        {
          title:
            "Learn PHP and MySQL for Web Application and Web Development",

          issuer: "Database & Web Development",

          file: "/certificates/my-sql.jpg",
        },
      ],
    },


    /* ========================================
       AWS
    ======================================== */

    {
      name: "AWS",
      icon: <FaAws />,
      category: "Cloud",

      certificates: [

        {
          title:
            "AWS Academy Graduate - Cloud Architecting",

          issuer: "AWS Academy",

          file: "/certificates/aws-cloud.jpg",
        },


        {
          title:
            "AWS Cloud Practitioner Essentials",

          issuer: "AWS Training & Certification",

          file:
            "/certificates/aws-cloud-practitioner.jpg",
        },

      ],
    },


    /* GIT */

    {
      name: "Git",
      icon: <FaGitAlt />,
      category: "Version Control",
      certificates: [],
    },


    /* GITHUB */

    {
      name: "GitHub",
      icon: <FaGithub />,
      category: "Development",

      certificates: [
        {
          title: "GitHub Certificate",
          issuer: "GitHub",

          file:
            "/certificates/github.jpg",
        },
      ],
    },


    /* VS CODE */

    {
      name: "VS Code",
      icon: <FaLaptopCode />,
      category: "Development Tool",
      certificates: [],
    },


    /* POSTMAN */

    {
      name: "Postman",
      icon: <FaPaperPlane />,
      category: "API Testing",

      certificates: [
        {
          title:
            "API Testing with Postman",

          issuer:
            "Postman",

          file:
            "/certificates/postman.png",
        },
      ],
    },


    /* LINUX */

    {
      name: "Linux",
      icon: <FaLinux />,
      category: "Operating System",

      certificates: [
        {
          title:
            "Linux Certificate",

          issuer:
            "Linux",

          file:
            "/certificates/linux.jpg",
        },
      ],
    },


    /* ========================================
       NETWORKING
    ======================================== */

    {
      name: "Networking",
      icon: <FaNetworkWired />,
      category: "Network",

      certificates: [

        {
          title:
            "Computer Networks and Network Security",

          issuer:
            "IBM Skills Network",

          file:
            "/certificates/network-security.jpg",
        },


        {
          title:
            "Cisco Networking Certificate",

          issuer:
            "Cisco Networking",

          file:
            "/certificates/cisco.jpg",
        },


        {
          title:
            "Network Security & Database Vulnerabilities",

          issuer:
            "IBM / Coursera",

          file:
            "/certificates/ibm-network-security.jpg",

          verify:
            "https://www.credly.com/badges/98c620c0-e73b-4b93-b276-90c36245c274",
        },

      ],
    },

  ];


  /* ========================================
     OPEN CERTIFICATE MODAL
  ======================================== */

  const openCertificates = (skill) => {

    if (skill.certificates.length > 0) {

      setSelectedSkill(skill);

    }

  };


  /* ========================================
     CLOSE CERTIFICATE MODAL
  ======================================== */

  const closeCertificates = () => {

    setSelectedSkill(null);

  };


  return (

    <section
      className="skills"
      id="skills"
    >

      <div className="skills-container reveal">


        {/* ====================================
            SECTION HEADING
        ==================================== */}

        <div className="section-heading">

          <p>
            What I Work With
          </p>


          <h2>
            Skills &{" "}
            <span>
              Technologies
            </span>
          </h2>

        </div>


        <p className="skills-intro">

          Technologies and tools I use while learning,
          developing projects and exploring web development,
          cloud computing and computer networking.

        </p>



        {/* ====================================
            SKILLS GRID
        ==================================== */}

        <div className="skills-grid">


          {skills.map((skill, index) => (

            <div
              className={`skill-card ${
                skill.certificates.length > 0
                  ? "certificate-skill"
                  : ""
              }`}

              key={index}

              onClick={() =>
                openCertificates(skill)
              }
            >


              {/* SKILL ICON */}

              <div className="skill-icon">

                {skill.icon}

              </div>



              {/* SKILL INFORMATION */}

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

                      : `${skill.certificates.length} Certificates`
                    }

                  </span>

                </div>

              )}


            </div>

          ))}


        </div>

      </div>



      {/* ========================================
          CERTIFICATE MODAL
      ======================================== */}

      {selectedSkill && (

        <div
          className="certificate-overlay"

          onClick={
            closeCertificates
          }
        >


          <div
            className="certificate-modal"

            onClick={(event) =>
              event.stopPropagation()
            }
          >


            {/* CLOSE BUTTON */}

            <button
              className="certificate-close"

              onClick={
                closeCertificates
              }

              aria-label="Close certificate window"
            >

              <FaTimes />

            </button>



            {/* =================================
                MODAL HEADING
            ================================= */}

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

              <strong>
                {selectedSkill.name}
              </strong>

              .

            </p>



            {/* =================================
                CERTIFICATE LIST
            ================================= */}

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



                    {/* BUTTON AREA */}

                    <div className="certificate-actions">


                      {/* VIEW CERTIFICATE */}

                      <a
                        href={
                          certificate.file
                        }

                        target="_blank"

                        rel="noreferrer"

                        className="certificate-view-btn"
                      >

                        View Certificate

                        <FaExternalLinkAlt />

                      </a>



                      {/* VERIFY CERTIFICATE */}

                      {certificate.verify && (

                        <a
                          href={
                            certificate.verify
                          }

                          target="_blank"

                          rel="noreferrer"

                          className="certificate-verify-btn"
                        >

                          <FaCheckCircle />

                          Verify

                        </a>

                      )}


                    </div>

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