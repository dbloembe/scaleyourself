"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Button, Badge, Card } from "@/components/ds";
import { TYPES, TypePill } from "./types";
import { LIBRARY, essayHref } from "./content";

// [key, chip label, recognize phrase]
const CHALLENGES = [
  ["start", "I'm just getting started", "finding your footing"],
  ["emotions", "My emotions are running me", "managing your emotional state"],
  ["burnout", "I'm burning out", "protecting your energy"],
  ["drive", "Motivation & confidence", "reconnecting with your drive"],
  ["cofounder", "My cofounder & I are clashing", "your cofounder relationship"],
  ["manager", "Learning to lead a team", "becoming the leader your team needs"],
  ["fundraising", "I'm fundraising", "the raise"],
  ["vision", "Setting the vision", "setting the vision"],
];

const FORMATS = [["all", "All"], ["essay", "Essays"], ["audio", "Audio"], ["video", "Video"]];

// Multi-select challenge pill — filled gradient + check when selected
function ChallengePill({ label, selected, onClick }) {
  const [hover, setHover] = React.useState(false);
  return (
    <button
      type="button"
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: "inline-flex", alignItems: "center", gap: "8px",
        fontFamily: "var(--font-sans)", fontWeight: 500, fontSize: "var(--text-sm)",
        padding: "9px 17px", borderRadius: "var(--radius-pill)",
        cursor: "pointer",
        transition: "background var(--duration-fast) var(--ease-out), color var(--duration-fast) var(--ease-out), box-shadow var(--duration-fast) var(--ease-out)",
        // When filled with the gradient (selected), drop the transparent
        // border — it would antialias over the gradient and halo the edges.
        // Unselected keeps it for size parity (no gradient → no halo).
        border: selected ? "none" : "1.5px solid transparent",
        color: selected ? "#fff" : "var(--text-secondary)",
        background: selected
          ? "linear-gradient(120deg, var(--sy-blue) 0%, var(--sy-violet) 40%, var(--sy-magenta) 72%, var(--sy-pink) 100%)"
          : "var(--surface-card)",
        boxShadow: selected
          ? "var(--shadow-sm)"
          : hover ? "inset 0 0 0 1.5px var(--border-default)" : "inset 0 0 0 1.5px var(--border-subtle)",
      }}>
      {label}
    </button>
  );
}

function PieceCard({ p }) {
  const router = useRouter();
  const t = TYPES[p.type];
  return (
    <Card interactive padding="var(--space-7)" onClick={() => router.push(essayHref(p))} style={{ cursor: "pointer", display: "flex", flexDirection: "column" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "var(--space-5)" }}>
        <TypePill type={p.type} />
        {p.stage === "foundational" && <Badge tone="outline">Foundational</Badge>}
      </div>
      <h3 style={{ margin: "0 0 var(--space-4)", fontFamily: "var(--font-sans)", fontWeight: 500, fontSize: "var(--text-lg)", letterSpacing: "-0.01em", lineHeight: 1.22, color: "var(--text-primary)" }}>{p.title}</h3>
      <p style={{ margin: "0 0 var(--space-6)", fontFamily: "var(--font-sans)", fontSize: "var(--text-sm)", lineHeight: 1.6, color: "var(--text-secondary)", flex: 1 }}>{p.learn}</p>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <span style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "var(--font-sans)", fontWeight: 500, fontSize: "var(--text-sm)", color: t.accent }}>{t.cta} →</span>
        <span style={{ fontFamily: "var(--font-sans)", fontSize: "var(--text-xs)", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.08em" }}>{p.read}</span>
      </div>
    </Card>
  );
}

