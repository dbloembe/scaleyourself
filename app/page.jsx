"use client";
import React from "react";
import { SiteHeader } from "@/components/site/SiteHeader";
import { ManualHero } from "@/components/manual/ManualHero";
import { Featured } from "@/components/manual/Featured";
import { Library } from "@/components/manual/Library";
import { Ecosystem } from "@/components/manual/Ecosystem";
import { Footer } from "@/components/site/Footer";

export default function UserManual() {
  const [query, setQuery] = React.useState("");
  return (
    <>
      <SiteHeader />
      <ManualHero query={query} setQuery={setQuery} />
      <Featured />
      <Library query={query} />
      <Ecosystem />
      <Footer />
    </>
  );
}
