import "./Hero.css";

import profileImage from "../assets/profile.png";

import {
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
  FaArrowRight,
} from "react-icons/fa";

function Hero() {
  return (
    <section className="hero" id="home">

      {/* STARLIGHT BACKGROUND */}
      <div className="starlight-background">
        <div className="stars stars-small"></div>
        <div className="stars stars-medium"></div>
        <div className="stars stars-large"></div>
      </div>

      {/* BACKGROUND GLOW */}
      <div className="hero-background-glow"></div>

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
              <FaArrowRight />
            </a>

            <a
              href="#contact"
              className="secondary-btn"
            >
              Contact Me
            </a>

          </div>

          {/* SOCIAL LINKS */}
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
        <div className="hero-visual">

          {/* BACK HALO */}
          <div className="portrait-halo"></div>

          {/* DECORATIVE CIRCLES */}
          <div className="portrait-circle circle-one"></div>
          <div className="portrait-circle circle-two"></div>

          {/* BACK ORBIT */}
          <svg
            className="portrait-orbit orbit-back"
            viewBox="0 0 600 600"
            aria-hidden="true"
          >
            <ellipse
              cx="300"
              cy="335"
              rx="255"
              ry="118"
            />
          </svg>

          {/* TECH LABELS */}
          <div className="hero-tech-chip chip-web">
            <span></span>
            WEB
          </div>

          <div className="hero-tech-chip chip-cloud">
            <span></span>
            CLOUD
          </div>

          <div className="hero-tech-chip chip-network">
            <span></span>
            NETWORK
          </div>

          {/* PORTRAIT */}
          <div className="portrait-image-wrap">

            <img
              src={profileImage}
              alt="Umega Eshan"
              className="hero-image"
            />

          </div>

          {/* FRONT ORBIT */}
          <svg
            className="portrait-orbit orbit-front"
            viewBox="0 0 600 600"
            aria-hidden="true"
          >
            <path
              d="
                M 52 355
                C 125 445,
                  460 470,
                  548 350
              "
            />
          </svg>

          {/* ORBIT DOT */}
          <div className="orbit-dot"></div>

          {/* BOTTOM BLEND */}
          <div className="portrait-bottom-glow"></div>

        </div>

      </div>

      {/* SCROLL */}
      <div className="scroll-down">
        <span></span>
      </div>

    </section>
  );
}

export default Hero;