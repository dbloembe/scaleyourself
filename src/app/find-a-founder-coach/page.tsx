"use client";

import Image from "next/image";
import Link from "next/link";
import TrustLogos from "@/components/TrustLogos";
import Testimonials from "@/components/Testimonials";
import NewsletterSection from "@/components/NewsletterSection";

const steps = [
  {
    num: "1.",
    title: "Submit your brief",
    desc: "to our network of trusted coaches.",
  },
  {
    num: "2.",
    title: "Get matched in 3 days",
    desc: "with coaches who have the experience and availability to scale you.",
  },
  {
    num: "3.",
    title: "Schedule intro calls",
    desc: "and choose your coach from there.",
  },
];

const benefits = [
  {
    title: "Strengthen cofounder relationships",
    desc: "Manage cofounder relationships & stress by addressing persistent conflicts, fostering better communication, and finding alignment.",
  },
  {
    title: "Build psychological resilience",
    desc: "Develop self awareness and tools for psychological mastery that enable you to experience the high highs and low lows without undue suffering.",
  },
  {
    title: "Lead and manage a team",
    desc: "Grow as a leader by managing a fast-growing team, delivering effective feedback, establishing a high bar for excellence, and balancing accountability with high morale.",
  },
  {
    title: "Find an accountability partner",
    desc: "Your coach will act as a forcing function for your growth and execution, ensuring you stay focused and accountable to achieving your ambitious goals.",
  },
  {
    title: "Become proactive, not reactive",
    desc: "Reduce the overwhelm, stress, and fear that exhausts founders by learning new skills to stay thoughtful and responsive to fires erupting from your startup's growth.",
  },
  {
    title: "Continuous learning & growth",
    desc: "Your startup's success is directly correlated to the rate at which you continuously grow, learn, and adapt. Coaching offers personalized growth so your growth never bottlenecks your startup's.",
  },
];

const testimonials = [
  {
    quote:
      "A great experience - the process was fast and the quality of coaches was great. I felt very supported in making the right choice for myself and my startup.",
    name: "William",
    title: "CEO of Sweep AI (YC S23)",
  },
  {
    quote:
      "Shockingly fast and exactly what we needed. We found a great coach within a week.",
    name: "Paul",
    title: "CEO of Narrow.ai",
  },
  {
    quote:
      "I've worked with several coaches over the last 17 years and the coach I found through this process has raised my expectations of what coaching can be. It provided the right support at the right time.",
    name: "Sam",
    title: "CEO of Lightmeter (YC W22)",
  },
];

const faqs = [
  {
    q: "What is coaching?",
    a: "Coaching is a relationship that achieves personal and professional growth via startup. Every coach offers a unique service based off their experience, so every coach might define their work differently. In contrast to coaching, therapy achieves personal growth via relationship and its benefits flow downstream into professional growth as well.",
  },
  {
    q: "What happens after I submit a form?",
    a: "After you submit the form, your brief will be automatically socialized with the coaches in our network. They'll review and let us know if they have the experience and availability to support you. Within 2-3 days, we'll send you a curated list of the coaches that will best support you and your startup scale.",
  },
  {
    q: "How much does coaching cost?",
    a: "Pre-seed founders: $50-$250/hr suggested range. Seed-stage founders (pre-Series A): min. $350/hr. Post-Series A founders: min. $2500/mo. Post-Series B founders: min. $3500/mo. Coaches may charge more than these minimums.",
  },
  {
    q: "Is coaching covered by insurance?",
    a: "No, it's paid for by the startup (typically out of a 'leadership and development' budget line item).",
  },
  {
    q: "How many coaches will I meet?",
    a: "We'll introduce you to the 2-4 coaches from our network that we think are the best fit for you given your needs and stage, and the coach's experience, training, focus, and availability.",
  },
  {
    q: "How do I decide who to work with?",
    a: "'Fit' is subjective, which means choosing the right coach is an exercise in listening to yourself and making a judgment call based on your own sense of what you need. Listen to your head: 'Did I learn something new?' And listen to your gut: 'Do I trust this person?'",
  },
  {
    q: "I'm looking for therapy instead. Can you help?",
    a: "No. Coaching and therapy are different and we do not offer recommendations to therapy or therapists. Some coaches in our network are trained psychotherapists, but they are not practicing under their psychotherapy license when offering coaching services.",
  },
];

