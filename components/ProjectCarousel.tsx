"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import type { Project } from "@/lib/content";
import WorkCard from "./WorkCard";

export default function ProjectCarousel({ projects }: { projects: Project[] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start" },
    [
      Autoplay({
        delay: 4000,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    ],
  );
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi],
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="relative mt-2">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="-ml-4 flex">
          {projects.map((project) => (
            <div
              key={project.title}
              className="min-w-0 shrink-0 grow-0 basis-full pl-4 sm:basis-1/2 lg:basis-1/3"
            >
              <WorkCard project={project} />
            </div>
          ))}
        </div>
      </div>

      <button
        type="button"
        onClick={scrollPrev}
        aria-label="Previous project"
        className="absolute left-0 top-0 bottom-8 my-auto h-9 w-9 -translate-x-1/2 rounded-full border border-line bg-panel text-lg text-indigo transition-all hover:scale-110 hover:border-indigo hover:bg-indigo hover:text-paper hover:shadow-[0_4px_12px_rgba(46,62,104,0.3)]"
      >
        ‹
      </button>
      <button
        type="button"
        onClick={scrollNext}
        aria-label="Next project"
        className="absolute right-0 top-0 bottom-8 my-auto h-9 w-9 translate-x-1/2 rounded-full border border-line bg-panel text-lg text-indigo transition-all hover:scale-110 hover:border-indigo hover:bg-indigo hover:text-paper hover:shadow-[0_4px_12px_rgba(46,62,104,0.3)]"
      >
        ›
      </button>

      <div className="mt-6 flex justify-center gap-2">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            type="button"
            aria-label={`Go to project ${index + 1}`}
            onClick={() => scrollTo(index)}
            className={`h-2 w-2 rounded-full transition-colors ${
              index === selectedIndex ? "bg-indigo" : "bg-line"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
