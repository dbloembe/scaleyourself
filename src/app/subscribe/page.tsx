import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Subscribe — Scale Yourself",
  description:
    "Subscribe to the Scale Yourself Newsletter for Startup Founders.",
};

export default function SubscribePage() {
  return (
    <section className="max-w-2xl mx-auto px-6 py-32 text-center">
      <h1 className="text-4xl font-bold">
        Subscribe to the Scale Yourself Newsletter
      </h1>
      <p className="mt-6 text-muted text-lg leading-relaxed">
        Stay ahead of your startup&apos;s growth. Be the first to hear when Amy
        releases new content in The User Manual, announces workshops and events,
        and offers practical advice to help you scale yourself as your startup
        grows.
      </p>
      <form className="mt-10 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
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
      <p className="mt-4 text-xs text-muted">
        By subscribing, you agree to receive our newsletter and can unsubscribe
        anytime.
      </p>
    </section>
  );
}
