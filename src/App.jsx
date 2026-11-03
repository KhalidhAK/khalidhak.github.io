import TopBar from "./components/TopBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import WorkExperience from "./components/WorkExperience";
import Publications from "./components/Publications";
import Footer from "./components/Footer";
import useSiteInteractions from "./hooks/useSiteInteractions";

export default function App() {
  const ui = useSiteInteractions();

  return (
    <div className={`site ${ui.themeClass}`} style={{ color: "var(--ink)", fontFamily: "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif", fontSynthesis: "none", textRendering: "optimizeLegibility", lineHeight: "1.6" }}>
      <TopBar ui={ui} />
      <Hero ui={ui} />
      <main className="main" style={{ width: "min(1160px, calc(100% - 2rem))", margin: "0 auto", paddingBottom: "clamp(3rem, 8vw, 6rem)" }}>
        <About ui={ui} />
        <Skills ui={ui} />
        <WorkExperience ui={ui} />
        <Publications ui={ui} />
      </main>
      <Footer ui={ui} />
    </div>
  );
}
