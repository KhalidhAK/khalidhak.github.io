import { useState, useEffect } from "react";
import About from "./components/About";
import Skills from "./components/Skills";
import WorkExperience from "./components/WorkExperience";
import Publications from "./components/Publications";
import { FaSun, FaMoon } from "react-icons/fa"; // Import icons

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
    document.body.style.color = darkMode ? "#fff" : "#333"; // Update text color
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <>
      <header>
        <h1>KHALIDH AHAMED</h1>
        {/* <button
          onClick={toggleDarkMode}
          className="dark-mode-toggle"
          style={{
            position: "absolute",
            top: "1rem",
            right: "1rem",
            padding: "0.5rem",
            background: "transparent",
            border: "none",
            cursor: "pointer",
            fontSize: "1.5rem",
            color: darkMode ? "#ffc100" : "#0070c0",
          }}
        >
          {darkMode ? (
            <FaSun style={{ color: "white" }} /> // Sun icon with yellow color
          ) : (
            <FaMoon style={{ color: "white" }} /> // Moon icon with blue color
          )}
        </button> */}
        <div style={{ marginTop: "1rem", fontSize: "0.9rem", color: "#fff" }}>
          <a href="mailto:khalidh98@gmail.com" style={{ color: "#ffc100", textDecoration: "none" }}>khalidh98@gmail.com</a> | 
          <a href="https://www.linkedin.com/in/khalidh-ahamed" target="_blank" rel="noopener noreferrer" style={{ color: "#ffc100", textDecoration: "none", marginLeft: "0.5rem" }}>LinkedIn</a> | 
          <a href="/khalidh_ahamed_resume.pdf" target="_blank" rel="noopener noreferrer" style={{ color: "#ffc100", textDecoration: "none", marginLeft: "0.5rem" }}>Resume</a>
        </div>
      </header>
      <main>
        <About />
        <section id="skills">
          <Skills />
        </section>
        <section id="work-experience">
          <WorkExperience />
        </section>
        <section id="publications">
          <Publications />
        </section>
        {/* Remove the Contact section */}
      </main>
      <footer>
        <p>"When you look at the vast size of the universe, and how insignificant and accidental human life is in it, that seems most implausible." - Stephen Hawking
        </p>
      </footer>
    </>
  );
}
