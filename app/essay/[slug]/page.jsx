import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { findPiece, slugify, FEATURED, LIBRARY } from "@/components/manual/content";
import { SiteHeader } from "@/components/site/SiteHeader";
import { ArticleActions } from "@/components/essay/ArticleActions";
import { Footer } from "@/components/site/Footer";

export function generateStaticParams() {
  const slugs = new Set([...FEATURED, ...LIBRARY].map((p) => slugify(p.title)));
  return [...slugs].map((slug) => ({ slug }));
}

export function generateMetadata({ params }) {
  const piece = findPiece(params.slug);
  return { title: piece ? `${piece.title} — Scale Yourself` : "Essay — Scale Yourself" };
}

const GRAD = { background: "var(--sy-gradient)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" };

// Paint the last word(s) of a multi-word title with the brand gradient, like
// the design. Single-word titles stay plain.
function GradientTitle({ title }) {
  const words = title.split(" ");
  const titleStyle = { margin: "0 0 var(--space-5)", fontFamily: "var(--font-sans)", fontWeight: 500, letterSpacing: "-0.02em", fontSize: "clamp(36px,4.8vw,56px)", lineHeight: 1.07, color: "var(--text-primary)", textWrap: "balance" };
  if (words.length === 1) return <h1 style={titleStyle}>{title}</h1>;
  const n = words.length >= 4 ? 2 : 1;
  const head = words.slice(0, words.length - n).join(" ");
  const tail = words.slice(words.length - n).join(" ");
  return <h1 style={titleStyle}>{head} <span style={GRAD}>{tail}</span></h1>;
}

// Inline rich-text runs: bold / italic / link.
function Runs({ runs }) {
  return runs.map((r, i) => {
    let node = r.t;
    if (r.b && r.i) node = <strong><em>{r.t}</em></strong>;
    else if (r.b) node = <strong>{r.t}</strong>;
    else if (r.i) node = <em>{r.t}</em>;
    if (r.href) {
      return r.href.startsWith("/")
        ? <Link key={i} href={r.href}>{node}</Link>
        : <a key={i} href={r.href}>{node}</a>;
    }
    return <React.Fragment key={i}>{node}</React.Fragment>;
  });
}

// Render a structured body (real content). Falls back to a placeholder below.
function Body({ blocks }) {
  return (
    <div className="prose">
      {blocks.map((b, i) => {
        switch (b.type) {
          case "p": return <p key={i}><Runs runs={b.runs} /></p>;
          case "h2": return <h2 key={i}>{b.text}</h2>;
          case "blockquote": return <blockquote key={i}><Runs runs={b.runs} /></blockquote>;
          case "ul": return <ul key={i}>{b.items.map((it, j) => <li key={j}><Runs runs={it} /></li>)}</ul>;
          case "figure": return (
            <figure key={i}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={b.src} alt={b.alt || ""} />
              {b.caption && <figcaption>{b.caption}</figcaption>}
            </figure>
          );
          default: return null;
        }
      })}
    </div>
  );
}

function PlaceholderBody({ learn }) {
  return (
    <div className="prose">
      <p>{learn} This is placeholder content for the reader — the real essay will live here. What follows is representative of the voice and structure the finished piece will take.</p>
      <figure>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/assets/backgrounds/bg-aurora.jpg" alt="" />
        <figcaption>Your inner state is the medium every decision passes through.</figcaption>
      </figure>
      <p>Most founders treat their inner life as noise to push through. The best ones treat it as signal. When something feels off, the instinct is to act faster — but the faster move is usually to ask what the feeling is pointing at.</p>
      <h2>A feeling is information</h2>
      <p>A feeling isn&apos;t a bug in the system. It&apos;s data about what matters to you, and where something&apos;s off. A few of the signals founders run into most:</p>
      <ul>
        <li><strong>Anger</strong> tells you a boundary was crossed.</li>
        <li><strong>Anxiety</strong> is a question you haven&apos;t answered yet.</li>
        <li><strong>Resentment</strong> is a conversation you&apos;ve been avoiding.</li>
      </ul>
      <blockquote>The founders who scale are the ones who can feel something fully, name it, and then decide — instead of reacting.</blockquote>
      <h2>Why it compounds</h2>
      <p>Every hard call you make as a founder runs through your state. Multiply a small edge in clarity across thousands of decisions, and it becomes the difference between a company that reflects your panic and one that reflects your judgment.</p>
    </div>
  );
}

export default function EssayPage({ params }) {
  const piece = findPiece(params.slug);
  if (!piece) notFound();

  const readLabel = /min/i.test(piece.read) ? `${piece.read} read` : piece.read;

  return (
    <>
      <SiteHeader />
      <main style={{ maxWidth: 880, margin: "0 auto", padding: "var(--space-10) var(--space-7) 0" }}>
        <GradientTitle title={piece.title} />

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "var(--space-4)", flexWrap: "wrap", marginBottom: "var(--space-9)" }}>
          <span style={{ fontFamily: "var(--font-sans)", fontWeight: 500, fontSize: "var(--text-xs)", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-muted)" }}>{readLabel}</span>
          <ArticleActions title={piece.title} />
        </div>

        {piece.body ? <Body blocks={piece.body} /> : <PlaceholderBody learn={piece.learn} />}

        <div style={{ margin: "var(--space-9) 0 var(--space-10)" }}>
          <Link href="/" style={{ fontFamily: "var(--font-sans)", fontWeight: 500, fontSize: "var(--text-sm)", color: "var(--text-secondary)", textDecoration: "none" }}>← Back to the User Manual</Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
