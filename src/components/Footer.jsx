export default function Footer({ ui }) {
  return (
    <footer className={`footer district ${ui.d_footer}`} data-district="footer" style={{ width: "min(1160px, calc(100% - 2rem))", margin: "0 auto 1rem", borderTop: "1px solid var(--divider)", padding: "1.5rem 0 0", color: "var(--muted)", textAlign: "center" }}>
      <div style={{ position: "relative", width: "36px", margin: "calc(-1.5rem - 48px) auto 1.5rem" }}>
        <svg className="px-scene footer-bot" viewBox="0 0 9 12" shapeRendering="crispEdges" aria-hidden="true" style={{ display: "block", width: "36px", height: "48px", margin: "0", overflow: "visible" }}>
          <g className="bob" style={{ animationDuration: "1.6s" }}>
            <g className={ui.dodge_footer}>
              <rect className="f-blight led" x="4" y="0" width="1" height="1" />
              <rect className="f-lap2" x="4" y="1" width="1" height="1" />
              <rect className="f-lap" x="1" y="2" width="7" height="5" />
              <rect className="f-slot" x="2" y="3" width="5" height="3" />
              <g data-bot="footer" style={{ transform: ui.eye_footer }}>
                <rect className="f-eye eye" x="3" y="4" width="1" height="1" />
                <rect className="f-eye eye" x="5" y="4" width="1" height="1" />
              </g>
              <rect className="f-hood" x="2" y="7" width="5" height="3" />
              <rect className="f-crown" x="2" y="7" width="5" height="1" />
              <rect className="f-blight led" x="4" y="8" width="1" height="1" />
              <rect className="f-lap2" x="1" y="7" width="1" height="3" />
              <g className="legs-a" style={{ animationDuration: "0.5s" }}>
                <rect className="f-lap2" x="7" y="7" width="1" height="3" />
              </g>
              <g className="legs-b" style={{ animationDuration: "0.5s" }}>
                <rect className="f-lap2" x="7" y="4" width="1" height="3" />
                <rect className="f-lap2" x="8" y="3" width="1" height="1" />
              </g>
              <rect className="f-lap2" x="2" y="10" width="2" height="2" />
              <rect className="f-lap2" x="5" y="10" width="2" height="2" />
            </g>
          </g>
        </svg>
        {ui.talk_footer && (
          <>
            <span className="pixel-font bot-say" role="status" style={{ position: "absolute", bottom: "calc(100% + 8px)", left: "50%", transform: "translateX(-50%)", fontSize: "0.72rem", border: "2px solid var(--px-frame)", borderRadius: "2px", padding: "0.45rem 0.6rem", background: "var(--surface-90)", boxShadow: "3px 3px 0 var(--px-shadow)", color: "var(--ink)", lineHeight: "1.2", whiteSpace: "nowrap", pointerEvents: "none", zIndex: "5" }}>
              {ui.line_footer}
            </span>
          </>
        )}
      </div>
      <p style={{ margin: "0" }}>
        "When you look at the vast size of the universe, and how insignificant and accidental human life is in it, that seems most implausible." - Stephen Hawking
      </p>
    </footer>
  );
}
