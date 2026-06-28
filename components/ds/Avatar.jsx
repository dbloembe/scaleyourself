import React from "react";

const sizes = { sm: 32, md: 44, lg: 64 };

/**
 * Avatar — circular person image with a gradient ring option.
 * Falls back to initials on a neutral surface when no `src`.
 */
export function Avatar({ src, name = "", size = "md", ring = false, style = {}, ...rest }) {
  const px = sizes[size] || size;
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();

  const inner = {
    width: px,
    height: px,
    borderRadius: "50%",
    objectFit: "cover",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "var(--surface-raised)",
    color: "var(--text-secondary)",
    fontFamily: "var(--font-sans)",
    fontWeight: "var(--weight-medium)",
    fontSize: px * 0.36,
    letterSpacing: "0.02em",
    overflow: "hidden",
  };

  const node = src ? (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={name} style={inner} />
  ) : (
    <span style={inner}>{initials}</span>
  );

  if (!ring) return <span style={{ display: "inline-flex", ...style }} {...rest}>{node}</span>;

  return (
    <span
      style={{
        display: "inline-flex",
        padding: 2.5,
        borderRadius: "50%",
        background: "var(--sy-gradient)",
        ...style,
      }}
      {...rest}
    >
      <span style={{ padding: 2, borderRadius: "50%", background: "var(--surface-page)", display: "inline-flex" }}>
        {node}
      </span>
    </span>
  );
}
