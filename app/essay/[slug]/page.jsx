import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { findPiece, slugify, FEATURED, LIBRARY } from "@/components/manual/content";
import { BODIES } from "@/components/manual/essay-bodies";
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

function ComingSoon({ piece }) {
  return (
    <div className="prose">
      <p>{piece.learn}</p>
      <p>
        This {piece.type === "video" ? "video" : "piece"} is coming to the app soon. In the meantime, you can find it on the main site —{" "}
        <a href="https://scaleyourself.com/the-user-manual-for-founder-psychology">browse the full User Manual</a>.
      </p>
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

        {BODIES[params.slug] ? <Body blocks={BODIES[params.slug]} /> : <ComingSoon piece={piece} />}

        <div style={{ margin: "var(--space-9) 0 var(--space-10)" }}>
          <Link href="/" style={{ fontFamily: "var(--font-sans)", fontWeight: 500, fontSize: "var(--text-sm)", color: "var(--text-secondary)", textDecoration: "none" }}>← Back to the User Manual</Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
