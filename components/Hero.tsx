import Link from "next/link";
import { facts } from "@/lib/content";

export default function Hero() {
  return (
    <section
      aria-label="Introduction"
      className="mx-auto grid max-w-[1040px] grid-cols-1 items-end gap-12 border-b border-line px-8 pb-16 pt-[88px] md:grid-cols-[1.4fr_1fr]"
    >
      <div>
        <h1 className="font-display mb-5.5 text-[32px] font-semibold leading-[1.18] md:text-[46px]">
          Frontend developer building fast, accessible web apps.
        </h1>
        <p className="mb-7 max-w-[52ch] text-[17.5px] text-ink-soft">
          I build production Next.js and TypeScript applications, and websites for small businesses around south-central Kentucky. Based in Bowling Green.
        </p>
        <div>
          <Link
            href="/work"
            className="mr-3.5 inline-block rounded-[3px] border border-indigo bg-indigo px-[18px] py-2.5 text-sm font-medium text-paper transition-all hover:scale-105 hover:bg-indigo-dark hover:border-indigo-dark hover:shadow-[0_4px_12px_rgba(var(--shadow-accent),0.35)]"
          >
            View work
          </Link>
          <Link
            href="/contact"
            className="inline-block rounded-[3px] border border-ink px-[18px] py-2.5 text-sm font-medium text-ink transition-all hover:scale-105 hover:border-indigo hover:bg-indigo-light hover:text-indigo hover:shadow-[0_4px_12px_rgba(var(--shadow-accent),0.2)]"
          >
            Contact me
          </Link>
        </div>
      </div>
      <div className="flex flex-col gap-4.5 border-t border-line pt-6 md:border-l md:border-t-0 md:pl-8 md:pt-0">
        {facts.map((fact) => (
          <div key={fact.label}>
            <div className="font-display text-[26px] font-semibold text-indigo">
              {fact.num}
            </div>
            <div className="text-[13.5px] text-ink-soft">{fact.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
