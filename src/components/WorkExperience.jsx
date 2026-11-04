export default function WorkExperience({ ui }) {
  return (
    <section id="work-experience" className={`district ${ui.d_work}`} data-district="work" style={{ margin: "0 0 clamp(3rem, 8vw, 6rem)" }}>
      <div style={{ maxWidth: "760px", marginBottom: "1.5rem" }}>
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", gap: "0.5rem 0.75rem", margin: "0 0 0.9rem" }}>
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
                <g className={ui.dodge_sign2}>
                  <rect className="bot-limb f-blight" x="4" y="0" width="1" height="1" />
                  <rect className="bot-limb f-lap2" x="4" y="1" width="1" height="1" />
                  <g className="bot-head">
                    <rect className="f-lap" x="1" y="2" width="7" height="5" />
                    <rect className="f-slot" x="2" y="3" width="5" height="3" />
                    <g data-bot="sign2" style={{ transform: ui.eye_sign2 }}>
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
            04 · EXPERIENCE
          </p>
        </div>
        <h2 style={{ margin: "0", color: "var(--ink)", fontSize: "clamp(2rem, 4vw, 3.4rem)", lineHeight: "1.05", letterSpacing: "0" }}>
          Impact across streaming, migration, and platform engineering.
        </h2>
      </div>
      <div className="timeline" style={{ position: "relative", display: "grid", gap: "1rem" }}>
        <article className="experience-card pixel-card" style={{ position: "relative", display: "grid", gap: "1.35rem", marginLeft: "3.6rem", border: "3px solid var(--px-frame)", borderRadius: "4px", padding: "clamp(1.15rem, 3vw, 1.65rem)", background: "var(--surface-90)", boxShadow: "6px 6px 0 var(--px-shadow)" }}>
          <div className="marker" aria-hidden="true" style={{ position: "absolute", top: "1.35rem", left: "-3.6rem", display: "grid", width: "3.1rem", height: "3.1rem", placeItems: "center", border: "3px solid var(--px-frame)", borderRadius: "2px", background: "var(--accent)", color: "var(--stat-ink)", boxShadow: "3px 3px 0 var(--px-shadow)", fontFamily: "'Silkscreen', ui-monospace, monospace", fontSize: "0.72rem", fontWeight: "700" }}>
            LV4
          </div>
          <div className="card-header" style={{ display: "flex", gap: "1rem", alignItems: "flex-start", justifyContent: "space-between" }}>
            <div>
              <p className="pixel-font" style={{ margin: "0 0 0.75rem", color: "var(--eyebrow)", fontSize: "0.72rem", fontWeight: "700", textTransform: "uppercase" }}>
                Kafka migration leadership
              </p>
              <h3 style={{ margin: "0", color: "var(--ink)", fontSize: "clamp(1.45rem, 2.6vw, 2.15rem)", lineHeight: "1.1" }}>
                Sr. Software Development Engineer
              </h3>
              <p style={{ margin: "0.45rem 0 0", color: "var(--body)", fontWeight: "700" }}>
                Rocket India
                {" "}
                <span style={{ color: "var(--muted)", fontWeight: "600" }}>
                  formerly Mr. Cooper · Chennai, India
                </span>
              </p>
            </div>
            <time className="period" style={{ flex: "0 0 auto", border: "2px solid var(--period-line)", borderRadius: "2px", padding: "0.45rem 0.6rem", background: "var(--period-bg)", color: "var(--period-ink)", fontFamily: "'Silkscreen', ui-monospace, monospace", fontSize: "0.72rem", fontWeight: "700" }}>
              May 2024 - Present
            </time>
          </div>
          <ul className="quests" style={{ display: "grid", margin: "0", padding: "0", borderBottom: "1px solid var(--divider)", listStyle: "none" }}>
            <li style={{ borderTop: "1px solid var(--divider)" }}>
              <button type="button" className="quest-btn" onClick={ui.qToggle0} aria-expanded={ui.qOpen0} style={{ display: "flex", width: "100%", alignItems: "flex-start", justifyContent: "space-between", gap: "1rem", border: "0", padding: "0.9rem 0.25rem", background: "transparent", color: "inherit", font: "inherit", textAlign: "left", cursor: "pointer" }}>
                {" "}
                <span style={{ display: "flex", gap: "0.6rem", alignItems: "baseline" }}>
                  <span className="pixel-font" aria-hidden="true" style={{ flex: "0 0 auto", color: "var(--accent)", fontSize: "0.8rem", fontWeight: "700" }}>
                    &gt;
                  </span>
                  <span style={{ color: "var(--body)" }}>
                    Led large-scale Kafka cluster migration of <span className="metric">200+</span> topics from Confluent public clusters to private clusters across <span className="metric">20+</span> application teams, with <span className="metric">zero data loss</span>.
                  </span>
                </span>
                {" "}
                <span className="pixel-font" aria-hidden="true" style={{ display: "inline-grid", flex: "0 0 auto", width: "28px", height: "28px", placeItems: "center", border: "2px solid var(--px-frame)", borderRadius: "2px", background: "var(--chip-bg)", color: "var(--eyebrow)", fontSize: "0.9rem" }}>
                  {ui.qSign0}
                </span>
                {" "}
              </button>
              {" "}
              {ui.qOpen0 && (
                <>
                  <div className="cell-open quest-open" style={{ display: "grid", gridTemplateColumns: "180px minmax(0, 1fr)", gap: "1rem", alignItems: "center", padding: "0 0.25rem 1.1rem" }}>
                    <svg className="px-scene drop-in" viewBox="0 0 48 28" shapeRendering="crispEdges" aria-hidden="true" style={{ display: "block", width: "100%", maxWidth: "180px", height: "auto", border: "2px solid var(--px-frame)" }}>
                      <rect className="f-wall" x="0" y="0" width="48" height="22" />
                      <rect className="f-line" x="0" y="22" width="48" height="1" />
                      <rect className="f-floor" x="0" y="23" width="48" height="5" />
                      <rect className="f-cloud" x="4" y="6" width="6" height="2" />
                      <rect className="f-cloud" x="2" y="8" width="10" height="4" />
                      <rect className="f-cloud" x="1" y="10" width="12" height="3" />
                      <rect className="f-line" x="12" y="18" width="22" height="1" />
                      <g className="slide">
                        <rect className="f-paper" x="12" y="14" width="5" height="4" />
                        <rect className="f-accent" x="13" y="15" width="1" height="1" />
                        <rect className="f-accent" x="14" y="16" width="1" height="1" />
                        <rect className="f-accent" x="15" y="15" width="1" height="1" />
                      </g>
                      <g className="slide" style={{ animationDelay: "-1.5s" }}>
                        <rect className="f-amber" x="12" y="14" width="5" height="4" />
                        <rect className="f-bug2" x="13" y="15" width="1" height="1" />
                        <rect className="f-bug2" x="14" y="16" width="1" height="1" />
                        <rect className="f-bug2" x="15" y="15" width="1" height="1" />
                      </g>
                      <rect className="f-rack" x="34" y="6" width="11" height="16" />
                      <rect className="f-slot" x="36" y="8" width="7" height="12" />
                      <rect className="f-amber" x="38" y="12" width="3" height="3" />
                      <rect className="f-amber" x="39" y="10" width="1" height="2" />
                      <rect className="f-green led" x="43" y="7" width="1" height="1" />
                    </svg>
                    <p className="story-in" style={{ margin: "0", color: "var(--ink)", fontSize: "0.95rem" }}>
                      Moved <span className="metric">200+</span> topics for <span className="metric">20+</span> app teams off shared Confluent public clusters onto private ones with <span className="metric">zero data loss</span>, not a single event lost.
                    </p>
                  </div>
                </>
              )}
            </li>
            <li style={{ borderTop: "1px solid var(--divider)" }}>
              <button type="button" className="quest-btn" onClick={ui.qToggle1} aria-expanded={ui.qOpen1} style={{ display: "flex", width: "100%", alignItems: "flex-start", justifyContent: "space-between", gap: "1rem", border: "0", padding: "0.9rem 0.25rem", background: "transparent", color: "inherit", font: "inherit", textAlign: "left", cursor: "pointer" }}>
                {" "}
                <span style={{ display: "flex", gap: "0.6rem", alignItems: "baseline" }}>
                  <span className="pixel-font" aria-hidden="true" style={{ flex: "0 0 auto", color: "var(--accent)", fontSize: "0.8rem", fontWeight: "700" }}>
                    &gt;
                  </span>
                  <span style={{ color: "var(--body)" }}>
                    Designed cluster linking and topic mirroring strategies to keep data flowing through a <span className="metric">zero-downtime</span> migration.
                  </span>
                </span>
                {" "}
                <span className="pixel-font" aria-hidden="true" style={{ display: "inline-grid", flex: "0 0 auto", width: "28px", height: "28px", placeItems: "center", border: "2px solid var(--px-frame)", borderRadius: "2px", background: "var(--chip-bg)", color: "var(--eyebrow)", fontSize: "0.9rem" }}>
                  {ui.qSign1}
                </span>
                {" "}
              </button>
              {" "}
              {ui.qOpen1 && (
                <>
                  <div className="cell-open quest-open" style={{ display: "grid", gridTemplateColumns: "180px minmax(0, 1fr)", gap: "1rem", alignItems: "center", padding: "0 0.25rem 1.1rem" }}>
                    <svg className="px-scene drop-in" viewBox="0 0 48 28" shapeRendering="crispEdges" aria-hidden="true" style={{ display: "block", width: "100%", maxWidth: "180px", height: "auto", border: "2px solid var(--px-frame)" }}>
                      <rect className="f-wall" x="0" y="0" width="48" height="22" />
                      <rect className="f-line" x="0" y="22" width="48" height="1" />
                      <rect className="f-floor" x="0" y="23" width="48" height="5" />
                      <rect className="f-rack" x="4" y="5" width="10" height="17" />
                      <rect className="f-slot" x="6" y="7" width="6" height="2" />
                      <rect className="f-slot" x="6" y="11" width="6" height="2" />
                      <rect className="f-slot" x="6" y="15" width="6" height="2" />
                      <rect className="f-rack" x="34" y="5" width="10" height="17" />
                      <rect className="f-slot" x="36" y="7" width="6" height="2" />
                      <rect className="f-slot" x="36" y="11" width="6" height="2" />
                      <rect className="f-slot" x="36" y="15" width="6" height="2" />
                      <rect className="f-line" x="14" y="9" width="20" height="1" />
                      <g className="slide dx14">
                        <rect className="f-paper" x="15" y="5" width="5" height="4" />
                        <rect className="f-accent" x="16" y="6" width="1" height="1" />
                        <rect className="f-accent" x="17" y="7" width="1" height="1" />
                        <rect className="f-accent" x="18" y="6" width="1" height="1" />
                      </g>
                      <rect className="f-green led" x="11" y="7" width="1" height="1" />
                      <rect className="f-green led" x="41" y="7" width="1" height="1" />
                      <rect className="f-accent led" x="11" y="11" width="1" height="1" style={{ animationDelay: "0.3s" }} />
                      <rect className="f-accent led" x="41" y="11" width="1" height="1" style={{ animationDelay: "0.3s" }} />
                      <rect className="f-green glow" x="4" y="25" width="40" height="1" />
                    </svg>
                    <p className="story-in" style={{ margin: "0", color: "var(--ink)", fontSize: "0.95rem" }}>
                      Cluster links mirrored every topic from old to new, so producers and consumers kept flowing while teams cut over, with <span className="metric">zero downtime</span>.
                    </p>
                  </div>
                </>
              )}
            </li>
            <li style={{ borderTop: "1px solid var(--divider)" }}>
              <button type="button" className="quest-btn" onClick={ui.qToggle2} aria-expanded={ui.qOpen2} style={{ display: "flex", width: "100%", alignItems: "flex-start", justifyContent: "space-between", gap: "1rem", border: "0", padding: "0.9rem 0.25rem", background: "transparent", color: "inherit", font: "inherit", textAlign: "left", cursor: "pointer" }}>
                {" "}
                <span style={{ display: "flex", gap: "0.6rem", alignItems: "baseline" }}>
                  <span className="pixel-font" aria-hidden="true" style={{ flex: "0 0 auto", color: "var(--accent)", fontSize: "0.8rem", fontWeight: "700" }}>
                    &gt;
                  </span>
                  <span style={{ color: "var(--body)" }}>
                    Developed lineage mapping across Kafka topics, producers, consumers, and connectors for precise dependency planning.
                  </span>
                </span>
                {" "}
                <span className="pixel-font" aria-hidden="true" style={{ display: "inline-grid", flex: "0 0 auto", width: "28px", height: "28px", placeItems: "center", border: "2px solid var(--px-frame)", borderRadius: "2px", background: "var(--chip-bg)", color: "var(--eyebrow)", fontSize: "0.9rem" }}>
                  {ui.qSign2}
                </span>
                {" "}
              </button>
              {" "}
              {ui.qOpen2 && (
                <>
                  <div className="cell-open quest-open" style={{ display: "grid", gridTemplateColumns: "180px minmax(0, 1fr)", gap: "1rem", alignItems: "center", padding: "0 0.25rem 1.1rem" }}>
                    <svg className="px-scene drop-in" viewBox="0 0 48 28" shapeRendering="crispEdges" aria-hidden="true" style={{ display: "block", width: "100%", maxWidth: "180px", height: "auto", border: "2px solid var(--px-frame)" }}>
                      <rect className="f-wall" x="0" y="0" width="48" height="22" />
                      <rect className="f-line" x="0" y="22" width="48" height="1" />
                      <rect className="f-floor" x="0" y="23" width="48" height="5" />
                      <rect className="f-paper" x="5" y="3" width="38" height="17" />
                      <rect className="f-desk2" x="5" y="3" width="38" height="1" />
                      <rect className="f-desk2" x="5" y="19" width="38" height="1" />
                      <rect className="f-accent" x="9" y="7" width="3" height="3" />
                      <rect className="f-amber" x="22" y="13" width="3" height="3" />
                      <rect className="f-accent" x="34" y="6" width="3" height="3" />
                      <rect className="f-hood2" x="34" y="14" width="3" height="3" />
                      <rect className="f-line" x="13" y="9" width="2" height="1" />
                      <rect className="f-line" x="16" y="11" width="2" height="1" />
                      <rect className="f-line" x="19" y="13" width="2" height="1" />
                      <rect className="f-line" x="26" y="12" width="2" height="1" />
                      <rect className="f-line" x="29" y="10" width="2" height="1" />
                      <rect className="f-line" x="32" y="8" width="1" height="1" />
                      <rect className="f-line" x="35" y="10" width="1" height="3" />
                      <g className="slide dx24" style={{ animationDuration: "4s" }}>
                        <rect className="f-ink" x="8" y="4" width="4" height="1" />
                        <rect className="f-ink" x="8" y="9" width="4" height="1" />
                        <rect className="f-ink" x="7" y="5" width="1" height="4" />
                        <rect className="f-ink" x="12" y="5" width="1" height="4" />
                        <rect className="f-desk2" x="12" y="10" width="1" height="1" />
                        <rect className="f-desk2" x="13" y="11" width="1" height="1" />
                        <rect className="f-desk2" x="14" y="12" width="1" height="2" />
                      </g>
                    </svg>
                    <p className="story-in" style={{ margin: "0", color: "var(--ink)", fontSize: "0.95rem" }}>
                      Before moving anything, I mapped who produces and who consumes each topic, so every team's migration order was planned, not guessed.
                    </p>
                  </div>
                </>
              )}
            </li>
            <li style={{ borderTop: "1px solid var(--divider)" }}>
              <button type="button" className="quest-btn" onClick={ui.qToggle3} aria-expanded={ui.qOpen3} style={{ display: "flex", width: "100%", alignItems: "flex-start", justifyContent: "space-between", gap: "1rem", border: "0", padding: "0.9rem 0.25rem", background: "transparent", color: "inherit", font: "inherit", textAlign: "left", cursor: "pointer" }}>
                {" "}
                <span style={{ display: "flex", gap: "0.6rem", alignItems: "baseline" }}>
                  <span className="pixel-font" aria-hidden="true" style={{ flex: "0 0 auto", color: "var(--accent)", fontSize: "0.8rem", fontWeight: "700" }}>
                    &gt;
                  </span>
                  <span style={{ color: "var(--body)" }}>
                    Built and scaled event-driven microservices for servicing workflows designed to handle <span className="metric">200+</span> event types.
                  </span>
                </span>
                {" "}
                <span className="pixel-font" aria-hidden="true" style={{ display: "inline-grid", flex: "0 0 auto", width: "28px", height: "28px", placeItems: "center", border: "2px solid var(--px-frame)", borderRadius: "2px", background: "var(--chip-bg)", color: "var(--eyebrow)", fontSize: "0.9rem" }}>
                  {ui.qSign3}
                </span>
                {" "}
              </button>
              {" "}
              {ui.qOpen3 && (
                <>
                  <div className="cell-open quest-open" style={{ display: "grid", gridTemplateColumns: "180px minmax(0, 1fr)", gap: "1rem", alignItems: "center", padding: "0 0.25rem 1.1rem" }}>
                    <svg className="px-scene drop-in" viewBox="0 0 48 28" shapeRendering="crispEdges" aria-hidden="true" style={{ display: "block", width: "100%", maxWidth: "180px", height: "auto", border: "2px solid var(--px-frame)" }}>
                      <rect className="f-wall" x="0" y="0" width="48" height="22" />
                      <rect className="f-line" x="0" y="22" width="48" height="1" />
                      <rect className="f-floor" x="0" y="23" width="48" height="5" />
                      <g className="drop">
                        <rect className="f-paper" x="6" y="2" width="5" height="4" />
                        <rect className="f-accent" x="7" y="3" width="1" height="1" />
                        <rect className="f-accent" x="8" y="4" width="1" height="1" />
                        <rect className="f-accent" x="9" y="3" width="1" height="1" />
                      </g>
                      <g className="drop" style={{ animationDelay: "0.8s" }}>
                        <rect className="f-amber" x="21" y="2" width="5" height="4" />
                        <rect className="f-bug2" x="22" y="3" width="1" height="1" />
                        <rect className="f-bug2" x="23" y="4" width="1" height="1" />
                        <rect className="f-bug2" x="24" y="3" width="1" height="1" />
                      </g>
                      <g className="drop" style={{ animationDelay: "1.6s" }}>
                        <rect className="f-green" x="36" y="2" width="5" height="4" />
                        <rect className="f-ink" x="37" y="3" width="1" height="1" />
                        <rect className="f-ink" x="38" y="4" width="1" height="1" />
                        <rect className="f-ink" x="39" y="3" width="1" height="1" />
                      </g>
                      <rect className="f-hood2" x="5" y="9" width="8" height="2" />
                      <rect className="f-hood2" x="3" y="11" width="12" height="2" />
                      <rect className="f-hood" x="4" y="13" width="10" height="9" />
                      <rect className="f-slot" x="8" y="17" width="2" height="5" />
                      <rect className="f-hood2" x="20" y="9" width="8" height="2" />
                      <rect className="f-hood2" x="18" y="11" width="12" height="2" />
                      <rect className="f-hood" x="19" y="13" width="10" height="9" />
                      <rect className="f-slot" x="23" y="17" width="2" height="5" />
                      <rect className="f-hood2" x="35" y="9" width="8" height="2" />
                      <rect className="f-hood2" x="33" y="11" width="12" height="2" />
                      <rect className="f-hood" x="34" y="13" width="10" height="9" />
                      <rect className="f-slot" x="38" y="17" width="2" height="5" />
                      <rect className="f-amber led" x="5" y="14" width="2" height="2" />
                      <rect className="f-amber led" x="26" y="14" width="2" height="2" style={{ animationDelay: "0.5s" }} />
                      <rect className="f-amber led" x="35" y="14" width="2" height="2" style={{ animationDelay: "0.9s" }} />
                    </svg>
                    <p className="story-in" style={{ margin: "0", color: "var(--ink)", fontSize: "0.95rem" }}>
                      Servicing workflows became a village of microservices, each owning its events across <span className="metric">200+</span> event types.
                    </p>
                  </div>
                </>
              )}
            </li>
            <li style={{ borderTop: "1px solid var(--divider)" }}>
              <button type="button" className="quest-btn" onClick={ui.qToggle4} aria-expanded={ui.qOpen4} style={{ display: "flex", width: "100%", alignItems: "flex-start", justifyContent: "space-between", gap: "1rem", border: "0", padding: "0.9rem 0.25rem", background: "transparent", color: "inherit", font: "inherit", textAlign: "left", cursor: "pointer" }}>
                {" "}
                <span style={{ display: "flex", gap: "0.6rem", alignItems: "baseline" }}>
                  <span className="pixel-font" aria-hidden="true" style={{ flex: "0 0 auto", color: "var(--accent)", fontSize: "0.8rem", fontWeight: "700" }}>
                    &gt;
                  </span>
                  <span style={{ color: "var(--body)" }}>
                    Introduced Flink SQL on Confluent Cloud and automated pipeline creation through Confluent Cloud REST APIs.
                  </span>
                </span>
                {" "}
                <span className="pixel-font" aria-hidden="true" style={{ display: "inline-grid", flex: "0 0 auto", width: "28px", height: "28px", placeItems: "center", border: "2px solid var(--px-frame)", borderRadius: "2px", background: "var(--chip-bg)", color: "var(--eyebrow)", fontSize: "0.9rem" }}>
                  {ui.qSign4}
                </span>
                {" "}
              </button>
              {" "}
              {ui.qOpen4 && (
                <>
                  <div className="cell-open quest-open" style={{ display: "grid", gridTemplateColumns: "180px minmax(0, 1fr)", gap: "1rem", alignItems: "center", padding: "0 0.25rem 1.1rem" }}>
                    <svg className="px-scene drop-in" viewBox="0 0 48 28" shapeRendering="crispEdges" aria-hidden="true" style={{ display: "block", width: "100%", maxWidth: "180px", height: "auto", border: "2px solid var(--px-frame)" }}>
                      <rect className="f-wall" x="0" y="0" width="48" height="22" />
                      <rect className="f-line" x="0" y="22" width="48" height="1" />
                      <rect className="f-floor" x="0" y="23" width="48" height="5" />
                      <rect className="f-amber led" x="6" y="4" width="3" height="1" />
                      <rect className="f-lap2" x="7" y="5" width="1" height="3" />
                      <rect className="f-lap" x="3" y="8" width="9" height="6" />
                      <rect className="f-accent led" x="5" y="10" width="1" height="2" />
                      <rect className="f-accent led" x="9" y="10" width="1" height="2" />
                      <rect className="f-lap2" x="4" y="14" width="7" height="8" />
                      <rect className="f-lap2" x="11" y="15" width="4" height="1" />
                      <rect className="f-accent build" x="16" y="14" width="6" height="3" />
                      <rect className="f-accent build" x="23" y="14" width="6" height="3" style={{ animationDelay: "0.4s" }} />
                      <rect className="f-accent build" x="30" y="14" width="6" height="3" style={{ animationDelay: "0.8s" }} />
                      <rect className="f-accent build" x="37" y="14" width="6" height="3" style={{ animationDelay: "1.2s" }} />
                      <rect className="f-hood2 build" x="22" y="13" width="1" height="5" style={{ animationDelay: "0.4s" }} />
                      <rect className="f-hood2 build" x="29" y="13" width="1" height="5" style={{ animationDelay: "0.8s" }} />
                      <rect className="f-hood2 build" x="36" y="13" width="1" height="5" style={{ animationDelay: "1.2s" }} />
                      <rect className="f-amber build" x="43" y="13" width="2" height="5" style={{ animationDelay: "1.6s" }} />
                    </svg>
                    <p className="story-in" style={{ margin: "0", color: "var(--ink)", fontSize: "0.95rem" }}>
                      Instead of hand-building pipelines, Flink SQL and the Confluent Cloud REST APIs let new ones be created automatically.
                    </p>
                  </div>
                </>
              )}
            </li>
            <li style={{ borderTop: "1px solid var(--divider)" }}>
              <button type="button" className="quest-btn" onClick={ui.qToggle5} aria-expanded={ui.qOpen5} style={{ display: "flex", width: "100%", alignItems: "flex-start", justifyContent: "space-between", gap: "1rem", border: "0", padding: "0.9rem 0.25rem", background: "transparent", color: "inherit", font: "inherit", textAlign: "left", cursor: "pointer" }}>
                {" "}
                <span style={{ display: "flex", gap: "0.6rem", alignItems: "baseline" }}>
                  <span className="pixel-font" aria-hidden="true" style={{ flex: "0 0 auto", color: "var(--accent)", fontSize: "0.8rem", fontWeight: "700" }}>
                    &gt;
                  </span>
                  <span style={{ color: "var(--body)" }}>
                    Integrated <span className="metric">10+</span> data sources into centralized pipelines handling <span className="metric">100M+</span> events/day with a <span className="metric">75%</span> performance improvement.
                  </span>
                </span>
                {" "}
                <span className="pixel-font" aria-hidden="true" style={{ display: "inline-grid", flex: "0 0 auto", width: "28px", height: "28px", placeItems: "center", border: "2px solid var(--px-frame)", borderRadius: "2px", background: "var(--chip-bg)", color: "var(--eyebrow)", fontSize: "0.9rem" }}>
                  {ui.qSign5}
                </span>
                {" "}
              </button>
              {" "}
              {ui.qOpen5 && (
                <>
                  <div className="cell-open quest-open" style={{ display: "grid", gridTemplateColumns: "180px minmax(0, 1fr)", gap: "1rem", alignItems: "center", padding: "0 0.25rem 1.1rem" }}>
                    <svg className="px-scene drop-in" viewBox="0 0 48 28" shapeRendering="crispEdges" aria-hidden="true" style={{ display: "block", width: "100%", maxWidth: "180px", height: "auto", border: "2px solid var(--px-frame)" }}>
                      <rect className="f-wall" x="0" y="0" width="48" height="22" />
                      <rect className="f-line" x="0" y="22" width="48" height="1" />
                      <rect className="f-floor" x="0" y="23" width="48" height="5" />
                      <rect className="f-lap2" x="2" y="5" width="12" height="2" />
                      <rect className="f-lap2" x="2" y="11" width="12" height="2" />
                      <rect className="f-lap2" x="2" y="17" width="12" height="2" />
                      <rect className="f-lap2" x="14" y="5" width="2" height="14" />
                      <rect className="f-hood2" x="16" y="10" width="16" height="4" />
                      <g className="slide dx14" style={{ animationDuration: "1.4s" }}>
                        <rect className="f-amber" x="17" y="11" width="2" height="2" />
                      </g>
                      <g className="slide dx14" style={{ animationDuration: "1.4s", animationDelay: "0.7s" }}>
                        <rect className="f-white" x="17" y="11" width="2" height="2" />
                      </g>
                      <g className="slide dx14" style={{ animationDuration: "1.6s" }}>
                        <rect className="f-accent" x="0" y="5" width="2" height="2" />
                      </g>
                      <g className="slide dx14" style={{ animationDuration: "1.6s", animationDelay: "0.5s" }}>
                        <rect className="f-amber" x="0" y="11" width="2" height="2" />
                      </g>
                      <g className="slide dx14" style={{ animationDuration: "1.6s", animationDelay: "1s" }}>
                        <rect className="f-green" x="0" y="17" width="2" height="2" />
                      </g>
                      <rect className="f-rack" x="34" y="5" width="12" height="12" />
                      <rect className="f-screen" x="35" y="6" width="10" height="10" />
                      <rect className="f-line" x="36" y="10" width="1" height="1" />
                      <rect className="f-line" x="40" y="7" width="1" height="1" />
                      <rect className="f-line" x="43" y="10" width="1" height="1" />
                      <g className="wiggle" style={{ transformOrigin: "40.5px 14px" }}>
                        <rect className="f-pot" x="40" y="9" width="1" height="5" />
                      </g>
                      <rect className="f-rack" x="39" y="13" width="3" height="2" />
                    </svg>
                    <p className="story-in" style={{ margin: "0", color: "var(--ink)", fontSize: "0.95rem" }}>
                      <span className="metric">10+</span> sources now flow into one centralized pipeline carrying <span className="metric">100M+</span> events a day, <span className="metric">75%</span> faster than before.
                    </p>
                  </div>
                </>
              )}
            </li>
          </ul>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
            <span style={{ border: "1px solid var(--chip-line)", borderRadius: "2px", padding: "0.4rem 0.65rem", background: "var(--chip-bg)", color: "var(--chip-ink)", fontSize: "0.86rem", fontWeight: "700" }}>
              Kafka
            </span>
            {" "}
            <span style={{ border: "1px solid var(--chip-line)", borderRadius: "2px", padding: "0.4rem 0.65rem", background: "var(--chip-bg)", color: "var(--chip-ink)", fontSize: "0.86rem", fontWeight: "700" }}>
              Flink SQL
            </span>
            {" "}
            <span style={{ border: "1px solid var(--chip-line)", borderRadius: "2px", padding: "0.4rem 0.65rem", background: "var(--chip-bg)", color: "var(--chip-ink)", fontSize: "0.86rem", fontWeight: "700" }}>
              Confluent Cloud
            </span>
            {" "}
            <span style={{ border: "1px solid var(--chip-line)", borderRadius: "2px", padding: "0.4rem 0.65rem", background: "var(--chip-bg)", color: "var(--chip-ink)", fontSize: "0.86rem", fontWeight: "700" }}>
              Microservices
            </span>
            {" "}
            <span style={{ border: "1px solid var(--chip-line)", borderRadius: "2px", padding: "0.4rem 0.65rem", background: "var(--chip-bg)", color: "var(--chip-ink)", fontSize: "0.86rem", fontWeight: "700" }}>
              Data lineage
            </span>
          </div>
        </article>
        <article className="experience-card pixel-card" style={{ position: "relative", display: "grid", gap: "1.35rem", marginLeft: "3.6rem", border: "3px solid var(--px-frame)", borderRadius: "4px", padding: "clamp(1.15rem, 3vw, 1.65rem)", background: "var(--surface-90)", boxShadow: "6px 6px 0 var(--px-shadow)" }}>
          <div className="marker" aria-hidden="true" style={{ position: "absolute", top: "1.35rem", left: "-3.6rem", display: "grid", width: "3.1rem", height: "3.1rem", placeItems: "center", border: "3px solid var(--px-frame)", borderRadius: "2px", background: "var(--accent)", color: "var(--stat-ink)", boxShadow: "3px 3px 0 var(--px-shadow)", fontFamily: "'Silkscreen', ui-monospace, monospace", fontSize: "0.72rem", fontWeight: "700" }}>
            LV3
          </div>
          <div className="card-header" style={{ display: "flex", gap: "1rem", alignItems: "flex-start", justifyContent: "space-between" }}>
            <div>
              <p className="pixel-font" style={{ margin: "0 0 0.75rem", color: "var(--eyebrow)", fontSize: "0.72rem", fontWeight: "700", textTransform: "uppercase" }}>
                Reliable platform APIs
              </p>
              <h3 style={{ margin: "0", color: "var(--ink)", fontSize: "clamp(1.45rem, 2.6vw, 2.15rem)", lineHeight: "1.1" }}>
                Software Development Engineer II
              </h3>
              <p style={{ margin: "0.45rem 0 0", color: "var(--body)", fontWeight: "700" }}>
                Mr. Cooper
                {" "}
                <span style={{ color: "var(--muted)", fontWeight: "600" }}>
                  Chennai, India
                </span>
              </p>
            </div>
            <time className="period" style={{ flex: "0 0 auto", border: "2px solid var(--period-line)", borderRadius: "2px", padding: "0.45rem 0.6rem", background: "var(--period-bg)", color: "var(--period-ink)", fontFamily: "'Silkscreen', ui-monospace, monospace", fontSize: "0.72rem", fontWeight: "700" }}>
              May 2022 - Apr 2024
            </time>
          </div>
          <ul className="quests" style={{ display: "grid", margin: "0", padding: "0", borderBottom: "1px solid var(--divider)", listStyle: "none" }}>
            <li style={{ borderTop: "1px solid var(--divider)" }}>
              <button type="button" className="quest-btn" onClick={ui.qToggle6} aria-expanded={ui.qOpen6} style={{ display: "flex", width: "100%", alignItems: "flex-start", justifyContent: "space-between", gap: "1rem", border: "0", padding: "0.9rem 0.25rem", background: "transparent", color: "inherit", font: "inherit", textAlign: "left", cursor: "pointer" }}>
                {" "}
                <span style={{ display: "flex", gap: "0.6rem", alignItems: "baseline" }}>
                  <span className="pixel-font" aria-hidden="true" style={{ flex: "0 0 auto", color: "var(--accent)", fontSize: "0.8rem", fontWeight: "700" }}>
                    &gt;
                  </span>
                  <span style={{ color: "var(--body)" }}>
                    Engineered secure REST APIs for producing data to Kafka topics through Apigee across multiple teams, handling <span className="metric">10K+</span> requests/min at <span className="metric">99.9%</span> availability.
                  </span>
                </span>
                {" "}
                <span className="pixel-font" aria-hidden="true" style={{ display: "inline-grid", flex: "0 0 auto", width: "28px", height: "28px", placeItems: "center", border: "2px solid var(--px-frame)", borderRadius: "2px", background: "var(--chip-bg)", color: "var(--eyebrow)", fontSize: "0.9rem" }}>
                  {ui.qSign6}
                </span>
                {" "}
              </button>
              {" "}
              {ui.qOpen6 && (
                <>
                  <div className="cell-open quest-open" style={{ display: "grid", gridTemplateColumns: "180px minmax(0, 1fr)", gap: "1rem", alignItems: "center", padding: "0 0.25rem 1.1rem" }}>
                    <svg className="px-scene drop-in" viewBox="0 0 48 28" shapeRendering="crispEdges" aria-hidden="true" style={{ display: "block", width: "100%", maxWidth: "180px", height: "auto", border: "2px solid var(--px-frame)" }}>
                      <rect className="f-wall" x="0" y="0" width="48" height="22" />
                      <rect className="f-line" x="0" y="22" width="48" height="1" />
                      <rect className="f-floor" x="0" y="23" width="48" height="5" />
                      <g className="slide dx40" style={{ animationDuration: "3.6s" }}>
                        <rect className="f-paper" x="2" y="16" width="5" height="4" />
                        <rect className="f-accent" x="3" y="17" width="1" height="1" />
                        <rect className="f-accent" x="4" y="18" width="1" height="1" />
                        <rect className="f-accent" x="5" y="17" width="1" height="1" />
                      </g>
                      <rect className="f-amber" x="20" y="3" width="9" height="10" />
                      <rect className="f-amber" x="21" y="13" width="7" height="2" />
                      <rect className="f-amber" x="23" y="15" width="3" height="2" />
                      <rect className="f-bug2" x="22" y="5" width="5" height="6" />
                      <rect className="f-ink" x="24" y="7" width="1" height="3" />
                      <rect className="f-green led" x="32" y="4" width="2" height="2" />
                      <rect className="f-green led" x="15" y="6" width="1" height="1" style={{ animationDelay: "0.6s" }} />
                    </svg>
                    <p className="story-in" style={{ margin: "0", color: "var(--ink)", fontSize: "0.95rem" }}>
                      Teams produce to Kafka through secure Apigee REST APIs that hold <span className="metric">10K+</span> requests a minute at <span className="metric">99.9%</span> availability.
                    </p>
                  </div>
                </>
              )}
            </li>
            <li style={{ borderTop: "1px solid var(--divider)" }}>
              <button type="button" className="quest-btn" onClick={ui.qToggle7} aria-expanded={ui.qOpen7} style={{ display: "flex", width: "100%", alignItems: "flex-start", justifyContent: "space-between", gap: "1rem", border: "0", padding: "0.9rem 0.25rem", background: "transparent", color: "inherit", font: "inherit", textAlign: "left", cursor: "pointer" }}>
                {" "}
                <span style={{ display: "flex", gap: "0.6rem", alignItems: "baseline" }}>
                  <span className="pixel-font" aria-hidden="true" style={{ flex: "0 0 auto", color: "var(--accent)", fontSize: "0.8rem", fontWeight: "700" }}>
                    &gt;
                  </span>
                  <span style={{ color: "var(--body)" }}>
                    Implemented real-time monitoring and alerting jobs that surfaced <span className="metric">5+</span> proactive alerts per hour.
                  </span>
                </span>
                {" "}
                <span className="pixel-font" aria-hidden="true" style={{ display: "inline-grid", flex: "0 0 auto", width: "28px", height: "28px", placeItems: "center", border: "2px solid var(--px-frame)", borderRadius: "2px", background: "var(--chip-bg)", color: "var(--eyebrow)", fontSize: "0.9rem" }}>
                  {ui.qSign7}
                </span>
                {" "}
              </button>
              {" "}
              {ui.qOpen7 && (
                <>
                  <div className="cell-open quest-open" style={{ display: "grid", gridTemplateColumns: "180px minmax(0, 1fr)", gap: "1rem", alignItems: "center", padding: "0 0.25rem 1.1rem" }}>
                    <svg className="px-scene drop-in" viewBox="0 0 48 28" shapeRendering="crispEdges" aria-hidden="true" style={{ display: "block", width: "100%", maxWidth: "180px", height: "auto", border: "2px solid var(--px-frame)" }}>
                      <rect className="f-wall" x="0" y="0" width="48" height="22" />
                      <rect className="f-line" x="0" y="22" width="48" height="1" />
                      <rect className="f-floor" x="0" y="23" width="48" height="5" />
                      <rect className="f-lap2" x="3" y="2" width="30" height="18" />
                      <rect className="f-slot" x="4" y="3" width="28" height="16" />
                      <rect className="f-green" x="5" y="11" width="6" height="1" />
                      <rect className="f-green" x="11" y="7" width="1" height="4" />
                      <rect className="f-green" x="12" y="11" width="1" height="4" />
                      <rect className="f-green" x="13" y="11" width="6" height="1" />
                      <rect className="f-green" x="19" y="9" width="1" height="2" />
                      <rect className="f-green" x="20" y="11" width="11" height="1" />
                      <g className="slide dx26" style={{ animationDuration: "2.4s" }}>
                        <rect className="f-accent" x="5" y="4" width="1" height="14" />
                      </g>
                      <rect className="f-lap2" x="37" y="16" width="8" height="3" />
                      <rect className="f-pot led" x="38" y="10" width="6" height="6" style={{ animationDuration: "0.6s" }} />
                      <rect className="f-amber led" x="36" y="8" width="1" height="1" style={{ animationDuration: "0.6s" }} />
                      <rect className="f-amber led" x="45" y="8" width="1" height="1" style={{ animationDuration: "0.6s" }} />
                      <rect className="f-amber led" x="40" y="6" width="2" height="1" style={{ animationDuration: "0.6s" }} />
                    </svg>
                    <p className="story-in" style={{ margin: "0", color: "var(--ink)", fontSize: "0.95rem" }}>
                      Real-time monitoring jobs keep watch over the streams and raise <span className="metric">5+</span> proactive alerts every hour.
                    </p>
                  </div>
                </>
              )}
            </li>
            <li style={{ borderTop: "1px solid var(--divider)" }}>
              <button type="button" className="quest-btn" onClick={ui.qToggle8} aria-expanded={ui.qOpen8} style={{ display: "flex", width: "100%", alignItems: "flex-start", justifyContent: "space-between", gap: "1rem", border: "0", padding: "0.9rem 0.25rem", background: "transparent", color: "inherit", font: "inherit", textAlign: "left", cursor: "pointer" }}>
                {" "}
                <span style={{ display: "flex", gap: "0.6rem", alignItems: "baseline" }}>
                  <span className="pixel-font" aria-hidden="true" style={{ flex: "0 0 auto", color: "var(--accent)", fontSize: "0.8rem", fontWeight: "700" }}>
                    &gt;
                  </span>
                  <span style={{ color: "var(--body)" }}>
                    Built standardized Kafka Connect base images for databases, cloud storage, and warehouse integrations.
                  </span>
                </span>
                {" "}
                <span className="pixel-font" aria-hidden="true" style={{ display: "inline-grid", flex: "0 0 auto", width: "28px", height: "28px", placeItems: "center", border: "2px solid var(--px-frame)", borderRadius: "2px", background: "var(--chip-bg)", color: "var(--eyebrow)", fontSize: "0.9rem" }}>
                  {ui.qSign8}
                </span>
                {" "}
              </button>
              {" "}
              {ui.qOpen8 && (
                <>
                  <div className="cell-open quest-open" style={{ display: "grid", gridTemplateColumns: "180px minmax(0, 1fr)", gap: "1rem", alignItems: "center", padding: "0 0.25rem 1.1rem" }}>
                    <svg className="px-scene drop-in" viewBox="0 0 48 28" shapeRendering="crispEdges" aria-hidden="true" style={{ display: "block", width: "100%", maxWidth: "180px", height: "auto", border: "2px solid var(--px-frame)" }}>
                      <rect className="f-wall" x="0" y="0" width="48" height="22" />
                      <rect className="f-line" x="0" y="22" width="48" height="1" />
                      <rect className="f-floor" x="0" y="23" width="48" height="5" />
                      <rect className="f-rack" x="16" y="1" width="16" height="4" />
                      <g className="press">
                        <rect className="f-lap2" x="23" y="5" width="2" height="4" />
                        <rect className="f-lap" x="19" y="9" width="10" height="2" />
                      </g>
                      <rect className="f-lap2" x="0" y="20" width="48" height="2" />
                      <rect className="f-hood" x="4" y="14" width="7" height="6" />
                      <rect className="f-hood2" x="4" y="19" width="7" height="1" />
                      <rect className="f-amber" x="20" y="14" width="8" height="6" />
                      <rect className="f-hood2" x="20" y="19" width="8" height="1" />
                      <rect className="f-green" x="37" y="14" width="7" height="6" />
                      <rect className="f-hood2" x="37" y="19" width="7" height="1" />
                      <rect className="f-white star" x="30" y="12" width="1" height="1" />
                      <rect className="f-white star" x="17" y="13" width="1" height="1" style={{ animationDelay: "0.8s" }} />
                    </svg>
                    <p className="story-in" style={{ margin: "0", color: "var(--ink)", fontSize: "0.95rem" }}>
                      One standardized set of Kafka Connect base images now covers databases, cloud storage and warehouse integrations.
                    </p>
                  </div>
                </>
              )}
            </li>
            <li style={{ borderTop: "1px solid var(--divider)" }}>
              <button type="button" className="quest-btn" onClick={ui.qToggle9} aria-expanded={ui.qOpen9} style={{ display: "flex", width: "100%", alignItems: "flex-start", justifyContent: "space-between", gap: "1rem", border: "0", padding: "0.9rem 0.25rem", background: "transparent", color: "inherit", font: "inherit", textAlign: "left", cursor: "pointer" }}>
                {" "}
                <span style={{ display: "flex", gap: "0.6rem", alignItems: "baseline" }}>
                  <span className="pixel-font" aria-hidden="true" style={{ flex: "0 0 auto", color: "var(--accent)", fontSize: "0.8rem", fontWeight: "700" }}>
                    &gt;
                  </span>
                  <span style={{ color: "var(--body)" }}>
                    Automated cloud data lifecycle policies in Azure Data Lake, saving <span className="metric">$150K</span> annually.
                  </span>
                </span>
                {" "}
                <span className="pixel-font" aria-hidden="true" style={{ display: "inline-grid", flex: "0 0 auto", width: "28px", height: "28px", placeItems: "center", border: "2px solid var(--px-frame)", borderRadius: "2px", background: "var(--chip-bg)", color: "var(--eyebrow)", fontSize: "0.9rem" }}>
                  {ui.qSign9}
                </span>
                {" "}
              </button>
              {" "}
              {ui.qOpen9 && (
                <>
                  <div className="cell-open quest-open" style={{ display: "grid", gridTemplateColumns: "180px minmax(0, 1fr)", gap: "1rem", alignItems: "center", padding: "0 0.25rem 1.1rem" }}>
                    <svg className="px-scene drop-in" viewBox="0 0 48 28" shapeRendering="crispEdges" aria-hidden="true" style={{ display: "block", width: "100%", maxWidth: "180px", height: "auto", border: "2px solid var(--px-frame)" }}>
                      <rect className="f-wall" x="0" y="0" width="48" height="22" />
                      <rect className="f-line" x="0" y="22" width="48" height="1" />
                      <rect className="f-floor" x="0" y="23" width="48" height="5" />
                      <g className="drop dy10">
                        <rect className="f-paper" x="8" y="3" width="4" height="5" />
                        <rect className="f-line" x="9" y="5" width="2" height="1" />
                      </g>
                      <g className="drop dy10" style={{ animationDelay: "1.5s" }}>
                        <rect className="f-paper" x="18" y="3" width="4" height="5" />
                        <rect className="f-line" x="19" y="5" width="2" height="1" />
                      </g>
                      <rect className="f-sky" x="2" y="16" width="28" height="6" />
                      <rect className="f-accent" x="4" y="17" width="4" height="1" />
                      <rect className="f-accent" x="18" y="19" width="5" height="1" />
                      <g className="hop">
                        <rect className="f-amber" x="38" y="5" width="4" height="4" />
                        <rect className="f-bug2" x="39" y="6" width="2" height="2" />
                      </g>
                      <rect className="f-amber" x="35" y="19" width="10" height="2" />
                      <rect className="f-amber build" x="35" y="16" width="10" height="2" style={{ animationDelay: "0.5s" }} />
                      <rect className="f-amber build" x="35" y="13" width="10" height="2" style={{ animationDelay: "1s" }} />
                      <rect className="f-bug2" x="35" y="21" width="10" height="1" />
                    </svg>
                    <p className="story-in" style={{ margin: "0", color: "var(--ink)", fontSize: "0.95rem" }}>
                      Automated lifecycle policies keep Azure Data Lake tidy, saving <span className="metric">$150K</span> every year.
                    </p>
                  </div>
                </>
              )}
            </li>
          </ul>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
            <span style={{ border: "1px solid var(--chip-line)", borderRadius: "2px", padding: "0.4rem 0.65rem", background: "var(--chip-bg)", color: "var(--chip-ink)", fontSize: "0.86rem", fontWeight: "700" }}>
              REST APIs
            </span>
            {" "}
            <span style={{ border: "1px solid var(--chip-line)", borderRadius: "2px", padding: "0.4rem 0.65rem", background: "var(--chip-bg)", color: "var(--chip-ink)", fontSize: "0.86rem", fontWeight: "700" }}>
              Apigee
            </span>
            {" "}
            <span style={{ border: "1px solid var(--chip-line)", borderRadius: "2px", padding: "0.4rem 0.65rem", background: "var(--chip-bg)", color: "var(--chip-ink)", fontSize: "0.86rem", fontWeight: "700" }}>
              Kafka Connect
            </span>
            {" "}
            <span style={{ border: "1px solid var(--chip-line)", borderRadius: "2px", padding: "0.4rem 0.65rem", background: "var(--chip-bg)", color: "var(--chip-ink)", fontSize: "0.86rem", fontWeight: "700" }}>
              Azure Data Lake
            </span>
            {" "}
            <span style={{ border: "1px solid var(--chip-line)", borderRadius: "2px", padding: "0.4rem 0.65rem", background: "var(--chip-bg)", color: "var(--chip-ink)", fontSize: "0.86rem", fontWeight: "700" }}>
              Monitoring
            </span>
          </div>
        </article>
        <article className="experience-card pixel-card" style={{ position: "relative", display: "grid", gap: "1.35rem", marginLeft: "3.6rem", border: "3px solid var(--px-frame)", borderRadius: "4px", padding: "clamp(1.15rem, 3vw, 1.65rem)", background: "var(--surface-90)", boxShadow: "6px 6px 0 var(--px-shadow)" }}>
          <div className="marker" aria-hidden="true" style={{ position: "absolute", top: "1.35rem", left: "-3.6rem", display: "grid", width: "3.1rem", height: "3.1rem", placeItems: "center", border: "3px solid var(--px-frame)", borderRadius: "2px", background: "var(--accent)", color: "var(--stat-ink)", boxShadow: "3px 3px 0 var(--px-shadow)", fontFamily: "'Silkscreen', ui-monospace, monospace", fontSize: "0.72rem", fontWeight: "700" }}>
            LV2
          </div>
          <div className="card-header" style={{ display: "flex", gap: "1rem", alignItems: "flex-start", justifyContent: "space-between" }}>
            <div>
              <p className="pixel-font" style={{ margin: "0 0 0.75rem", color: "var(--eyebrow)", fontSize: "0.72rem", fontWeight: "700", textTransform: "uppercase" }}>
                Streaming platform foundations
              </p>
              <h3 style={{ margin: "0", color: "var(--ink)", fontSize: "clamp(1.45rem, 2.6vw, 2.15rem)", lineHeight: "1.1" }}>
                Software Development Engineer
              </h3>
              <p style={{ margin: "0.45rem 0 0", color: "var(--body)", fontWeight: "700" }}>
                Mr. Cooper
                {" "}
                <span style={{ color: "var(--muted)", fontWeight: "600" }}>
                  Chennai, India
                </span>
              </p>
            </div>
            <time className="period" style={{ flex: "0 0 auto", border: "2px solid var(--period-line)", borderRadius: "2px", padding: "0.45rem 0.6rem", background: "var(--period-bg)", color: "var(--period-ink)", fontFamily: "'Silkscreen', ui-monospace, monospace", fontSize: "0.72rem", fontWeight: "700" }}>
              July 2020 - Apr 2022
            </time>
          </div>
          <ul className="quests" style={{ display: "grid", margin: "0", padding: "0", borderBottom: "1px solid var(--divider)", listStyle: "none" }}>
            <li style={{ borderTop: "1px solid var(--divider)" }}>
              <button type="button" className="quest-btn" onClick={ui.qToggle10} aria-expanded={ui.qOpen10} style={{ display: "flex", width: "100%", alignItems: "flex-start", justifyContent: "space-between", gap: "1rem", border: "0", padding: "0.9rem 0.25rem", background: "transparent", color: "inherit", font: "inherit", textAlign: "left", cursor: "pointer" }}>
                {" "}
                <span style={{ display: "flex", gap: "0.6rem", alignItems: "baseline" }}>
                  <span className="pixel-font" aria-hidden="true" style={{ flex: "0 0 auto", color: "var(--accent)", fontSize: "0.8rem", fontWeight: "700" }}>
                    &gt;
                  </span>
                  <span style={{ color: "var(--body)" }}>
                    Helped build a centralized platform for Kafka topic management and access control, covering <span className="metric">2000+</span> topics across clusters.
                  </span>
                </span>
                {" "}
                <span className="pixel-font" aria-hidden="true" style={{ display: "inline-grid", flex: "0 0 auto", width: "28px", height: "28px", placeItems: "center", border: "2px solid var(--px-frame)", borderRadius: "2px", background: "var(--chip-bg)", color: "var(--eyebrow)", fontSize: "0.9rem" }}>
                  {ui.qSign10}
                </span>
                {" "}
              </button>
              {" "}
              {ui.qOpen10 && (
                <>
                  <div className="cell-open quest-open" style={{ display: "grid", gridTemplateColumns: "180px minmax(0, 1fr)", gap: "1rem", alignItems: "center", padding: "0 0.25rem 1.1rem" }}>
                    <svg className="px-scene drop-in" viewBox="0 0 48 28" shapeRendering="crispEdges" aria-hidden="true" style={{ display: "block", width: "100%", maxWidth: "180px", height: "auto", border: "2px solid var(--px-frame)" }}>
                      <rect className="f-wall" x="0" y="0" width="48" height="22" />
                      <rect className="f-line" x="0" y="22" width="48" height="1" />
                      <rect className="f-floor" x="0" y="23" width="48" height="5" />
                      <rect className="f-rack" x="3" y="3" width="25" height="17" />
                      <rect className="f-accent" x="5" y="5" width="6" height="5" />
                      <rect className="f-hood2 led" x="13" y="5" width="6" height="5" style={{ animationDuration: "2s" }} />
                      <rect className="f-accent" x="21" y="5" width="5" height="5" />
                      <rect className="f-amber led" x="5" y="12" width="6" height="5" style={{ animationDuration: "2.4s" }} />
                      <rect className="f-accent" x="13" y="12" width="6" height="5" />
                      <rect className="f-hood2" x="21" y="12" width="5" height="5" />
                      <g className="legs-a" style={{ animationDuration: "2.4s" }}>
                        <rect className="f-lap2" x="36" y="8" width="1" height="4" />
                        <rect className="f-lap2" x="41" y="8" width="1" height="4" />
                        <rect className="f-lap2" x="36" y="7" width="6" height="1" />
                      </g>
                      <g className="legs-b" style={{ animationDuration: "2.4s" }}>
                        <rect className="f-lap2" x="36" y="5" width="1" height="4" />
                        <rect className="f-lap2" x="41" y="5" width="1" height="2" />
                        <rect className="f-lap2" x="36" y="4" width="6" height="1" />
                      </g>
                      <rect className="f-amber" x="34" y="12" width="10" height="8" />
                      <rect className="f-ink" x="38" y="14" width="2" height="3" />
                    </svg>
                    <p className="story-in" style={{ margin: "0", color: "var(--ink)", fontSize: "0.95rem" }}>
                      One platform to manage <span className="metric">2000+</span> Kafka topics and who can access them, across every cluster.
                    </p>
                  </div>
                </>
              )}
            </li>
            <li style={{ borderTop: "1px solid var(--divider)" }}>
              <button type="button" className="quest-btn" onClick={ui.qToggle11} aria-expanded={ui.qOpen11} style={{ display: "flex", width: "100%", alignItems: "flex-start", justifyContent: "space-between", gap: "1rem", border: "0", padding: "0.9rem 0.25rem", background: "transparent", color: "inherit", font: "inherit", textAlign: "left", cursor: "pointer" }}>
                {" "}
                <span style={{ display: "flex", gap: "0.6rem", alignItems: "baseline" }}>
                  <span className="pixel-font" aria-hidden="true" style={{ flex: "0 0 auto", color: "var(--accent)", fontSize: "0.8rem", fontWeight: "700" }}>
                    &gt;
                  </span>
                  <span style={{ color: "var(--body)" }}>
                    Integrated cluster-level processing metrics, billing insights, and consumer activity for cost and resource visibility.
                  </span>
                </span>
                {" "}
                <span className="pixel-font" aria-hidden="true" style={{ display: "inline-grid", flex: "0 0 auto", width: "28px", height: "28px", placeItems: "center", border: "2px solid var(--px-frame)", borderRadius: "2px", background: "var(--chip-bg)", color: "var(--eyebrow)", fontSize: "0.9rem" }}>
                  {ui.qSign11}
                </span>
                {" "}
              </button>
              {" "}
              {ui.qOpen11 && (
                <>
                  <div className="cell-open quest-open" style={{ display: "grid", gridTemplateColumns: "180px minmax(0, 1fr)", gap: "1rem", alignItems: "center", padding: "0 0.25rem 1.1rem" }}>
                    <svg className="px-scene drop-in" viewBox="0 0 48 28" shapeRendering="crispEdges" aria-hidden="true" style={{ display: "block", width: "100%", maxWidth: "180px", height: "auto", border: "2px solid var(--px-frame)" }}>
                      <rect className="f-wall" x="0" y="0" width="48" height="22" />
                      <rect className="f-line" x="0" y="22" width="48" height="1" />
                      <rect className="f-floor" x="0" y="23" width="48" height="5" />
                      <rect className="f-accent bar" x="6" y="10" width="4" height="10" />
                      <rect className="f-amber bar" x="12" y="14" width="4" height="6" style={{ animationDelay: "0.6s" }} />
                      <rect className="f-accent bar" x="18" y="6" width="4" height="14" style={{ animationDelay: "1.2s" }} />
                      <rect className="f-amber bar" x="24" y="12" width="4" height="8" style={{ animationDelay: "1.8s" }} />
                      <rect className="f-line" x="4" y="20" width="28" height="1" />
                      <g className="hop">
                        <rect className="f-amber" x="36" y="6" width="6" height="6" />
                        <rect className="f-bug2" x="38" y="8" width="2" height="2" />
                      </g>
                      <rect className="f-green led" x="35" y="17" width="2" height="2" />
                      <rect className="f-green led" x="39" y="17" width="2" height="2" style={{ animationDelay: "0.4s" }} />
                      <rect className="f-green led" x="43" y="17" width="2" height="2" style={{ animationDelay: "0.8s" }} />
                    </svg>
                    <p className="story-in" style={{ margin: "0", color: "var(--ink)", fontSize: "0.95rem" }}>
                      Processing metrics, billing insights and consumer activity in one place, for clear cost and resource visibility.
                    </p>
                  </div>
                </>
              )}
            </li>
            <li style={{ borderTop: "1px solid var(--divider)" }}>
              <button type="button" className="quest-btn" onClick={ui.qToggle12} aria-expanded={ui.qOpen12} style={{ display: "flex", width: "100%", alignItems: "flex-start", justifyContent: "space-between", gap: "1rem", border: "0", padding: "0.9rem 0.25rem", background: "transparent", color: "inherit", font: "inherit", textAlign: "left", cursor: "pointer" }}>
                {" "}
                <span style={{ display: "flex", gap: "0.6rem", alignItems: "baseline" }}>
                  <span className="pixel-font" aria-hidden="true" style={{ flex: "0 0 auto", color: "var(--accent)", fontSize: "0.8rem", fontWeight: "700" }}>
                    &gt;
                  </span>
                  <span style={{ color: "var(--body)" }}>
                    Built real-time stream processors with Kafka Streams for data enrichment, cutting event-handling latency by <span className="metric">40%</span>.
                  </span>
                </span>
                {" "}
                <span className="pixel-font" aria-hidden="true" style={{ display: "inline-grid", flex: "0 0 auto", width: "28px", height: "28px", placeItems: "center", border: "2px solid var(--px-frame)", borderRadius: "2px", background: "var(--chip-bg)", color: "var(--eyebrow)", fontSize: "0.9rem" }}>
                  {ui.qSign12}
                </span>
                {" "}
              </button>
              {" "}
              {ui.qOpen12 && (
                <>
                  <div className="cell-open quest-open" style={{ display: "grid", gridTemplateColumns: "180px minmax(0, 1fr)", gap: "1rem", alignItems: "center", padding: "0 0.25rem 1.1rem" }}>
                    <svg className="px-scene drop-in" viewBox="0 0 48 28" shapeRendering="crispEdges" aria-hidden="true" style={{ display: "block", width: "100%", maxWidth: "180px", height: "auto", border: "2px solid var(--px-frame)" }}>
                      <rect className="f-wall" x="0" y="0" width="48" height="22" />
                      <rect className="f-line" x="0" y="22" width="48" height="1" />
                      <rect className="f-floor" x="0" y="23" width="48" height="5" />
                      <rect className="f-lap2" x="0" y="17" width="48" height="2" />
                      <g className="slide dx16">
                        <rect className="f-paper" x="1" y="13" width="5" height="4" />
                        <rect className="f-accent" x="2" y="14" width="1" height="1" />
                        <rect className="f-accent" x="3" y="15" width="1" height="1" />
                        <rect className="f-accent" x="4" y="14" width="1" height="1" />
                      </g>
                      <g className="slide dx16" style={{ animationDelay: "1.5s" }}>
                        <rect className="f-amber" x="30" y="13" width="5" height="4" />
                        <rect className="f-bug2" x="31" y="14" width="1" height="1" />
                        <rect className="f-bug2" x="32" y="15" width="1" height="1" />
                        <rect className="f-bug2" x="33" y="14" width="1" height="1" />
                      </g>
                      <rect className="f-rack" x="18" y="3" width="12" height="15" />
                      <g className="gear">
                        <rect className="f-amber" x="23" y="7" width="2" height="6" />
                        <rect className="f-amber" x="21" y="9" width="6" height="2" />
                      </g>
                      <rect className="f-green led" x="20" y="14" width="2" height="1" />
                    </svg>
                    <p className="story-in" style={{ margin: "0", color: "var(--ink)", fontSize: "0.95rem" }}>
                      Kafka Streams processors enrich events in flight, cutting event-handling latency by <span className="metric">40%</span>.
                    </p>
                  </div>
                </>
              )}
            </li>
            <li style={{ borderTop: "1px solid var(--divider)" }}>
              <button type="button" className="quest-btn" onClick={ui.qToggle13} aria-expanded={ui.qOpen13} style={{ display: "flex", width: "100%", alignItems: "flex-start", justifyContent: "space-between", gap: "1rem", border: "0", padding: "0.9rem 0.25rem", background: "transparent", color: "inherit", font: "inherit", textAlign: "left", cursor: "pointer" }}>
                {" "}
                <span style={{ display: "flex", gap: "0.6rem", alignItems: "baseline" }}>
                  <span className="pixel-font" aria-hidden="true" style={{ flex: "0 0 auto", color: "var(--accent)", fontSize: "0.8rem", fontWeight: "700" }}>
                    &gt;
                  </span>
                  <span style={{ color: "var(--body)" }}>
                    Created migration scripts to transition Kafka resources from Azure to GCP with <span className="metric">100%</span> data integrity.
                  </span>
                </span>
                {" "}
                <span className="pixel-font" aria-hidden="true" style={{ display: "inline-grid", flex: "0 0 auto", width: "28px", height: "28px", placeItems: "center", border: "2px solid var(--px-frame)", borderRadius: "2px", background: "var(--chip-bg)", color: "var(--eyebrow)", fontSize: "0.9rem" }}>
                  {ui.qSign13}
                </span>
                {" "}
              </button>
              {" "}
              {ui.qOpen13 && (
                <>
                  <div className="cell-open quest-open" style={{ display: "grid", gridTemplateColumns: "180px minmax(0, 1fr)", gap: "1rem", alignItems: "center", padding: "0 0.25rem 1.1rem" }}>
                    <svg className="px-scene drop-in" viewBox="0 0 48 28" shapeRendering="crispEdges" aria-hidden="true" style={{ display: "block", width: "100%", maxWidth: "180px", height: "auto", border: "2px solid var(--px-frame)" }}>
                      <rect className="f-sky" x="0" y="0" width="48" height="28" />
                      <rect className="f-cloud" x="3" y="4" width="6" height="2" />
                      <rect className="f-cloud" x="1" y="6" width="11" height="4" />
                      <rect className="f-accent" x="4" y="7" width="4" height="1" />
                      <rect className="f-cloud" x="38" y="4" width="6" height="2" />
                      <rect className="f-cloud" x="36" y="6" width="11" height="4" />
                      <rect className="f-green" x="39" y="7" width="4" height="1" />
                      <rect className="f-line" x="12" y="8" width="24" height="1" />
                      <g className="slide dx18">
                        <rect className="f-ink" x="15" y="9" width="1" height="1" />
                        <rect className="f-hood" x="13" y="10" width="5" height="4" />
                        <rect className="f-hood2" x="13" y="12" width="5" height="1" />
                      </g>
                      <rect className="f-paper" x="17" y="16" width="14" height="9" />
                      <rect className="f-desk2" x="16" y="16" width="16" height="1" />
                      <rect className="f-desk2" x="16" y="24" width="16" height="1" />
                      <rect className="f-line" x="19" y="18" width="9" height="1" />
                      <rect className="f-line" x="19" y="20" width="7" height="1" />
                      <rect className="f-accent cursor" x="19" y="22" width="3" height="1" />
                      <rect className="f-green led" x="44" y="2" width="2" height="2" />
                    </svg>
                    <p className="story-in" style={{ margin: "0", color: "var(--ink)", fontSize: "0.95rem" }}>
                      Migration scripts carried Kafka resources from Azure to GCP with <span className="metric">100%</span> data integrity.
                    </p>
                  </div>
                </>
              )}
            </li>
          </ul>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
            <span style={{ border: "1px solid var(--chip-line)", borderRadius: "2px", padding: "0.4rem 0.65rem", background: "var(--chip-bg)", color: "var(--chip-ink)", fontSize: "0.86rem", fontWeight: "700" }}>
              Kafka Streams
            </span>
            {" "}
            <span style={{ border: "1px solid var(--chip-line)", borderRadius: "2px", padding: "0.4rem 0.65rem", background: "var(--chip-bg)", color: "var(--chip-ink)", fontSize: "0.86rem", fontWeight: "700" }}>
              Platform tooling
            </span>
            {" "}
            <span style={{ border: "1px solid var(--chip-line)", borderRadius: "2px", padding: "0.4rem 0.65rem", background: "var(--chip-bg)", color: "var(--chip-ink)", fontSize: "0.86rem", fontWeight: "700" }}>
              GCP
            </span>
            {" "}
            <span style={{ border: "1px solid var(--chip-line)", borderRadius: "2px", padding: "0.4rem 0.65rem", background: "var(--chip-bg)", color: "var(--chip-ink)", fontSize: "0.86rem", fontWeight: "700" }}>
              Azure
            </span>
            {" "}
            <span style={{ border: "1px solid var(--chip-line)", borderRadius: "2px", padding: "0.4rem 0.65rem", background: "var(--chip-bg)", color: "var(--chip-ink)", fontSize: "0.86rem", fontWeight: "700" }}>
              Access control
            </span>
          </div>
        </article>
        <article className="experience-card pixel-card" style={{ position: "relative", display: "grid", gap: "1.35rem", marginLeft: "3.6rem", border: "3px solid var(--px-frame)", borderRadius: "4px", padding: "clamp(1.15rem, 3vw, 1.65rem)", background: "var(--surface-90)", boxShadow: "6px 6px 0 var(--px-shadow)" }}>
          <div className="marker" aria-hidden="true" style={{ position: "absolute", top: "1.35rem", left: "-3.6rem", display: "grid", width: "3.1rem", height: "3.1rem", placeItems: "center", border: "3px solid var(--px-frame)", borderRadius: "2px", background: "var(--accent)", color: "var(--stat-ink)", boxShadow: "3px 3px 0 var(--px-shadow)", fontFamily: "'Silkscreen', ui-monospace, monospace", fontSize: "0.72rem", fontWeight: "700" }}>
            LV1
          </div>
          <div className="card-header" style={{ display: "flex", gap: "1rem", alignItems: "flex-start", justifyContent: "space-between" }}>
            <div>
              <p className="pixel-font" style={{ margin: "0 0 0.75rem", color: "var(--eyebrow)", fontSize: "0.72rem", fontWeight: "700", textTransform: "uppercase" }}>
                Automation and developer experience
              </p>
              <h3 style={{ margin: "0", color: "var(--ink)", fontSize: "clamp(1.45rem, 2.6vw, 2.15rem)", lineHeight: "1.1" }}>
                Graduate Intern
              </h3>
              <p style={{ margin: "0.45rem 0 0", color: "var(--body)", fontWeight: "700" }}>
                Mr. Cooper
                {" "}
                <span style={{ color: "var(--muted)", fontWeight: "600" }}>
                  Chennai, India
                </span>
              </p>
            </div>
            <time className="period" style={{ flex: "0 0 auto", border: "2px solid var(--period-line)", borderRadius: "2px", padding: "0.45rem 0.6rem", background: "var(--period-bg)", color: "var(--period-ink)", fontFamily: "'Silkscreen', ui-monospace, monospace", fontSize: "0.72rem", fontWeight: "700" }}>
              Jan 2020 - Jun 2020
            </time>
          </div>
          <ul className="quests" style={{ display: "grid", margin: "0", padding: "0", borderBottom: "1px solid var(--divider)", listStyle: "none" }}>
            <li style={{ borderTop: "1px solid var(--divider)" }}>
              <button type="button" className="quest-btn" onClick={ui.qToggle14} aria-expanded={ui.qOpen14} style={{ display: "flex", width: "100%", alignItems: "flex-start", justifyContent: "space-between", gap: "1rem", border: "0", padding: "0.9rem 0.25rem", background: "transparent", color: "inherit", font: "inherit", textAlign: "left", cursor: "pointer" }}>
                {" "}
                <span style={{ display: "flex", gap: "0.6rem", alignItems: "baseline" }}>
                  <span className="pixel-font" aria-hidden="true" style={{ flex: "0 0 auto", color: "var(--accent)", fontSize: "0.8rem", fontWeight: "700" }}>
                    &gt;
                  </span>
                  <span style={{ color: "var(--body)" }}>
                    Developed Kafka library wrappers as Python packages and Ruby gems to simplify integration and serialization.
                  </span>
                </span>
                {" "}
                <span className="pixel-font" aria-hidden="true" style={{ display: "inline-grid", flex: "0 0 auto", width: "28px", height: "28px", placeItems: "center", border: "2px solid var(--px-frame)", borderRadius: "2px", background: "var(--chip-bg)", color: "var(--eyebrow)", fontSize: "0.9rem" }}>
                  {ui.qSign14}
                </span>
                {" "}
              </button>
              {" "}
              {ui.qOpen14 && (
                <>
                  <div className="cell-open quest-open" style={{ display: "grid", gridTemplateColumns: "180px minmax(0, 1fr)", gap: "1rem", alignItems: "center", padding: "0 0.25rem 1.1rem" }}>
                    <svg className="px-scene drop-in" viewBox="0 0 48 28" shapeRendering="crispEdges" aria-hidden="true" style={{ display: "block", width: "100%", maxWidth: "180px", height: "auto", border: "2px solid var(--px-frame)" }}>
                      <rect className="f-wall" x="0" y="0" width="48" height="22" />
                      <rect className="f-line" x="0" y="22" width="48" height="1" />
                      <rect className="f-floor" x="0" y="23" width="48" height="5" />
                      <g className="hop">
                        <rect className="f-hood" x="5" y="10" width="12" height="10" />
                        <rect className="f-amber" x="10" y="10" width="2" height="10" />
                        <rect className="f-amber" x="5" y="14" width="12" height="2" />
                        <rect className="f-amber" x="7" y="7" width="3" height="3" />
                        <rect className="f-amber" x="12" y="7" width="3" height="3" />
                      </g>
                      <rect className="f-pot" x="31" y="8" width="6" height="2" />
                      <rect className="f-pot" x="30" y="10" width="8" height="3" />
                      <rect className="f-pot" x="31" y="13" width="6" height="2" />
                      <rect className="f-pot" x="32" y="15" width="4" height="2" />
                      <rect className="f-pot" x="33" y="17" width="2" height="1" />
                      <rect className="f-white led" x="32" y="9" width="1" height="2" />
                      <rect className="f-amber star" x="40" y="5" width="1" height="1" />
                      <rect className="f-amber star" x="27" y="6" width="1" height="1" style={{ animationDelay: "1s" }} />
                      <rect className="f-amber star" x="41" y="15" width="1" height="1" style={{ animationDelay: "1.6s" }} />
                    </svg>
                    <p className="story-in" style={{ margin: "0", color: "var(--ink)", fontSize: "0.95rem" }}>
                      Kafka libraries wrapped as Python packages and Ruby gems, making integration and serialization simpler for every team.
                    </p>
                  </div>
                </>
              )}
            </li>
            <li style={{ borderTop: "1px solid var(--divider)" }}>
              <button type="button" className="quest-btn" onClick={ui.qToggle15} aria-expanded={ui.qOpen15} style={{ display: "flex", width: "100%", alignItems: "flex-start", justifyContent: "space-between", gap: "1rem", border: "0", padding: "0.9rem 0.25rem", background: "transparent", color: "inherit", font: "inherit", textAlign: "left", cursor: "pointer" }}>
                {" "}
                <span style={{ display: "flex", gap: "0.6rem", alignItems: "baseline" }}>
                  <span className="pixel-font" aria-hidden="true" style={{ flex: "0 0 auto", color: "var(--accent)", fontSize: "0.8rem", fontWeight: "700" }}>
                    &gt;
                  </span>
                  <span style={{ color: "var(--body)" }}>
                    Created an automated functional testing tool that reduced manual testing effort by <span className="metric">50%</span> and accelerated deployments.
                  </span>
                </span>
                {" "}
                <span className="pixel-font" aria-hidden="true" style={{ display: "inline-grid", flex: "0 0 auto", width: "28px", height: "28px", placeItems: "center", border: "2px solid var(--px-frame)", borderRadius: "2px", background: "var(--chip-bg)", color: "var(--eyebrow)", fontSize: "0.9rem" }}>
                  {ui.qSign15}
                </span>
                {" "}
              </button>
              {" "}
              {ui.qOpen15 && (
                <>
                  <div className="cell-open quest-open" style={{ display: "grid", gridTemplateColumns: "180px minmax(0, 1fr)", gap: "1rem", alignItems: "center", padding: "0 0.25rem 1.1rem" }}>
                    <svg className="px-scene drop-in" viewBox="0 0 48 28" shapeRendering="crispEdges" aria-hidden="true" style={{ display: "block", width: "100%", maxWidth: "180px", height: "auto", border: "2px solid var(--px-frame)" }}>
                      <rect className="f-wall" x="0" y="0" width="48" height="22" />
                      <rect className="f-line" x="0" y="22" width="48" height="1" />
                      <rect className="f-floor" x="0" y="23" width="48" height="5" />
                      <rect className="f-paper" x="6" y="2" width="20" height="19" />
                      <rect className="f-line" x="8" y="5" width="3" height="3" />
                      <rect className="f-line" x="8" y="10" width="3" height="3" />
                      <rect className="f-line" x="8" y="15" width="3" height="3" />
                      <rect className="f-line" x="13" y="6" width="10" height="1" />
                      <rect className="f-line" x="13" y="11" width="10" height="1" />
                      <rect className="f-line" x="13" y="16" width="8" height="1" />
                      <rect className="f-green build" x="9" y="6" width="1" height="1" />
                      <rect className="f-green build" x="9" y="11" width="1" height="1" style={{ animationDelay: "0.5s" }} />
                      <rect className="f-green build" x="9" y="16" width="1" height="1" style={{ animationDelay: "1s" }} />
                      <rect className="f-lap" x="33" y="7" width="9" height="7" />
                      <rect className="f-accent led" x="35" y="9" width="1" height="2" />
                      <rect className="f-accent led" x="39" y="9" width="1" height="2" />
                      <rect className="f-amber" x="37" y="4" width="1" height="3" />
                      <rect className="f-lap2" x="34" y="14" width="7" height="8" />
                      <g className="wiggle" style={{ transformOrigin: "34px 16px" }}>
                        <rect className="f-lap2" x="28" y="16" width="6" height="1" />
                      </g>
                    </svg>
                    <p className="story-in" style={{ margin: "0", color: "var(--ink)", fontSize: "0.95rem" }}>
                      An automated functional testing tool cut manual testing effort by <span className="metric">50%</span> and sped up deployments.
                    </p>
                  </div>
                </>
              )}
            </li>
            <li style={{ borderTop: "1px solid var(--divider)" }}>
              <button type="button" className="quest-btn" onClick={ui.qToggle16} aria-expanded={ui.qOpen16} style={{ display: "flex", width: "100%", alignItems: "flex-start", justifyContent: "space-between", gap: "1rem", border: "0", padding: "0.9rem 0.25rem", background: "transparent", color: "inherit", font: "inherit", textAlign: "left", cursor: "pointer" }}>
                {" "}
                <span style={{ display: "flex", gap: "0.6rem", alignItems: "baseline" }}>
                  <span className="pixel-font" aria-hidden="true" style={{ flex: "0 0 auto", color: "var(--accent)", fontSize: "0.8rem", fontWeight: "700" }}>
                    &gt;
                  </span>
                  <span style={{ color: "var(--body)" }}>
                    Migrated applications to Azure Kubernetes Service for improved scalability and operational management.
                  </span>
                </span>
                {" "}
                <span className="pixel-font" aria-hidden="true" style={{ display: "inline-grid", flex: "0 0 auto", width: "28px", height: "28px", placeItems: "center", border: "2px solid var(--px-frame)", borderRadius: "2px", background: "var(--chip-bg)", color: "var(--eyebrow)", fontSize: "0.9rem" }}>
                  {ui.qSign16}
                </span>
                {" "}
              </button>
              {" "}
              {ui.qOpen16 && (
                <>
                  <div className="cell-open quest-open" style={{ display: "grid", gridTemplateColumns: "180px minmax(0, 1fr)", gap: "1rem", alignItems: "center", padding: "0 0.25rem 1.1rem" }}>
                    <svg className="px-scene drop-in" viewBox="0 0 48 28" shapeRendering="crispEdges" aria-hidden="true" style={{ display: "block", width: "100%", maxWidth: "180px", height: "auto", border: "2px solid var(--px-frame)" }}>
                      <rect className="f-wall" x="0" y="0" width="48" height="20" />
                      <rect className="f-sky" x="0" y="20" width="48" height="8" />
                      <rect className="f-accent" x="4" y="23" width="5" height="1" />
                      <rect className="f-accent" x="30" y="25" width="6" height="1" />
                      <g className="bob" style={{ animationDuration: "1.2s" }}>
                        <rect className="f-hood" x="12" y="9" width="5" height="5" />
                        <rect className="f-amber" x="18" y="9" width="5" height="5" />
                        <rect className="f-green" x="24" y="10" width="4" height="4" />
                        <rect className="f-desk" x="9" y="14" width="22" height="4" />
                        <rect className="f-desk2" x="11" y="18" width="18" height="2" />
                      </g>
                      <g className="gear">
                        <rect className="f-desk" x="38" y="4" width="5" height="1" />
                        <rect className="f-desk" x="38" y="10" width="5" height="1" />
                        <rect className="f-desk" x="37" y="5" width="1" height="5" />
                        <rect className="f-desk" x="43" y="5" width="1" height="5" />
                        <rect className="f-desk2" x="40" y="2" width="1" height="11" />
                        <rect className="f-desk2" x="35" y="7" width="11" height="1" />
                        <rect className="f-amber" x="40" y="7" width="1" height="1" />
                      </g>
                    </svg>
                    <p className="story-in" style={{ margin: "0", color: "var(--ink)", fontSize: "0.95rem" }}>
                      Applications moved onto Azure Kubernetes Service for better scaling and simpler operations.
                    </p>
                  </div>
                </>
              )}
            </li>
          </ul>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
            <span style={{ border: "1px solid var(--chip-line)", borderRadius: "2px", padding: "0.4rem 0.65rem", background: "var(--chip-bg)", color: "var(--chip-ink)", fontSize: "0.86rem", fontWeight: "700" }}>
              Python
            </span>
            {" "}
            <span style={{ border: "1px solid var(--chip-line)", borderRadius: "2px", padding: "0.4rem 0.65rem", background: "var(--chip-bg)", color: "var(--chip-ink)", fontSize: "0.86rem", fontWeight: "700" }}>
              Ruby
            </span>
            {" "}
            <span style={{ border: "1px solid var(--chip-line)", borderRadius: "2px", padding: "0.4rem 0.65rem", background: "var(--chip-bg)", color: "var(--chip-ink)", fontSize: "0.86rem", fontWeight: "700" }}>
              Kafka wrappers
            </span>
            {" "}
            <span style={{ border: "1px solid var(--chip-line)", borderRadius: "2px", padding: "0.4rem 0.65rem", background: "var(--chip-bg)", color: "var(--chip-ink)", fontSize: "0.86rem", fontWeight: "700" }}>
              AKS
            </span>
            {" "}
            <span style={{ border: "1px solid var(--chip-line)", borderRadius: "2px", padding: "0.4rem 0.65rem", background: "var(--chip-bg)", color: "var(--chip-ink)", fontSize: "0.86rem", fontWeight: "700" }}>
              Testing automation
            </span>
          </div>
        </article>
      </div>
    </section>
  );
}
