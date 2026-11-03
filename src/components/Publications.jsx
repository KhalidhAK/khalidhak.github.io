export default function Publications({ ui }) {
  return (
    <section id="publications" className={`district ${ui.d_writing}`} data-district="writing" style={{ margin: "0 0 clamp(3rem, 8vw, 6rem)" }}>
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
                <g className={ui.dodge_sign3}>
                  <rect className="bot-limb f-blight" x="4" y="0" width="1" height="1" />
                  <rect className="bot-limb f-lap2" x="4" y="1" width="1" height="1" />
                  <g className="bot-head">
                    <rect className="f-lap" x="1" y="2" width="7" height="5" />
                    <rect className="f-slot" x="2" y="3" width="5" height="3" />
                    <g data-bot="sign3" style={{ transform: ui.eye_sign3 }}>
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
            05 · WRITING
          </p>
        </div>
        <h2 style={{ margin: "0", color: "var(--ink)", fontSize: "clamp(2rem, 4vw, 3.4rem)", lineHeight: "1.05", letterSpacing: "0" }}>
          Sharing practical patterns from streaming data work.
        </h2>
      </div>
      <div style={{ display: "grid", gap: "1rem" }}>
        <article className="pixel-card" style={{ display: "grid", gap: "0.6rem", border: "3px solid var(--px-frame)", borderRadius: "4px", padding: "1.25rem", background: "var(--surface-90)", boxShadow: "6px 6px 0 var(--px-shadow)" }}>
          <span className="pixel-font" style={{ color: "var(--period-ink)", fontSize: "0.72rem", fontWeight: "700", textTransform: "uppercase" }}>
            Towards Dev
          </span>
          {" "}
          <a href="https://towardsdev.com/how-to-stream-data-from-snowflake-to-kafka-using-jdbc-source-connector-with-key-pair-authentication-8888d300831b" target="_blank" rel="noopener noreferrer" style={{ color: "var(--ink)", fontSize: "clamp(1.1rem, 2vw, 1.35rem)", fontWeight: "700", lineHeight: "1.25", textDecorationColor: "var(--link-line)", textDecorationThickness: "2px", textUnderlineOffset: "4px" }}>
            How to Stream Data from Snowflake to Kafka using JDBC Source Connector with Key Pair Authentication
          </a>
        </article>
      </div>
    </section>
  );
}
