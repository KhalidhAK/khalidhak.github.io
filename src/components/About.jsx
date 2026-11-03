export default function About({ ui }) {
  return (
    <section id="about" className={`about district ${ui.d_about}`} data-district="about" style={{ display: "grid", gridTemplateColumns: "minmax(0, 0.9fr) minmax(280px, 1.1fr)", gap: "clamp(1.5rem, 5vw, 4rem)", alignItems: "start", margin: "0 0 clamp(3rem, 8vw, 6rem)", borderTop: "1px solid var(--divider)", paddingTop: "clamp(2rem, 5vw, 4rem)" }}>
      <div style={{ gridColumn: "1 / -1", display: "flex", flexWrap: "wrap", alignItems: "flex-end", gap: "0.5rem 0.75rem", margin: "0 0 0.4rem" }}>
        <svg className="px-scene sign" viewBox="0 0 48 24" shapeRendering="crispEdges" aria-hidden="true" style={{ display: "block", width: "96px", height: "auto" }}>
          <rect className="f-line" x="0" y="22" width="48" height="1" />
          <g className="sign-board">
            <rect className="f-desk2" x="8" y="10" width="2" height="12" />
            <rect className="f-bug2" x="1" y="3" width="17" height="9" />
            <rect className="f-amber" x="2" y="4" width="15" height="7" />
            <rect className="f-bug2" x="4" y="6" width="9" height="1" />
            <rect className="f-bug2" x="4" y="8" width="6" height="1" />
            <rect className="f-amber" x="18" y="5" width="2" height="5" />
            <rect className="f-amber" x="20" y="6" width="1" height="3" />
          </g>
          <g transform="translate(28 10)">
            <g className="arrive">
              <g className={ui.dodge_sign0}>
                <rect className="bot-limb f-blight" x="4" y="0" width="1" height="1" />
                <rect className="bot-limb f-lap2" x="4" y="1" width="1" height="1" />
                <g className="bot-head">
                  <rect className="f-lap" x="1" y="2" width="7" height="5" />
                  <rect className="f-slot" x="2" y="3" width="5" height="3" />
                  <g data-bot="sign0" style={{ transform: ui.eye_sign0 }}>
                    <rect className="f-eye" x="3" y="4" width="1" height="1" />
                    <rect className="f-eye" x="5" y="4" width="1" height="1" />
                  </g>
                </g>
                <rect className="bot-limb f-hood" x="2" y="7" width="5" height="3" />
                <rect className="bot-limb f-blight" x="4" y="8" width="1" height="1" />
                <rect className="bot-limb f-lap2" x="1" y="7" width="1" height="1" />
                <rect className="bot-limb f-lap2" x="0" y="6" width="1" height="1" />
                <rect className="bot-limb f-lap2" x="7" y="7" width="1" height="3" />
                <rect className="bot-limb f-lap2" x="2" y="10" width="2" height="2" />
                <rect className="bot-limb f-lap2" x="5" y="10" width="2" height="2" />
              </g>
            </g>
          </g>
        </svg>
        <p className="pixel-font" style={{ margin: "0 0 0.2rem", color: "var(--eyebrow)", fontSize: "0.82rem", fontWeight: "700" }}>
          02 · ABOUT
        </p>
      </div>
      <h2 style={{ gridColumn: "1", margin: "0", color: "var(--ink)", fontSize: "clamp(2rem, 4vw, 3.4rem)", lineHeight: "1.05", letterSpacing: "0", textAlign: "left" }}>
        Building dependable data systems for high-volume products.
      </h2>
      <p className="about-text" style={{ gridColumn: "2", margin: "0", color: "var(--body)", fontSize: "clamp(1.05rem, 1.8vw, 1.25rem)" }}>
        I design and implement real-time data streaming architectures and scalable backend systems that power reliable, high-performance applications. I'm constantly learning and evolving, driven by a curiosity to stay ahead of emerging technologies. Lately, I’ve been exploring and integrating AI technologies to build innovative solutions that drive real-world impact and deliver measurable results.
      </p>
    </section>
  );
}
