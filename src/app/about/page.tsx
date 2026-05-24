import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Scale Yourself",
  description:
    "Amy Buechler is a psychotherapist who coached thousands of the world's best startup founders at Y Combinator.",
};

const press = [
  { year: "2024", outlet: "Every Magazine" },
  { year: "2023", outlet: "Fortune Magazine" },
  { year: "2023", outlet: "Fast Company" },
  { year: "2020", outlet: "Fast Company" },
  { year: "2020", outlet: "Refinery29" },
  { year: "2019", outlet: "Y Combinator Podcast" },
  { year: "2018", outlet: "The Information" },
  { year: "2017", outlet: "Fast Company" },
  { year: "2016", outlet: "CNN Money" },
];

export default function AboutPage() {
  return (
    <>
      <section className="max-w-4xl mx-auto px-6 py-24">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Amy is a psychotherapist who coached thousands of the world&apos;s best
          startup founders at Y Combinator
        </h1>
        <div className="mt-12 space-y-6 text-lg text-muted leading-relaxed max-w-3xl">
          <p>
            Amy spent nearly five years as Y Combinator&apos;s first Batch
            Director, working with approximately 1,000 early-stage founders. Her
            core observation: &ldquo;The same fears before a hard conversation.
            The same overwhelm when things start working&rdquo; appear
            consistently across founder experiences.
          </p>
          <p>
            Scale Yourself addresses the gap between startup education and
            founder psychology. The platform provides The User Manual for Founder
            Psychology &mdash; a free library of frameworks &mdash; along with a
            founder coach matching service featuring a network of ex-Y Combinator
            founders, operators, and psychotherapists.
          </p>
        </div>
      </section>

      <section className="bg-gray-50 py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-8">Press &amp; Media</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {press.map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-6 border border-border"
              >
                <p className="text-sm text-accent font-medium">{item.year}</p>
                <p className="mt-1 font-semibold">{item.outlet}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
