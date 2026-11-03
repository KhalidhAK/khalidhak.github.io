import { FiLinkedin, FiMail, FiPhone } from "react-icons/fi";

const NAV_LINKS = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "work-experience", label: "Experience" },
  { id: "publications", label: "Writing" },
];

const actionStyle = { display: "inline-flex", flex: "0 0 auto", minHeight: "44px", alignItems: "center", border: "2px solid var(--px-frame)", borderRadius: "2px", padding: "0.5rem 0.85rem", background: "var(--surface-90)", boxShadow: "3px 3px 0 var(--px-shadow)", color: "var(--eyebrow)", fontSize: "0.88rem", fontWeight: "700", textDecoration: "none", whiteSpace: "nowrap", transition: "transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease" };

function Signpost({ className = "", size }) {
  return (
    <svg className={`px-scene ${className}`} viewBox="1 3 20 20" width={size} height={size} shapeRendering="crispEdges" aria-hidden="true">
      <rect className="f-line" x="1" y="22" width="20" height="1" />
      <rect className="f-desk2" x="8" y="10" width="2" height="12" />
      <rect className="f-bug2" x="1" y="3" width="17" height="9" />
      <rect className="f-amber" x="2" y="4" width="15" height="7" />
      <rect className="f-bug2" x="4" y="6" width="9" height="1" />
      <rect className="f-bug2" x="4" y="8" width="6" height="1" />
      <rect className="f-amber" x="18" y="5" width="2" height="5" />
      <rect className="f-amber" x="20" y="6" width="1" height="3" />
    </svg>
  );
}

export default function TopBar({ ui }) {
  return (
    <nav className={`topbar ${ui.barClass}`} aria-label="Sections and contact" style={{ position: "sticky", top: "0", zIndex: "50", borderBottom: "1px solid transparent", transition: "background 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease, backdrop-filter 0.25s ease" }}>
      <div className="topbar-row" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "0.25rem 1rem", width: "min(1160px, calc(100% - 2rem))", margin: "0 auto", padding: "0.65rem 0" }}>
        <a className="pixel-font" href="#top" style={{ display: "inline-flex", minHeight: "44px", alignItems: "center", color: "var(--ink)", fontSize: "0.95rem", fontWeight: "700", textDecoration: "none" }}>
          <span className="logo-prompt" aria-hidden="true" style={{ marginRight: "0.45em", color: "var(--accent)" }}>
            &gt;
          </span>
          KHAL
          <span className="cursor logo-cursor" aria-hidden="true" style={{ display: "inline-block", width: "0.5em", height: "0.9em", marginLeft: "0.2em", background: "var(--accent)" }} />
        </a>
        <div className="topbar-links" style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginLeft: "auto", minWidth: "0" }}>
          <a className="action" href="mailto:khalidh98@gmail.com" aria-label="Email khalidh98@gmail.com" title="khalidh98@gmail.com" style={actionStyle}>
            <span className="action-icon" aria-hidden="true"><FiMail size={20} /></span>
            <span className="action-label">khalidh98@gmail.com</span>
          </a>
          <a className="action" href="tel:+917539903768" aria-label="Call +91 75399 03768" title="+91 75399 03768" style={actionStyle}>
            <span className="action-icon" aria-hidden="true"><FiPhone size={20} /></span>
            <span className="action-label">+91 75399 03768</span>
          </a>
          <a className="action" href="https://www.linkedin.com/in/khalidh-ahamed" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn" style={actionStyle}>
            <span className="action-icon" aria-hidden="true"><FiLinkedin size={20} /></span>
            <span className="action-label">LinkedIn</span>
          </a>
          <a className="action" href="/khalidh_ahamed_resume.pdf" target="_blank" rel="noopener noreferrer" aria-label="Resume (CV)" title="Resume" style={actionStyle}>
            <span className="action-icon" aria-hidden="true"><span className="pixel-font" style={{ fontSize: "0.82rem" }}>CV</span></span>
            <span className="action-label">Resume</span>
          </a>
        </div>
        <button type="button" className="theme-toggle" onClick={ui.toggleTheme} aria-label={ui.toggleLabel} title={ui.toggleLabel} style={{ display: "inline-flex", flex: "0 0 auto", width: "44px", height: "44px", alignItems: "center", justifyContent: "center", border: "2px solid var(--px-frame)", borderRadius: "2px", padding: "0", background: "var(--surface-90)", boxShadow: "3px 3px 0 var(--px-shadow)", color: "var(--eyebrow)", cursor: "pointer", backdropFilter: "blur(14px)", transition: "transform 0.2s ease, background 0.2s ease, color 0.2s ease" }}>
          {ui.isDark && (
            <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
            </svg>
          )}
          {ui.isLight && (
            <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          )}
        </button>
        <div className="site-nav">
          <Signpost className="nav-sign" size={22} />
          <button type="button" className="nav-toggle" onClick={ui.toggleNav} aria-label={ui.navOpen ? "Close section menu" : "Open section menu"} aria-expanded={ui.navOpen} aria-controls="section-nav" title="Sections">
            <Signpost size={26} />
          </button>
          <div id="section-nav" className={`nav-links ${ui.navOpen ? "is-open" : ""}`}>
            {NAV_LINKS.map((link) => (
              <a key={link.id} className={`nav-link pixel-font ${ui.activeSection === link.id ? "is-active" : ""}`} href={`#${link.id}`} onClick={ui.closeNav} aria-current={ui.activeSection === link.id ? "true" : undefined}>
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
