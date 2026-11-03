import { useEffect, useRef, useState } from "react";

const BOT_IDS = ["name", "desk", "roof", "footer", "sign0", "sign1", "sign2", "sign3"];
const MINI_BOTS = { desk: 1, roof: 1, sign0: 1, sign1: 1, sign2: 1, sign3: 1 };
const BOT_LINES = ["Let's connect!", "Get in touch!", "Say hi to Khal!", "Got a project?", "Check out the resume!", "Hello!", "Hi there!", "What's up?"];
const DISTRICTS = ["about", "skills", "work", "writing", "footer"];
const CELL_COUNT = 3;
const QUEST_COUNT = 17;

function initialState() {
  let dark = false;
  try {
    dark = !!(window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches);
  } catch (err) {
    // No matchMedia: stay on the light theme.
  }
  return { dark, navOpen: false, activeSection: "", openCell: null, openQuest: null, scrolled: false, seen: {}, eyes: {}, dodge: {}, near: {}, boxed: {}, talk: {} };
}

export default function useSiteInteractions() {
  const [state, setRawState] = useState(initialState);
  const stateRef = useRef(state);

  const setState = (patch) => {
    const next = { ...stateRef.current, ...patch };
    stateRef.current = next;
    setRawState(next);
  };

  useEffect(() => {
    const timers = new Set();
    const later = (fn, ms) => {
      const id = setTimeout(() => {
        timers.delete(id);
        fn();
      }, ms);
      timers.add(id);
      return id;
    };
    const cancel = (id) => {
      clearTimeout(id);
      timers.delete(id);
    };

    const onScroll = (e) => {
      const target = e && e.target && e.target !== document ? e.target : null;
      const y = window.scrollY || document.documentElement.scrollTop || (target && target.scrollTop) || 0;
      const scrolled = y > 8;
      if (scrolled !== stateRef.current.scrolled) setState({ scrolled });
    };
    document.addEventListener("scroll", onScroll, { passive: true, capture: true });
    onScroll();

    const cool = {};
    const talkTimers = {};
    let mx = 0;
    let my = 0;
    let touch = false;
    let touchReset;
    let raf = null;

    const updateBots = () => {
      const current = stateRef.current;
      const eyes = { ...current.eyes };
      const dodge = { ...current.dodge };
      const near = { ...current.near };
      const now = Date.now();
      let changed = false;

      document.querySelectorAll("[data-bot]").forEach((el) => {
        const id = el.getAttribute("data-bot");
        const r = el.getBoundingClientRect();
        if (!r.width && !r.height) return;
        const dx = mx - (r.left + r.width / 2);
        const dy = my - (r.top + r.height / 2);
        const ex = Math.abs(dx) > 24 ? (dx > 0 ? 1 : -1) : 0;
        const ey = Math.abs(dy) > 24 ? (dy > 0 ? 1 : -1) : 0;
        const eye = `translate(${ex}px, ${ey}px)`;
        if (eyes[id] !== eye) {
          eyes[id] = eye;
          changed = true;
        }
        const reach = touch ? 64 : 48;
        const isNear = Math.abs(dx) < reach && Math.abs(dy) < reach;
        if (!!near[id] !== isNear) {
          near[id] = isNear;
          changed = true;
        }
        if (Math.abs(dx) < reach - 6 && Math.abs(dy) < reach - 6 && !(cool[id] > now) && !current.boxed[id]) {
          cool[id] = now + 900;
          dodge[id] = dx > 0 ? "dodge-l" : "dodge-r";
          changed = true;
          later(() => {
            const nextDodge = { ...stateRef.current.dodge };
            delete nextDodge[id];
            setState({ dodge: nextDodge });
          }, 600);
        }
      });

      if (changed) setState({ eyes, dodge, near });
    };

    const onMove = (e) => {
      mx = e.clientX;
      my = e.clientY;
      touch = e.pointerType === "touch" || e.pointerType === "pen";
      cancel(touchReset);
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = null;
        updateBots();
      });
    };
    const onUp = (e) => {
      if (e.pointerType !== "touch") return;
      cancel(touchReset);
      touchReset = later(() => setState({ eyes: {}, near: {} }), 1600);
    };
    document.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerdown", onMove, { passive: true });
    document.addEventListener("pointerup", onUp, { passive: true });

    const onDocClick = (e) => {
      if (stateRef.current.navOpen && !(e.target.closest && e.target.closest(".site-nav"))) setState({ navOpen: false });
      const bots = document.querySelectorAll("[data-bot]");
      for (let i = 0; i < bots.length; i++) {
        const id = bots[i].getAttribute("data-bot");
        const r = bots[i].getBoundingClientRect();
        const dx = e.clientX - (r.left + r.width / 2);
        const dy = e.clientY - (r.top + r.height / 2);

        if (id === "name" || id === "footer") {
          const reach = touch ? 64 : 46;
          if (Math.abs(dx) < reach && Math.abs(dy) < reach + 4) {
            const prev = stateRef.current.talk[id];
            let pick = prev;
            while (pick === prev) pick = BOT_LINES[Math.floor(Math.random() * BOT_LINES.length)];
            setState({ talk: { ...stateRef.current.talk, [id]: pick } });
            cancel(talkTimers[id]);
            talkTimers[id] = later(() => {
              const nextTalk = { ...stateRef.current.talk };
              delete nextTalk[id];
              setState({ talk: nextTalk });
            }, 2800);
            break;
          }
          continue;
        }

        if (!MINI_BOTS[id] || stateRef.current.boxed[id]) continue;
        if (!r.width && !r.height) continue;
        const reach = touch ? 56 : 38;
        if (Math.abs(dx) < reach && Math.abs(dy) < reach + 4) {
          setState({ boxed: { ...stateRef.current.boxed, [id]: true } });
          later(() => {
            const nextBoxed = { ...stateRef.current.boxed };
            delete nextBoxed[id];
            setState({ boxed: nextBoxed });
          }, 3000);
          break;
        }
      }
    };
    document.addEventListener("click", onDocClick);

    const onKeyDown = (e) => {
      if (e.key !== "Escape" || !stateRef.current.navOpen) return;
      setState({ navOpen: false });
      const toggle = document.querySelector(".nav-toggle");
      if (toggle) toggle.focus();
    };
    document.addEventListener("keydown", onKeyDown);

    let observer = null;
    if ("IntersectionObserver" in window) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            observer.unobserve(entry.target);
            const key = entry.target.getAttribute("data-district");
            setState({ seen: { ...stateRef.current.seen, [key]: true } });
          });
        },
        { threshold: 0.15 }
      );
      document.querySelectorAll("[data-district]").forEach((el) => observer.observe(el));
    } else {
      setState({ seen: Object.fromEntries(DISTRICTS.map((key) => [key, true])) });
    }

    let sectionObserver = null;
    if ("IntersectionObserver" in window) {
      sectionObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) setState({ activeSection: entry.target.id });
            else if (stateRef.current.activeSection === entry.target.id) setState({ activeSection: "" });
          });
        },
        { rootMargin: "-45% 0px -50% 0px" }
      );
      document.querySelectorAll("main section[id]").forEach((el) => sectionObserver.observe(el));
    }

    return () => {
      document.removeEventListener("scroll", onScroll, { capture: true });
      document.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerdown", onMove);
      document.removeEventListener("pointerup", onUp);
      document.removeEventListener("click", onDocClick);
      document.removeEventListener("keydown", onKeyDown);
      if (sectionObserver) sectionObserver.disconnect();
      if (observer) observer.disconnect();
      if (raf) cancelAnimationFrame(raf);
      timers.forEach(clearTimeout);
    };
  }, []);

  const dark = state.dark;
  const ui = {
    isDark: dark,
    isLight: !dark,
    themeClass: dark ? "theme-dark" : "theme-light",
    barClass: state.scrolled ? "is-scrolled" : "",
    d_about: state.seen.about ? "in-view" : "",
    d_skills: state.seen.skills ? "in-view" : "",
    d_work: state.seen.work ? "in-view" : "",
    d_writing: state.seen.writing ? "in-view" : "",
    d_footer: state.seen.footer ? "in-view" : "",
    toggleLabel: dark ? "Switch to light mode" : "Switch to dark mode",
    toggleTheme: () => setState({ dark: !stateRef.current.dark }),
    navOpen: state.navOpen,
    activeSection: state.activeSection,
    toggleNav: () => setState({ navOpen: !stateRef.current.navOpen }),
    closeNav: () => setState({ navOpen: false }),
  };

  for (let i = 0; i < CELL_COUNT; i++) {
    ui[`open${i}`] = state.openCell === i;
    ui[`sign${i}`] = state.openCell === i ? "–" : "+";
    ui[`toggle${i}`] = () => setState({ openCell: stateRef.current.openCell === i ? null : i });
  }

  BOT_IDS.forEach((id) => {
    ui[`eye_${id}`] = state.eyes[id] || "translate(0px, 0px)";
    ui[`dodge_${id}`] = (state.dodge[id] || "") + (state.near[id] ? " is-near" : "") + (state.boxed[id] ? " boxed" : "");
    ui[`talk_${id}`] = !!state.talk[id];
    ui[`line_${id}`] = state.talk[id] || "";
  });

  for (let i = 0; i < QUEST_COUNT; i++) {
    ui[`qOpen${i}`] = state.openQuest === i;
    ui[`qSign${i}`] = state.openQuest === i ? "–" : "+";
    ui[`qToggle${i}`] = () => setState({ openQuest: stateRef.current.openQuest === i ? null : i });
  }

  return ui;
}
