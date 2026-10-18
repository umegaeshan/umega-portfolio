import { useState } from "react";
import "./Navbar.css";
import { FaBars, FaTimes, FaDownload } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* LOGO */}
        <a href="#home" className="logo" onClick={closeMenu}>
          UMEGA<span>.</span>
        </a>

        {/* NAV LINKS */}
        <div className={`nav-links ${menuOpen ? "active" : ""}`}>
          <a href="#home" onClick={closeMenu}>
            Home
          </a>

          <a href="#about" onClick={closeMenu}>
            About
          </a>

          <a href="#skills" onClick={closeMenu}>
            Skills
          </a>

          <a href="#projects" onClick={closeMenu}>
            Projects
          </a>

          <a href="#github" onClick={closeMenu}>
            GitHub
          </a>

          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>

          {/* MOBILE CV BUTTON */}
          <a
            href="/cv/Umega_Eshan_CV.pdf"
            download="Umega_Eshan_CV.pdf"
            className="mobile-cv-btn"
            onClick={closeMenu}
          >
            <FaDownload />
            Download CV
          </a>
        </div>

        {/* DESKTOP CV BUTTON */}
        <a
          href="/cv/Umega_Eshan_CV.pdf"
          download="Umega_Eshan_CV.pdf"
          className="navbar-cv-btn"
        >
          <FaDownload />
          Download CV
        </a>

        {/* MOBILE MENU BUTTON */}
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