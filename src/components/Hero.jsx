export default function Hero({ ui }) {
  return (
    <header id="top" className="hero" style={{ display: "grid", gridTemplateColumns: "minmax(0, 1fr) minmax(280px, 420px)", gap: "clamp(1.5rem, 5vw, 4rem)", alignItems: "center", width: "min(1160px, calc(100% - 2rem))", minHeight: "92vh", margin: "0 auto", overflow: "clip", padding: "clamp(3rem, 8vw, 6rem) 0 4rem" }}>
      <div className="rise" style={{ maxWidth: "780px" }}>
        <p className="pixel-font" style={{ margin: "0 0 0.75rem", color: "var(--eyebrow)", fontSize: "0.72rem", fontWeight: "700", textTransform: "uppercase" }}>
          Streaming platforms · Backend systems · AI exploration
        </p>
        <h1 className="name" style={{ maxWidth: "760px", margin: "0", fontSize: "clamp(3.2rem, 10vw, 7.8rem)", lineHeight: "0.92", letterSpacing: "0" }}>
          <span style={{ position: "relative", display: "inline-block" }}>
            Khalidh
            <svg className="px-scene" viewBox="0 0 9 12" shapeRendering="crispEdges" aria-hidden="true" style={{ position: "absolute", top: "0.26em", left: "calc(100% + 0.08em)", width: "0.36em", height: "auto", overflow: "visible", pointerEvents: "none" }}>
              <g className="bob" style={{ animationDuration: "1.6s" }}>
                <g className={ui.dodge_name}>
                  <rect className="f-blight led" x="4" y="0" width="1" height="1" />
                  <rect className="f-lap2" x="4" y="1" width="1" height="1" />
                  <rect className="f-lap" x="1" y="2" width="7" height="5" />
                  <rect className="f-slot" x="2" y="3" width="5" height="3" />
                  <g data-bot="name" style={{ transform: ui.eye_name }}>
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
            {ui.talk_name && (
              <>
                <span className="pixel-font bot-say" role="status" style={{ position: "absolute", top: "-0.02em", left: "calc(100% + 0.5em)", fontSize: "0.11em", border: "2px solid var(--px-frame)", borderRadius: "2px", padding: "0.45rem 0.6rem", background: "var(--surface-90)", boxShadow: "3px 3px 0 var(--px-shadow)", color: "var(--ink)", lineHeight: "1.2", whiteSpace: "nowrap", pointerEvents: "none", zIndex: "5" }}>
                  {ui.line_name}
                </span>
              </>
            )}
          </span>
          <br />
          Ahamed
        </h1>
        <p style={{ maxWidth: "680px", margin: "1.5rem 0 0", color: "var(--body)", fontSize: "clamp(1.1rem, 2vw, 1.45rem)" }}>
          Software engineer building reliable event-driven systems, real-time data platforms, and cloud-native services at scale.
        </p>
        <svg className="px-scene" viewBox="0 0 160 44" shapeRendering="crispEdges" role="img" aria-label="Pixel town: server towers with blinking windows beam packets to each other while little bugs carry envelopes along the road" style={{ display: "block", width: "100%", maxWidth: "640px", height: "auto", marginTop: "2.25rem" }}>
          <rect className="f-moon" x="146" y="4" width="4" height="6" />
          <rect className="f-moon" x="145" y="5" width="6" height="4" />
          <rect className="f-star star" x="120" y="6" width="1" height="1" />
          <rect className="f-star star" x="96" y="3" width="1" height="1" style={{ animationDelay: "0.9s" }} />
          <rect className="f-star star" x="60" y="5" width="1" height="1" style={{ animationDelay: "1.7s" }} />
          <rect className="f-star star" x="14" y="3" width="1" height="1" style={{ animationDelay: "0.4s" }} />
          <g className="drift">
            <rect className="f-cloud" x="2" y="8" width="6" height="1" />
            <rect className="f-cloud" x="0" y="9" width="10" height="2" />
          </g>
          <g className="drift" style={{ animationDelay: "-13s", animationDuration: "34s" }}>
            <rect className="f-cloud" x="3" y="15" width="5" height="1" />
            <rect className="f-cloud" x="1" y="16" width="9" height="2" />
          </g>
          <g className="drift" style={{ animationDelay: "-4s", animationDuration: "18s" }}>
            <rect className="f-ink" x="2" y="4" width="2" height="1" />
            <g className="legs-a" style={{ animationDuration: "0.5s" }}>
              <rect className="f-ink" x="0" y="3" width="2" height="1" />
              <rect className="f-ink" x="4" y="3" width="2" height="1" />
            </g>
            <g className="legs-b" style={{ animationDuration: "0.5s" }}>
              <rect className="f-ink" x="0" y="5" width="2" height="1" />
              <rect className="f-ink" x="4" y="5" width="2" height="1" />
            </g>
          </g>
          <rect className="f-line" x="0" y="36" width="160" height="1" />
          <rect className="f-floor" x="0" y="37" width="160" height="7" />
          <rect className="f-line" x="10" y="40" width="6" height="1" />
          <rect className="f-line" x="40" y="40" width="6" height="1" />
          <rect className="f-line" x="70" y="40" width="6" height="1" />
          <rect className="f-line" x="100" y="40" width="6" height="1" />
          <rect className="f-line" x="130" y="40" width="6" height="1" />
          <rect className="f-rack" x="8" y="20" width="14" height="16" />
          <rect className="f-amber led" x="10" y="23" width="3" height="2" />
          <rect className="f-accent" x="15" y="23" width="3" height="2" />
          <rect className="f-accent led" x="10" y="28" width="3" height="2" style={{ animationDelay: "0.8s" }} />
          <rect className="f-amber" x="15" y="28" width="3" height="2" />
          <rect className="f-lap2" x="31" y="5" width="2" height="7" />
          <rect className="f-pot led" x="30" y="3" width="4" height="2" />
          <rect className="f-rack" x="26" y="12" width="12" height="24" />
          <rect className="f-amber led" x="28" y="15" width="3" height="2" style={{ animationDelay: "0.3s" }} />
          <rect className="f-accent" x="33" y="15" width="3" height="2" />
          <rect className="f-accent" x="28" y="20" width="3" height="2" />
          <rect className="f-amber led" x="33" y="20" width="3" height="2" style={{ animationDelay: "1.1s" }} />
          <rect className="f-amber" x="28" y="25" width="3" height="2" />
          <rect className="f-accent led" x="33" y="25" width="3" height="2" style={{ animationDelay: "0.6s" }} />
          <rect className="f-slot" x="30" y="31" width="4" height="5" />
          <rect className="f-line" x="38" y="13" width="62" height="1" />
          <g className="beam">
            <rect className="f-amber" x="38" y="11" width="3" height="2" />
          </g>
          <g className="beam" style={{ animationDelay: "1.5s" }}>
            <rect className="f-accent" x="38" y="11" width="3" height="2" />
          </g>
          <rect className="f-hood2" x="46" y="18" width="12" height="2" />
          <rect className="f-hood2" x="44" y="20" width="16" height="2" />
          <rect className="f-hood" x="43" y="22" width="18" height="14" />
          <rect className="f-amber glow" x="47" y="25" width="10" height="3" style={{ animationDuration: "3s" }} />
          <rect className="f-amber" x="48" y="26" width="8" height="1" />
          <rect className="f-slot" x="50" y="30" width="4" height="6" />
          <g className="leaf" style={{ transformOrigin: "78px 36px" }}>
            <rect className="f-leaf" x="75" y="18" width="6" height="2" />
            <rect className="f-leaf" x="73" y="20" width="10" height="8" />
          </g>
          <rect className="f-desk2" x="77" y="28" width="2" height="8" />
          <rect className="f-lap2" x="90" y="22" width="1" height="14" />
          <rect className="f-amber led" x="89" y="20" width="3" height="2" style={{ animationDuration: "2.4s" }} />
          <rect className="f-slot" x="99" y="13" width="16" height="1" />
          <rect className="f-rack" x="100" y="14" width="14" height="22" />
          <rect className="f-accent" x="102" y="17" width="3" height="2" />
          <rect className="f-amber led" x="108" y="17" width="3" height="2" style={{ animationDelay: "0.5s" }} />
          <rect className="f-amber" x="102" y="22" width="3" height="2" />
          <rect className="f-accent led" x="108" y="22" width="3" height="2" style={{ animationDelay: "1.3s" }} />
          <rect className="f-accent led" x="102" y="27" width="3" height="2" style={{ animationDelay: "0.2s" }} />
          <rect className="f-amber" x="108" y="27" width="3" height="2" />
          <rect className="f-lap" x="126" y="14" width="8" height="2" />
          <rect className="f-lap" x="128" y="16" width="4" height="2" />
          <rect className="f-lap2" x="129" y="18" width="2" height="4" />
          <rect className="f-accent led" x="136" y="12" width="1" height="1" />
          <rect className="f-accent led" x="138" y="10" width="1" height="1" style={{ animationDelay: "0.4s" }} />
          <rect className="f-accent led" x="140" y="8" width="1" height="1" style={{ animationDelay: "0.8s" }} />
          <rect className="f-rack" x="120" y="22" width="20" height="14" />
          <rect className="f-amber" x="123" y="26" width="3" height="2" />
          <rect className="f-green led" x="128" y="26" width="3" height="2" />
          <rect className="f-accent" x="133" y="26" width="3" height="2" />
          <rect className="f-leaf" x="4" y="35" width="1" height="1" />
          <rect className="f-leaf" x="66" y="35" width="2" height="1" />
          <rect className="f-leaf" x="95" y="35" width="1" height="1" />
          <rect className="f-leaf" x="150" y="35" width="2" height="1" />
          <g transform="translate(48 6)">
            <g className={ui.dodge_roof}>
              <rect className="bot-limb f-blight led" x="4" y="0" width="1" height="1" />
              <rect className="bot-limb f-lap2" x="4" y="1" width="1" height="1" />
              <g className="bot-head">
                <rect className="f-lap" x="1" y="2" width="7" height="5" />
                <rect className="f-slot" x="2" y="3" width="5" height="3" />
                <g data-bot="roof" style={{ transform: ui.eye_roof }}>
                  <rect className="f-eye eye" x="3" y="4" width="1" height="1" />
                  <rect className="f-eye eye" x="5" y="4" width="1" height="1" />
                </g>
              </g>
              <rect className="bot-limb f-hood" x="2" y="7" width="5" height="3" />
              <rect className="bot-limb f-blight led" x="4" y="8" width="1" height="1" />
              <rect className="bot-limb f-lap2" x="1" y="7" width="1" height="3" />
              <rect className="bot-limb f-lap2" x="7" y="7" width="1" height="3" />
              <rect className="bot-limb f-lap2" x="2" y="10" width="2" height="2" />
              <rect className="bot-limb f-lap2" x="5" y="10" width="2" height="2" />
            </g>
          </g>
          <g className="drive" transform="translate(66 30)">
            <rect className="f-line steam" x="-2" y="5" width="1" height="1" />
            <rect className="f-hood" x="0" y="0" width="13" height="7" />
            <rect className="f-hood2" x="3" y="0" width="1" height="7" />
            <rect className="f-hood2" x="6" y="0" width="1" height="7" />
            <rect className="f-hood2" x="9" y="0" width="1" height="7" />
            <rect className="f-lap2" x="0" y="7" width="22" height="1" />
            <rect className="f-amber led" x="17" y="0" width="1" height="1" />
            <rect className="f-lap2" x="17" y="1" width="1" height="1" />
            <rect className="f-lap" x="14" y="2" width="6" height="5" />
            <rect className="f-lap" x="20" y="4" width="2" height="3" />
            <rect className="f-slot" x="15" y="3" width="4" height="2" />
            <rect className="f-eye" x="16" y="4" width="1" height="1" />
            <rect className="f-eye" x="18" y="4" width="1" height="1" />
            <rect className="f-amber" x="21" y="5" width="1" height="1" />
            <rect className="f-ink" x="2" y="8" width="3" height="3" />
            <rect className="f-ink" x="9" y="8" width="3" height="3" />
            <rect className="f-ink" x="16" y="8" width="3" height="3" />
            <rect className="f-lap" x="3" y="9" width="1" height="1" />
            <rect className="f-lap" x="10" y="9" width="1" height="1" />
            <rect className="f-lap" x="17" y="9" width="1" height="1" />
          </g>
          <g className="drive" transform="translate(130 30)" style={{ animationDelay: "-6s" }}>
            <rect className="f-line steam" x="-2" y="5" width="1" height="1" style={{ animationDelay: "1s" }} />
            <rect className="f-amber" x="0" y="0" width="13" height="7" />
            <rect className="f-bug2" x="3" y="0" width="1" height="7" />
            <rect className="f-bug2" x="6" y="0" width="1" height="7" />
            <rect className="f-bug2" x="9" y="0" width="1" height="7" />
            <rect className="f-lap2" x="0" y="7" width="22" height="1" />
            <rect className="f-amber led" x="17" y="0" width="1" height="1" style={{ animationDelay: "0.5s" }} />
            <rect className="f-lap2" x="17" y="1" width="1" height="1" />
            <rect className="f-pot" x="14" y="2" width="6" height="5" />
            <rect className="f-pot" x="20" y="4" width="2" height="3" />
            <rect className="f-slot" x="15" y="3" width="4" height="2" />
            <rect className="f-eye" x="16" y="4" width="1" height="1" />
            <rect className="f-eye" x="18" y="4" width="1" height="1" />
            <rect className="f-amber" x="21" y="5" width="1" height="1" />
            <rect className="f-ink" x="2" y="8" width="3" height="3" />
            <rect className="f-ink" x="9" y="8" width="3" height="3" />
            <rect className="f-ink" x="16" y="8" width="3" height="3" />
            <rect className="f-lap" x="3" y="9" width="1" height="1" />
            <rect className="f-lap" x="10" y="9" width="1" height="1" />
            <rect className="f-lap" x="17" y="9" width="1" height="1" />
          </g>
        </svg>
      </div>
      <div className="rise" style={{ display: "grid", gap: "1rem", animationDelay: "0.15s" }}>
        <div className="pixel-card" style={{ overflow: "hidden", border: "3px solid var(--px-frame)", borderRadius: "4px", background: "var(--px-wall)", boxShadow: "6px 6px 0 var(--px-shadow)" }}>
          <div className="pixel-font" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "0.5rem", borderBottom: "3px solid var(--px-frame)", padding: "0.55rem 0.85rem", background: "var(--surface-90)", fontSize: "0.72rem" }}>
            <span style={{ color: "var(--ink)", fontWeight: "700" }}>
              KHAL.EXE
            </span>
            {" "}
            <span style={{ color: "var(--period-ink)", fontWeight: "700" }}>
              LVL 6+ · SR. ENGINEER
            </span>
          </div>
          <svg className="px-scene" viewBox="0 0 128 96" shapeRendering="crispEdges" role="img" aria-label="Pixel-art scene: an empty chair behind a laptop, with a Khal Bot next to the coffee mug keeping watch beside a server rack" style={{ display: "block", width: "100%", height: "auto" }}>
            <defs>
              <clipPath id="px-sky-clip">
                <rect x="12" y="12" width="28" height="22" />
              </clipPath>
            </defs>
            <rect className="f-wall" x="0" y="0" width="128" height="78" />
            <rect className="f-line" x="0" y="76" width="128" height="2" />
            <rect className="f-floor" x="0" y="78" width="128" height="18" />
            <rect className="f-line" x="14" y="81" width="10" height="1" />
            <rect className="f-line" x="58" y="93" width="12" height="1" />
            <rect className="f-line" x="94" y="82" width="8" height="1" />
            <rect className="f-frame" x="10" y="10" width="32" height="26" />
            <rect className="f-sky" x="12" y="12" width="28" height="22" />
            <g clipPath="url(#px-sky-clip)">
              <rect className="f-star star" x="15" y="15" width="1" height="1" />
              <rect className="f-star star" x="21" y="19" width="1" height="1" style={{ animationDelay: "0.7s" }} />
              <rect className="f-star star" x="37" y="29" width="1" height="1" style={{ animationDelay: "1.4s" }} />
              <rect className="f-star star" x="17" y="29" width="1" height="1" style={{ animationDelay: "2s" }} />
              <rect className="f-moon" x="33" y="14" width="3" height="5" />
              <rect className="f-moon" x="32" y="15" width="5" height="3" />
              <g className="cloud">
                <rect className="f-cloud" x="3" y="17" width="5" height="1" />
                <rect className="f-cloud" x="1" y="18" width="9" height="2" />
              </g>
              <g className="cloud" style={{ animationDelay: "-8s", animationDuration: "22s" }}>
                <rect className="f-cloud" x="4" y="27" width="4" height="1" />
                <rect className="f-cloud" x="2" y="28" width="8" height="2" />
              </g>
            </g>
            <rect className="f-frame" x="25" y="12" width="2" height="22" />
            <rect className="f-frame" x="12" y="22" width="28" height="2" />
            <rect className="f-frame" x="8" y="36" width="36" height="2" />
            <rect className="f-frame" x="82" y="12" width="20" height="16" />
            <rect className="f-screen" x="83" y="13" width="18" height="14" />
            <rect className="f-amber" x="91" y="11" width="2" height="2" />
            <rect className="f-accent bar" x="85" y="17" width="3" height="8" />
            <rect className="f-amber bar" x="89" y="20" width="3" height="5" style={{ animationDelay: "0.6s" }} />
            <rect className="f-accent bar" x="93" y="15" width="3" height="10" style={{ animationDelay: "1.2s" }} />
            <rect className="f-amber bar" x="97" y="19" width="2" height="6" style={{ animationDelay: "1.8s" }} />
            <rect className="f-desk" x="24" y="63" width="82" height="3" />
            <rect className="f-desk2" x="24" y="66" width="82" height="1" />
            <rect className="f-desk2" x="27" y="67" width="3" height="9" />
            <rect className="f-desk2" x="100" y="67" width="3" height="9" />
            <g className="leaf">
              <rect className="f-leaf" x="35" y="49" width="2" height="8" />
              <rect className="f-leaf" x="32" y="52" width="3" height="2" />
              <rect className="f-leaf" x="33" y="49" width="2" height="3" />
              <rect className="f-leaf" x="37" y="51" width="3" height="2" />
              <rect className="f-leaf" x="39" y="48" width="2" height="3" />
            </g>
            <rect className="f-pot" x="31" y="57" width="10" height="2" />
            <rect className="f-pot" x="32" y="59" width="8" height="4" />
            <rect className="f-rack" x="57" y="38" width="14" height="1" />
            <rect className="f-rack" x="56" y="39" width="16" height="12" />
            <rect className="f-slot" x="58" y="41" width="12" height="1" />
            <rect className="f-lap2" x="51" y="50" width="26" height="13" />
            <rect className="f-lap" x="52" y="51" width="24" height="11" />
            <rect className="f-accent logo" x="62" y="54" width="4" height="4" />
            <rect className="f-lap2" x="49" y="62" width="30" height="1" />
            <g transform="translate(94 51)">
              <g className="bob" style={{ animationDuration: "1.6s" }}>
                <g className={ui.dodge_desk}>
                  <rect className="bot-limb f-blight led" x="4" y="0" width="1" height="1" />
                  <rect className="bot-limb f-lap2" x="4" y="1" width="1" height="1" />
                  <g className="bot-head">
                    <rect className="f-lap" x="1" y="2" width="7" height="5" />
                    <rect className="f-slot" x="2" y="3" width="5" height="3" />
                    <g data-bot="desk" style={{ transform: ui.eye_desk }}>
                      <rect className="f-eye eye" x="3" y="4" width="1" height="1" />
                      <rect className="f-eye eye" x="5" y="4" width="1" height="1" />
                    </g>
                  </g>
                  <rect className="bot-limb f-hood" x="2" y="7" width="5" height="3" />
                  <rect className="bot-limb f-blight led" x="4" y="8" width="1" height="1" />
                  <rect className="bot-limb f-lap2" x="1" y="7" width="1" height="3" />
                  <rect className="bot-limb f-lap2" x="7" y="7" width="1" height="3" />
                  <rect className="bot-limb f-lap2" x="2" y="10" width="2" height="2" />
                  <rect className="bot-limb f-lap2" x="5" y="10" width="2" height="2" />
                </g>
              </g>
            </g>
            <rect className="f-mug" x="84" y="57" width="6" height="6" />
            <rect className="f-mug" x="90" y="58" width="2" height="3" />
            <rect className="f-accent" x="85" y="59" width="4" height="1" />
            <rect className="f-line steam" x="86" y="53" width="1" height="2" />
            <rect className="f-line steam" x="88" y="51" width="1" height="2" style={{ animationDelay: "0.8s" }} />
            <rect className="f-line steam" x="86" y="49" width="1" height="2" style={{ animationDelay: "1.6s" }} />
            <rect className="f-slot" x="105" y="35" width="20" height="2" />
            <rect className="f-rack" x="106" y="37" width="18" height="41" />
            <rect className="f-slot" x="108" y="39" width="14" height="4" />
            <rect className="f-slot" x="108" y="45" width="14" height="4" />
            <rect className="f-slot" x="108" y="51" width="14" height="4" />
            <rect className="f-slot" x="108" y="57" width="14" height="4" />
            <rect className="f-slot" x="108" y="63" width="14" height="4" />
            <rect className="f-slot" x="108" y="72" width="8" height="6" />
            <rect className="f-green led" x="119" y="40" width="2" height="2" />
            <rect className="f-amber led" x="119" y="46" width="2" height="2" style={{ animationDelay: "0.3s" }} />
            <rect className="f-accent led" x="119" y="52" width="2" height="2" style={{ animationDelay: "0.7s" }} />
            <rect className="f-green led" x="119" y="58" width="2" height="2" style={{ animationDelay: "0.5s" }} />
            <rect className="f-amber led" x="119" y="64" width="2" height="2" style={{ animationDelay: "0.9s" }} />
            <rect className="f-green led" x="116" y="40" width="2" height="2" style={{ animationDelay: "0.2s" }} />
            <rect className="f-green led" x="116" y="52" width="2" height="2" style={{ animationDelay: "1s" }} />
          </svg>
          <p className="pixel-font" style={{ margin: "0", borderTop: "3px solid var(--px-frame)", padding: "0.6rem 0.85rem", background: "var(--surface-90)", color: "var(--ink)", fontSize: "0.8rem" }}>
            &gt; shipping event-driven systems since 2020
            {" "}
            <span className="cursor" aria-hidden="true" style={{ display: "inline-block", width: "0.55em", height: "1em", background: "var(--accent)", verticalAlign: "-0.15em" }} />
          </p>
          <div aria-label="Areas of expertise">
            <div style={{ borderTop: "3px solid var(--px-frame)", background: "var(--surface-90)" }}>
              <button type="button" className="cell-btn" onClick={ui.toggle0} aria-expanded={ui.open0} aria-controls="cell-0" style={{ display: "flex", width: "100%", minHeight: "56px", alignItems: "center", justifyContent: "space-between", gap: "0.75rem", border: "0", padding: "0.75rem 0.85rem", background: "transparent", color: "inherit", font: "inherit", textAlign: "left", cursor: "pointer" }}>
                {" "}
                <span style={{ display: "grid", gap: "0.2rem" }}>
                  <span style={{ color: "var(--accent)", fontSize: "1.05rem", fontWeight: "700", lineHeight: "1.15" }}>
                    Event-Driven Architecture
                  </span>
                  <span style={{ color: "var(--muted)", fontSize: "0.82rem", fontWeight: "700" }}>
                    Domain-driven design · System resilience
                  </span>
                </span>
                {" "}
                <span className="pixel-font" aria-hidden="true" style={{ display: "inline-grid", flex: "0 0 auto", width: "28px", height: "28px", placeItems: "center", border: "2px solid var(--px-frame)", background: "var(--chip-bg)", color: "var(--eyebrow)", fontSize: "0.9rem" }}>
                  {ui.sign0}
                </span>
                {" "}
              </button>
              {" "}
              {ui.open0 && (
                <>
                  <div id="cell-0" className="cell-open" style={{ display: "grid", gridTemplateColumns: "64px minmax(0, 1fr)", gap: "0.85rem", alignItems: "start", padding: "0 0.85rem 0.9rem" }}>
                    <svg className="px-scene" viewBox="0 0 24 24" shapeRendering="crispEdges" aria-hidden="true" style={{ display: "block", width: "64px", height: "auto", border: "2px solid var(--px-frame)" }}>
                      <rect className="f-wall" x="0" y="0" width="24" height="18" />
                      <rect className="f-line" x="0" y="18" width="24" height="1" />
                      <rect className="f-floor" x="0" y="19" width="24" height="5" />
                      <g className="drop-in">
                        <rect className="f-paper" x="5" y="9" width="14" height="9" />
                        <rect className="f-accent" x="6" y="10" width="2" height="1" />
                        <rect className="f-accent" x="8" y="11" width="2" height="1" />
                        <rect className="f-accent" x="10" y="12" width="4" height="1" />
                        <rect className="f-accent" x="14" y="11" width="2" height="1" />
                        <rect className="f-accent" x="16" y="10" width="2" height="1" />
                        <rect className="f-amber" x="16" y="14" width="2" height="2" />
                      </g>
                      <rect className="f-amber star" x="3" y="5" width="1" height="1" style={{ animationDelay: "0.7s" }} />
                      <rect className="f-amber star" x="20" y="4" width="1" height="1" style={{ animationDelay: "1.1s" }} />
                    </svg>
                    <p className="story-in" style={{ margin: "0", color: "var(--body)", fontSize: "0.95rem" }}>
                      Since 2020 I've built systems where events are the source of truth. At Rocket I scaled event-driven microservices for servicing workflows covering 200+ event types, and designed the cluster linking and topic mirroring that kept data flowing through a zero-downtime migration.
                    </p>
                  </div>
                </>
              )}
            </div>
            <div style={{ borderTop: "3px solid var(--px-frame)", background: "var(--surface-90)" }}>
              <button type="button" className="cell-btn" onClick={ui.toggle1} aria-expanded={ui.open1} aria-controls="cell-1" style={{ display: "flex", width: "100%", minHeight: "56px", alignItems: "center", justifyContent: "space-between", gap: "0.75rem", border: "0", padding: "0.75rem 0.85rem", background: "transparent", color: "inherit", font: "inherit", textAlign: "left", cursor: "pointer" }}>
                {" "}
                <span style={{ display: "grid", gap: "0.2rem" }}>
                  <span style={{ color: "var(--accent)", fontSize: "1.05rem", fontWeight: "700", lineHeight: "1.15" }}>
                    Streaming &amp; Data Platforms
                  </span>
                  <span style={{ color: "var(--muted)", fontSize: "0.82rem", fontWeight: "700" }}>
                    Kafka · Real-time processing · ETL pipelines
                  </span>
                </span>
                {" "}
                <span className="pixel-font" aria-hidden="true" style={{ display: "inline-grid", flex: "0 0 auto", width: "28px", height: "28px", placeItems: "center", border: "2px solid var(--px-frame)", background: "var(--chip-bg)", color: "var(--eyebrow)", fontSize: "0.9rem" }}>
                  {ui.sign1}
                </span>
                {" "}
              </button>
              {" "}
              {ui.open1 && (
                <>
                  <div id="cell-1" className="cell-open" style={{ display: "grid", gridTemplateColumns: "64px minmax(0, 1fr)", gap: "0.85rem", alignItems: "start", padding: "0 0.85rem 0.9rem" }}>
                    <svg className="px-scene" viewBox="0 0 24 24" shapeRendering="crispEdges" aria-hidden="true" style={{ display: "block", width: "64px", height: "auto", border: "2px solid var(--px-frame)" }}>
                      <rect className="f-wall" x="0" y="0" width="24" height="18" />
                      <rect className="f-line" x="0" y="18" width="24" height="1" />
                      <rect className="f-floor" x="0" y="19" width="24" height="5" />
                      <g className="drop-in">
                        <rect className="f-accent" x="4" y="14" width="16" height="4" />
                        <rect className="f-hood2" x="8" y="14" width="1" height="4" />
                        <rect className="f-hood2" x="13" y="14" width="1" height="4" />
                      </g>
                      <g className="drop-in" style={{ animationDelay: "0.18s" }}>
                        <rect className="f-amber" x="4" y="9" width="16" height="4" />
                        <rect className="f-bug2" x="10" y="9" width="1" height="4" />
                        <rect className="f-bug2" x="15" y="9" width="1" height="4" />
                      </g>
                      <g className="drop-in" style={{ animationDelay: "0.36s" }}>
                        <rect className="f-accent" x="4" y="4" width="16" height="4" />
                        <rect className="f-hood2" x="7" y="4" width="1" height="4" />
                        <rect className="f-hood2" x="12" y="4" width="1" height="4" />
                      </g>
                      <rect className="f-green led" x="21" y="15" width="1" height="1" />
                    </svg>
                    <p className="story-in" style={{ margin: "0", color: "var(--body)", fontSize: "0.95rem" }}>
                      Kafka has been home for six years. I helped build the platform that managed 2000+ topics, led the move of 200+ topics across 20+ app teams with zero data loss, and integrated 10+ sources into pipelines handling 100M+ events a day, 75% faster, with Kafka Streams and Flink SQL doing the real-time work.
                    </p>
                  </div>
                </>
              )}
            </div>
            <div style={{ borderTop: "3px solid var(--px-frame)", background: "var(--surface-90)" }}>
              <button type="button" className="cell-btn" onClick={ui.toggle2} aria-expanded={ui.open2} aria-controls="cell-2" style={{ display: "flex", width: "100%", minHeight: "56px", alignItems: "center", justifyContent: "space-between", gap: "0.75rem", border: "0", padding: "0.75rem 0.85rem", background: "transparent", color: "inherit", font: "inherit", textAlign: "left", cursor: "pointer" }}>
                {" "}
                <span style={{ display: "grid", gap: "0.2rem" }}>
                  <span style={{ color: "var(--accent)", fontSize: "1.05rem", fontWeight: "700", lineHeight: "1.15" }}>
                    Fullstack Engineering
                  </span>
                  <span style={{ color: "var(--muted)", fontSize: "0.82rem", fontWeight: "700" }}>
                    Spring Boot · Cloud services · React · Next.js
                  </span>
                </span>
                {" "}
                <span className="pixel-font" aria-hidden="true" style={{ display: "inline-grid", flex: "0 0 auto", width: "28px", height: "28px", placeItems: "center", border: "2px solid var(--px-frame)", background: "var(--chip-bg)", color: "var(--eyebrow)", fontSize: "0.9rem" }}>
                  {ui.sign2}
                </span>
                {" "}
              </button>
              {" "}
              {ui.open2 && (
                <>
                  <div id="cell-2" className="cell-open" style={{ display: "grid", gridTemplateColumns: "64px minmax(0, 1fr)", gap: "0.85rem", alignItems: "start", padding: "0 0.85rem 0.9rem" }}>
                    <svg className="px-scene" viewBox="0 0 24 24" shapeRendering="crispEdges" aria-hidden="true" style={{ display: "block", width: "64px", height: "auto", border: "2px solid var(--px-frame)" }}>
                      <rect className="f-wall" x="0" y="0" width="24" height="18" />
                      <rect className="f-line" x="0" y="18" width="24" height="1" />
                      <rect className="f-floor" x="0" y="19" width="24" height="5" />
                      <g className="drop-in">
                        <rect className="f-rack" x="4" y="14" width="16" height="4" />
                        <rect className="f-green" x="17" y="15" width="1" height="1" />
                      </g>
                      <g className="drop-in" style={{ animationDelay: "0.18s" }}>
                        <rect className="f-hood" x="5" y="10" width="14" height="4" />
                        <rect className="f-cloud" x="7" y="11" width="4" height="2" />
                      </g>
                      <g className="drop-in" style={{ animationDelay: "0.36s" }}>
                        <rect className="f-amber" x="6" y="6" width="12" height="4" />
                        <rect className="f-ink" x="8" y="7" width="3" height="1" />
                        <rect className="f-ink" x="8" y="8" width="6" height="1" />
                      </g>
                      <rect className="f-amber star" x="20" y="4" width="1" height="1" style={{ animationDelay: "0.9s" }} />
                    </svg>
                    <p className="story-in" style={{ margin: "0", color: "var(--body)", fontSize: "0.95rem" }}>
                      I ship the whole path, not just the pipes: Spring Boot services and secure Apigee REST APIs holding 10K+ requests a minute at 99.9% availability, deployed on Kubernetes across Azure and GCP, with React and Next.js when a product needs a front end.
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
