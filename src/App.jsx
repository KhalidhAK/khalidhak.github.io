import About from "./components/About";
import Skills from "./components/Skills";
import WorkExperience from "./components/WorkExperience";
import Publications from "./components/Publications";

export default function App() {
  return (
    <>
      <header className="hero">
        <div className="hero__content">
          <p className="eyebrow">Streaming platforms · Backend systems · AI exploration</p>
          <h1>Khalidh Ahamed</h1>
          <p className="hero__summary">
            Software engineer building reliable event-driven systems,
            real-time data platforms, and cloud-native services at scale.
          </p>
          <div className="hero__actions" aria-label="Contact links">
            <a href="mailto:khalidh98@gmail.com">Email</a>
            <a href="https://www.linkedin.com/in/khalidh-ahamed" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="/khalidh_ahamed_resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
          </div>
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
