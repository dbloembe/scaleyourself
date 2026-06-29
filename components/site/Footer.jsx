import React from "react";
import Link from "next/link";

const EXT = {
  home: "https://scaleyourself.com",
  findCoach: "https://scaleyourself.com/find-a-founder-coach",
  workWithAmy: "https://scaleyourself.com/work-with-amy",
  about: "https://scaleyourself.com/about",
  subscribe: "https://scaleyourself.com/subscribe",
  getStarted: "https://scaleyourself.com/the-user-manual-for-founder-psychology",
};

/**
 * Footer — dark footer with the gradient wordmark and link columns.
 * Links mirror the live scaleyourself.com navigation; "The User Manual"
 * is this app.
 */
export function Footer() {
  const cols = [
    ["Explore", [
      ["The User Manual", "/", true],
      ["Find a Founder Coach", EXT.findCoach, false],
      ["Work With Amy", EXT.workWithAmy, false],
    ]],
    ["Company", [
      ["About", EXT.about, false],
      ["Subscribe", EXT.subscribe, false],
      ["Get Started", EXT.getStarted, false],
    ]],
  ];
  const linkStyle = {
    display: "block",
    fontFamily: "var(--font-sans)",
    fontSize: "var(--text-sm)",
    color: "rgba(255,255,255,0.7)",
    textDecoration: "none",
    marginBottom: "var(--space-3)",
    cursor: "pointer",
  };
  return (
    <footer style={{ background: "var(--surface-inverse)", color: "#fff", padding: "var(--space-9) var(--space-6) var(--space-7)" }}>
      <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 220px), 1fr))", gap: "var(--space-7)" }}>
        <div>
          <a href={EXT.home} style={{ textDecoration: "none", display: "inline-block", lineHeight: 0.98 }}>
            <span style={{ display: "block", fontFamily: "var(--font-sans)", fontWeight: 500, textTransform: "uppercase", letterSpacing: "-0.01em", fontSize: 22, background: "var(--sy-gradient)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>Scale</span>
            <span style={{ display: "block", fontFamily: "var(--font-sans)", fontWeight: 500, textTransform: "uppercase", letterSpacing: "-0.01em", fontSize: 22, background: "var(--sy-gradient)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>Yourself</span>
          </a>
          <p style={{ marginTop: "var(--space-4)", fontFamily: "var(--font-sans)", fontSize: "var(--text-sm)", lineHeight: 1.55, color: "rgba(255,255,255,0.6)", maxWidth: "34ch" }}>The User Manual for Founder Psychology — essays, frameworks, and video to help you scale yourself.</p>
        </div>
        {cols.map(([h, items]) => (
          <div key={h}>
            <div style={{ fontFamily: "var(--font-sans)", fontWeight: 500, fontSize: "var(--text-xs)", textTransform: "uppercase", letterSpacing: "0.12em", color: "rgba(255,255,255,0.5)", marginBottom: "var(--space-4)" }}>{h}</div>
            {items.map(([label, href, internal]) =>
              internal
                ? <Link key={label} href={href} style={linkStyle}>{label}</Link>
                : <a key={label} href={href} style={linkStyle}>{label}</a>
            )}
          </div>
        ))}
      </div>
      <div style={{ maxWidth: "var(--container-max)", margin: "var(--space-7) auto 0", paddingTop: "var(--space-5)", borderTop: "1px solid rgba(255,255,255,0.12)", fontFamily: "var(--font-sans)", fontSize: "var(--text-xs)", color: "rgba(255,255,255,0.5)" }}>© 2026 Scale Yourself. All rights reserved.</div>
    </footer>
  );
}
