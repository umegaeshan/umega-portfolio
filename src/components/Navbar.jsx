import { useState } from "react";

import "./Navbar.css";

import {
  FaBars,
  FaTimes,
  FaDownload,
  FaChevronDown,
  FaNetworkWired,
  FaCode,
  FaFileAlt,
} from "react-icons/fa";


function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);


  const closeMenu = () => {
    setMenuOpen(false);
  };


  return (
    <nav className="navbar">

      <div className="navbar-container">


        {/* =====================================
            LOGO
        ===================================== */}

        <a
          href="#home"
          className="logo"
          onClick={closeMenu}
        >
          UMEGA<span>.</span>
        </a>



        {/* =====================================
            NAVIGATION LINKS
        ===================================== */}

        <div
          className={`nav-links ${
            menuOpen ? "active" : ""
          }`}
        >

          <a
            href="#home"
            onClick={closeMenu}
          >
            Home
          </a>


          <a
            href="#about"
            onClick={closeMenu}
          >
            About
          </a>


          <a
            href="#skills"
            onClick={closeMenu}
          >
            Skills
          </a>


          <a
            href="#projects"
            onClick={closeMenu}
          >
            Projects
          </a>


          <a
            href="#github"
            onClick={closeMenu}
          >
            GitHub
          </a>


          <a
            href="#contact"
            onClick={closeMenu}
          >
            Contact
          </a>



          {/* =====================================
              MOBILE CV AREA
          ===================================== */}

          <div className="mobile-cv-area">

            <p className="mobile-cv-title">
              Download CV
            </p>


            {/* COMMON CV */}

            <a
              href="/cv/Umega_Eshan_Common_CV.pdf"
              download="Umega_Eshan_Common_CV.pdf"
              className="mobile-cv-option mobile-common-cv"
              onClick={closeMenu}
            >

              <FaFileAlt />

              <div>
                <strong>
                  Common CV
                </strong>

                <span>
                  General purpose
                </span>
              </div>

              <FaDownload />

            </a>


            {/* NETWORK CV */}

            <a
              href="/cv/Umega_Eshan_Network_CV.pdf"
              download="Umega_Eshan_Network_CV.pdf"
              className="mobile-cv-option"
              onClick={closeMenu}
            >

              <FaNetworkWired />

              <div>
                <strong>
                  Network CV
                </strong>

                <span>
                  Cloud & Networking
                </span>
              </div>

              <FaDownload />

            </a>


            {/* FULL STACK CV */}

            <a
              href="/cv/Umega_Eshan_Full_Stack_CV.pdf"
              download="Umega_Eshan_Full_Stack_CV.pdf"
              className="mobile-cv-option"
              onClick={closeMenu}
            >

              <FaCode />

              <div>
                <strong>
                  Full Stack CV
                </strong>

                <span>
                  Software & Web
                </span>
              </div>

              <FaDownload />

            </a>

          </div>

        </div>



        {/* =====================================
            DESKTOP CV DROPDOWN
        ===================================== */}

        <div className="cv-dropdown">

          {/* MAIN BUTTON
              Normal click = Common CV
          */}

          <a
            href="/cv/Umega_Eshan_Common_CV.pdf"
            download="Umega_Eshan_Common_CV.pdf"
            className="navbar-cv-btn"
          >

            <FaDownload />

            <span>
              Download CV
            </span>

            <FaChevronDown
              className="cv-chevron"
            />

          </a>



          {/* DROPDOWN */}

          <div className="cv-dropdown-menu">

            <div className="cv-dropdown-header">

              <span>
                Specialized CVs
              </span>

              <p>
                Choose the version that fits the role
              </p>

            </div>



            {/* NETWORK CV */}

            <a
              href="/cv/Umega_Eshan_Network_CV.pdf"
              download="Umega_Eshan_Network_CV.pdf"
              className="cv-dropdown-item"
            >

              <div className="cv-dropdown-icon">
                <FaNetworkWired />
              </div>


              <div className="cv-dropdown-info">

                <strong>
                  Network Engineering
                </strong>

                <span>
                  Networking, Cloud & AWS
                </span>

              </div>


              <FaDownload
                className="cv-item-download"
              />

            </a>



            {/* FULL STACK CV */}

            <a
              href="/cv/Umega_Eshan_Full_Stack_CV.pdf"
              download="Umega_Eshan_Full_Stack_CV.pdf"
              className="cv-dropdown-item"
            >

              <div className="cv-dropdown-icon">
                <FaCode />
              </div>


              <div className="cv-dropdown-info">

                <strong>
                  Full Stack Developer
                </strong>

                <span>
                  Web & Software Development
                </span>

              </div>


              <FaDownload
                className="cv-item-download"
              />

            </a>



            {/* SMALL NOTE */}

            <div className="cv-dropdown-note">

              <FaFileAlt />

              Clicking the main button downloads
              my Common CV.

            </div>

          </div>

        </div>



        {/* =====================================
            MOBILE MENU BUTTON
        ===================================== */}

        <button
          className="menu-button"
          onClick={() =>
            setMenuOpen(!menuOpen)
          }
          aria-label="Toggle navigation menu"
        >

          {menuOpen
            ? <FaTimes />
            : <FaBars />
          }

        </button>

      </div>

    </nav>
  );
}


export default Navbar;