export function Library({ query = "" }) {
  const [selected, setSelected] = React.useState([]);
  const [format, setFormat] = React.useState("all");
  const [shown, setShown] = React.useState(9);
  const PAGE = 9;

  const toggle = (k) => { setSelected((s) => s.includes(k) ? s.filter((x) => x !== k) : [...s, k]); setShown(PAGE); };

  const q = query.trim().toLowerCase();
  const list = LIBRARY.filter((p) =>
    (selected.length === 0 || selected.includes(p.challenge)) &&
    (format === "all" || p.type === format) &&
    (q === "" || (p.title + " " + p.learn).toLowerCase().includes(q))
  );
  const visible = list.slice(0, shown);

  // Results summary — makes the search + pills interaction explicit
  const n = list.length;
  const noun = n === 1 ? "piece" : "pieces";
  let summary, connect = null;
  if (q && selected.length > 0) {
    summary = `${n} ${noun} matching “${query.trim()}” in your selected challenges`;
  } else if (q) {
    summary = `${n} ${noun} matching “${query.trim()}”`;
  } else if (selected.length === 1) {
    summary = `Showing ${n} ${noun} for what you selected`;
  } else if (selected.length > 1) {
    summary = `Showing ${n} ${noun} across your ${selected.length} challenges`;
    connect = "These are often connected — progress on one tends to shift the others.";
  } else {
    summary = `Showing all ${n} ${noun}`;
  }

  return (
    <section style={{ background: "var(--surface-page)", padding: "var(--space-10) var(--space-9)" }}>
      <div style={{ maxWidth: "var(--container-max)", margin: "0 auto" }}>
        {/* Framing */}
        <div style={{ maxWidth: "min(46%, 520px)", marginBottom: "var(--space-7)" }}>
          <h2 style={{ margin: 0, fontFamily: "var(--font-sans)", fontWeight: 500, letterSpacing: "-0.02em", fontSize: "var(--text-2xl)", color: "var(--text-primary)" }}>Where do you want to focus?</h2>
          <p style={{ margin: "var(--space-3) 0 0", fontFamily: "var(--font-sans)", fontSize: "var(--text-base)", lineHeight: 1.55, color: "var(--text-secondary)" }}>Explore what matters most to you right now. Choose as many topics as you like — they&apos;re often connected.</p>
        </div>

        {/* Challenge pills — primary, multi-select */}
        <div style={{ display: "flex", gap: "var(--space-3)", flexWrap: "wrap", marginBottom: "var(--space-6)" }}>
          <ChallengePill label="Everything" selected={selected.length === 0} onClick={() => { setSelected([]); setShown(PAGE); }} />
          {CHALLENGES.map(([v, l]) => (
            <ChallengePill key={v} label={l} selected={selected.includes(v)} onClick={() => toggle(v)} />
          ))}
          {selected.length > 0 && (
            <button type="button" onClick={() => { setSelected([]); setShown(PAGE); }} style={{ border: "none", background: "transparent", cursor: "pointer", fontFamily: "var(--font-sans)", fontSize: "var(--text-sm)", fontWeight: 500, color: "var(--text-muted)", padding: "9px 6px" }}>Clear</button>
          )}
        </div>

        {/* Format refine — clearly secondary */}
        <div style={{ display: "flex", alignItems: "center", gap: "var(--space-3)", flexWrap: "wrap", paddingBottom: "var(--space-6)", marginBottom: "var(--space-7)", borderBottom: "1px solid var(--border-subtle)" }}>
          <span style={{ fontFamily: "var(--font-sans)", fontSize: "var(--text-xs)", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-muted)" }}>Filter by format</span>
          <div style={{ display: "flex", gap: "var(--space-1)" }}>
            {FORMATS.map(([v, l]) => {
              const on = format === v;
              return (
                <button key={v} onClick={() => { setFormat(v); setShown(PAGE); }} style={{
                  border: "none", cursor: "pointer", fontFamily: "var(--font-sans)", fontWeight: 500, fontSize: "var(--text-sm)",
                  padding: "5px 12px", borderRadius: "var(--radius-pill)", background: "transparent",
                  color: on ? "var(--text-primary)" : "var(--text-muted)",
                  boxShadow: on ? "inset 0 0 0 1px var(--border-default)" : "none",
                }}>{l}</button>
              );
            })}
          </div>
        </div>

        {/* Results summary — only when challenge pills are selected */}
        {selected.length > 0 && (
          <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "var(--space-4)", flexWrap: "wrap", marginBottom: "var(--space-6)" }}>
            <p style={{ margin: 0, fontFamily: "var(--font-sans)", fontWeight: 500, fontSize: "var(--text-sm)", color: "var(--text-primary)" }}>
              {summary}
              {connect && <span style={{ fontWeight: 300, color: "var(--text-secondary)" }}> {connect}</span>}
            </p>
          </div>
        )}

        {/* Grid */}
        {list.length > 0 ? (
          <React.Fragment>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "var(--space-6)" }}>
              {visible.map((p) => <PieceCard key={p.title} p={p} />)}
            </div>
            {list.length > shown && (
              <div style={{ display: "flex", justifyContent: "center", marginTop: "var(--space-8)" }}>
                <Button variant="secondary" size="md" onClick={() => setShown((x) => x + PAGE)}>See more</Button>
              </div>
            )}
          </React.Fragment>
        ) : (
          <div style={{ padding: "var(--space-9) 0", textAlign: "center", fontFamily: "var(--font-sans)", color: "var(--text-muted)" }}>Nothing in this combination yet — try another format or challenge.</div>
        )}
      </div>
    </section>
  );
}
