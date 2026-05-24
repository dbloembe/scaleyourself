export default function NewsletterSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, #000 0%, #1a0033 25%, #1400ff 55%, #00e2ff 85%, #00e2ff 100%)",
        }}
      />
      <div className="relative z-10 py-24 px-[6vw] text-white">
        <div className="max-w-[1000px] mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-light leading-[1.15] mb-6">
              Stay ahead of your startup&apos;s growth.
            </h2>
            <p className="text-white/60 text-sm leading-[1.8]">
              Be the first to hear when Amy releases new content in The User
              Manual, announces workshops and events, and offers practical
              advice to help you scale yourself as your startup grows.
            </p>
          </div>
          <div>
            <label className="text-sm text-white/70 block mb-2">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Email Address"
              className="newsletter-input w-full py-3 mb-8"
            />
            <button className="w-full bg-white text-black rounded-full py-4 font-semibold hover:bg-white/90 transition-colors text-[15px]">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
