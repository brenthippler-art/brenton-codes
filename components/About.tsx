import { bioFacts, stack } from "@/lib/content";

export default function About() {
  return (
    <section
      aria-labelledby="about-heading"
      className="mx-auto max-w-[1040px] px-8 py-[72px]"
    >
      <div className="mb-3.5 text-[13px] font-semibold text-indigo">About</div>
      <h2
        id="about-heading"
        className="font-display mb-10 text-[28px] font-semibold"
      >
        Background
      </h2>
      <div className="grid grid-cols-1 gap-14 md:grid-cols-2">
        <div>
          <p className="mb-4 max-w-[52ch] text-base text-ink-soft">
             I&apos;m a frontend developer based in Bowling Green, Kentucky,
            focused on building software that&apos;s fast, accessible, and
            reliable. Most of my work is in Next.js and TypeScript, backed by
            Firebase or MongoDB depending on what the project needs.
          </p>
          <p className="mb-4 max-w-[52ch] text-base text-ink-soft">
            Outside of client work, my wife and I run a small hobby farm, I
            record music under the name Blackout Ink, and sit on the leadership
            team for SOKY Indivisible, a local civic organization.
          </p>
        </div>
        <dl className="flex flex-col gap-3.5">
          {bioFacts.map((fact) => (
            <div
              key={`${fact.k}-${fact.v}`}
              className="flex gap-4 border-b border-line pb-3.5 text-[15px] last:border-b-0 last:pb-0"
            >
              <dt className="w-[110px] shrink-0 text-ink-soft">{fact.k}</dt>
              <dd className="m-0 font-medium">{fact.v}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="mt-16">
        <h3 className="font-display mb-8 text-xl font-semibold">Tech stack</h3>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {stack.map((group) => (
            <div key={group.category}>
              <p className="mb-3 text-[13px] font-semibold text-indigo">
                {group.category}
              </p>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-[3px] border border-line bg-panel px-2.5 py-1 text-[13px] text-ink-soft"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
