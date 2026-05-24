export default function JobsPage() {
  return (
    <section className="py-20 md:py-28 px-6 md:px-12">
      <div className="max-w-[800px] mx-auto">
        <h1 className="text-3xl md:text-4xl font-light leading-snug mb-12">
          We&apos;re optimistic. We&apos;re ambitious. We&apos;re obsessive.
          We&apos;re compassionate. We&apos;re thoughtful. We&apos;re
          courageous. We&apos;re hiring.
        </h1>

        <div className="mb-16">
          <h2 className="text-xl font-light mb-4">Ambition</h2>
          <p className="text-gray-600 leading-relaxed text-sm mb-4">
            Our mission is to heal and transform the people who are creating the
            future. So they can build technology companies that will heal and
            transform the world.
          </p>
          <p className="text-gray-600 leading-relaxed text-sm">
            We do this by building transformational products that are rooted in -
            and therefore enable - courage, compassion, and authenticity. We are
            driven by an unrelenting connection with our trust in the good that
            people are capable of when they&apos;re given the tools,
            encouragement, and space to do what they know is right.
          </p>
        </div>

        <hr className="hr-magenta mb-16" />

        <div className="mb-16">
          <h2 className="text-xl font-light mb-8">Open Roles</h2>

          <div className="space-y-10">
            <div>
              <h3 className="font-semibold mb-2">Cofounder and CTO</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Partner with Amy to build software that supports founders at
                scale and then eats the $9B coaching industry. I&apos;m
                recruiting a YC-funded, full-stack CTO with uncommon empathy,
                passion for personal growth, and experience shipping
                great-feeling, user-facing products.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Illustrator</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                We&apos;re looking for a freelance illustrator who can add
                visual clarity to written content about psychology, emotions,
                relationships, and other topics that are invisible and typically
                felt rather than seen.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-[#fafafa] rounded-2xl p-8">
          <h3 className="font-semibold mb-4">Open Call for Collaboration</h3>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            Do you want to contribute to Scale Yourself&apos;s vision but
            don&apos;t see an open role that suits you?
          </p>
          <p className="text-sm text-gray-600 leading-relaxed">
            We&apos;re always open to collaborating with founders who want to
            build hugely impactful products that enable the personal and
            professional growth of other founders. Email us at{" "}
            <a
              href="mailto:hi@scaleyourself.com"
              className="text-magenta hover:underline"
            >
              hi@scaleyourself.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
