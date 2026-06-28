"use client";
import React from "react";

/**
 * Input — single-line text field. Hairline border, soft radius,
 * gradient-tinted focus ring. Supports label, hint, error, and prefix.
 */
export function Input({
  label,
  hint,
  error,
  prefix = null,
  id,
  style = {},
  disabled = false,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const fieldId = id || React.useId();

  const wrap = {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    background: disabled ? "var(--surface-subtle)" : "var(--surface-card)",
    border: `1.5px solid ${error ? "var(--sy-error)" : focus ? "var(--sy-blue)" : "var(--border-default)"}`,
    borderRadius: "var(--radius-md)",
    padding: "0 14px",
    height: "48px",
    boxShadow: focus && !error ? "0 0 0 4px var(--focus-ring)" : "none",
    transition: "border-color var(--duration-fast) var(--ease-out), box-shadow var(--duration-fast) var(--ease-out)",
  };
  const input = {
    border: "none",
    outline: "none",
    background: "transparent",
    flex: 1,
    height: "100%",
    fontFamily: "var(--font-sans)",
    fontSize: "var(--text-base)",
    color: "var(--text-primary)",
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "7px", ...style }}>
      {label && (
        <label htmlFor={fieldId} style={{ fontFamily: "var(--font-sans)", fontWeight: "var(--weight-medium)", fontSize: "var(--text-sm)", color: "var(--text-primary)" }}>
          {label}
        </label>
      )}
      <div style={wrap}>
        {prefix && <span style={{ color: "var(--text-muted)", display: "inline-flex" }}>{prefix}</span>}
        <input
          id={fieldId}
          disabled={disabled}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          style={input}
          {...rest}
        />
      </div>
      {(hint || error) && (
        <span style={{ fontFamily: "var(--font-sans)", fontSize: "var(--text-xs)", color: error ? "var(--sy-error)" : "var(--text-muted)" }}>
          {error || hint}
        </span>
      )}
    </div>
  );
}