export default function FindAFounderCoachPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 md:py-28 px-6 md:px-12">
        <div className="max-w-[800px] mx-auto">
          <h1 className="text-4xl md:text-5xl font-light mb-6">
            Find a Founder Coach
          </h1>
          <p className="text-gray-600 mb-8 max-w-[600px]">
            We make it fast and easy to connect founders with experienced
            coaches who can optimize your growth to meet the demands of your
            startup.
          </p>
          <Link
            href="#"
            className="gradient-btn inline-block px-8 py-3 text-sm"
          >
            Find Your Coach
          </Link>
        </div>
      </section>

      {/* Go Deeper */}
      <section className="py-16 px-6 md:px-12 bg-[#fafafa]">
        <div className="max-w-[1100px] mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-light leading-snug mb-6">
              Go deeper with our{" "}
              <strong>trusted network</strong> of founder coaches
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Our coaches are former YC Founders, YC Visiting Partners,
              ex-operators, and psychotherapists who have deep experience
              scaling startups, a passion for supporting founders, and extensive
              training so your growth will be guided by experts who know what it
              takes to execute at the highest level.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden">
            <Image
              src="/images/6890bd7447eaf826-The-Founder-Coach-Gradient-4.jpg"
              alt="Founder Coaching"
              width={600}
              height={400}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Click a button */}
      <section className="py-16 px-6 md:px-12 text-center">
        <h2 className="text-3xl md:text-4xl font-light mb-8">
          Click a button. Get a coach.
        </h2>
        <Link
          href="#"
          className="gradient-btn inline-block px-10 py-4 text-base"
        >
          Find Your Coach
        </Link>
      </section>

      <hr className="hr-cyan max-w-[1100px] mx-auto" />

      {/* How It Works */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-[900px] mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-4">
            How it works
          </h2>
          <p className="text-gray-500 text-sm mb-16 max-w-[600px] mx-auto">
            We&apos;ve been matchmaking founders with coaches for 8 years. We
            quickly scope your needs, introduce you to a curated list of
            best-in-class coaches, and guide you in making the best decision for
            you and your startup.
          </p>
          <div className="grid md:grid-cols-3 gap-12">
            {steps.map((step) => (
              <div key={step.num} className="text-center">
                <div className="text-4xl font-light mb-4">{step.num}</div>
                <p className="text-sm">
                  <strong>{step.title}</strong> {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="hr-cyan max-w-[1100px] mx-auto" />

      {/* Optimize your growth */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-[900px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light mb-4">
              Optimize your growth with personalized coaching
            </h2>
            <p className="text-gray-500 text-sm max-w-[500px] mx-auto">
              Match with a coach in our network for personalized, ongoing
              support that will enable you to scale at the speed of your
              startup.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit) => (
              <div key={benefit.title}>
                <h3 className="font-semibold text-base mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {benefit.desc}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="#"
              className="gradient-btn inline-block px-10 py-4 text-base"
            >
              Find Your Coach
            </Link>
          </div>
        </div>
      </section>

      {/* Coach Testimonials */}
      <section className="py-16 px-6 md:px-12 bg-[#fafafa]">
        <div className="max-w-[1100px] mx-auto grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white rounded-2xl p-8">
              <blockquote className="text-sm text-gray-600 leading-relaxed mb-6">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <p className="text-xs text-gray-400">
                {t.name}, {t.title}
              </p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            href="#"
            className="gradient-btn inline-block px-10 py-4 text-base"
          >
            Find Your Coach
          </Link>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-[700px] mx-auto">
          <h2 className="text-3xl font-light text-center mb-12">FAQs</h2>
          <div className="divide-y divide-gray-200">
            {faqs.map((faq) => (
              <details key={faq.q} className="group py-5">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <span className="text-sm">{faq.q}</span>
                  <span className="text-xl text-gray-400 group-open:rotate-45 transition-transform flex-shrink-0 ml-4">
                    +
                  </span>
                </summary>
                <p className="mt-4 text-sm text-gray-500 leading-relaxed">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Work with Amy */}
      <section className="py-16 px-6 md:px-12 bg-[#fafafa]">
        <div className="max-w-[1100px] mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-light mb-4">Work with Amy</h2>
            <Link
              href="/contact"
              className="gradient-btn inline-block px-8 py-3 text-sm mt-2"
            >
              Get in touch
            </Link>
          </div>
          <div>
            <p className="text-sm text-gray-500 mb-2">
              Coach to thousands of the world&apos;s best startup founders at Y
              Combinator
            </p>
            <p className="text-gray-600 leading-relaxed text-sm">
              Explore partnering with the OG who invented the category of
              &apos;Founder Coaching.&apos; Amy typically works with founders at
              or around their Series A who are struggling to scale themselves at
              the same pace as their startup&apos;s growth.
            </p>
          </div>
        </div>
      </section>

      {/* Founders grow faster */}
      <section
        className="py-20 px-6 md:px-12 text-white"
        style={{
          background:
            "linear-gradient(135deg, #000 0%, #1a0033 30%, #1400ff 60%, #00e2ff 100%)",
        }}
      >
        <div className="max-w-[900px] mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-light leading-tight">
              Founders grow faster with the right support.
            </h2>
            <p className="text-white/60 text-sm mt-4">
              Subscribe for insights and updates designed specifically for
              high-growth founders.
            </p>
          </div>
          <div>
            <label className="text-sm text-white/80 block mb-2">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Email Address"
              className="w-full bg-transparent border-b border-white/50 py-3 text-white placeholder-white/40 outline-none focus:border-white transition-colors mb-6"
            />
            <button className="w-full bg-white text-black rounded-full py-4 font-semibold hover:bg-white/90 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
