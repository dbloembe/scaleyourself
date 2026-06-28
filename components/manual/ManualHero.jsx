"use client";
import React from "react";
import { Input } from "@/components/ds";

function SearchIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
      <circle cx="11" cy="11" r="7" /><path d="m20 20-3-3" />
    </svg>
  );
}

/**
 * ManualHero — centered headline + live search over the library.
 */
export function ManualHero({ query, setQuery }) {
  return (
    <section style={{ background: "var(--surface-page)", borderBottom: "1px solid var(--border-subtle)" }}>
      <div style={{ maxWidth: 960, margin: "0 auto", padding: "var(--space-11) var(--space-9)", textAlign: "center" }}>
        <span style={{ fontFamily: "var(--font-sans)", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.12em", fontSize: "var(--text-xs)", color: "var(--text-secondary)" }}>The User Manual for Founder Psychology</span>
        <h1 style={{ margin: "var(--space-7) 0 var(--space-7)", fontFamily: "var(--font-sans)", fontWeight: 500, letterSpacing: "-0.02em", fontSize: "clamp(48px,6.4vw,82px)", lineHeight: 1.04, color: "var(--text-primary)", textWrap: "balance" }}>
          Content that <span style={{ background: "var(--sy-gradient)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>scales you</span>
        </h1>
        <p style={{ margin: "0 auto var(--space-8)", fontFamily: "var(--font-sans)", fontWeight: 300, fontSize: "var(--text-lg)", lineHeight: 1.55, color: "var(--text-secondary)", maxWidth: "46ch", textWrap: "pretty" }}>
          Essays, frameworks, and video for the moments that don&apos;t show up on the roadmap. Drawn from thousands of hours coaching YC founders.
        </p>
        <div style={{ maxWidth: 520, margin: "0 auto" }}>
          <Input prefix={<SearchIcon />} placeholder="Search by what you're facing…" value={query} onChange={(e) => setQuery(e.target.value)} aria-label="Search the User Manual" />
        </div>
      </div>
    </section>
  );
}
