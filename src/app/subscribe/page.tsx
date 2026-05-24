export default function SubscribePage() {
  return (
    <section
      className="min-h-[80vh] flex items-center justify-center px-6 md:px-12 text-white relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #000 0%, #2d004d 25%, #6b00a8 45%, #1400ff 65%, #00e2ff 100%)",
      }}
    >
      <div className="max-w-[600px] mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-light leading-tight mb-6">
          Stay ahead of your startup&apos;s growth.
        </h1>
        <p className="text-white/70 mb-16 leading-relaxed">
          Be the first to hear when Amy releases new content in The User Manual,
          announces workshops and events, and offers practical advice to help
          you scale yourself as your startup grows.
        </p>

        <div className="max-w-[500px] mx-auto">
          <label className="text-sm text-white/80 block mb-2 text-left">
            Email Address
          </label>
          <input
            type="email"
            placeholder="Email Address"
            className="w-full bg-transparent border-b border-white/50 py-3 text-white placeholder-white/40 outline-none focus:border-white transition-colors mb-8"
          />
          <button className="w-full bg-white text-black rounded-full py-4 font-semibold hover:bg-white/90 transition-colors">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
}
