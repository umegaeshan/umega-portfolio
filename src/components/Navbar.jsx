import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

import "./Navbar.css";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">

      <div className="navbar-container">

        {/* LOGO */}

        <a
          href="#home"
          className="logo"
          onClick={closeMenu}
        >
          UMEGA<span>.</span>
        </a>


        {/* NAV LINKS */}

        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>

          <li>
            <a href="#home" onClick={closeMenu}>
              Home
            </a>
          </li>

          <li>
            <a href="#about" onClick={closeMenu}>
              About
            </a>
          </li>

          <li>
            <a href="#skills" onClick={closeMenu}>
              Skills
            </a>
          </li>

          <li>
            <a href="#projects" onClick={closeMenu}>
              Projects
            </a>
          </li>

          <li>
            <a href="#github" onClick={closeMenu}>
              GitHub
            </a>
          </li>

          <li>
            <a href="#contact" onClick={closeMenu}>
              Contact
            </a>
          </li>


          {/* MOBILE BUTTON */}

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


        {/* DESKTOP BUTTON */}

        <a
          href="#contact"
          className="nav-button"
        >
          Let's Talk
        </a>


        {/* HAMBURGER */}

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