import { projects } from "@/lib/content";
import ProjectCarousel from "./ProjectCarousel";

export default function Work() {
  return (
    <section
      aria-labelledby="work-heading"
      className="mx-auto max-w-[1040px] px-8 py-[72px]"
    >
      <div className="mb-3.5 text-[13px] font-semibold text-indigo">
        Selected work
      </div>
      <h2
        id="work-heading"
        className="font-display mb-10 text-[28px] font-semibold"
      >
        What I&apos;ve been building
      </h2>
      <ProjectCarousel projects={projects} />
    </section>
  );
}
