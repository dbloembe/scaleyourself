"use client";
import React from "react";
import Link from "next/link";

// Links mirror the live scaleyourself.com navigation. External items point
// back to the main marketing site; "The User Manual" is this app itself.
const EXT = {
  home: "https://scaleyourself.com",
  findCoach: "https://scaleyourself.com/find-a-founder-coach",
  workWithAmy: "https://scaleyourself.com/work-with-amy",
  about: "https://scaleyourself.com/about",
  subscribe: "https://scaleyourself.com/subscribe",
  getStarted: "https://scaleyourself.com/the-user-manual-for-founder-psychology",
};

const linkStyle = {
  fontFamily: "var(--font-sans)",
  fontSize: "15px",
  fontWeight: 500,
  color: "var(--text-primary)",
  textDecoration: "none",
  cursor: "pointer",
  letterSpacing: "-0.005em",
  whiteSpace: "nowrap",
  background: "none",
  border: "none",
  padding: 0,
};

function Caret({ open }) {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"
      style={{ transition: "transform var(--duration-fast) var(--ease-out)", transform: open ? "rotate(180deg)" : "none" }}>
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

function Wordmark() {
  return (
    <a href={EXT.home} aria-label="Scale Yourself home"
      style={{ textDecoration: "none", color: "var(--text-primary)", display: "inline-block", lineHeight: 0.98 }}>
      <span style={{ display: "block", fontFamily: "var(--font-sans)", fontWeight: 500, textTransform: "uppercase", letterSpacing: "-0.01em", fontSize: 19 }}>Scale</span>
      <span style={{ display: "block", fontFamily: "var(--font-sans)", fontWeight: 500, textTransform: "uppercase", letterSpacing: "-0.01em", fontSize: 19 }}>Yourself</span>
    </a>
  );
}

function GetStarted({ block = false }) {
  const [hover, setHover] = React.useState(false);
  return (
    <a href={EXT.getStarted}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: block ? "flex" : "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        height: 46,
        padding: "0 26px",
        borderRadius: "var(--radius-pill)",
        border: "1.5px solid var(--text-primary)",
        fontFamily: "var(--font-sans)",
        fontSize: "15px",
        fontWeight: 500,
        textDecoration: "none",
        whiteSpace: "nowrap",
        color: hover ? "var(--text-inverse)" : "var(--text-primary)",
        background: hover ? "var(--sy-ink)" : "transparent",
        transition: "background var(--duration-base) var(--ease-out), color var(--duration-base) var(--ease-out)",
      }}>
      Get Started
    </a>
  );
}

export function SiteHeader() {
  const [coachOpen, setCoachOpen] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const closeTimer = React.useRef(null);

  const openCoach = () => { clearTimeout(closeTimer.current); setCoachOpen(true); };
  const closeCoach = () => { closeTimer.current = setTimeout(() => setCoachOpen(false), 120); };

  return (
    <header style={{ position: "sticky", top: 0, zIndex: 50, background: "rgba(255,255,255,0.9)", backdropFilter: "saturate(180%) blur(12px)", WebkitBackdropFilter: "saturate(180%) blur(12px)", borderBottom: "1px solid var(--border-subtle)" }}>
      <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 var(--space-7)", height: 84, display: "flex", alignItems: "center", justifyContent: "space-between", gap: "var(--space-5)" }}>
        <Wordmark />

        {/* Desktop nav */}
        <nav className="sy-desktop-nav" style={{ alignItems: "center", gap: "var(--space-6)" }}>
          <Link href="/" style={linkStyle}>The User Manual</Link>

          <div style={{ position: "relative", display: "inline-flex" }} onMouseEnter={openCoach} onMouseLeave={closeCoach}>
            <button type="button" style={{ ...linkStyle, display: "inline-flex", alignItems: "center", gap: 6 }} aria-haspopup="true" aria-expanded={coachOpen} onClick={() => setCoachOpen((v) => !v)}>
              Founder Coaching <Caret open={coachOpen} />
            </button>
            {coachOpen && (
              <div role="menu" style={{ position: "absolute", top: "calc(100% + 14px)", left: "50%", transform: "translateX(-50%)", minWidth: 230, background: "var(--surface-card)", border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-md)", boxShadow: "var(--shadow-lg)", padding: "var(--space-2)", display: "flex", flexDirection: "column", gap: 2 }}>
                <a href={EXT.findCoach} role="menuitem" style={{ ...linkStyle, padding: "10px 12px", borderRadius: "var(--radius-sm)" }}>Find a Founder Coach</a>
                <a href={EXT.workWithAmy} role="menuitem" style={{ ...linkStyle, padding: "10px 12px", borderRadius: "var(--radius-sm)" }}>Work With Amy</a>
              </div>
            )}
          </div>

          <a href={EXT.about} style={linkStyle}>About</a>
          <a href={EXT.subscribe} style={linkStyle}>Subscribe</a>
          <GetStarted />
        </nav>

        {/* Mobile hamburger */}
        <button className="sy-burger" type="button" aria-label="Menu" aria-expanded={mobileOpen} onClick={() => setMobileOpen((v) => !v)}
          style={{ width: 44, height: 44, border: "none", background: "transparent", cursor: "pointer", color: "var(--text-primary)", alignItems: "center", justifyContent: "center" }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            {mobileOpen ? <><path d="M6 6l12 12" /><path d="M18 6L6 18" /></> : <><path d="M3 6h18" /><path d="M3 12h18" /><path d="M3 18h18" /></>}
          </svg>
        </button>
      </div>

      {/* Mobile sheet */}
      {mobileOpen && (
        <div className="sy-mobile-sheet" style={{ borderTop: "1px solid var(--border-subtle)", background: "var(--surface-page)", padding: "var(--space-4) var(--space-5) var(--space-6)" }}>
          <nav style={{ display: "flex", flexDirection: "column" }}>
            {[
              ["The User Manual", "/", true],
              ["Find a Founder Coach", EXT.findCoach, false],
              ["Work With Amy", EXT.workWithAmy, false],
              ["About", EXT.about, false],
              ["Subscribe", EXT.subscribe, false],
            ].map(([label, href, internal]) => {
              const st = { ...linkStyle, display: "block", padding: "14px 4px", borderBottom: "1px solid var(--border-subtle)", fontSize: "17px" };
              return internal
                ? <Link key={label} href={href} style={st} onClick={() => setMobileOpen(false)}>{label}</Link>
                : <a key={label} href={href} style={st}>{label}</a>;
            })}
            <div style={{ marginTop: "var(--space-5)" }}><GetStarted block /></div>
          </nav>
        </div>
      )}
    </header>
  );
}
