import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work With Amy — Scale Yourself",
  description:
    "Weekly founder coaching with Amy Buechler, licensed psychotherapist and former YC Batch Director.",
};

const principles = [
  {
    title: "Use what you have",
    description: "Emphasizes existing capabilities over external solutions.",
  },
  {
    title: "This is an offering",
    description: "Non-prescriptive approach respecting founder autonomy.",
  },
  {
    title: "Focus on function",
    description: "Values-neutral assessment of thoughts and behaviors.",
  },
  {
    title: "Success requires authenticity",
    description: "Building unique founder-specific strategies.",
  },
  {
    title: "Possibility over certainty",
    description: "Optimistic belief in founder potential.",
  },
  {
    title: "We learn together",
    description: "Collaborative expertise pairing.",
  },
];

export default function WorkWithAmyPage() {
  return (
    <>
      <section className="max-w-4xl mx-auto px-6 py-24">
        <p className="text-sm font-medium text-accent mb-2">Work With Amy</p>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Founder Coaching with Amy Buechler
        </h1>
        <div className="mt-8 space-y-6 text-lg text-muted leading-relaxed max-w-3xl">
          <p>
            Amy provides weekly founder coaching with async availability.
            Engagements typically last from seed stage through acquisition or IPO,
            with a focus on founder psychology and personal growth during
            hypergrowth periods.
          </p>
          <p>
            She works best with seed-stage VC-funded founders experiencing
            meaningful growth, leaders preparing for Series A inflection points,
            and founders building companies with deep and lasting impact.
          </p>
        </div>
      </section>

      <section className="bg-gray-50 py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4">Operating Principles</h2>
          <p className="text-muted mb-10">
            Amy&apos;s coaching framework rests on six foundational concepts.
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            {principles.map((p) => (
              <div
                key={p.title}
                className="bg-white rounded-xl p-6 border border-border"
              >
                <h3 className="font-semibold text-lg">{p.title}</h3>
                <p className="mt-2 text-muted text-sm">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-24">
        <div className="bg-accent-light rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold">Interested in working together?</h2>
          <p className="mt-4 text-muted">
            Licensed psychotherapist &middot; Y Combinator&apos;s first in-house
            Founder Coach &middot; ~2,000 founders coached
          </p>
          <button className="mt-8 bg-accent text-white px-8 py-3 rounded-full text-base font-medium hover:opacity-90 transition">
            Get in Touch
          </button>
        </div>
      </section>
    </>
  );
}
