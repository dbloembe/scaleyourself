import Image from "next/image";
import Link from "next/link";
import TrustLogos from "@/components/TrustLogos";
import Testimonials from "@/components/Testimonials";
import NewsletterSection from "@/components/NewsletterSection";

const whatWorking = [
  {
    title: "COACH ON CALL",
    desc: "This is a function of empathy. I believe you have everything you need to succeed and that our task is to discover, reveal, and apply your existing capability to the challenge you're facing. The path forward begins exactly where you are, and we'll find a step forward for you whether we're starting from your limitation or your strength.",
  },
  {
    title: "CLINICAL SKILL",
    desc: "I bring the depth that comes from clinical training - with an expert hand, with quiet clarity, and with complete trust in the capacity of my founders. It's a combination of skill and respect that founders seldom find, because it doesn't exist at this scale anywhere else.",
  },
  {
    title: "FORENSIC CURIOSITY",
    desc: "Most mentors and advisors tell you what to do. Mine is a relentless experience to deeply inspect. You think and feel and believe what you do because of your life experiences, and we'll work together to understand the patterns that are helping you and the ones that are preventing you from executing at the highest possible level.",
  },
  {
    title: "FINANCIAL ANALYSIS",
    desc: "When you're stuck or making a mistake, I'll surface it. Your ability to scale will come from confronting difficult truths, and your experience with me will show you that difficult truths are the fastest, most efficient catalyst to change.",
  },
  {
    title: "SUCCESS STORIES ACTIVATED",
    desc: "I have heard hundreds of founder's stories at scale - no coach alive has heard as many. So you'll be getting a coach who's pattern-matched the full lifecycle of scaling from 2 to 200+ employees, through both triumphs and their most intimate struggles.",
  },
  {
    title: "FREEDOM & CURIOSITY",
    desc: "I believe that our making choices that protect and enable the greatest possibilities, the best outcomes for you arrive. As we achieve our ambitions together, you'll be making choices in this new way through - without defensiveness, without rigidity, and with complete trust in yourself.",
  },
];

const quoteTestimonials = [
  {
    quote:
      "Amy guided my transition from being the founder of a small team into becoming an effective, compassionate CTO of a globally-distributed enterprise engineering team experiencing hypergrowth.",
    name: "Sasha Klizhentas",
    title: "CTO, Teleport (YC S15)",
  },
  {
    quote:
      "Amy reveals elegant, values-aligned solutions I otherwise would have missed. She's a great partner — we owe a share of SafetyWing's success to Amy's wisdom.",
    name: "Sondre Rasch",
    title: "CEO, SafetyWing (YC W18)",
  },
];

export default function WorkWithAmyPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 md:py-28 px-6 md:px-12 bg-[#111] text-white">
        <div className="max-w-[900px] mx-auto">
          <h1 className="text-3xl md:text-5xl font-light leading-snug mb-6">
            To do something you&apos;ve never done before, you have to{" "}
            <strong>become someone you&apos;ve never been before.</strong>
          </h1>
        </div>
      </section>

      {/* Amy intro */}
      <section className="py-16 px-6 md:px-12 bg-[#111] text-white">
        <div className="max-w-[1100px] mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg mb-4">
              Amy is a psychotherapist who coached{" "}
              <strong>thousands of the world&apos;s best startup founders</strong>{" "}
              at Y Combinator
            </p>
            <Link
              href="/contact"
              className="gradient-btn inline-block px-8 py-3 text-sm mt-4"
            >
              Get in touch
            </Link>
          </div>
          <div className="rounded-2xl overflow-hidden">
            <Image
              src="/images/d141b9382be68c69-AI-Headshot.png"
              alt="Amy Buechler"
              width={500}
              height={500}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Why Amy works with founders */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-[800px] mx-auto">
          <h2 className="text-2xl font-light mb-8">
            Why Amy works with founders
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Amy works with VC-funded founders at growth stage who are experiencing
            the most destabilizing period in a founder&apos;s professional and
            personal life. The founder who was capable of getting the startup to
            this point may not yet be capable of scaling it to the next.
          </p>
          <p className="text-gray-600 leading-relaxed">
            She works best with founders whose companies are built to make the
            world a better, healthier place. She asks a lot of them, and they
            ask a lot of her. Through her work, the Company&apos;s Day 1 through
            acquisition or IPO.
          </p>
        </div>
      </section>

      {/* What working with Amy is like */}
      <section className="py-16 px-6 md:px-12 bg-[#fafafa]">
        <div className="max-w-[800px] mx-auto">
          <h2 className="text-2xl font-light mb-8">
            What working with Amy is like
          </h2>
          <div className="space-y-8">
            {whatWorking.map((item) => (
              <div key={item.title}>
                <h3 className="font-semibold text-sm mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/contact"
              className="gradient-btn inline-block px-10 py-4 text-base"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </section>

      {/* Quotes */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-[900px] mx-auto grid md:grid-cols-2 gap-8">
          {quoteTestimonials.map((t, i) => (
            <blockquote key={i} className="text-center">
              <p className="text-lg leading-relaxed mb-4 italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <footer className="text-xs text-gray-400 uppercase tracking-wider">
                {t.name} — {t.title}
              </footer>
            </blockquote>
          ))}
        </div>
      </section>

      {/* Trust Logos */}
      <TrustLogos />

      {/* Testimonials */}
      <Testimonials />

      {/* Newsletter */}
      <NewsletterSection />
    </>
  );
}
