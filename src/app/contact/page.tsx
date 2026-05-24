export default function ContactPage() {
  return (
    <section className="py-20 md:py-28 px-6 md:px-12">
      <div className="max-w-[900px] mx-auto grid md:grid-cols-2 gap-16">
        <div>
          <h1 className="text-3xl md:text-4xl font-light mb-6">
            Get in touch
          </h1>
          <p className="text-gray-600 leading-relaxed mb-6 text-sm">
            We support the well-being of founders across the globe however we
            can.
          </p>
          <p className="text-gray-600 leading-relaxed text-sm">
            Get in touch if you&apos;re a founder looking for support, a mental
            health startup looking for advisement, a journalist looking for
            expertise in founder psychology, or a VC looking for guidance as you
            build your fund&apos;s psychological resources for founders - we can
            help.
          </p>
          <p className="mt-6 text-sm">
            <a
              href="mailto:hi@scaleyourself.com"
              className="text-magenta hover:underline"
            >
              hi@scaleyourself.com
            </a>
          </p>
        </div>
        <div>
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-xs text-gray-500 block mb-1">
                  Company Name *
                </label>
                <input
                  type="text"
                  className="w-full border-b border-gray-300 py-2 outline-none focus:border-black transition-colors text-sm"
                />
              </div>
              <div>
                <label className="text-xs text-gray-500 block mb-1">
                  Name *
                </label>
                <input
                  type="text"
                  className="w-full border-b border-gray-300 py-2 outline-none focus:border-black transition-colors text-sm"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-xs text-gray-500 block mb-1">
                  YC Batch
                </label>
                <input
                  type="text"
                  className="w-full border-b border-gray-300 py-2 outline-none focus:border-black transition-colors text-sm"
                />
              </div>
              <div>
                <label className="text-xs text-gray-500 block mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  className="w-full border-b border-gray-300 py-2 outline-none focus:border-black transition-colors text-sm"
                />
              </div>
            </div>
            <div>
              <label className="text-xs text-gray-500 block mb-1">
                How can we help? *
              </label>
              <textarea
                rows={4}
                className="w-full border-b border-gray-300 py-2 outline-none focus:border-black transition-colors text-sm resize-none"
              />
            </div>
            <button className="outline-btn px-8 py-3 text-sm">Submit</button>
          </div>
        </div>
      </div>
    </section>
  );
}
