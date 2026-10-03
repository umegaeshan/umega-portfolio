import "./GitHubStats.css";

import {
  FaGithub,
  FaExternalLinkAlt,
  FaCodeBranch,
  FaLaptopCode,
} from "react-icons/fa";

function GitHubStats() {
  const username = "umegaeshan";

  return (
    <section className="github-section" id="github">

      <div className="github-container reveal">

        {/* SECTION HEADING */}

        <div className="section-heading">

          <p>My Development Activity</p>

          <h2>
            GitHub <span>Stats</span>
          </h2>

        </div>


        <p className="github-intro">
          A quick look at my public GitHub activity, repositories
          and the programming languages used across my projects.
        </p>


        {/* GITHUB PROFILE CARD */}

        <div className="github-profile-card">

          <div className="github-profile-icon">
            <FaGithub />
          </div>

          <div className="github-profile-info">

            <span>GitHub Profile</span>

            <h3>Umega Eshan</h3>

            <p>
              Explore my repositories, projects and development journey
              on GitHub.
            </p>

          </div>


          <a
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noreferrer"
            className="github-profile-button"
          >
            Visit Profile

            <FaExternalLinkAlt />
          </a>

        </div>


        {/* STATS */}

        <div className="github-stats-grid">

          <div className="github-stat-card">

            <div className="github-card-title">
              <FaCodeBranch />

              <h3>GitHub Statistics</h3>
            </div>

            <img
              src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&hide_border=true&bg_color=00000000&title_color=60A5FA&text_color=CBD5E1&icon_color=3B82F6`}
              alt="Umega Eshan GitHub Statistics"
              className="github-stat-image"
            />

          </div>


          <div className="github-stat-card">

            <div className="github-card-title">
              <FaLaptopCode />

              <h3>Most Used Languages</h3>
            </div>

            <img
              src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&hide_border=true&bg_color=00000000&title_color=60A5FA&text_color=CBD5E1`}
              alt="Umega Eshan Most Used Languages"
              className="github-stat-image"
            />

          </div>

        </div>


        {/* BOTTOM BUTTON */}

        <div className="github-bottom">

          <p>
            Check out more projects and source code on my GitHub.
          </p>

          <a
            href={`https://github.com/${username}?tab=repositories`}
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />

            View All Repositories
          </a>

        </div>

      </div>

    </section>
  );
}

export default GitHubStats;