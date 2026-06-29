"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ds";
import { LIBRARY, essayHref } from "./content";

/**
 * Ecosystem — connected-body-of-work closer over the aurora background.
 */
export function Ecosystem() {
  const router = useRouter();
  const start = () => router.push(essayHref(LIBRARY[0])); // Introduction
  return (
    <section style={{ position: "relative", overflow: "hidden", color: "#fff", background: "var(--surface-night)" }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/assets/backgrounds/bg-aurora.jpg" alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.85 }} />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(120deg, rgba(10,11,46,0.7), rgba(10,11,46,0.3))" }} />
      <div style={{ position: "relative", maxWidth: 720, margin: "0 auto", padding: "var(--space-10) var(--space-6)", textAlign: "center" }}>
        <h2 style={{ margin: "0 0 var(--space-4)", fontFamily: "var(--font-sans)", fontWeight: 500, letterSpacing: "-0.02em", fontSize: "clamp(30px,4vw,46px)", lineHeight: 1.1, textWrap: "balance" }}>One piece always leads to the next</h2>
        <p style={{ margin: "0 auto var(--space-7)", fontFamily: "var(--font-sans)", fontWeight: 300, fontSize: "var(--text-lg)", lineHeight: 1.55, opacity: 0.92, maxWidth: "42ch", textWrap: "pretty" }}>
          The User Manual is one connected body of work — essays, frameworks, and video, growing all the time. Start anywhere; it&apos;ll show you where to go next.
        </p>
        <Button variant="solid" size="lg" onClick={start}>Start reading free</Button>
      </div>
    </section>
  );
}
