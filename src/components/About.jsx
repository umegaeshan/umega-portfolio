import "./About.css";

import {
  FaCode,
  FaCloud,
  FaNetworkWired,
  FaGraduationCap,
} from "react-icons/fa";

function About() {
  return (
    <section className="about" id="about">

      <div className="about-container reveal">

        {/* SECTION HEADING */}
        <div className="section-heading">

          <p>Get To Know Me</p>

          <h2>
            About <span>Me</span>
          </h2>

        </div>


        <div className="about-content">

          {/* LEFT SIDE */}
          <div className="about-text">

            <h3>
              I'm Umega Eshan
            </h3>

            <p>
              I'm a technology student who enjoys learning and building
              practical projects using modern technologies.
            </p>

            <p>
              My main interests are Web Development, Cloud Computing,
              and Computer Networking. I enjoy exploring different
              technologies and improving my skills through real-world
              projects.
            </p>

            <p>
              My goal is to continue learning, gain practical experience,
              and grow into a skilled technology professional.
            </p>


            {/* EDUCATION CARD */}
            <div className="education-card">

              <div className="education-icon">
                <FaGraduationCap />
              </div>

              <div>
                <span>Education</span>

                <h4>University Student</h4>

                <p>
                  Learning software, networking, cloud and automation
                  technologies.
                </p>
              </div>

            </div>

          </div>


          {/* RIGHT SIDE */}
          <div className="interest-grid">

            <div className="interest-card">

              <div className="interest-icon">
                <FaCode />
              </div>

              <h3>Web Development</h3>

              <p>
                Building modern websites and web applications using
                frontend and backend technologies.
              </p>

            </div>


            <div className="interest-card">

              <div className="interest-icon">
                <FaCloud />
              </div>

              <h3>Cloud Computing</h3>

              <p>
                Exploring cloud platforms, cloud architecture and modern
                cloud technologies.
              </p>

            </div>


            <div className="interest-card">

              <div className="interest-icon">
                <FaNetworkWired />
              </div>

              <h3>Networking</h3>

              <p>
                Learning computer networks, network security,
                configuration and infrastructure.
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;