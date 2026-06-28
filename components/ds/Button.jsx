"use client";
import React from "react";

const sizeStyles = {
  sm: { fontSize: "var(--text-sm)", padding: "0 16px", height: "36px" },
  md: { fontSize: "var(--text-sm)", padding: "0 22px", height: "44px" },
  lg: { fontSize: "var(--text-base)", padding: "0 30px", height: "54px" },
};

/**
 * Button — primary action element for Scale Yourself.
 * Pill-shaped, Suisse Medium. The `primary` variant carries the
 * signature spectrum gradient; everything else stays quiet.
 */
export function Button({
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  disabled = false,
  iconLeft = null,
  iconRight = null,
  style = {},
  ...rest
}) {
  const base = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    fontFamily: "var(--font-sans)",
    fontWeight: "var(--weight-medium)",
    letterSpacing: "0.01em",
    borderRadius: "var(--radius-pill)",
    // No transparent border on filled variants: a `solid transparent`
    // border antialiases over a gradient fill and leaves a faint colored
    // halo on the pill's edges. Outlined variants set their own border below.
    border: "none",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.45 : 1,
    width: fullWidth ? "100%" : "auto",
    whiteSpace: "nowrap",
    transition:
      "transform var(--duration-fast) var(--ease-out), box-shadow var(--duration-base) var(--ease-out), background var(--duration-base) var(--ease-out)",
    ...sizeStyles[size],
  };

  const variants = {
    primary: {
      color: "var(--text-on-accent)",
      background: "var(--sy-gradient)",
      boxShadow: "var(--shadow-sm)",
    },
    solid: {
      color: "var(--text-inverse)",
      background: "var(--sy-ink)",
    },
    secondary: {
      color: "var(--text-primary)",
      background: "transparent",
      border: "1.5px solid var(--border-default)",
    },
    ghost: {
      color: "var(--text-primary)",
      background: "transparent",
    },
  };

  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);

  const hoverFx = !disabled && hover
    ? variant === "secondary" || variant === "ghost"
      ? { background: "var(--surface-raised)" }
      : { boxShadow: "var(--shadow-md)", filter: "saturate(1.08)" }
    : {};
  const pressFx = !disabled && active ? { transform: "scale(0.97)" } : {};

  return (
    <button
      type="button"
      disabled={disabled}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => { setHover(false); setActive(false); }}
      onMouseDown={() => setActive(true)}
      onMouseUp={() => setActive(false)}
      style={{ ...base, ...variants[variant], ...hoverFx, ...pressFx, ...style }}
      {...rest}
    >
      {iconLeft}
      {children}
      {iconRight}
    </button>
  );
}
