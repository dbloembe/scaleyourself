"use client";
import React from "react";
import { SiteHeader } from "@/components/site/SiteHeader";
import { ManualHero } from "@/components/manual/ManualHero";
import { Featured } from "@/components/manual/Featured";
import { Library } from "@/components/manual/Library";
import { Ecosystem } from "@/components/manual/Ecosystem";
import { Footer } from "@/components/site/Footer";
import { SearchOverlay } from "@/components/search/SearchOverlay";

export default function UserManual() {
  const [searchOpen, setSearchOpen] = React.useState(false);

  // ⌘K / Ctrl+K opens search.
  React.useEffect(() => {
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setSearchOpen(true);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <SiteHeader />
      <ManualHero onOpenSearch={() => setSearchOpen(true)} />
      <div id="featured" style={{ scrollMarginTop: 92 }}><Featured /></div>
      <Library />
      <Ecosystem />
      <Footer />
      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
