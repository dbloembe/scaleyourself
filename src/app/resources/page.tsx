import Link from "next/link";

const resources = [
  {
    title: "ADD // ADHD // Neurodivergent Resource List",
    date: "7/20/24",
    excerpt:
      "A growing list of tools, communities, coaches, and researchers specifically for neurodivergent founders — curated from my work with founders and the broader founder community.",
    slug: "add-adhd-neurodivergent-resource-list",
  },
  {
    title: "Crisis Guide",
    date: "7/20/24",
    excerpt:
      "If your cofounder is showing signs of a mental health crisis, it can be terrifying to know what to do. This guide gives you the resources, warning signs to watch for, and steps to take.",
    slug: "crisis-guide",
  },
  {
    title: "Founder Fear and Covid-19",
    date: "3/2/24",
    excerpt:
      "Originally published on March 15, 2020 to offer advice for founders integrating the new reality that early Covid brought us all.",
    slug: "founder-fear-and-covid-19",
  },
  {
    title: "Amy Buechler and Michael Seibel on Having Hard Conversations",
    date: "2/26/24",
    excerpt:
      "In this YC Interview, Amy and Michael talk about founder coaching and use examples from Michael's time working on Justin.tv and Socialcam.",
    slug: "amy-buechler-and-michael-seibel-on-founder-coaching-and-having-hard-conversations",
  },
  {
    title: "Two Mistakes Founders Make When Finding A Coach",
    date: "2/24/24",
    excerpt:
      "Most founders who hire a coach do it at the wrong time or for the wrong reasons. Here are the two mistakes I see over and over — and what to look for instead.",
    slug: "two-mistakes-founders-make-when-finding-a-coach",
  },
  {
    title: "The Difference Between Coaching and Therapy",
    date: "2/24/24",
    excerpt:
      "Coaching and therapy are both valuable — but they're designed to do different things. Here's how I distinguish the two and how to figure out which one you need right now.",
    slug: "the-difference-between-coaching-and-therapy",
  },
  {
    title: "What Happens After You Submit Your Brief",
    date: "2/1/24",
    excerpt:
      "Finding a great coach shouldn't take weeks or drain your energy. How founder-coach matchmaking works when it's personal, fast, and designed for venture-backed founders.",
    slug: "what-happens",
  },
  {
    title: "Reading List",
    date: "11/10/23",
    excerpt:
      "A short list of the books that have inspired immediate, sweeping changes in how my clients see the world — ones they're still referencing years later.",
    slug: "reading-list",
  },
  {
    title: "Glossary of Terms & Concepts",
    date: "11/7/23",
    excerpt:
      "The language of personal growth work can be slippery without shared definitions. This glossary gives you the vocabulary to understand your internal landscape.",
    slug: "glossary",
  },
];

export default function ResourcesPage() {
  return (
    <section className="py-20 md:py-28 px-6 md:px-12">
      <div className="max-w-[800px] mx-auto">
        <h1 className="text-3xl md:text-4xl font-light mb-12">Resources</h1>
        <div className="divide-y divide-gray-200">
          {resources.map((resource) => (
            <Link
              key={resource.slug}
              href={`/resources/${resource.slug}`}
              className="block py-8 group"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-lg font-light mb-2 group-hover:text-magenta transition-colors">
                    {resource.title}
                  </h2>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {resource.excerpt}
                  </p>
                </div>
                <span className="text-xs text-gray-400 flex-shrink-0 mt-1">
                  {resource.date}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
