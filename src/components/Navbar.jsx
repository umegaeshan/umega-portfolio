import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const [activeSection, setActiveSection] = useState("home");

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const handleScroll = () => {
      let currentSection = "home";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
          currentSection = section.getAttribute("id");
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="navbar">

      <div className="navbar-container">

        <a
          href="#home"
          className="logo"
          onClick={closeMenu}
        >
          UMEGA<span>.</span>
        </a>


        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>

          <li>
            <a
              href="#home"
              onClick={closeMenu}
              className={activeSection === "home" ? "active-link" : ""}
            >
              Home
            </a>
          </li>


          <li>
            <a
              href="#about"
              onClick={closeMenu}
              className={activeSection === "about" ? "active-link" : ""}
            >
              About
            </a>
          </li>


          <li>
            <a
              href="#skills"
              onClick={closeMenu}
              className={activeSection === "skills" ? "active-link" : ""}
            >
              Skills
            </a>
          </li>


          <li>
            <a
              href="#projects"
              onClick={closeMenu}
              className={activeSection === "projects" ? "active-link" : ""}
            >
              Projects
            </a>
          </li>


          <li>
            <a
              href="#github"
              onClick={closeMenu}
              className={activeSection === "github" ? "active-link" : ""}
            >
              GitHub
            </a>
          </li>


          <li>
            <a
              href="#contact"
              onClick={closeMenu}
              className={activeSection === "contact" ? "active-link" : ""}
            >
              Contact
            </a>
          </li>


          <li className="mobile-talk-item">

            <a
              href="#contact"
              className="mobile-talk-button"
              onClick={closeMenu}
            >
              Let's Talk
            </a>

          </li>

        </ul>


        <a
          href="#contact"
          className="nav-button"
        >
          Let's Talk
        </a>


        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>

    </nav>
  );
}

export default Navbar;