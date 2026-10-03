import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import GitHubStats from "./components/GitHubStats";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />

      <main>

        <Hero />

        <About />

        <Skills />

        <Projects />

        <GitHubStats />

        <section id="contact" className="section">
          <h1>Contact</h1>
        </section>

      </main>
    </>
  );
}

export default App;