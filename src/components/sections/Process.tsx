"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll } from "framer-motion";
import { processSection } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function Process() {
  const listRef = useRef<HTMLOListElement>(null);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: listRef,
    offset: ["start 0.75", "end 0.55"],
  });

  return (
    <section id="process" className="bg-plaster">
      <div className="shell py-24 md:py-32 lg:py-40">
        <SectionHeader
          index={processSection.index}
          label={processSection.label}
          heading={processSection.heading}
          tagline={processSection.tagline}
        />

        <ol ref={listRef} className="relative mt-20 lg:mt-28">
          <span
            className="absolute bottom-6 left-[7px] top-6 w-px bg-ink/15"
            aria-hidden="true"
          />
          <motion.span
            className="absolute bottom-6 left-[7px] top-6 w-px origin-top bg-ink"
            style={{ scaleY: reducedMotion ? 1 : scrollYProgress }}
            aria-hidden="true"
          />

          {processSection.steps.map((step, i) => (
            <li key={step.n} className="relative pl-12 md:pl-20">
              <span
                className="absolute left-0 top-[3.05rem] size-[15px] rounded-full border border-ink bg-plaster md:top-[3.55rem]"
                aria-hidden="true"
              />
              <Reveal delay={i * 0.05}>
                <div className="grid gap-3 border-b border-ink/10 py-10 last:border-b-0 md:grid-cols-12 md:gap-6 md:py-12">
                  <p
                    className="font-display text-5xl leading-none text-ink/25 md:col-span-2 md:text-6xl"
                    aria-hidden="true"
                  >
                    {step.n}
                  </p>
                  <div className="md:col-span-4">
                    <h3 className="font-display text-[1.6rem] leading-tight">
                      {step.title}
                    </h3>
                  </div>
                  <p className="max-w-xl text-[15px] leading-relaxed text-umber md:col-span-6">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>

        <Reveal delay={0.1} className="mt-16 lg:mt-20">
          <p className="max-w-2xl border-t border-ink/15 pt-8 text-[15px] leading-relaxed text-umber">
            {processSection.closing}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
