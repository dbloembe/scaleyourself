import React from "react";

// ---- Content-type system ----
export const TYPES = {
  essay: { label: "Essay", cta: "Read", accent: "var(--sy-blue)" },
  audio: { label: "Audio", cta: "Listen", accent: "var(--sy-magenta)" },
  video: { label: "Video", cta: "Watch", accent: "var(--sy-rose)" },
};

export function TypeIcon({ type, size = 15, color = "currentColor" }) {
  const s = { width: size, height: size, display: "block" };
  if (type === "audio") return (
    <svg viewBox="0 0 24 24" style={s} fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 14v-2a8 8 0 0 1 16 0v2" /><rect x="2.5" y="13" width="4.5" height="7" rx="1.5" /><rect x="17" y="13" width="4.5" height="7" rx="1.5" />
    </svg>
  );
  if (type === "video") return (
    <svg viewBox="0 0 24 24" style={s} fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2.5" y="5" width="13" height="14" rx="2.5" /><path d="M15.5 9.5l5.5-3v11l-5.5-3z" />
    </svg>
  );
  return ( // essay
    <svg viewBox="0 0 24 24" style={s} fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M6 3h8l5 5v13a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" /><path d="M14 3v5h5" /><path d="M8.5 13h7M8.5 16.5h7" />
    </svg>
  );
}

export function TypePill({ type }) {
  const t = TYPES[type];
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 6, fontFamily: "var(--font-sans)", fontWeight: 500, fontSize: "var(--text-xs)", textTransform: "uppercase", letterSpacing: "0.08em", color: t.accent }}>
      <TypeIcon type={type} color={t.accent} /> {t.label}
    </span>
  );
}