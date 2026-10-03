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
} from "react-icons/fa";

function Skills() {
  const skills = [
    {
      name: "HTML5",
      icon: <FaHtml5 />,
      category: "Frontend",
    },

    {
      name: "CSS3",
      icon: <FaCss3Alt />,
      category: "Frontend",
    },

    {
      name: "JavaScript",
      icon: <FaJs />,
      category: "Programming",
    },

    {
      name: "React",
      icon: <FaReact />,
      category: "Frontend",
    },

    {
      name: "Tailwind CSS",
      icon: <FaWind />,
      category: "Frontend",
    },

    {
      name: "PHP",
      icon: <FaPhp />,
      category: "Backend",
    },

    {
      name: "Java",
      icon: <FaJava />,
      category: "Programming",
    },

    {
      name: "Python",
      icon: <FaPython />,
      category: "Programming",
    },

    {
      name: "Flutter",
      icon: <FaMobileAlt />,
      category: "Mobile Development",
    },

    {
      name: "Dart",
      icon: <FaCode />,
      category: "Programming",
    },

    {
      name: "MySQL",
      icon: <FaDatabase />,
      category: "Database",
    },

    {
      name: "AWS",
      icon: <FaAws />,
      category: "Cloud",
    },

    {
      name: "Git",
      icon: <FaGitAlt />,
      category: "Version Control",
    },

    {
      name: "GitHub",
      icon: <FaGithub />,
      category: "Development",
    },

    {
      name: "VS Code",
      icon: <FaLaptopCode />,
      category: "Development Tool",
    },

    {
      name: "Postman",
      icon: <FaPaperPlane />,
      category: "API Testing",
    },

    {
      name: "Linux",
      icon: <FaLinux />,
      category: "Operating System",
    },

    {
      name: "Networking",
      icon: <FaNetworkWired />,
      category: "Network",
    },
  ];

  return (
    <section className="skills" id="skills">

      <div className="about-container reveal">

        <div className="section-heading">
          <p>What I Work With</p>

          <h2>
            Skills & <span>Technologies</span>
          </h2>
        </div>

        <p className="skills-intro">
          Technologies and tools I use while learning, developing
          projects and exploring web development, cloud computing
          and computer networking.
        </p>

        <div className="skills-grid">

          {skills.map((skill, index) => (
            <div className="skill-card" key={index}>

              <div className="skill-icon">
                {skill.icon}
              </div>

              <div className="skill-info">
                <h3>{skill.name}</h3>
                <p>{skill.category}</p>
              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Skills;