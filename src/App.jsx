import About from "./components/About";
import Skills from "./components/Skills";
import WorkExperience from "./components/WorkExperience";
import Publications from "./components/Publications";
import useScrollReveal from "./hooks/useScrollReveal";

export default function App() {
  useScrollReveal();

  return (
    <>
      <header className="hero">
        <div className="hero__content" data-reveal>
          <p className="eyebrow">Streaming platforms · Backend systems · AI exploration</p>
          <h1>Khalidh Ahamed</h1>
          <p className="hero__summary">
            Software engineer building reliable event-driven systems,
            real-time data platforms, and cloud-native services at scale.
          </p>
          <div className="hero__actions" aria-label="Contact links">
            <a href="mailto:khalidh98@gmail.com">khalidh98@gmail.com</a>
            <a href="tel:+917539903768">+91 75399 03768</a>
            <a href="https://www.linkedin.com/in/khalidh-ahamed" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="/khalidh_ahamed_resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
          </div>
        </div>
        <div className="hero__visual" data-reveal data-reveal-delay="2">
          <div className="signal-orbit" aria-hidden="true">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="hero__panel" aria-label="Career snapshot">
            <div className="metric-card">
              <span>Event-Driven Architecture</span>
              <p>Domain-driven design · System resilience</p>
            </div>
            <div className="metric-card">
              <span>Streaming & Data Platforms</span>
              <p>Kafka · Real-time processing · ETL pipelines</p>
            </div>
            <div className="metric-card">
              <span>Fullstack Engineering</span>
              <p>Spring Boot · Cloud services · React · Next.js</p>
            </div>
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
