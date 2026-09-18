import type { Project } from "@/lib/content";

export default function WorkCard({ project }: { project: Project }) {
  const cardClasses =
    "flex h-full flex-col gap-3.5 rounded-md border border-line bg-panel p-7 text-inherit no-underline transition-colors";

  const content = (
    <>
      <span className="w-fit rounded-[3px] bg-indigo-light px-2.5 py-0.5 text-[12.5px] font-semibold text-indigo">
        {project.kind}
      </span>
      <h3 className="m-0 text-[19px] font-semibold">{project.title}</h3>
      <p className="m-0 text-[14.5px] text-ink-soft">{project.description}</p>
      <div className="mt-auto border-t border-line pt-2.5 text-[13px] text-ink-soft">
        {project.stack}
      </div>
    </>
  );

  if (project.url) {
    return (
      <a
        href={project.url}
        target="_blank"
        rel="noreferrer"
        className={`${cardClasses} hover:border-indigo`}
      >
        {content}
      </a>
    );
  }

  return <div className={cardClasses}>{content}</div>;
}
