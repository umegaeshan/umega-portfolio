import "./Hero.css";

import profileImage from "../assets/profile.png";

import {
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
} from "react-icons/fa";

function Hero() {
  return (
    <section className="hero" id="home">

      <div className="hero-container">

        {/* LEFT SIDE */}
        <div className="hero-content">

          <p className="hero-small-text">
            Hello, I'm
          </p>

          <h1 className="hero-name">
            Umega <span>Eshan</span>
          </h1>

          <h2 className="hero-title">
            Aspiring Web Developer
          </h2>

          <p className="hero-subtitle">
            Cloud & Network Enthusiast
          </p>

          <p className="hero-description">
            I enjoy building modern web applications and exploring
            cloud technologies and computer networking. I continuously
            learn new technologies and improve my skills through
            practical projects.
          </p>

          {/* BUTTONS */}
          <div className="hero-buttons">

            <a
              href="#projects"
              className="primary-btn"
            >
              View My Work
            </a>

            <a
              href="#contact"
              className="secondary-btn"
            >
              Contact Me
            </a>

          </div>

          {/* SOCIAL ICONS */}
          <div className="hero-socials">

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

        </div>


        {/* RIGHT SIDE */}
        <div className="hero-image-area">

          <div className="hero-glow"></div>

          <div className="hero-image-wrapper">

            <img
              src={profileImage}
              alt="Umega Eshan"
              className="hero-image"
            />

          </div>

        </div>

      </div>

      {/* SCROLL INDICATOR */}
      <a href="#about" className="scroll-down">
        <span></span>
      </a>

    </section>
  );
}

export default Hero;