import { notFound } from "next/navigation";
import Link from "next/link";
import { articles } from "@/data/articles";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) return {};
  return {
    title: `${article.title} — Scale Yourself`,
    description: article.description,
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) notFound();

  const currentIndex = articles.indexOf(article);
  const prev = currentIndex > 0 ? articles[currentIndex - 1] : null;
  const next = currentIndex < articles.length - 1 ? articles[currentIndex + 1] : null;

  return (
    <article className="max-w-3xl mx-auto px-6 py-24">
      <div className="flex flex-wrap gap-2 mb-4">
        {article.categories.map((cat) => (
          <span
            key={cat}
            className="text-xs bg-accent-light text-accent px-3 py-1 rounded-full"
          >
            {cat}
          </span>
        ))}
      </div>
      <h1 className="text-4xl font-bold leading-tight">{article.title}</h1>
      <p className="mt-4 text-muted">
        {article.author} &middot;{" "}
        {new Date(article.date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>

      <div className="mt-12 prose prose-lg max-w-none">
        <p className="text-xl text-muted leading-relaxed">
          {article.description}
        </p>
        <div className="mt-12 bg-accent-light rounded-2xl p-8">
          <p className="text-muted text-center">
            Full article content goes here. Replace this placeholder with the
            actual article content.
          </p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="mt-16 pt-8 border-t border-border flex justify-between">
        {prev ? (
          <Link
            href={`/the-user-manual/${prev.slug}`}
            className="text-sm text-muted hover:text-accent transition"
          >
            &larr; {prev.title}
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link
            href={`/the-user-manual/${next.slug}`}
            className="text-sm text-muted hover:text-accent transition text-right"
          >
            {next.title} &rarr;
          </Link>
        ) : (
          <span />
        )}
      </nav>
    </article>
  );
}
