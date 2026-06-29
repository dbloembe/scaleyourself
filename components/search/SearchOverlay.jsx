"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { TypeIcon, TYPES } from "@/components/manual/types";
import { searchPieces, essayHref, topicLabel } from "@/components/manual/content";

const POPULAR = ["Burnout", "Cofounder conflict", "Fundraising", "Motivation", "Anxiety", "Leading a team"];

function SearchGlyph() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" strokeWidth="1.9" strokeLinecap="round" aria-hidden="true" style={{ flex: "0 0 auto" }}>
      <circle cx="11" cy="11" r="7" /><path d="m20 20-3-3" />
    </svg>
  );
}

function EmptyState({ onPick }) {
  return (
    <div style={{ padding: "12px 12px 18px" }}>
      <div className="sy-search-label">Popular searches</div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 14 }}>
        {POPULAR.map((p) => (
          <button key={p} type="button" className="sy-search-chip" onClick={() => onPick(p)}>{p}</button>
        ))}
      </div>
    </div>
  );
}

function NoResults({ query, onPick }) {
  return (
    <div style={{ padding: "30px 16px 26px", textAlign: "center" }}>
      <div className="sy-search-noresult-title">No results for &ldquo;{query.trim()}&rdquo;</div>
      <p className="sy-search-noresult-sub">Try a broader term, or explore a popular topic.</p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8, justifyContent: "center", marginTop: 16 }}>
        {POPULAR.map((p) => (
          <button key={p} type="button" className="sy-search-chip" onClick={() => onPick(p)}>{p}</button>
        ))}
      </div>
    </div>
  );
}

function ResultRow({ piece, active, onActivate, onGo }) {
  const t = TYPES[piece.type] || TYPES.essay;
  const topic = topicLabel(piece);
  return (
    <button
      type="button"
      role="option"
      aria-selected={active}
      data-active={active}
      className="sy-search-row"
      onMouseMove={onActivate}
      onClick={onGo}
    >
      <span className="sy-search-row-icon"><TypeIcon type={piece.type} color={t.accent} size={16} /></span>
      <span className="sy-search-row-main">
        <span className="sy-search-row-eyebrow" style={{ color: t.accent }}>{t.label}</span>
        <span className="sy-search-row-title">{piece.title}</span>
        <span className="sy-search-row-desc">{piece.learn}</span>
      </span>
      <span className="sy-search-row-meta">
        <span className="sy-search-time">{piece.read}</span>
        {topic && <span className="sy-search-tag">{topic}</span>}
      </span>
    </button>
  );
}

/**
 * SearchOverlay — command-palette style search modal triggered by the hero
 * search bar. Full-screen on mobile. Reuses searchPieces() over the existing
 * content data and navigates to the reader on select.
 */
export function SearchOverlay({ open, onClose }) {
  const router = useRouter();
  const [query, setQuery] = React.useState("");
  const [active, setActive] = React.useState(0);
  const [render, setRender] = React.useState(open);
  const [visible, setVisible] = React.useState(false);
  const inputRef = React.useRef(null);
  const resultsRef = React.useRef(null);
  const restoreRef = React.useRef(null);

  const results = React.useMemo(() => searchPieces(query), [query]);

  // Mount + enter/exit transitions.
  React.useEffect(() => {
    if (open) {
      restoreRef.current = document.activeElement;
      setRender(true);
      const r = requestAnimationFrame(() => setVisible(true));
      return () => cancelAnimationFrame(r);
    }
    setVisible(false);
    const t = setTimeout(() => { setRender(false); setQuery(""); setActive(0); }, 220);
    return () => clearTimeout(t);
  }, [open]);

  // Lock body scroll + autofocus while mounted.
  React.useEffect(() => {
    if (!render) return undefined;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const t = setTimeout(() => inputRef.current && inputRef.current.focus(), 40);
    return () => { document.body.style.overflow = prev; clearTimeout(t); };
  }, [render]);

  // Restore focus to the trigger on close.
  React.useEffect(() => {
    if (!open && restoreRef.current && restoreRef.current.focus) {
      try { restoreRef.current.focus(); } catch (e) { /* noop */ }
    }
  }, [open]);

  React.useEffect(() => { setActive(0); }, [query]);

  // Keep the active row in view during keyboard nav.
  React.useEffect(() => {
    const el = resultsRef.current && resultsRef.current.querySelector('[data-active="true"]');
    if (el) el.scrollIntoView({ block: "nearest" });
  }, [active]);

  if (!render) return null;

  const close = () => onClose && onClose();
  const pick = (term) => { setQuery(term); if (inputRef.current) inputRef.current.focus(); };
  const go = (piece) => { router.push(essayHref(piece)); close(); };

  const onKeyDown = (e) => {
    if (e.key === "Escape") { e.preventDefault(); close(); }
    else if (e.key === "ArrowDown") { e.preventDefault(); setActive((a) => (results.length ? Math.min(a + 1, results.length - 1) : 0)); }
    else if (e.key === "ArrowUp") { e.preventDefault(); setActive((a) => Math.max(a - 1, 0)); }
    else if (e.key === "Enter") { if (results[active]) { e.preventDefault(); go(results[active]); } }
  };

  const trimmed = query.trim();

  return (
    <div
      className="sy-search-root"
      data-visible={visible}
      role="dialog"
      aria-modal="true"
      aria-label="Search the User Manual"
      onMouseDown={(e) => { if (e.target === e.currentTarget) close(); }}
    >
      <div className="sy-search-backdrop" onMouseDown={close} aria-hidden="true" />
      <div className="sy-search-panel" onKeyDown={onKeyDown}>
        <div className="sy-search-input-row">
          <SearchGlyph />
          <input
            ref={inputRef}
            className="sy-search-input"
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by what you're facing…"
            aria-label="Search"
            autoComplete="off"
            spellCheck="false"
          />
          <button type="button" className="sy-search-esc" onClick={close} aria-label="Close search">Esc</button>
        </div>
        <div className="sy-search-results" ref={resultsRef} role={trimmed && results.length ? "listbox" : undefined}>
          {trimmed === "" ? (
            <EmptyState onPick={pick} />
          ) : results.length === 0 ? (
            <NoResults query={query} onPick={pick} />
          ) : (
            results.map((p, i) => (
              <ResultRow
                key={essayHref(p)}
                piece={p}
                active={i === active}
                onActivate={() => setActive(i)}
                onGo={() => go(p)}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}
