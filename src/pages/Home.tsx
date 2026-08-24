const skoolCommunityUrl =
  "https://www.skool.com/sovereign-soul-collective-7085/about";
const heroImage = "/ssc-community-hero.webp";
const heroImageFallback = "/ssc-community-hero.jpg";
const sealImage = "/ssc-circular-seal.webp";

const pillars = [
  {
    title: "Self-inquiry",
    description:
      "Look beneath surface habits and assumptions with grounded reflection.",
  },
  {
    title: "Community",
    description:
      "Share perspective with thoughtful people who value honesty over performance.",
  },
  {
    title: "Practical transformation",
    description:
      "Turn insight into clearer choices, steadier relationships, and daily alignment.",
  },
];

const pathway = [
  {
    step: "01",
    title: "Join the collective",
    description:
      "Enter the private Skool space created for people who sense there is more beneath the surface.",
  },
  {
    step: "02",
    title: "Explore the material",
    description:
      "Move through lessons, reflection prompts, and conversations at a simple, spacious pace.",
  },
  {
    step: "03",
    title: "Apply what resonates",
    description:
      "Bring what you notice back into everyday life with more clarity, authenticity, and intention.",
  },
];

const supportPoints = [
  "For people drawn to consciousness, spirituality, self-awareness, and human potential.",
  "A grounded place to question assumptions and understand subconscious patterns.",
  "Built around reflection, meaningful conversation, and practical integration.",
];

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-amber-300/80">
        {eyebrow}
      </p>
      <h2 className="text-4xl leading-tight text-stone-50 sm:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 max-w-2xl text-lg text-stone-300">{description}</p>
      ) : null}
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-transparent text-stone-100">
      <main>
        <section className="border-b border-white/10">
          <div className="mx-auto grid min-h-screen max-w-6xl items-center gap-12 px-6 py-16 sm:px-8 lg:grid-cols-[minmax(0,1fr)_minmax(320px,540px)] lg:px-10">
            <div className="order-2 max-w-2xl lg:order-1">
              <a
                href="#top"
                className="mb-8 inline-flex items-center gap-4 text-left no-underline"
                aria-label="Sovereign Soul Collective"
              >
                <img
                  src={sealImage}
                  alt="Sovereign Soul Collective circular seal"
                  className="h-16 w-16 rounded-full border border-amber-400/30 object-cover"
                  width="64"
                  height="64"
                  loading="eager"
                  decoding="async"
                />
                <span className="flex flex-col">
                  <span className="text-2xl text-stone-50 sm:text-3xl">
                    Sovereign Soul
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-300/80">
                    Collective
                  </span>
                </span>
              </a>

              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.32em] text-amber-300/80">
                A contemplative space for inner work
              </p>
              <h1
                id="top"
                className="max-w-xl text-5xl leading-none text-stone-50 sm:text-6xl lg:text-7xl"
              >
                Understand the patterns beneath the surface.
              </h1>
              <p className="mt-6 max-w-xl text-lg text-stone-300 sm:text-xl">
                Explore your subconscious patterns, question what no longer
                fits, and make more aligned choices in a thoughtful community
                built for depth rather than noise.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href={skoolCommunityUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-amber-400 px-6 py-3 text-base font-semibold text-stone-950 transition-colors hover:bg-amber-300"
                >
                  Explore the community <span aria-hidden="true">→</span>
                </a>
                <a
                  href="#pathway"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 text-base font-medium text-stone-100 transition-colors hover:border-amber-300/50 hover:text-amber-100"
                >
                  See how it works
                </a>
              </div>

              <p className="mt-5 text-sm text-stone-400">
                Lessons, reflection, and meaningful conversation for people who
                sense there is more to life than surface-level answers.
              </p>
            </div>

            <div className="order-1 lg:order-2">
              <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-stone-900 shadow-[0_24px_80px_rgba(0,0,0,0.32)]">
                <picture>
                  <source srcSet={heroImage} type="image/webp" />
                  <img
                    src={heroImageFallback}
                    alt="A person sitting in reflection above a mountain valley at sunrise"
                    width="1440"
                    height="811"
                    className="aspect-[16/10] h-full w-full object-cover"
                    loading="eager"
                    fetchPriority="high"
                    decoding="async"
                    sizes="(min-width: 1024px) 540px, 100vw"
                  />
                </picture>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-20 sm:px-8 lg:px-10">
          <SectionHeading
            eyebrow="What this is"
            title="A grounded place to explore consciousness, spirituality, and human potential."
            description="Sovereign Soul Collective offers a clear container for people who want to understand themselves more deeply without being pushed toward borrowed beliefs or performative certainty."
          />

          <ul className="mt-10 grid gap-4 text-base text-stone-300 sm:text-lg">
            {supportPoints.map((point) => (
              <li
                key={point}
                className="rounded-3xl border border-white/10 bg-white/5 px-5 py-4"
              >
                {point}
              </li>
            ))}
          </ul>
        </section>

        <section className="border-y border-white/10 bg-black/10">
          <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 lg:px-10">
            <SectionHeading
              eyebrow="Core pillars"
              title="A simple structure that supports honest inner development."
            />

            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {pillars.map((pillar) => (
                <article
                  key={pillar.title}
                  className="rounded-3xl border border-white/10 bg-stone-950/50 p-6"
                >
                  <h3 className="text-3xl text-amber-200">{pillar.title}</h3>
                  <p className="mt-4 text-base text-stone-300 sm:text-lg">
                    {pillar.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="pathway"
          className="mx-auto max-w-6xl px-6 py-20 sm:px-8 lg:px-10"
        >
          <SectionHeading
            eyebrow="Pathway"
            title="A clear three-step path from reflection to lived change."
            description="The experience stays lightweight on purpose: join, explore, and apply what resonates."
          />

          <ol className="mt-10 grid gap-5 lg:grid-cols-3">
            {pathway.map((item) => (
              <li
                key={item.step}
                className="list-none rounded-3xl border border-white/10 bg-white/5 p-6"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-amber-300/80">
                  {item.step}
                </p>
                <h3 className="mt-4 text-3xl text-stone-50">{item.title}</h3>
                <p className="mt-4 text-base text-stone-300 sm:text-lg">
                  {item.description}
                </p>
              </li>
            ))}
          </ol>

          <div className="mt-10 rounded-3xl border border-amber-300/20 bg-amber-300/10 p-6 sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-amber-200/85">
              Start here
            </p>
            <p className="mt-3 max-w-2xl text-lg text-stone-100 sm:text-xl">
              Join the community, take what resonates, and let insight become a
              more honest way of living.
            </p>
            <a
              href={skoolCommunityUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center rounded-full bg-stone-50 px-6 py-3 font-semibold text-stone-950 transition-colors hover:bg-amber-100"
            >
              Join the collective <span aria-hidden="true">→</span>
            </a>
          </div>
        </section>

        <section className="border-y border-white/10 bg-stone-950/40">
          <div className="mx-auto max-w-5xl px-6 py-20 sm:px-8 lg:px-10">
            <SectionHeading
              eyebrow="Trust and resonance"
              title="Created for people who want depth, honesty, and practical integration."
              description="This is not about adopting a new identity. It is about noticing what shapes you, staying curious about what you find, and turning that awareness into everyday alignment."
            />

            <blockquote className="mt-10 max-w-3xl border-l border-amber-300/40 pl-6 text-xl text-stone-200 sm:text-2xl">
              “Come as you are. Bring your questions, your discernment, and your
              willingness to look within.”
            </blockquote>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-6 py-20 text-center sm:px-8 lg:px-10">
          <SectionHeading
            eyebrow="Final invitation"
            title="Make space for the deeper conversation your life is asking for."
            description="If you are ready to explore with more clarity and less noise, the next step is simple."
          />
          <a
            href={skoolCommunityUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-amber-400 px-7 py-3 text-base font-semibold text-stone-950 transition-colors hover:bg-amber-300"
          >
            Explore the community <span aria-hidden="true">→</span>
          </a>
        </section>
      </main>

      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 text-sm text-stone-400 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
          <p>© 2026 Sovereign Soul Collective</p>
          <div className="flex flex-wrap gap-4">
            <a href="#top" className="hover:text-stone-200">
              Top
            </a>
            <a href="#pathway" className="hover:text-stone-200">
              Pathway
            </a>
            <a
              href={skoolCommunityUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-stone-200"
            >
              Community
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
