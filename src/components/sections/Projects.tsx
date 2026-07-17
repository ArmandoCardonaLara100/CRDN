"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { projects, projectsSection, type Project } from "@/lib/content";
import { Plate } from "@/components/ui/Plate";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProjectModal } from "./ProjectModal";

/* Editorial rhythm: wide/tall plates alternate across rows of 12 columns. */
const SPANS = [
  { col: "md:col-span-7", aspect: "aspect-[16/10]" },
  { col: "md:col-span-5", aspect: "aspect-[4/5]" },
  { col: "md:col-span-5", aspect: "aspect-[4/5]" },
  { col: "md:col-span-7", aspect: "aspect-[16/10]" },
  { col: "md:col-span-7", aspect: "aspect-[16/10]" },
  { col: "md:col-span-5", aspect: "aspect-[4/5]" },
];

export function Projects() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [open, setOpen] = useState(false);
  const [plateIndex, setPlateIndex] = useState(0);

  const openProject = (project: Project) => {
    setActiveProject(project);
    setPlateIndex(0);
    setOpen(true);
  };

  return (
    <section id="projects">
      <div className="shell py-24 md:py-32 lg:py-40">
        <SectionHeader
          index={projectsSection.index}
          label={projectsSection.label}
          heading={projectsSection.heading}
        />

        <div className="mt-16 grid gap-y-16 md:grid-cols-12 md:gap-x-6 lg:mt-24 lg:gap-y-24">
          {projects.map((project, i) => {
            const span = SPANS[i % SPANS.length];
            return (
              <Reveal
                key={project.id}
                delay={(i % 2) * 0.08}
                className={span.col}
              >
                <button
                  type="button"
                  onClick={() => openProject(project)}
                  aria-haspopup="dialog"
                  aria-label={`Open project: ${project.title}, ${project.location}, ${project.year}`}
                  className="group block w-full cursor-pointer text-left"
                >
                  <Plate
                    plate={project.plates[0]}
                    aspectClass={span.aspect}
                    captioned={false}
                    zoom
                    sizes="(max-width: 768px) 100vw, 55vw"
                  />
                  <div className="mt-5 flex items-baseline justify-between gap-4">
                    <h3 className="font-display text-2xl leading-tight lg:text-[1.7rem]">
                      {project.title}
                    </h3>
                    <ArrowUpRight
                      size={18}
                      strokeWidth={1.5}
                      aria-hidden="true"
                      className="shrink-0 -translate-x-1 translate-y-1 opacity-0 transition-all duration-300 ease-studio group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100"
                    />
                  </div>
                  <p className="eyebrow mt-2.5 flex flex-wrap justify-between gap-x-6 gap-y-1 text-umber">
                    <span>
                      {project.location} · {project.year}
                    </span>
                    <span>{project.category}</span>
                  </p>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-umber">
                    {project.summary}
                  </p>
                </button>
              </Reveal>
            );
          })}
        </div>
      </div>

      <ProjectModal
        project={activeProject}
        open={open}
        onOpenChange={setOpen}
        index={plateIndex}
        onIndexChange={setPlateIndex}
      />
    </section>
  );
}
