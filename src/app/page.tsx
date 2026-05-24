import Link from "next/link";
import { testimonials } from "@/data/articles";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-accent-light to-white">
        <div className="max-w-4xl mx-auto px-6 py-28 text-center">
          <p className="text-sm font-medium text-accent mb-4">
            &#x2726; Trusted by 2000+ YC Founders
          </p>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight">
            Learn to Scale Yourself
          </h1>
          <p className="mt-6 text-lg text-muted max-w-2xl mx-auto leading-relaxed">
            Build the emotional, management, and leadership skills you need to
            scale at the speed of your startup
          </p>
          <Link
            href="/find-a-founder-coach"
            className="inline-block mt-8 bg-accent text-white px-8 py-3 rounded-full text-base font-medium hover:opacity-90 transition"
          >
            Get Started
          </Link>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="max-w-4xl mx-auto px-6 py-24">
        <h2 className="text-3xl md:text-4xl font-bold leading-snug">
          Coaching and resources for the internal work of building a startup
        </h2>
        <p className="mt-6 text-muted text-lg leading-relaxed max-w-3xl">
          Scaling a startup puts relentless pressure on the person running it.
          Scale Yourself gives you the frameworks, tools, and coaching to manage
          that pressure, strengthen your relationships, and lead through every
          stage of growth &mdash; built from a decade of working with thousands of
          YC founders.
        </p>
        <p className="mt-4 text-sm text-muted">
          Created by Amy Buechler &mdash; licensed psychotherapist and former Y
          Combinator Batch Director
        </p>
      </section>

      {/* The User Manual */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-sm font-medium text-accent mb-2">The User Manual</p>
          <h2 className="text-3xl md:text-4xl font-bold leading-snug">
            The User Manual for Founder Psychology
          </h2>
          <p className="mt-6 text-muted text-lg leading-relaxed max-w-3xl">
            A library of frameworks and tools built from a decade of coaching YC
            founders &mdash; covering everything from processing hard emotions to
            navigating cofounder conflict and leading through hypergrowth.
          </p>
          <div className="mt-10 bg-white rounded-2xl p-8 border border-border">
            <h3 className="text-xl font-semibold">
              Processing Your Emotions is a Competitive Advantage
            </h3>
            <p className="mt-3 text-muted leading-relaxed">
              Great founders don&apos;t suppress their emotion &mdash; they use it as
              data. When they do, founders make clearer decisions, build
              confidence, move faster and more sustainably &mdash; and lead with
              trust when it matters most.
            </p>
          </div>
          <Link
            href="/the-user-manual"
            className="inline-block mt-8 text-accent font-medium hover:underline"
          >
            Explore more &rarr;
          </Link>
        </div>
      </section>

      {/* Founder Coaching */}
      <section className="max-w-4xl mx-auto px-6 py-24">
        <p className="text-sm font-medium text-accent mb-2">Coaching</p>
        <h2 className="text-3xl md:text-4xl font-bold leading-snug">
          Founder Coaching
        </h2>
        <p className="mt-6 text-muted text-lg leading-relaxed max-w-3xl">
          Get matched with a trusted, vetted founder coach in 3 days. Our
          coaches are ex-founders and operators who&apos;ve made the jump to
          coaching &mdash; they understand your stage, your challenges, and what it
          takes to grow through them.
        </p>
        <Link
          href="/find-a-founder-coach"
          className="inline-block mt-8 bg-accent text-white px-8 py-3 rounded-full text-base font-medium hover:opacity-90 transition"
        >
          Find Your Coach
        </Link>
      </section>

      {/* Newsletter */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold">
            Stay ahead of your startup&apos;s growth.
          </h2>
          <p className="mt-4 text-muted leading-relaxed">
            Be the first to hear when Amy releases new content in The User
            Manual, announces workshops, and offers practical advice to help you
            scale yourself as your startup grows.
          </p>
          <form className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Email Address"
              className="flex-1 px-4 py-3 rounded-full border border-border text-sm focus:outline-none focus:ring-2 focus:ring-accent/30"
            />
            <button
              type="submit"
              className="bg-accent text-white px-6 py-3 rounded-full text-sm font-medium hover:opacity-90 transition"
            >
              Subscribe
            </button>
          </form>
          <p className="mt-3 text-xs text-muted">
            By subscribing, you agree to receive our newsletter and can
            unsubscribe anytime.
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-5xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-bold text-center mb-16">
          Trusted by the world&apos;s best founders
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((t) => (
            <blockquote
              key={t.author}
              className="bg-gray-50 rounded-2xl p-8 border border-border"
            >
              <p className="text-lg leading-relaxed italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <footer className="mt-4">
                <p className="font-semibold">{t.author}</p>
                <p className="text-sm text-muted">{t.title}</p>
              </footer>
            </blockquote>
          ))}
        </div>
      </section>
    </>
  );
}
