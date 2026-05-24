import type { Metadata } from "next";
import Link from "next/link";
import { articles } from "@/data/articles";

export const metadata: Metadata = {
  title: "The User Manual for Founder Psychology — Scale Yourself",
  description:
    "Essays and practical frameworks helping founders build resilience, trust, and authentic leadership as startups scale.",
};

const sectionLabels: Record<string, string> = {
  "getting-started": "Getting Started",
  cofounder: "Cofounder Relationships",
  psychology: "Psychology & Personal Development",
  vision: "Vision & Strategy",
  operations: "Operations",
};

const sectionOrder = ["getting-started", "cofounder", "psychology", "vision", "operations"];

export default function UserManualPage() {
  const grouped = sectionOrder.map((section) => ({
    key: section,
    label: sectionLabels[section],
    articles: articles.filter((a) => a.section === section),
  }));

  return (
    <>
      <section className="max-w-4xl mx-auto px-6 py-24">
        <p className="text-sm font-medium text-accent mb-2">The User Manual</p>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          The User Manual for Founder Psychology
        </h1>
        <p className="mt-6 text-lg text-muted leading-relaxed max-w-3xl">
          Essays and practical frameworks helping founders build resilience,
          trust, and authentic leadership as startups scale. Based on thousands
          of hours coaching YC founders.
        </p>
      </section>

      {grouped.map((group) => (
        <section key={group.key} className="max-w-4xl mx-auto px-6 pb-16">
          <h2 className="text-2xl font-bold mb-6 pb-3 border-b border-border">
            {group.label}
          </h2>
          <div className="space-y-6">
            {group.articles.map((article) => (
              <Link
                key={article.slug}
                href={`/the-user-manual/${article.slug}`}
                className="block group"
              >
                <article className="bg-gray-50 rounded-xl p-6 border border-border hover:border-accent/30 transition">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {article.categories.slice(0, 3).map((cat) => (
                      <span
                        key={cat}
                        className="text-xs bg-white text-muted px-2 py-1 rounded-full border border-border"
                      >
                        {cat}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-lg font-semibold group-hover:text-accent transition">
                    {article.title}
                  </h3>
                  <p className="mt-2 text-muted text-sm leading-relaxed">
                    {article.description}
                  </p>
                  <p className="mt-3 text-xs text-muted">
                    {article.author} &middot;{" "}
                    {new Date(article.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                </article>
              </Link>
            ))}
          </div>
        </section>
      ))}
    </>
  );
}
