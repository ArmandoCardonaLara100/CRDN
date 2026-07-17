"use client";

import { stats } from "@/lib/content";
import { Counter } from "@/components/ui/Counter";
import { Reveal } from "@/components/ui/Reveal";

export function Stats() {
  return (
    <section aria-label="Studio in numbers" className="bg-night text-bone">
      <div className="shell py-20 md:py-28">
        <Reveal>
          <div className="flex items-center gap-6">
            <span className="eyebrow text-bone/50">CRDN</span>
            <span className="h-px flex-1 bg-bone/15" aria-hidden="true" />
            <span className="eyebrow text-bone/50">In numbers</span>
          </div>
        </Reveal>

        <dl className="mt-14 grid gap-12 sm:grid-cols-3 md:mt-20">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.1}>
              <div className="border-l border-bone/20 pl-7 md:pl-9">
                <dd className="font-display text-[clamp(3.8rem,7vw,6.5rem)] leading-none">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </dd>
                <dt className="eyebrow mt-4 text-bone/60">{stat.label}</dt>
              </div>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
