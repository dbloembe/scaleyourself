"use client";
import React from "react";

function SearchIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true" style={{ flex: "0 0 auto" }}>
      <circle cx="11" cy="11" r="7" /><path d="m20 20-3-3" />
    </svg>
  );
}

/**
 * ManualHero — centered headline + a search trigger that opens the search
 * overlay. Spacing is tuned so the "Featured right now" section peeks above
 * the fold, and a subtle scroll cue smooth-scrolls down to it.
 */
export function ManualHero({ onOpenSearch }) {
  const [cueActive, setCueActive] = React.useState(false);

  // Brief pause on load, then the scroll cue animates its gradient in.
  React.useEffect(() => {
    const t = setTimeout(() => setCueActive(true), 500);
    return () => clearTimeout(t);
  }, []);

  const goToFeatured = () => {
    const el = document.getElementById("featured");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section style={{ background: "var(--surface-page)", borderBottom: "1px solid var(--border-subtle)" }}>
      <div style={{ maxWidth: 960, margin: "0 auto", padding: "clamp(64px, 14vw, 176px) clamp(20px, 6vw, 96px)", textAlign: "center" }}>
        <span style={{ fontFamily: "var(--font-sans)", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.12em", fontSize: "var(--text-xs)", color: "var(--text-secondary)" }}>The User Manual for Founder Psychology</span>
        <h1 style={{ margin: "var(--space-7) 0 var(--space-7)", fontFamily: "var(--font-sans)", fontWeight: 500, letterSpacing: "-0.02em", fontSize: "clamp(48px,6.4vw,82px)", lineHeight: 1.04, color: "var(--text-primary)", textWrap: "balance" }}>
          Content that <span style={{ background: "var(--sy-gradient)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>scales you</span>
        </h1>
        <p style={{ margin: "0 auto var(--space-8)", fontFamily: "var(--font-sans)", fontWeight: 300, fontSize: "var(--text-lg)", lineHeight: 1.55, color: "var(--text-secondary)", maxWidth: "46ch", textWrap: "pretty" }}>
          Essays, frameworks, and video for the moments that don&apos;t show up on the roadmap. Drawn from thousands of hours coaching YC founders.
        </p>
        <div style={{ maxWidth: 520, margin: "0 auto" }}>
          <button type="button" className="sy-hero-search" onClick={onOpenSearch} aria-label="Search the User Manual" aria-haspopup="dialog">
            <SearchIcon />
            <span style={{ flex: 1, textAlign: "left", fontFamily: "var(--font-sans)", fontSize: "var(--text-base)", color: "var(--text-muted)" }}>Search by what you&apos;re facing…</span>
            <span className="sy-kbd sy-kbd-hide-mobile" aria-hidden="true">⌘K</span>
          </button>
        </div>
        <div style={{ marginTop: "var(--space-6)" }}>
          <button type="button" className={`sy-scroll-cue${cueActive ? " sy-scroll-cue--active" : ""}`} onClick={goToFeatured}>
            <span className="sy-scroll-cue-textwrap">
              <span className="sy-scroll-cue-base">Explore featured content</span>
              <span className="sy-scroll-cue-grad" aria-hidden="true">Explore featured content</span>
            </span>
            <span className="sy-scroll-cue-arrow" aria-hidden="true">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <defs>
                  <linearGradient id="syCueGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#1B27FF" />
                    <stop offset="55%" stopColor="#9b1fd0" />
                    <stop offset="100%" stopColor="#FF2EB4" />
                  </linearGradient>
                </defs>
                <path d="M12 5v14M6 13l6 6 6-6" />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
