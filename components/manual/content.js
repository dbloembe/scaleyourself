// Central registry of User Manual pieces, shared by the library grid, the
// featured row, and the essay reader. Content is placeholder for now.

export const FEATURED = [
  { type: "essay", title: "What It Means to Scale Yourself", learn: "The core idea behind everything here: your company can't outgrow you, so growing yourself is the work.", read: "7 min", tag: "Most read" },
  { type: "video", title: "Managing Your Emotions while Fundraising", learn: "Aaron Harris and Amy on holding steady through the raise — for founders heading into a round now.", read: "Video", tag: "New" },
  { type: "essay", title: "Burnout", learn: "Why it happens to founders, and how to come back from it. The piece founders are reaching for most this month.", read: "7 min", tag: "Trending" },
];

export const LIBRARY = [
  // Getting Started / foundational
  {
    type: "essay", title: "Introduction", learn: "Where to begin, and why this manual exists.", challenge: "start", stage: "foundational", read: "4 min",
    body: [
      { type: "p", runs: [
        { t: "The User Manual for Founder Psychology", b: true },
        { t: " was created by me, Amy Buechler - a licensed psychotherapist and YC's first in-house Founder Coach. I've helped thousands of founders grow from idea through IPO - and despite the chaos that every founder feels like they're uniquely experiencing, you'd be surprised how much consistency I hear in their stories. Every founder feels pressure, urgency, anxiety, and self-doubt - until they learn how to find confidence, clarity, ease, trust, and authenticity instead." },
      ] },
      { type: "p", runs: [
        { t: "This Manual is a living record of what I've learned from working with founders: the predictable emotional and relational patterns that arise when pure ambition meets high stakes - and the tools that help you not just survive the intensity, but grow more resilient, grounded, and authentic because of it. It captures those patterns - the real emotional work behind scaling a company - and translates them into practical tools you can use to grow." },
      ] },
      { type: "p", runs: [
        { t: "Building a startup isn't just about building a product - the challenges won't let it be. As your startup scales, it will demand that you scale too. Running a startup is an exercise in " },
        { t: "becoming", i: true },
        { t: " - deciding how to feel, how to think, and who you want to " },
        { t: "be", i: true },
        { t: " in order to overcome the challenges your startup bring you. " },
        { t: "You", b: true, i: true },
        { t: " are the most important creation of your startup.", b: true },
      ] },
      { type: "p", runs: [
        { t: "I hope this guide helps you become a version of yourself that matches the transformational, world-shaking vision you have for your company. My dream is that the founder you become through this journey is infinitely more valuable to the world than however big your company gets." },
      ] },
      { type: "p", runs: [
        { t: "You can read this Manual front to back, or dive into whatever you're wrestling with right now - whether it's " },
        { t: "reactivity", href: "/essay/two-emotional-failure-modes-reactivity-and-paralysis" },
        { t: ", " },
        { t: "burnout", href: "/essay/burnout" },
        { t: ", " },
        { t: "cofounder conflict", href: "/" },
        { t: ", or " },
        { t: "fear of losing momentum", href: "/" },
        { t: ". You can explore by theme, or begin with “" },
        { t: "What It Means to Scale Yourself", href: "/essay/what-it-means-to-scale-yourself" },
        { t: ",” which explains how founders can grow as fast and sustainably as their startups. However you use it, I hope it helps you grow into the founder your startup - and the world - needs most." },
      ] },
    ],
  },
  { type: "essay", title: "Think of Your Self Like a Product", learn: "Treat your own mind like something you can study, debug, and improve.", challenge: "start", stage: "foundational", read: "6 min" },
  { type: "essay", title: "Anatomy", learn: "A map of the inner parts that drive how you lead.", challenge: "start", stage: "foundational", read: "5 min" },

  // Scaling Your Psychology — emotions
  { type: "essay", title: "Two Emotional Failure Modes: Reactivity and Paralysis", learn: "The two ways founders come apart under pressure — and how to spot yours.", challenge: "emotions", stage: "foundational", read: "6 min" },
  { type: "essay", title: "Processing Your Emotions is a Competitive Advantage", learn: "Why the founders who feel their feelings make better calls.", challenge: "emotions", stage: "foundational", read: "7 min" },
  { type: "essay", title: "How to Process Your Emotions", learn: "A practical method for moving through what you feel instead of around it.", challenge: "emotions", stage: "situational", read: "8 min" },
  { type: "essay", title: "Anger", learn: "What your anger is pointing at, and how to use it well.", challenge: "emotions", stage: "situational", read: "5 min" },
  { type: "essay", title: "Anxiety Is a Question You Can Answer", learn: "Treat anxiety as information, then answer what it's asking.", challenge: "emotions", stage: "situational", read: "6 min" },
  { type: "essay", title: "Anxiety: A Functional Analysis", learn: "A closer look at what anxiety is doing for you, and to you.", challenge: "emotions", stage: "situational", read: "9 min" },

  // Burnout
  { type: "essay", title: "Burnout", learn: "Why it happens to founders, and how to come back from it.", challenge: "burnout", stage: "situational", read: "7 min" },
  { type: "essay", title: "Guilt & Burnout", learn: "The guilt that keeps you from resting, examined.", challenge: "burnout", stage: "situational", read: "5 min" },
  { type: "essay", title: "A Red Flag Worth Listening to in the Trough of Sorrow", learn: "One signal in the low moments you shouldn't push past.", challenge: "burnout", stage: "situational", read: "4 min" },

  // Motivation / confidence / drive
  { type: "essay", title: "Motivation", learn: "What to do when the drive that got you here goes quiet.", challenge: "drive", stage: "situational", read: "6 min" },
  { type: "essay", title: "Confidence", learn: "Where real confidence comes from — and where the fake kind fails you.", challenge: "drive", stage: "foundational", read: "6 min" },
  { type: "essay", title: "Confusion to Clarity", learn: "A way through the fog when you can't see the next step.", challenge: "drive", stage: "situational", read: "5 min" },
  { type: "essay", title: "Resentment", learn: "The slow build you can't ignore, and what it's telling you.", challenge: "drive", stage: "situational", read: "5 min" },
  { type: "essay", title: "Growth Inflection", learn: "What changes in you when the company's curve bends.", challenge: "drive", stage: "situational", read: "6 min" },

  // Vision
  { type: "essay", title: "Introducing Vision", learn: "Why vision is a tool you operate, not a poster on the wall.", challenge: "vision", stage: "foundational", read: "5 min" },
  { type: "essay", title: "The Anatomy of Vision", learn: "The parts that make a vision real enough to follow.", challenge: "vision", stage: "situational", read: "7 min" },

  // Cofounder relationship
  { type: "essay", title: "Tough Conversation Starter Pack", learn: "Openers and structure for the talks you've been putting off.", challenge: "cofounder", stage: "situational", read: "6 min" },
  { type: "essay", title: "How to Build Trust", learn: "How trust actually gets built between cofounders — in the small moments.", challenge: "cofounder", stage: "foundational", read: "7 min" },
  { type: "essay", title: "Anxious ♥ Avoidant: Know Your Attachment Style", learn: "How your attachment style shows up in your cofounder relationship.", challenge: "cofounder", stage: "situational", read: "8 min" },
  { type: "essay", title: "Relationship Debt & the Level 3 Conversation", learn: "Clearing the backlog of things left unsaid.", challenge: "cofounder", stage: "situational", read: "6 min" },
  { type: "essay", title: "The Tension Tug of War", learn: "Why you and your cofounder keep pulling against each other.", challenge: "cofounder", stage: "situational", read: "5 min" },
  { type: "essay", title: "The Founder Sync", learn: "A ritual for staying aligned as you both grow.", challenge: "cofounder", stage: "situational", read: "5 min" },

  // Fundraising
  { type: "video", title: "Managing Your Emotions while Fundraising", learn: "Aaron Harris and Amy on holding steady through the raise.", challenge: "fundraising", stage: "situational", read: "Video" },
  { type: "essay", title: "Failure Mode, Success Mode, & God Mode", learn: "A framework for the states you move between while raising.", challenge: "fundraising", stage: "situational", read: "Framework" },
  { type: "video", title: "Conviction & Fundraising", learn: "How conviction reads in the room, and how to find yours.", challenge: "fundraising", stage: "situational", read: "Video" },

  // Manager & leader
  { type: "essay", title: "Time Audit", learn: "See where your hours actually go before you defend them.", challenge: "manager", stage: "situational", read: "5 min" },
  { type: "essay", title: "How to Implement Effective 1:1s", learn: "Make your one-on-ones the meeting that matters.", challenge: "manager", stage: "situational", read: "7 min" },
  { type: "essay", title: "Delegating", learn: "Why letting go is hard, and how to do it anyway.", challenge: "manager", stage: "situational", read: "6 min" },
  { type: "essay", title: "The Three Types of Feedback", learn: "Know which kind you're giving before you give it.", challenge: "manager", stage: "situational", read: "5 min" },
  { type: "essay", title: "Guide to Effective Feedback", learn: "A practical guide to saying the useful thing well.", challenge: "manager", stage: "situational", read: "8 min" },
];

export function slugify(title) {
  return title
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

const ALL = [...FEATURED, ...LIBRARY];

// First match wins (Featured duplicates resolve to the same piece).
export function findPiece(slug) {
  return ALL.find((p) => slugify(p.title) === slug) || null;
}

export function essayHref(piece) {
  return `/essay/${slugify(piece.title)}`;
}
