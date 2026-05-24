import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-12">
          {/* Logo */}
          <div className="col-span-2 md:col-span-1">
            <Image
              src="/images/cd00639c956744e7-SY-Logo-transparent-white.png"
              alt="Scale Yourself"
              width={120}
              height={60}
            />
          </div>

          {/* Knowledge */}
          <div>
            <h4 className="font-semibold text-sm mb-4">Knowledge</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <Link href="/the-user-manual" className="hover:text-white transition-colors">
                  The User Manual
                </Link>
              </li>
              <li>
                <Link href="/subscribe" className="hover:text-white transition-colors">
                  Videos
                </Link>
              </li>
            </ul>
          </div>

          {/* Coaching */}
          <div>
            <h4 className="font-semibold text-sm mb-4">Coaching</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <Link href="/find-a-founder-coach" className="hover:text-white transition-colors">
                  Find a Coach
                </Link>
              </li>
              <li>
                <Link href="/work-with-amy" className="hover:text-white transition-colors">
                  Work with Amy
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-sm mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/jobs" className="hover:text-white transition-colors">
                  Jobs
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-sm mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <a href="mailto:hi@scaleyourself.com" className="hover:text-white transition-colors">
                  hi@scaleyourself.com
                </a>
              </li>
            </ul>
            <div className="flex gap-3 mt-4">
              <a
                href="https://www.linkedin.com/in/amybuechler/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center hover:border-white transition-colors"
                aria-label="LinkedIn"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="https://x.com/amybue"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center hover:border-white transition-colors"
                aria-label="X (Twitter)"
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-white/10 text-center text-sm text-white/50">
          <Link href="/privacy-policy" className="hover:text-white transition-colors">
            Privacy Policy
          </Link>
          <span className="mx-2">|</span>
          <Link href="/terms-of-service" className="hover:text-white transition-colors">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}
