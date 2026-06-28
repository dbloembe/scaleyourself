"use client";
import React from "react";

/**
 * Card — the primary surface container. Soft radius, hairline border,
 * low diffuse shadow. `interactive` lifts on hover; `night` flips to
 * the deep-navy brand surface.
 */
export function Card({
  children,
  interactive = false,
  night = false,
  padding = "var(--space-6)",
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const base = {
    background: night ? "var(--surface-night)" : "var(--surface-card)",
    color: night ? "var(--text-inverse)" : "var(--text-primary)",
    border: night ? "1px solid rgba(255,255,255,0.10)" : "1px solid var(--border-subtle)",
    borderRadius: "var(--radius-lg)",
    padding,
    boxShadow: interactive && hover ? "var(--shadow-lg)" : "var(--shadow-sm)",
    transform: interactive && hover ? "translateY(-3px)" : "none",
    transition: "transform var(--duration-base) var(--ease-out), box-shadow var(--duration-base) var(--ease-out)",
    boxSizing: "border-box",
  };
  return (
    <div
      onMouseEnter={() => interactive && setHover(true)}
      onMouseLeave={() => interactive && setHover(false)}
      style={{ ...base, ...style }}
      {...rest}
    >
      {children}
    </div>
  );
}
