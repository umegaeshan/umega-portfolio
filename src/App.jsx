import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import GitHubStats from "./components/GitHubStats";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollReveal from "./components/ScrollReveal";
import BackToTop from "./components/BackToTop";

import "./App.css";

function App() {
  return (
    <>
      <ScrollReveal />

      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <GitHubStats />
        <Contact />
      </main>

      <Footer />

      <BackToTop />
    </>
  );
}

export default App;