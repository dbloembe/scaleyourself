import Link from "next/link";

const categories = [
  {
    name: "Getting Started",
    articles: [
      { title: "Introduction", slug: "introduction" },
      { title: "What It Means to Scale Yourself", slug: "what-it-means-to-scale-yourself" },
      { title: "Think of Your Self Like a Product", slug: "think-of-your-self-like-a-product" },
      { title: "Anatomy", slug: "anatomy" },
    ],
  },
  {
    name: "Scaling Your Psychology",
    articles: [
      { title: "Two Emotional Failure Modes: Reactivity and Paralysis", slug: "two-emotional-failure-modes" },
      { title: "Processing Your Emotions is a Competitive Advantage", slug: "processing-your-emotions-is-a-competitive-advantage" },
      { title: "How to Process Your Emotions", slug: "how-to-process-your-emotions" },
      { title: "Motivation", slug: "motivation" },
      { title: "Anger", slug: "anger" },
      { title: "Confidence", slug: "confidence" },
      { title: "Confusion to Clarity", slug: "confusion-to-clarity" },
      { title: "Resentment", slug: "resentment" },
      { title: "Burnout", slug: "burnout" },
      { title: "Guilt & Burnout", slug: "guilt-and-burnout" },
      { title: "A Red Flag Worth Listening to in the Trough of Sorrow", slug: "a-red-flag-worth-listening-to" },
      { title: "Anxiety Is a Question You Can Answer", slug: "anxiety-is-a-question-you-can-answer" },
      { title: "Growth Inflection", slug: "growth-inflection" },
      { title: "Anxiety: A Functional Analysis", slug: "anxiety-a-functional-analysis" },
    ],
  },
  {
    name: "Operationalizing Vision",
    articles: [
      { title: "Introducing Vision", slug: "introducing-vision" },
      { title: "The Anatomy of Vision", slug: "the-anatomy-of-vision" },
    ],
  },
  {
    name: "Scaling Your Cofounder Relationship",
    articles: [
      { title: "Tough Conversation Starter Pack", slug: "tough-conversation-starter-pack" },
      { title: "How to Build Trust", slug: "how-to-build-trust" },
      { title: "Anxious <3 Avoidant: Know Your Attachment Style", slug: "anxious-avoidant-know-your-attachment-style" },
      { title: "Relationship Debt & the Level 3 Conversation", slug: "relationship-debt-and-the-level-3-conversation" },
      { title: "The Tension Tug of War", slug: "the-tension-tug-of-war" },
      { title: "The Founder Sync", slug: "the-founder-sync" },
    ],
  },
  {
    name: "Fundraising",
    articles: [
      { title: "VIDEO: Managing Your Emotions while Fundraising", slug: "managing-your-emotions-while-fundraising" },
      { title: "Failure Mode, Success Mode, & God Mode", slug: "failure-mode-success-mode-god-mode" },
      { title: "VIDEO: Conviction & Fundraising", slug: "conviction-and-fundraising" },
    ],
  },
  {
    name: "Scaling as a Manager and Leader",
    articles: [
      { title: "Time Audit", slug: "time-audit" },
      { title: "How to Implement Effective 1:1s", slug: "how-to-implement-effective-1-1s" },
      { title: "Delegating", slug: "delegating" },
      { title: "The Three Types of Feedback", slug: "the-three-types-of-feedback" },
      { title: "Guide to Effective Feedback", slug: "guide-to-effective-feedback" },
    ],
  },
  {
    name: "Resources",
    articles: [
      { title: "The Difference Between Coaching and Therapy", slug: "the-difference-between-coaching-and-therapy" },
      { title: "Two Mistakes Founders Make when Finding a Coach", slug: "two-mistakes-founders-make-when-finding-a-coach" },
      { title: "Reading List", slug: "reading-list" },
      { title: "Glossary of Terms & Concepts", slug: "glossary" },
      { title: "ADD // ADHD // Neurodivergence Resource List", slug: "add-adhd-neurodivergent-resource-list" },
      { title: "Crisis Guide", slug: "crisis-guide" },
    ],
  },
  {
    name: "Process Notes",
    nameSubtitle: "Essays inspired by the founders I've coached",
    articles: [
      { title: "Founders' Animal Instincts", slug: "founders-animal-instinct" },
      { title: "Founder Fear & Covid-19", slug: "founder-fear-and-covid-19" },
    ],
  },
];

const tabs = [
  "Getting Started",
  "Scaling Your Psychology",
  "Vision",
  "Scaling Your Cofounder Relationship",
  "Scaling as a Manager and Leader",
  "Browse All",
];

export default function TheUserManualPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 md:py-28 px-6 md:px-12 text-center">
        <div className="max-w-[700px] mx-auto">
          <h1 className="text-4xl md:text-5xl font-light mb-4">
            Content that scales <em>you</em>
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-600 mb-8">
            The User Manual for Founder Psychology
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed mb-10 max-w-[500px] mx-auto">
            Drawn from thousands of hours coaching YC Founders, The User Manual
            for Founder Psychology contains essays and practical frameworks that
            help founders build resilience, trust, and authentic leadership as
            their startups scale.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="#articles"
              className="gradient-btn inline-block px-10 py-4 text-base"
            >
              Start Exploring
            </Link>
            <span className="text-sm text-gray-400">Send to your Cofounder</span>
          </div>
        </div>
      </section>

      {/* Support banner */}
      <section className="py-16 px-6 md:px-12 bg-[#111] text-white text-center">
        <div className="max-w-[700px] mx-auto">
          <p className="text-xl md:text-2xl font-light leading-relaxed mb-8">
            If The User Manual has supported you, you can{" "}
            <strong>support it in return</strong> - and keep it available to
            every founder.
          </p>
          <Link
            href="/support"
            className="outline-btn-white inline-block px-10 py-3 text-base"
          >
            Support
          </Link>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="border-b border-gray-200 px-6 md:px-12">
        <div className="max-w-[1100px] mx-auto flex gap-6 overflow-x-auto py-4 text-sm">
          {tabs.map((tab) => (
            <button
              key={tab}
              className="whitespace-nowrap text-gray-600 hover:text-black transition-colors pb-1 border-b-2 border-transparent hover:border-black"
            >
              {tab}
            </button>
          ))}
        </div>
      </section>

      {/* Articles List */}
      <section id="articles" className="py-16 px-6 md:px-12">
        <div className="max-w-[700px] mx-auto">
          {categories.map((cat) => (
            <div key={cat.name} className="mb-10">
              <h3 className="font-semibold text-base mb-1">{cat.name}</h3>
              {"nameSubtitle" in cat && cat.nameSubtitle && (
                <p className="text-sm text-gray-400 italic mb-3">
                  {cat.nameSubtitle}
                </p>
              )}
              <ul className="space-y-2">
                {cat.articles.map((article) => (
                  <li key={article.slug}>
                    <Link
                      href={`/the-user-manual/${article.slug}`}
                      className="text-sm text-gray-600 hover:text-magenta transition-colors"
                    >
                      {article.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section
        className="py-24 px-6 md:px-12 text-white"
        style={{
          background:
            "linear-gradient(135deg, #000 0%, #1a0033 30%, #1400ff 60%, #00e2ff 100%)",
        }}
      >
        <div className="max-w-[900px] mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-light leading-tight mb-4">
              Get fresh content delivered straight to your inbox.
            </h2>
            <p className="text-white/60 text-sm mt-4">
              You&apos;re growing fast. So is this User Manual. Subscribe for
              practical tools and insights that help you scale - delivered as
              soon as they drop.
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
