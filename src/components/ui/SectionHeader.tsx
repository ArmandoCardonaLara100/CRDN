"use client";

import { Reveal } from "./Reveal";

interface SectionHeaderProps {
  index: string;
  label: string;
  heading?: React.ReactNode;
  tagline?: React.ReactNode;
  dark?: boolean;
  className?: string;
  /** Center the heading and tagline (the § index / label rule row is unaffected). */
  centered?: boolean;
  /** "lg" bumps the heading's clamp scale up slightly; "default" preserves the current size. */
  headingSize?: "default" | "lg";
}

/** Drafting-style section index: "§ 04 ———————— Selected work" + heading. */
export function SectionHeader({
  index,
  label,
  heading,
  tagline,
  dark = false,
  className = "",
  centered = false,
  headingSize = "default",
}: SectionHeaderProps) {
  const muted = dark ? "text-bone/60" : "text-umber";
  const rule = dark ? "bg-bone/20" : "bg-ink/15";
  const headingSizeClass =
    headingSize === "lg"
      ? "text-[clamp(2.3rem,4.8vw,4.2rem)]"
      : "text-[clamp(2.1rem,4.4vw,3.8rem)]";
  const alignClass = centered ? "mx-auto text-center" : "";

  return (
    <Reveal className={className}>
      <div className="flex items-center gap-6">
        <span className={`eyebrow shrink-0 ${muted}`}>§ {index}</span>
        <span className={`h-px flex-1 ${rule}`} aria-hidden="true" />
        <span className={`eyebrow shrink-0 ${muted}`}>{label}</span>
      </div>
      {heading && (
        <h2
          className={`mt-10 max-w-3xl text-balance font-display ${headingSizeClass} leading-[1.06] tracking-[-0.01em] ${alignClass}`}
        >
          {heading}
        </h2>
      )}
      {tagline && (
        <p className={`mt-4 max-w-xl text-[15px] leading-relaxed ${muted} ${alignClass}`}>
          {tagline}
        </p>
      )}
    </Reveal>
  );
}
