import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />

      <main>

        <Hero />

        <About />

        <section id="skills" className="section">
          <h1>Skills</h1>
        </section>

        <section id="projects" className="section">
          <h1>Projects</h1>
        </section>

        <section id="contact" className="section">
          <h1>Contact</h1>
        </section>

      </main>
    </>
  );
}

export default App;