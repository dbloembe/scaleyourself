import Image from "next/image";
import Link from "next/link";
import TrustLogos from "@/components/TrustLogos";
import Testimonials from "@/components/Testimonials";
import NewsletterSection from "@/components/NewsletterSection";

const popularTopics = [
  {
    title: "Relationship Debt & the Level 3 Conversation",
    excerpt:
      "Like technical debt, relationship debt accumulates when founding teams avoid hard conversations. And like technical debt, it eventually becomes the thing that kills the company.",
    image: "/images/13da77200680553f-Gradient-01.jpg",
    slug: "relationship-debt-and-the-level-3-conversation",
  },
  {
    title: "Tough Conversation Starter Pack",
    excerpt:
      "Cofounder conflict isn't the problem. Avoiding it is. This is a practical starter pack of the most common topics cofounders avoid — and a framework for finally talking about them.",
    image: "/images/509a405d8d601e16-Gradient-03.jpg",
    slug: "tough-conversation-starter-pack",
  },
  {
    title: "Two Emotional Failure Modes: Reactivity and Paralysis",
    excerpt:
      "Founders commonly believe their emotions are a problem because they get habitually stuck in one of two emotional failure modes: reactivity or paralysis. Learn how to overcome both.",
    image: "/images/2edf02b79c317081-Gradient-05.jpg",
    slug: "two-emotional-failure-modes",
  },
  {
    title: "Motivation",
    excerpt:
      "Motivation isn't a mindset — it's a physical experience. Learn to locate it in your body, understand what generates it, and rebuild it when it disappears.",
    image: "/images/7ebf9a2d99d794b8-Gradient-03.jpg",
    slug: "motivation",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden text-white text-center py-32 md:py-44">
        <Image
          src="/images/b04298ba7bedb5e6-TFC_Background9.jpg"
          alt=""
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 max-w-[800px] mx-auto px-6">
          <div className="hero-badge mb-10">
            <span className="text-[#00e2ff] mr-1">&#10022;</span> Trusted by
            2000+ YC Founders
          </div>
          <h1 className="text-5xl md:text-[72px] font-light mb-6 leading-[1.1]">
            Learn to Scale Yourself
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-[650px] mx-auto leading-relaxed font-light">
            Build the emotional, management, and leadership skills you need to
            scale at the speed of your startup
          </p>
          <Link
            href="/find-a-founder-coach"
            className="gradient-btn px-12 py-4 text-base"
          >
            Get Started
          </Link>
        </div>
      </section>

      {/* Gradient divider strip */}
      <div
        className="h-1.5"
        style={{
          background: "linear-gradient(to right, #ff00c8, #1400ff, #00e2ff)",
        }}
      />

      {/* Intro Section */}
      <section className="py-20 px-[6vw]">
        <div className="max-w-[800px] mx-auto text-center">
          <h2 className="text-2xl md:text-[28px] font-light mb-8 leading-snug">
            Coaching and resources for the internal work of building a startup
          </h2>
          <hr className="hr-magenta w-16 mx-auto mb-8" />
          <p className="text-[#666] leading-[1.8] mb-8 text-[15px]">
            Scaling a startup puts relentless pressure on the person running it.
            Scale Yourself gives you the frameworks, tools, and coaching to
            manage that pressure, strengthen your relationships, and lead
            through every stage of growth - built from a decade of working with
            thousands of YC founders.
          </p>
          <p className="text-sm text-[#999]">
            Created by Amy Buechler - licensed psychotherapist and former Y
            Combinator Batch Director
          </p>
        </div>
      </section>

      {/* Two Column - User Manual & Founder Coaching */}
      <section className="py-20 px-[6vw] bg-[#111]">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <h3 className="text-white text-lg">
              The User Manual for Founder Psychology
            </h3>
            <h3 className="text-white text-lg">Founder Coaching</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {/* User Manual */}
            <div className="text-white">
              <div className="card-rounded mb-6 aspect-[4/3]">
                <Image
                  src="/images/4216dff43c58578b-The-Founder-Coach-Gradient-1.jpg"
                  alt="The User Manual"
                  width={600}
                  height={450}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-white/60 text-sm mb-8 leading-[1.8]">
                A library of frameworks and tools built from a decade of
                coaching YC founders - covering everything from processing hard
                emotions to navigating cofounder conflict and leading through
                hypergrowth.
              </p>
              <Link
                href="/the-user-manual"
                className="outline-btn-white px-8 py-3 text-sm"
              >
                Get Started
              </Link>
            </div>

            {/* Founder Coaching */}
            <div className="text-white">
              <div className="card-rounded mb-6 aspect-[4/3]">
                <Image
                  src="/images/6890bd7447eaf826-The-Founder-Coach-Gradient-4.jpg"
                  alt="Founder Coaching"
                  width={600}
                  height={450}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-white/60 text-sm mb-8 leading-[1.8]">
                Get matched with a trusted, vetted founder coach in 3 days. Our
                coaches are ex-founders and operators who&apos;ve made the jump
                to coaching - they understand your stage, your challenges, and
                what it takes to grow through them.
              </p>
              <Link
                href="/find-a-founder-coach"
                className="outline-btn-white px-8 py-3 text-sm"
              >
                Find Your Coach
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Get Started with The User Manual */}
      <section className="py-24 px-[6vw]">
        <div className="max-w-[1100px] mx-auto">
          <h2 className="text-3xl md:text-[40px] font-light leading-tight">
            Get started with The
            <br />
            User Manual
          </h2>

          {/* Featured article */}
          <div className="grid md:grid-cols-2 gap-16 mt-14 items-center">
            <div className="card-rounded aspect-square">
              <Image
                src="/images/873bba30321068dc-Gradient-03.jpg"
                alt="Processing Your Emotions"
                width={500}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-light mb-4 leading-snug">
                Processing Your Emotions is a Competitive Advantage
              </h3>
              <hr className="hr-cyan w-full my-6" />
              <p className="text-[#666] leading-[1.8] text-[15px]">
                Great founders don&apos;t suppress their emotions - they use
                them as data. When they do, founders make better, faster
                decisions, build confidence, move faster and more sustainably,
                and approach tough times in a healthier way.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Topics */}
      <section className="py-16 px-[6vw] bg-[#fafafa]">
        <div className="max-w-[1100px] mx-auto">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-xl font-light">Popular Topics</h2>
            <Link
              href="/the-user-manual"
              className="gradient-btn px-6 py-2.5 text-sm"
            >
              Explore more
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularTopics.map((topic) => (
              <Link
                key={topic.slug}
                href={`/the-user-manual/${topic.slug}`}
                className="group"
              >
                <div className="card-rounded aspect-square mb-4">
                  <Image
                    src={topic.image}
                    alt={topic.title}
                    width={300}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-semibold text-sm mb-2 leading-snug">
                  {topic.title}
                </h3>
                <p className="text-xs text-[#888] leading-relaxed">
                  {topic.excerpt}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <NewsletterSection />

      {/* Trust Logos */}
      <TrustLogos />

      {/* Testimonials */}
      <Testimonials />
    </>
  );
}
