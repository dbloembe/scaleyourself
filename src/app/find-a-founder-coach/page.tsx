import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Find a Startup Founder Coach — Scale Yourself",
  description:
    "Get matched with an experienced founder coach in 3 days. Our coaches are ex-founders, operators, and psychotherapists.",
};

const steps = [
  {
    number: "1",
    title: "Submit your brief",
    description: "Tell us about yourself and what you're looking for in a coach.",
  },
  {
    number: "2",
    title: "Get matched in 3 days",
    description:
      "We match you with coaches who have relevant experience and availability.",
  },
  {
    number: "3",
    title: "Schedule intro calls",
    description: "Meet your matches and choose the coach that feels right.",
  },
];

const focusAreas = [
  "Strengthen cofounder relationships",
  "Find accountability partners",
  "Build psychological resilience",
  "Become proactive rather than reactive",
  "Lead and manage teams",
  "Enable continuous learning and growth",
];

const pricing = [
  { stage: "Pre-seed / between startups", price: "$50 - $250/hr" },
  { stage: "Seed-stage", price: "Min. $350/hr" },
  { stage: "Post-Series A", price: "Min. $2,500/mo" },
  { stage: "Post-Series B+", price: "Min. $3,500/mo" },
];

export default function FindCoachPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-accent-light to-white py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Find a Startup Founder Coach
          </h1>
          <p className="mt-6 text-lg text-muted leading-relaxed max-w-2xl mx-auto">
            We make it fast and easy to connect founders with experienced coaches
            who can optimize your growth to meet the demands of your startup.
          </p>
          <button className="mt-8 bg-accent text-white px-8 py-3 rounded-full text-base font-medium hover:opacity-90 transition">
            Find Your Coach
          </button>
        </div>
      </section>

      {/* How It Works */}
      <section className="max-w-4xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-bold text-center mb-16">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="text-center">
              <div className="w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center text-lg font-bold mx-auto">
                {step.number}
              </div>
              <h3 className="mt-4 text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 text-muted text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Focus Areas */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">
            What our coaches help with
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {focusAreas.map((area) => (
              <div
                key={area}
                className="flex items-start gap-3 bg-white rounded-xl p-5 border border-border"
              >
                <span className="text-accent mt-0.5">&#x2713;</span>
                <span>{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-4xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-bold mb-8">Pricing</h2>
        <p className="text-muted mb-8">
          Coaches may charge above minimums. Referral fees paid by coaches support
          the platform.
        </p>
        <div className="grid sm:grid-cols-2 gap-4">
          {pricing.map((tier) => (
            <div
              key={tier.stage}
              className="bg-gray-50 rounded-xl p-6 border border-border"
            >
              <p className="text-sm text-muted">{tier.stage}</p>
              <p className="mt-1 text-xl font-bold">{tier.price}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-accent-light py-24">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold">Ready to find your coach?</h2>
          <p className="mt-4 text-muted">
            Questions? Reach out at hi@scaleyourself.com
          </p>
          <button className="mt-8 bg-accent text-white px-8 py-3 rounded-full text-base font-medium hover:opacity-90 transition">
            Get Matched Now
          </button>
        </div>
      </section>
    </>
  );
}
