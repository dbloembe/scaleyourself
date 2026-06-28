"use client";
import React from "react";
import { Badge, Card } from "@/components/ds";
import { TYPES, TypePill, GATE } from "./types";

// ── "Featured right now" data source ──────────────────────────────
// In production this is populated from analytics and refreshed on a
// schedule so the section always reflects live behaviour (most read /
// new / trending). getFeaturedNow() is the seam for that fetch — it
// returns a curated fallback until the endpoint is wired.
function getFeaturedNow() {
  return [
    { type: "essay", title: "What It Means to Scale Yourself", learn: "The core idea behind everything here: your company can't outgrow you, so growing yourself is the work.", read: "7 min", tag: "Most read" },
    { type: "video", title: "Managing Your Emotions while Fundraising", learn: "Aaron Harris and Amy on holding steady through the raise — for founders heading into a round now.", read: "Video", tag: "New" },
    { type: "essay", title: "Burnout", learn: "Why it happens to founders, and how to come back from it. The piece founders are reaching for most this month.", read: "7 min", tag: "Trending" },
  ];
}
const FEATURED = getFeaturedNow();

export function Featured() {
  const goGate = () => { window.location.href = GATE; };
  return (
    <section style={{ background: "var(--surface-subtle)", padding: "var(--space-10) var(--space-9)" }}>
      <div style={{ maxWidth: "var(--container-max)", margin: "0 auto" }}>
        <div style={{ marginBottom: "var(--space-8)", maxWidth: "min(46%, 520px)" }}>
          <h2 style={{ margin: 0, fontFamily: "var(--font-sans)", fontWeight: 500, letterSpacing: "-0.02em", fontSize: "var(--text-2xl)", color: "var(--text-primary)" }}>Featured right now</h2>
          <p style={{ margin: "var(--space-3) 0 0", fontFamily: "var(--font-sans)", fontSize: "var(--text-base)", lineHeight: 1.55, color: "var(--text-secondary)" }}>What founders are reading and watching this week — fresh picks, updated often.</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "var(--space-7)" }}>
          {FEATURED.map((p) => (
            <Card key={p.title} interactive padding="0" onClick={goGate} style={{ cursor: "pointer", overflow: "hidden", display: "flex", flexDirection: "column" }}>
              <div style={{ height: 8, background: "var(--sy-gradient)" }} />
              <div style={{ padding: "var(--space-7)", display: "flex", flexDirection: "column", flex: 1 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "var(--space-5)" }}>
                  <TypePill type={p.type} />
                  <Badge tone={p.tag === "New" ? "gradient" : "outline"} style={{ whiteSpace: "nowrap" }}>{p.tag}</Badge>
                </div>
                <h3 style={{ margin: "0 0 var(--space-4)", fontFamily: "var(--font-sans)", fontWeight: 500, fontSize: "var(--text-xl)", letterSpacing: "-0.01em", lineHeight: 1.18, color: "var(--text-primary)" }}>{p.title}</h3>
                <p style={{ margin: "0 0 var(--space-6)", fontFamily: "var(--font-sans)", fontSize: "var(--text-sm)", lineHeight: 1.6, color: "var(--text-secondary)", flex: 1 }}>{p.learn}</p>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "var(--font-sans)", fontWeight: 500, fontSize: "var(--text-sm)", color: TYPES[p.type].accent }}>{TYPES[p.type].cta} →</span>
                  <span style={{ fontFamily: "var(--font-sans)", fontSize: "var(--text-xs)", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.08em" }}>{p.read}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
