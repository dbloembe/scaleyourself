"use client";

import Image from "next/image";
import { useState } from "react";

const testimonials = [
  {
    quote:
      "I see my life as existing in two halves: Pre-Amy, and Post-Amy.",
    name: "Michael Seibel",
    title: "Managing Director, Y Combinator",
    image: "/images/6adf098b2c38a365-Michael.jpeg",
  },
  {
    quote:
      "Amy reveals elegant, values-aligned solutions I otherwise would have missed. She's a great partner — we owe a share of SafetyWing's success to Amy's wisdom.",
    name: "Sondre Rasch",
    title: "CEO, SafetyWing (YC W18)",
    image: null,
  },
  {
    quote:
      "Amy guided my transition from being the founder of a small team into becoming an effective, compassionate CTO of a globally-distributed enterprise engineering team experiencing hypergrowth.",
    name: "Sasha Klizhentas",
    title: "CTO, Teleport (YC S15)",
    image: null,
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const t = testimonials[active];

  return (
    <section className="py-20 px-6 md:px-12 bg-white">
      <div className="max-w-[800px] mx-auto text-center">
        {t.image && (
          <div className="w-40 h-40 mx-auto mb-8 rounded-full overflow-hidden">
            <Image
              src={t.image}
              alt={t.name}
              width={160}
              height={160}
              className="w-full h-full object-cover"
            />
          </div>
        )}
        <blockquote className="text-2xl md:text-3xl mb-6 leading-snug">
          &ldquo;{t.quote}&rdquo;
        </blockquote>
        <p className="text-sm text-gray-500 uppercase tracking-wider">
          {t.name} — {t.title}
        </p>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`w-3 h-3 rounded-full transition-colors ${
                i === active ? "bg-black" : "bg-gray-300"
              }`}
              aria-label={`Testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
