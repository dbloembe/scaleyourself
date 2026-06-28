import React from "react";

/**
 * Badge — compact status / category label.
 * `gradient` paints the spectrum; tones map to semantic colors.
 */
export function Badge({ children, tone = "neutral", style = {}, ...rest }) {
  const base = {
    display: "inline-flex",
    alignItems: "center",
    gap: "6px",
    fontFamily: "var(--font-sans)",
    fontWeight: "var(--weight-medium)",
    fontSize: "var(--text-xs)",
    letterSpacing: "var(--tracking-caps-sm)",
    textTransform: "uppercase",
    padding: "4px 11px",
    borderRadius: "var(--radius-pill)",
    lineHeight: 1.4,
    // No transparent border: it antialiases over a gradient fill and halos
    // the edges. The `outline` tone sets its own border below.
  };
  const tones = {
    neutral: { background: "var(--surface-raised)", color: "var(--text-secondary)" },
    ink: { background: "var(--sy-ink)", color: "var(--text-inverse)" },
    gradient: { background: "var(--sy-gradient)", color: "#fff" },
    outline: { background: "transparent", color: "var(--text-primary)", border: "1px solid var(--border-default)" },
    success: { background: "color-mix(in srgb, var(--sy-success) 14%, white)", color: "var(--sy-success)" },
    warning: { background: "color-mix(in srgb, var(--sy-warning) 16%, white)", color: "#9a6c00" },
    error: { background: "color-mix(in srgb, var(--sy-error) 12%, white)", color: "var(--sy-error)" },
  };
  return (
    <span style={{ ...base, ...tones[tone], ...style }} {...rest}>
      {children}
    </span>
  );
}
