"use client";
import React from "react";

/**
 * ArticleActions — Share menu (Copy link / Email / LinkedIn / Post to X).
 *
 * Mark-as-read and bookmark are intentionally omitted until auth exists —
 * they need a signed-in user to persist against.
 */
export function ArticleActions({ title }) {
  const [open, setOpen] = React.useState(false);
  const [copied, setCopied] = React.useState(false);
  const ref = React.useRef(null);

  // Close on outside click / Escape.
  React.useEffect(() => {
    if (!open) return;
    const onDown = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    const onKey = (e) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => { document.removeEventListener("mousedown", onDown); document.removeEventListener("keydown", onKey); };
  }, [open]);

  const url = () => window.location.href;
  const copy = () => {
    try { navigator.clipboard.writeText(url()); } catch (e) {}
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  };
  const email = () => {
    window.location.href = `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(url())}`;
  };
  const linkedin = () => {
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url())}`, "_blank", "noopener,noreferrer");
  };
  const postX = () => {
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url())}`, "_blank", "noopener,noreferrer");
  };

  const shareBtn = {
    display: "inline-flex", alignItems: "center", gap: "8px", height: 38, padding: "0 14px",
    borderRadius: "var(--radius-pill)", border: "1.5px solid var(--border-default)",
    background: open ? "var(--surface-raised)" : "var(--surface-card)", cursor: "pointer",
    fontFamily: "var(--font-sans)", fontWeight: 500, fontSize: "var(--text-sm)", color: "var(--text-primary)",
    transition: "background var(--duration-fast) var(--ease-out)",
  };

  const channels = [
    ["Copy link", copy, <svg key="l" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M9 15l6-6M10.5 6.5l1-1a4 4 0 0 1 6 6l-1 1M13.5 17.5l-1 1a4 4 0 0 1-6-6l1-1" /></svg>],
    ["Email", email, <svg key="m" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M4 7l8 6 8-6" /></svg>],
    ["LinkedIn", linkedin, <span key="i" style={{ fontWeight: 700, fontSize: 13, fontFamily: "var(--font-sans)" }}>in</span>],
    ["Post to X", postX, <svg key="x" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.2 3h3.3l-7.2 8.3L23 21h-6.6l-5.2-6.8L5.3 21H2l7.7-8.8L1.5 3h6.8l4.7 6.2zM17 19h1.8L7.1 5H5.1z" /></svg>],
  ];

  return (
    <div ref={ref} style={{ position: "relative" }}>
      <button onClick={() => setOpen((s) => !s)} aria-expanded={open} aria-haspopup="menu" style={shareBtn}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="2.4" /><circle cx="6" cy="12" r="2.4" /><circle cx="18" cy="19" r="2.4" /><path d="M8.1 10.8 15.9 6.2M8.1 13.2 15.9 17.8" /></svg>
        Share
      </button>
      {open && (
        <div role="menu" style={{ position: "absolute", top: "calc(100% + 8px)", right: 0, zIndex: 30, minWidth: 184, background: "var(--surface-card)", border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-md)", boxShadow: "var(--shadow-lg)", padding: "var(--space-2)", display: "flex", flexDirection: "column", gap: "2px" }}>
          {channels.map(([label, fn, icon]) => (
            <button key={label} role="menuitem" onClick={() => { fn(); if (label !== "Copy link") setOpen(false); }} style={{ display: "flex", alignItems: "center", gap: "var(--space-3)", border: "none", background: "transparent", cursor: "pointer", textAlign: "left", width: "100%", fontFamily: "var(--font-sans)", fontWeight: 500, fontSize: "var(--text-sm)", color: "var(--text-primary)", padding: "9px 10px", borderRadius: "var(--radius-sm)" }}>
              <span style={{ width: 20, display: "inline-flex", justifyContent: "center", color: "var(--text-secondary)" }}>{icon}</span>
              {label === "Copy link" && copied ? "Copied!" : label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
