"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [coachingOpen, setCoachingOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-black">
      <div className="max-w-[1400px] mx-auto px-[6vw] flex items-center justify-between h-[72px]">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/images/f114bcfec7d7a9ac-SY-Logo-BW-Transparent.png"
            alt="Scale Yourself"
            width={90}
            height={45}
            className="invert"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-white text-[15px]">
          <Link
            href="/the-user-manual"
            className="nav-link py-1 transition-colors hover:text-white"
          >
            The User Manual
          </Link>
          <div
            className="relative"
            onMouseEnter={() => setCoachingOpen(true)}
            onMouseLeave={() => setCoachingOpen(false)}
          >
            <button className="nav-link py-1 transition-colors text-[#ff01c7]">
              Founder Coaching
            </button>
            {coachingOpen && (
              <div className="absolute top-full left-0 pt-2 min-w-[200px]">
                <div className="bg-transparent py-1">
                  <Link
                    href="/find-a-founder-coach"
                    className="nav-folder-link block px-0 py-1 text-white/80 hover:text-white transition-colors"
                  >
                    Find a Founder Coach
                  </Link>
                  <Link
                    href="/work-with-amy"
                    className="nav-folder-link block px-0 py-1 text-white/80 hover:text-white transition-colors"
                  >
                    Work with Amy
                  </Link>
                </div>
              </div>
            )}
          </div>
          <Link
            href="/about"
            className="nav-link py-1 transition-colors hover:text-white"
          >
            About
          </Link>
          <Link
            href="/subscribe"
            className="nav-link py-1 transition-colors hover:text-white"
          >
            Subscribe
          </Link>
          <Link
            href="/find-a-founder-coach"
            className="outline-btn-white px-7 py-2.5 text-[14px] ml-2"
          >
            Get Started
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <div className="space-y-1.5">
            <span
              className={`block w-6 h-0.5 bg-white transition-transform ${mobileOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-opacity ${mobileOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-transform ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="md:hidden bg-black border-t border-white/10 px-[6vw] py-6 space-y-2 text-white">
          <Link
            href="/the-user-manual"
            className="block py-2 leading-[1.4em]"
            onClick={() => setMobileOpen(false)}
          >
            The User Manual
          </Link>
          <Link
            href="/find-a-founder-coach"
            className="block py-2 leading-[1.4em]"
            onClick={() => setMobileOpen(false)}
          >
            Find a Founder Coach
          </Link>
          <Link
            href="/work-with-amy"
            className="block py-2 leading-[1.4em]"
            onClick={() => setMobileOpen(false)}
          >
            Work with Amy
          </Link>
          <Link
            href="/about"
            className="block py-2 leading-[1.4em]"
            onClick={() => setMobileOpen(false)}
          >
            About
          </Link>
          <Link
            href="/subscribe"
            className="block py-2 leading-[1.4em]"
            onClick={() => setMobileOpen(false)}
          >
            Subscribe
          </Link>
          <Link
            href="/find-a-founder-coach"
            className="gradient-btn inline-block px-7 py-3 text-[14px] mt-4"
            onClick={() => setMobileOpen(false)}
          >
            Get Started
          </Link>
        </div>
      )}
    </header>
  );
}
