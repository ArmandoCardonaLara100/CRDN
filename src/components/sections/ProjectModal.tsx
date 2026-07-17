"use client";

import { ArrowRight } from "lucide-react";
import type { Project } from "@/lib/content";
import { Modal } from "@/components/ui/Modal";
import { PlateCarousel } from "@/components/ui/PlateCarousel";

interface ProjectModalProps {
  project: Project | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  index: number;
  onIndexChange: (index: number) => void;
}

export function ProjectModal({
  project,
  open,
  onOpenChange,
  index,
  onIndexChange,
}: ProjectModalProps) {
  if (!project) return null;

  const count = project.plates.length;
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") {
      onIndexChange((index + 1) % count);
    } else if (e.key === "ArrowLeft") {
      onIndexChange((index - 1 + count) % count);
    }
  };

  return (
    <Modal
      open={open}
      onOpenChange={onOpenChange}
      title={`${project.title} — project details`}
      onKeyDown={handleKeyDown}
      contentClassName="inset-0 md:inset-6 lg:inset-10 overflow-hidden bg-bone md:border md:border-ink/15 flex flex-col lg:flex-row"
    >
      <div className="h-[42svh] shrink-0 border-b border-ink/10 lg:h-auto lg:flex-1 lg:border-b-0 lg:border-r">
        <PlateCarousel
          plates={project.plates}
          index={index}
          onIndexChange={onIndexChange}
          className="h-full"
        />
      </div>

      <div className="min-h-0 flex-1 overflow-y-auto lg:w-[26rem] lg:flex-none xl:w-[30rem]">
        <div className="p-7 pt-16 md:p-10 lg:pt-20">
          <p className="eyebrow text-umber">
            Project — {project.category}
          </p>
          <h3 className="mt-4 font-display text-4xl leading-tight">
            {project.title}
          </h3>
          <p className="eyebrow mt-3 text-umber">
            {project.location} · {project.year}
          </p>

          <div className="mt-8 space-y-5">
            {project.description.map((paragraph, i) => (
              <p key={i} className="text-[15px] leading-relaxed text-ink/80">
                {paragraph}
              </p>
            ))}
          </div>

          <dl className="mt-10">
            {project.facts.map((fact) => (
              <div
                key={fact.label}
                className="flex items-baseline justify-between gap-6 border-t border-ink/15 py-3.5 last:border-b"
              >
                <dt className="eyebrow text-umber">{fact.label}</dt>
                <dd className="text-right text-sm">{fact.value}</dd>
              </div>
            ))}
          </dl>

          <a
            href="#contact"
            onClick={() => onOpenChange(false)}
            className="group mt-10 inline-flex items-center gap-3 font-sans text-[12px] uppercase tracking-[0.18em] text-ink/70 transition-colors duration-300 hover:text-ink"
          >
            Discuss a similar project
            <ArrowRight
              size={13}
              strokeWidth={1.5}
              aria-hidden="true"
              className="transition-transform duration-300 ease-studio group-hover:translate-x-1"
            />
          </a>
        </div>
      </div>
    </Modal>
  );
}
