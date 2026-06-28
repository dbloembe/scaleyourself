"use client";
import React from "react";

/**
 * Tabs — horizontal segmented navigation with an animated gradient
 * underline. Controlled via `value` / `onChange`.
 */
export function Tabs({ tabs = [], value, onChange, style = {} }) {
  const refs = React.useRef({});
  const [ind, setInd] = React.useState({ left: 0, width: 0 });

  React.useLayoutEffect(() => {
    const el = refs.current[value];
    if (el) setInd({ left: el.offsetLeft, width: el.offsetWidth });
  }, [value, tabs]);

  return (
    <div style={{ position: "relative", display: "inline-flex", gap: "4px", borderBottom: "1px solid var(--border-subtle)", ...style }}>
      {tabs.map((t) => {
        const key = t.value ?? t;
        const label = t.label ?? t;
        const active = key === value;
        return (
          <button
            key={key}
            ref={(el) => (refs.current[key] = el)}
            type="button"
            onClick={() => onChange && onChange(key)}
            style={{
              border: "none",
              background: "transparent",
              cursor: "pointer",
              fontFamily: "var(--font-sans)",
              fontWeight: "var(--weight-medium)",
              fontSize: "var(--text-sm)",
              color: active ? "var(--text-primary)" : "var(--text-secondary)",
              padding: "10px 16px 14px",
              transition: "color var(--duration-fast) var(--ease-out)",
            }}
          >
            {label}
          </button>
        );
      })}
      <span
        style={{
          position: "absolute",
          bottom: -1,
          left: ind.left,
          width: ind.width,
          height: 2.5,
          borderRadius: 2,
          background: "var(--sy-gradient)",
          transition: "left var(--duration-base) var(--ease-out), width var(--duration-base) var(--ease-out)",
        }}
      />
    </div>
  );
}
