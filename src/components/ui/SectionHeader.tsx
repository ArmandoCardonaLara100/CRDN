"use client";

import { Reveal } from "./Reveal";

interface SectionHeaderProps {
  index: string;
  label: string;
  heading?: React.ReactNode;
  tagline?: React.ReactNode;
  dark?: boolean;
  className?: string;
}

/** Drafting-style section index: "§ 04 ———————— Selected work" + heading. */
export function SectionHeader({
  index,
  label,
  heading,
  tagline,
  dark = false,
  className = "",
}: SectionHeaderProps) {
  const muted = dark ? "text-bone/60" : "text-umber";
  const rule = dark ? "bg-bone/20" : "bg-ink/15";

  return (
    <Reveal className={className}>
      <div className="flex items-center gap-6">
        <span className={`eyebrow shrink-0 ${muted}`}>§ {index}</span>
        <span className={`h-px flex-1 ${rule}`} aria-hidden="true" />
        <span className={`eyebrow shrink-0 ${muted}`}>{label}</span>
      </div>
      {heading && (
        <h2 className="mt-10 max-w-3xl text-balance font-display text-[clamp(2.1rem,4.4vw,3.8rem)] leading-[1.06] tracking-[-0.01em]">
          {heading}
        </h2>
      )}
      {tagline && (
        <p className={`mt-4 max-w-xl text-[15px] leading-relaxed ${muted}`}>
          {tagline}
        </p>
      )}
    </Reveal>
  );
}
