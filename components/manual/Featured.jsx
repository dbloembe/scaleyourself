"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Badge, Card } from "@/components/ds";
import { TYPES, TypePill } from "./types";
import { FEATURED, essayHref } from "./content";

export function Featured() {
  const router = useRouter();
  return (
    <section style={{ background: "var(--surface-subtle)", padding: "clamp(56px, 9vw, 128px) clamp(20px, 6vw, 64px)" }}>
      <div style={{ maxWidth: "var(--container-max)", margin: "0 auto" }}>
        <div style={{ marginBottom: "var(--space-8)", maxWidth: "min(100%, 520px)" }}>
          <h2 style={{ margin: 0, fontFamily: "var(--font-sans)", fontWeight: 500, letterSpacing: "-0.02em", fontSize: "var(--text-2xl)", color: "var(--text-primary)" }}>Featured right now</h2>
          <p style={{ margin: "var(--space-3) 0 0", fontFamily: "var(--font-sans)", fontSize: "var(--text-base)", lineHeight: 1.55, color: "var(--text-secondary)" }}>What founders are reading and watching this week — fresh picks, updated often.</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))", gap: "var(--space-7)" }}>
          {FEATURED.map((p) => (
            <Card key={p.title} interactive padding="0" onClick={() => router.push(essayHref(p))} style={{ cursor: "pointer", overflow: "hidden", display: "flex", flexDirection: "column" }}>
              <div style={{ height: 8, background: "var(--sy-gradient)" }} />
              <div style={{ padding: "var(--space-7)", display: "flex", flexDirection: "column", flex: 1 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "var(--space-5)" }}>
                  <TypePill type={p.type} />
                  <Badge tone={p.tag === "New" ? "gradient" : "outline"} style={{ whiteSpace: "nowrap" }}>{p.tag}</Badge>
                </div>
                <h3 style={{ margin: "0 0 var(--space-4)", fontFamily: "var(--font-sans)", fontWeight: 500, fontSize: "var(--text-xl)", letterSpacing: "-0.01em", lineHeight: 1.18, color: "var(--text-primary)" }}>{p.title}</h3>
                <p style={{ margin: "0 0 var(--space-6)", fontFamily: "var(--font-sans)", fontSize: "var(--text-sm)", lineHeight: 1.6, color: "var(--text-secondary)", flex: 1 }}>{p.learn}</p>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "var(--font-sans)", fontWeight: 500, fontSize: "var(--text-sm)", color: TYPES[p.type].accent }}>{TYPES[p.type].cta} →</span>
                  <span style={{ fontFamily: "var(--font-sans)", fontSize: "var(--text-xs)", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.08em" }}>{p.read}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
