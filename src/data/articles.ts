export interface Article {
  slug: string;
  title: string;
  description: string;
  author: string;
  date: string;
  categories: string[];
  section: "getting-started" | "cofounder" | "psychology" | "vision" | "operations";
}

export const articles: Article[] = [
  {
    slug: "the-three-types-of-feedback",
    title: "The Three Types of Feedback",
    description:
      "Three feedback categories and scripts to memorize for managing performance and behavior.",
    author: "Amy Buechler",
    date: "2024-03-16",
    categories: ["Headcount 0-5", "Headcount 12-25", "Scaling as Manager/Leader", "Scaling Relationships"],
    section: "getting-started",
  },
  {
    slug: "how-to-implement-effective-1-1s",
    title: "How to Implement Effective 1:1s",
    description:
      "Structuring one-on-one meetings before organizational problems emerge.",
    author: "Amy Buechler",
    date: "2024-03-10",
    categories: ["Scaling Process & Culture", "Headcount 12-25", "Headcount 33-80", "Scaling Relationships"],
    section: "getting-started",
  },
  {
    slug: "delegating",
    title: "Delegating",
    description:
      "Knowledge transfer methodology distinguishing between hand-holding and abandonment.",
    author: "Amy Buechler",
    date: "2024-03-09",
    categories: ["Headcount 12-25", "Scaling Manager/Leader", "Scaling Relationships"],
    section: "getting-started",
  },
  {
    slug: "the-founder-sync",
    title: "The Founder Sync",
    description:
      "Weekly check-in structure designed to keep cofounders aligned, reduce relationship debt.",
    author: "Amy Buechler",
    date: "2023-12-31",
    categories: ["Scaling Process & Culture", "Scaling Relationships"],
    section: "cofounder",
  },
  {
    slug: "the-tension-tug-of-war",
    title: "The Tension Tug of War",
    description:
      "Recognizing destructive conflict patterns among founding teams.",
    author: "Amy Buechler",
    date: "2023-12-30",
    categories: ["Scaling Cofounder Relationship", "Scaling Relationships"],
    section: "cofounder",
  },
  {
    slug: "relationship-debt-and-the-level-3-conversation",
    title: "Relationship Debt & the Level 3 Conversation",
    description:
      "How avoiding difficult conversations accumulates like technical debt.",
    author: "Amy Buechler",
    date: "2023-12-29",
    categories: ["Headcount 0-5", "Scaling Manager/Leader", "Scaling Relationships"],
    section: "cofounder",
  },
  {
    slug: "anxious-avoidant-know-your-attachment-style",
    title: "Anxious / Avoidant: Know Your Attachment Style",
    description:
      "Identifying attachment styles as determinants of relationship conflict patterns.",
    author: "Amy Buechler",
    date: "2023-12-28",
    categories: ["Headcount 0-5", "Scaling Cofounder Relationship", "Scaling Relationships"],
    section: "cofounder",
  },
  {
    slug: "how-to-build-trust",
    title: "How to Build Trust",
    description:
      "Trust isn't binary. It's a fluid that builds or depletes in every interaction.",
    author: "Amy Buechler",
    date: "2023-12-27",
    categories: ["Headcount 0-5", "Scaling Manager/Leader", "Scaling Relationships"],
    section: "cofounder",
  },
  {
    slug: "tough-conversation-starter-pack",
    title: "Tough Conversation Starter Pack",
    description:
      "Framework for cofounders to address commonly avoided topics.",
    author: "Amy Buechler",
    date: "2023-12-26",
    categories: ["Headcount 0-5", "Scaling Manager/Leader", "Scaling Relationships"],
    section: "cofounder",
  },
  {
    slug: "guide-to-effective-feedback",
    title: "Guide to Effective Feedback",
    description:
      "Most feedback backfires because it's vague, personal, or poorly timed.",
    author: "Amy Buechler",
    date: "2023-12-08",
    categories: ["Headcount 12-25", "Scaling Manager/Leader", "Scaling Relationships"],
    section: "cofounder",
  },
  {
    slug: "two-emotional-failure-modes-reactivity-and-paralysis",
    title: "Two Emotional Failure Modes: Reactivity and Paralysis",
    description:
      "Overcoming habitual emotional patterns that undermine decision-making.",
    author: "Amy Buechler",
    date: "2021-12-31",
    categories: ["Scaling Your Psychology", "Evergreen"],
    section: "psychology",
  },
  {
    slug: "processing-your-emotions-is-a-competitive-advantage",
    title: "Processing Your Emotions is a Competitive Advantage",
    description:
      "Single-threaded systems aren't resilient. Here's what you're missing.",
    author: "Amy Buechler",
    date: "2021-12-30",
    categories: ["Scaling Your Psychology", "Evergreen", "Headcount 0-5", "Headcount 12-25"],
    section: "psychology",
  },
  {
    slug: "how-to-process-your-emotions",
    title: "How to Process Your Emotions",
    description: "Four-step exercise adapted from Tara Brach's work.",
    author: "Amy Buechler",
    date: "2021-12-29",
    categories: ["Scaling Your Psychology", "Evergreen"],
    section: "psychology",
  },
  {
    slug: "motivation",
    title: "Motivation",
    description:
      "Locating motivation physically and rebuilding it when depleted.",
    author: "Amy Buechler",
    date: "2021-12-28",
    categories: ["Scaling Your Psychology", "Evergreen"],
    section: "psychology",
  },
  {
    slug: "anger",
    title: "Anger",
    description: "Anger is clarity with heat. Most founders lose the clarity.",
    author: "Amy Buechler",
    date: "2021-12-27",
    categories: ["Scaling Your Psychology", "Evergreen"],
    section: "psychology",
  },
  {
    slug: "confidence",
    title: "Confidence",
    description:
      "Built by keeping promises to yourself, not by succeeding.",
    author: "Amy Buechler",
    date: "2021-12-26",
    categories: ["Headcount 0-5", "Scaling Your Psychology"],
    section: "psychology",
  },
  {
    slug: "confusion-to-clarity",
    title: "Confusion to Clarity",
    description:
      "Understanding confusion as a defense mechanism masking uncomfortable clarity.",
    author: "Amy Buechler",
    date: "2021-12-25",
    categories: ["Scaling Your Psychology"],
    section: "psychology",
  },
  {
    slug: "introducing-vision",
    title: "Introducing Vision",
    description:
      "Balancing vision's necessity with its potential to paralyze or cause conflict.",
    author: "Amy Buechler",
    date: "2022-12-31",
    categories: ["Scaling Your Psychology", "Scaling as Leader"],
    section: "vision",
  },
  {
    slug: "the-anatomy-of-vision",
    title: "The Anatomy of Vision",
    description:
      "Adding vision as fourth data source alongside thoughts, emotions, beliefs.",
    author: "Amy Buechler",
    date: "2022-12-30",
    categories: ["Scaling Your Psychology", "Scaling as Leader"],
    section: "vision",
  },
  {
    slug: "time-audit",
    title: "Time Audit",
    description:
      "Step-by-step process for defining quarterly priorities and eliminating others.",
    author: "Amy Buechler",
    date: "2023-12-08",
    categories: ["Headcount 12-25", "Scaling Process & Culture"],
    section: "operations",
  },
];

