"use client";
import React from "react";
import { Button, Badge, Card } from "@/components/ds";
import { TYPES, TypePill, GATE } from "./types";

// ---- The User Manual — real pieces ----
const LIBRARY = [
  // Getting Started / foundational
  { type: "essay", title: "Introduction", learn: "Where to begin, and why this manual exists.", challenge: "start", stage: "foundational", read: "4 min" },
  { type: "essay", title: "Think of Your Self Like a Product", learn: "Treat your own mind like something you can study, debug, and improve.", challenge: "start", stage: "foundational", read: "6 min" },
  { type: "essay", title: "Anatomy", learn: "A map of the inner parts that drive how you lead.", challenge: "start", stage: "foundational", read: "5 min" },

  // Scaling Your Psychology — emotions
  { type: "essay", title: "Two Emotional Failure Modes: Reactivity and Paralysis", learn: "The two ways founders come apart under pressure — and how to spot yours.", challenge: "emotions", stage: "foundational", read: "6 min" },
  { type: "essay", title: "Processing Your Emotions is a Competitive Advantage", learn: "Why the founders who feel their feelings make better calls.", challenge: "emotions", stage: "foundational", read: "7 min" },
  { type: "essay", title: "How to Process Your Emotions", learn: "A practical method for moving through what you feel instead of around it.", challenge: "emotions", stage: "situational", read: "8 min" },
  { type: "essay", title: "Anger", learn: "What your anger is pointing at, and how to use it well.", challenge: "emotions", stage: "situational", read: "5 min" },
  { type: "essay", title: "Anxiety Is a Question You Can Answer", learn: "Treat anxiety as information, then answer what it's asking.", challenge: "emotions", stage: "situational", read: "6 min" },
  { type: "essay", title: "Anxiety: A Functional Analysis", learn: "A closer look at what anxiety is doing for you, and to you.", challenge: "emotions", stage: "situational", read: "9 min" },

  // Burnout
  { type: "essay", title: "Burnout", learn: "Why it happens to founders, and how to come back from it.", challenge: "burnout", stage: "situational", read: "7 min" },
  { type: "essay", title: "Guilt & Burnout", learn: "The guilt that keeps you from resting, examined.", challenge: "burnout", stage: "situational", read: "5 min" },
  { type: "essay", title: "A Red Flag Worth Listening to in the Trough of Sorrow", learn: "One signal in the low moments you shouldn't push past.", challenge: "burnout", stage: "situational", read: "4 min" },

  // Motivation / confidence / drive
  { type: "essay", title: "Motivation", learn: "What to do when the drive that got you here goes quiet.", challenge: "drive", stage: "situational", read: "6 min" },
  { type: "essay", title: "Confidence", learn: "Where real confidence comes from — and where the fake kind fails you.", challenge: "drive", stage: "foundational", read: "6 min" },
  { type: "essay", title: "Confusion to Clarity", learn: "A way through the fog when you can't see the next step.", challenge: "drive", stage: "situational", read: "5 min" },
  { type: "essay", title: "Resentment", learn: "The slow build you can't ignore, and what it's telling you.", challenge: "drive", stage: "situational", read: "5 min" },
  { type: "essay", title: "Growth Inflection", learn: "What changes in you when the company's curve bends.", challenge: "drive", stage: "situational", read: "6 min" },

  // Vision
  { type: "essay", title: "Introducing Vision", learn: "Why vision is a tool you operate, not a poster on the wall.", challenge: "vision", stage: "foundational", read: "5 min" },
  { type: "essay", title: "The Anatomy of Vision", learn: "The parts that make a vision real enough to follow.", challenge: "vision", stage: "situational", read: "7 min" },

  // Cofounder relationship
  { type: "essay", title: "Tough Conversation Starter Pack", learn: "Openers and structure for the talks you've been putting off.", challenge: "cofounder", stage: "situational", read: "6 min" },
  { type: "essay", title: "How to Build Trust", learn: "How trust actually gets built between cofounders — in the small moments.", challenge: "cofounder", stage: "foundational", read: "7 min" },
  { type: "essay", title: "Anxious ♥ Avoidant: Know Your Attachment Style", learn: "How your attachment style shows up in your cofounder relationship.", challenge: "cofounder", stage: "situational", read: "8 min" },
  { type: "essay", title: "Relationship Debt & the Level 3 Conversation", learn: "Clearing the backlog of things left unsaid.", challenge: "cofounder", stage: "situational", read: "6 min" },
  { type: "essay", title: "The Tension Tug of War", learn: "Why you and your cofounder keep pulling against each other.", challenge: "cofounder", stage: "situational", read: "5 min" },
  { type: "essay", title: "The Founder Sync", learn: "A ritual for staying aligned as you both grow.", challenge: "cofounder", stage: "situational", read: "5 min" },

  // Fundraising
  { type: "video", title: "Managing Your Emotions while Fundraising", learn: "Aaron Harris and Amy on holding steady through the raise.", challenge: "fundraising", stage: "situational", read: "Video" },
  { type: "essay", title: "Failure Mode, Success Mode, & God Mode", learn: "A framework for the states you move between while raising.", challenge: "fundraising", stage: "situational", read: "Framework" },
  { type: "video", title: "Conviction & Fundraising", learn: "How conviction reads in the room, and how to find yours.", challenge: "fundraising", stage: "situational", read: "Video" },

  // Manager & leader
  { type: "essay", title: "Time Audit", learn: "See where your hours actually go before you defend them.", challenge: "manager", stage: "situational", read: "5 min" },
  { type: "essay", title: "How to Implement Effective 1:1s", learn: "Make your one-on-ones the meeting that matters.", challenge: "manager", stage: "situational", read: "7 min" },
  { type: "essay", title: "Delegating", learn: "Why letting go is hard, and how to do it anyway.", challenge: "manager", stage: "situational", read: "6 min" },
  { type: "essay", title: "The Three Types of Feedback", learn: "Know which kind you're giving before you give it.", challenge: "manager", stage: "situational", read: "5 min" },
  { type: "essay", title: "Guide to Effective Feedback", learn: "A practical guide to saying the useful thing well.", challenge: "manager", stage: "situational", read: "8 min" },
];

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

const goGate = () => { window.location.href = GATE; };

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
  const t = TYPES[p.type];
  return (
    <Card interactive padding="var(--space-7)" onClick={goGate} style={{ cursor: "pointer", display: "flex", flexDirection: "column" }}>
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
