import Image from "next/image";
import type { Project } from "@/lib/content";

export default function WorkCard({ project }: { project: Project }) {
  const isRepo = project.url.includes("github.com");

  return (
    
    <a href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex h-full overflow-hidden rounded-md border border-line bg-panel text-white no-underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo"
    >
      <Image
        src={project.image}
        alt=""
        fill
        sizes="(min-width: 768px) 50vw, 100vw"
        className="object-cover object-top"
      />

      <div aria-hidden="true" className="w-0 shrink-0 pb-[62.5%]" />

      <div className="relative flex min-w-0 flex-1 flex-col gap-3 bg-black/75 p-7 opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100 motion-reduce:transition-none [@media(hover:none)]:opacity-100">
        <span className="w-fit rounded-[3px] bg-indigo-light px-2.5 py-0.5 text-[12.5px] font-semibold text-indigo">
          {project.kind}
        </span>
        <h3 className="m-0 text-[22px] font-semibold">
          {project.title}
        </h3>
        <p className="m-0 text-[15px] leading-relaxed text-white/85">
          {project.description}
        </p>
        <div className="mt-auto flex items-end justify-between gap-4 border-t border-white/25 pt-3 text-[13.5px] text-white/85">
          <span className="min-w-0">{project.stack}</span>
          <span className="shrink-0 font-semibold text-white">
            {isRepo ? "View code" : "Visit site"}
            <span className="sr-only"> (opens in a new tab)</span>
          </span>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/80 to-transparent px-6 pb-5 pt-12 transition-opacity duration-200 group-hover:opacity-0 group-focus-visible:opacity-0 motion-reduce:transition-none [@media(hover:none)]:opacity-0">
        {/* <h3 className="m-0 text-[22px] font-semibold">{project.title}</h3> */}
      </div>
    </a>
  );
}