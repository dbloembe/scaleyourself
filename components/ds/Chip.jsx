"use client";
import React from "react";

/**
 * Chip — selectable filter pill. Selected state outlines with a
 * gradient border via a layered background trick.
 */
export function Chip({ children, selected = false, onClick, disabled = false, style = {}, ...rest }) {
  const base = {
    display: "inline-flex",
    alignItems: "center",
    gap: "7px",
    fontFamily: "var(--font-sans)",
    fontWeight: "var(--weight-medium)",
    fontSize: "var(--text-sm)",
    padding: "8px 16px",
    borderRadius: "var(--radius-pill)",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.5 : 1,
    transition: "background var(--duration-fast) var(--ease-out), color var(--duration-fast) var(--ease-out)",
    border: "1.5px solid transparent",
    color: selected ? "var(--text-primary)" : "var(--text-secondary)",
    background: selected
      ? "linear-gradient(var(--surface-card), var(--surface-card)) padding-box, var(--sy-gradient) border-box"
      : "var(--surface-raised)",
  };
  return (
    <button type="button" disabled={disabled} onClick={onClick} style={{ ...base, ...style }} {...rest}>
      {children}
    </button>
  );
}
