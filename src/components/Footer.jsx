import "./Footer.css";

import {
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
  FaHeart,
} from "react-icons/fa";

function Footer() {

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">

      <div className="footer-container reveal">

        <a href="#home" className="footer-logo">
          UMEGA<span>.</span>
        </a>


        <p className="footer-text">
          Building, learning and exploring technology one project at a time.
        </p>


        <div className="footer-socials">

          <a
            href="https://github.com/umegaeshan"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>


          <a
            href="https://www.linkedin.com/in/umega-eshan-6baa06356"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </a>


          <a
            href="mailto:umegaeshan@gmail.com"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>

        </div>


        <div className="footer-bottom">

          <p>
            © {currentYear} Umega Eshan. All rights reserved.
          </p>

          <p className="built-text">
            Built with <FaHeart /> using React
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;