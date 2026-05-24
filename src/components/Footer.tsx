import Link from "next/link";

const footerSections = [
  {
    title: "Knowledge",
    links: [
      { href: "/the-user-manual", label: "The User Manual" },
      { href: "#", label: "Videos" },
    ],
  },
  {
    title: "Coaching",
    links: [
      { href: "/find-a-founder-coach", label: "Find a Coach" },
      { href: "/work-with-amy", label: "Work with Amy" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "#", label: "Jobs" },
      { href: "mailto:hi@scaleyourself.com", label: "Contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-border mt-auto">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="text-lg font-semibold">
              Scale Yourself
            </Link>
            <p className="mt-3 text-sm text-muted">hi@scaleyourself.com</p>
            <div className="flex gap-4 mt-4">
              <a
                href="https://linkedin.com/in/amybuechler/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-foreground transition"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="https://x.com/amybue"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-foreground transition"
                aria-label="X (Twitter)"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold mb-3">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm text-muted hover:text-foreground transition">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted">&copy; {new Date().getFullYear()} Scale Yourself. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="text-xs text-muted hover:text-foreground transition">
              Privacy Policy
            </Link>
            <Link href="#" className="text-xs text-muted hover:text-foreground transition">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