export const testimonials = [
  {
    quote: "I see my life as existing in two halves: Pre-Amy, and Post-Amy.",
    author: "Michael Seibel",
    title: "Managing Director, Y Combinator",
  },
  {
    quote:
      "Amy reveals elegant, values-aligned solutions I otherwise would have missed. She's a great partner — we owe a share of Safetywing's success to Amy's wisdom.",
    author: "Sondre Rasch",
    title: "CEO, SafetyWing (YC W18)",
  },
  {
    quote:
      "Amy's breadth and depth of experience has been instrumental in helping me scale as a founder. She's a skillful, deliberate partner in my personal and professional growth.",
    author: "Eli Brown",
    title: "CEO, Guilded (YC S17)",
  },
  {
    quote:
      "Amy guided my transition from being the founder of a small team into becoming an effective, compassionate CTO of a globally-distributed enterprise engineering team experiencing hypergrowth.",
    author: "Sasha Klizhentas",
    title: "CTO, Teleport (YC S15)",
  },
  {
    quote:
      "Working with Amy is the single best decision I've made as a founder. Her support gives me clarity, confidence, and calm. And most critically, I've never felt alone on my journey.",
    author: "Tom Brunskill",
    title: "CEO, Forage (YC W19)",
  },
  {
    quote: "YC healed my startup. Amy healed me as a founder.",
    author: "Vrinda Gupta",
    title: "CEO, Sequin (YC S21)",
  },
];
