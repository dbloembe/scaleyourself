"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/the-user-manual", label: "The User Manual" },
  {
    label: "Founder Coaching",
    children: [
      { href: "/find-a-founder-coach", label: "Find a Founder Coach" },
      { href: "/work-with-amy", label: "Work With Amy" },
    ],
  },
  { href: "/about", label: "About" },
  { href: "/subscribe", label: "Subscribe" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-border">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-semibold tracking-tight">
          Scale Yourself
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) =>
            link.children ? (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <button className="text-sm text-muted hover:text-foreground transition">
                  {link.label}
                </button>
                {dropdownOpen && (
                  <div className="absolute top-full left-0 pt-2">
                    <div className="bg-white rounded-lg shadow-lg border border-border py-2 min-w-[200px]">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2 text-sm text-muted hover:text-foreground hover:bg-gray-50 transition"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href!}
                className="text-sm text-muted hover:text-foreground transition"
              >
                {link.label}
              </Link>
            )
          )}
          <Link
            href="/find-a-founder-coach"
            className="bg-accent text-white text-sm px-5 py-2 rounded-full hover:opacity-90 transition"
          >
            Get Started
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <nav className="md:hidden border-t border-border bg-white px-6 py-4 space-y-3">
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.label} className="space-y-2">
                <span className="text-sm font-medium text-muted">{link.label}</span>
                {link.children.map((child) => (
                  <Link
                    key={child.href}
                    href={child.href}
                    className="block pl-4 text-sm text-muted hover:text-foreground"
                    onClick={() => setMobileOpen(false)}
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href!}
                className="block text-sm text-muted hover:text-foreground"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            )
          )}
          <Link
            href="/find-a-founder-coach"
            className="block text-center bg-accent text-white text-sm px-5 py-2 rounded-full"
            onClick={() => setMobileOpen(false)}
          >
            Get Started
          </Link>
        </nav>
      )}
    </header>
  );
}
