import Image from "next/image";
import Link from "next/link";
import TrustLogos from "@/components/TrustLogos";
import Testimonials from "@/components/Testimonials";
import NewsletterSection from "@/components/NewsletterSection";

const pressItems = [
  {
    logo: "/images/02483b56e48c0509-every.png",
    publication: "Every",
    title: "Startup Lessons From Y Combinator's Most Sought-after Executive Coach",
    year: "2024",
  },
  {
    logo: "/images/0a92767b32fd636f-fortune-1.png",
    publication: "Fortune",
    title: "Why Fewer Founder-CEOs run Fortune 500 Companies in 2023",
    year: "2023",
  },
  {
    logo: "/images/1103b2437dbedfe5-fast-company.png",
    publication: "Fast Company",
    title: "Tech Workers Are Showing the Effects of Covid-19-Related Burnout",
    year: "2020",
  },
  {
    logo: "/images/065f2d3670979720-refinery29.png",
    publication: "Refinery29",
    title: "The Dream of the Perfect Female Founder is Dead - But That's Okay",
    year: "2020",
  },
  {
    logo: "/images/55dd25ef3115b03d-ycombinator.png",
    publication: "Y Combinator",
    title: "YC Podcast with Michael Seibel - Founder Coaching & Having Hard Conversations",
    year: "2019",
  },
  {
    logo: "/images/56f694f164cc4178-the-information.png",
    publication: "The Information",
    title: "The Coaches Behind Startup Founders",
    year: "2018",
  },
  {
    logo: "/images/1103b2437dbedfe5-fast-company.png",
    publication: "Fast Company",
    title: "This Silicon Valley Therapist's Tips for Coping with Startup Stress",
    year: "2017",
  },
  {
    logo: "/images/0230a6002730c0ad-cnn-1.png",
    publication: "CNN",
    title: "How Silicon Valley is Dealing with Mental Illness",
    year: "2016",
  },
];

const scaleAreas = [
  {
    title: "Scale Your Psychology",
    content:
      "Amy helps founders build self awareness, emotional intelligence, and a toolbox of skills to manage the intense emotions that come along with running a startup. She'll support you in learning how to deploy emotions in your relationships and strategic decisions when needed. She'll also help clarify your thinking, analyze your options, and develop new cognitive frameworks to overcome all the novel, complex challenges your startup will present you with.",
  },
  {
    title: "Scale Your Relationships",
    content:
      "Amy coaches founders through the transition from IC to manager, to manager of managers, to seasoned exec leading a fully-aligned, quickly-moving, high-performance team. You'll learn how to build trust by communicating honestly and openly with your cofounders, you'll learn management skills that will align your team, and you'll develop an authentic leadership style that will result in an effective and values-aligned c-suite and board.",
  },
  {
    title: "Scale Your Process & Culture",
    content:
      "Deploying the right process at the right time will maximize your leadership and increase efficiency while minimizing thrash in your team. Amy guides founders through creating and deploying culture and process for the first time, and iterating from there as your internal structure grows alongside your product and team.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-[1100px] mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-3xl md:text-4xl font-light leading-snug">
              Amy is a psychotherapist who coached{" "}
              <strong>thousands of the world&apos;s best startup founders</strong> at
              Y Combinator
            </h1>
          </div>
          <div className="rounded-2xl overflow-hidden">
            <Image
              src="/images/d141b9382be68c69-AI-Headshot.png"
              alt="Amy Buechler"
              width={600}
              height={600}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </section>

      <hr className="hr-magenta max-w-[1100px] mx-auto" />

      {/* Bio */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-[800px] mx-auto">
          <p className="text-gray-600 leading-relaxed mb-6">
            I spent nearly five years as Y Combinator&apos;s first Batch
            Director, coaching nearly a thousand early-stage founders through
            every stage of building - the breakthroughs, the crises, and
            everything in between. What surprised me wasn&apos;t the variety of
            what founders faced. It was how consistent it was. The same fears
            before a hard conversation. The same overwhelm when things start
            working. The same pressure, guilt, self-doubt, and hope at every
            stage.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            That consistency told me something: founder psychology is more
            universal than most founders realize. You&apos;re not uniquely
            broken. You&apos;re not doing it wrong. You&apos;re experiencing
            what all founders experience in the process of creating something
            extraordinary - and almost nothing exists to help you make sense of
            it, or to grow into the founder your startup demands.
          </p>
          <p className="text-gray-600 leading-relaxed">
            That&apos;s why I built Scale Yourself.
          </p>
        </div>
      </section>

      {/* About Scale Yourself */}
      <section className="py-16 px-6 md:px-12 bg-[#fafafa]">
        <div className="max-w-[800px] mx-auto grid md:grid-cols-2 gap-8">
          <div>
            <p className="text-gray-600 leading-relaxed">
              Scale Yourself is a home for the emotional, management, and
              leadership skills that startup schools don&apos;t teach - but that
              the best founders in the world have mastered. Whether you&apos;re
              navigating your first team, a cofounder conflict, or the
              loneliness of scaling faster than you ever expected, you&apos;ll
              find something here that meets you where you are.
            </p>
          </div>
          <div>
            <p className="text-gray-600 leading-relaxed">
              Start with The User Manual for Founder Psychology - a free,
              growing library of frameworks and insights drawn from thousands of
              hours of coaching. Or get matched with a founder coach from our
              trusted network of ex-YC founders, operators, and
              psychotherapists. Either way, you don&apos;t have to figure this
              out alone.
            </p>
          </div>
        </div>
      </section>

      {/* Press */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-2xl font-light text-center mb-12">Press</h2>
          <div className="divide-y divide-gray-200">
            {pressItems.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-6 py-5"
              >
                <div className="w-[120px] flex-shrink-0">
                  <Image
                    src={item.logo}
                    alt={item.publication}
                    width={100}
                    height={30}
                    className="max-h-[24px] w-auto object-contain"
                  />
                </div>
                <p className="flex-1 text-sm text-gray-600">{item.title}</p>
                <span className="text-sm text-gray-400 flex-shrink-0">
                  {item.year}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Logos */}
      <TrustLogos />

      {/* Testimonials */}
      <Testimonials />

      {/* Scale in Three Areas */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-[700px] mx-auto text-center mb-12">
          <h2 className="text-3xl font-light">
            Amy empowers founders to scale in three areas
          </h2>
        </div>
        <div className="max-w-[700px] mx-auto divide-y divide-gray-200">
          {scaleAreas.map((area) => (
            <details key={area.title} className="group py-5">
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <span className="text-lg">{area.title}</span>
                <span className="text-2xl text-gray-400 group-open:rotate-45 transition-transform">
                  +
                </span>
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed text-sm">
                {area.content}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* Work with Amy */}
      <section className="py-16 px-6 md:px-12 bg-[#fafafa]">
        <div className="max-w-[1100px] mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-light mb-4">Work with Amy</h2>
            <Link
              href="/contact"
              className="gradient-btn inline-block px-8 py-3 text-sm mt-4"
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

      {/* Newsletter */}
      <NewsletterSection />
    </>
  );
}
