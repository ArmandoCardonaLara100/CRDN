"use client";

import { about } from "@/lib/content";
import { Plate } from "@/components/ui/Plate";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function About() {
  return (
    <section id="about" className="bg-plaster">
      <div className="shell py-24 md:py-32 lg:py-40">
        <SectionHeader
          index={about.index}
          label={about.label}
          heading={
            <>
              {about.headingLead}
              <em>{about.headingEmphasis}</em>
              {about.headingTail}
            </>
          }
        />

        <div className="mt-16 grid gap-14 lg:mt-24 lg:grid-cols-12 lg:gap-10">
          <Reveal className="min-w-0 lg:col-span-4" delay={0.1}>
            <Plate
              plate={about.portrait}
              number="02"
              aspectClass="aspect-[3/4]"
              sizes="(max-width: 1024px) 100vw, 33vw"
            />
          </Reveal>

          <div className="min-w-0 lg:col-span-7 lg:col-start-6">
            <Reveal>
              <p className="text-lg leading-relaxed">{about.bio[0]}</p>
              <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-umber">
                {about.bio[1]}
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <blockquote className="mt-12 border-l-2 border-ink pl-7">
                <p className="max-w-xl font-display text-2xl italic leading-snug md:text-[1.7rem]">
                  “{about.philosophy}”
                </p>
              </blockquote>
            </Reveal>

            <Reveal delay={0.15}>
              <dl className="mt-14 grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-4">
                {about.facts.map((fact) => (
                  <div key={fact.label} className="border-t border-ink/20 pt-4">
                    <dt className="eyebrow text-umber">{fact.label}</dt>
                    <dd className="mt-2 font-display text-2xl">{fact.value}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-14">
                <p className="eyebrow text-umber">Specialties</p>
                <ul className="mt-4">
                  {about.specialties.map((item, i) => (
                    <li
                      key={item}
                      className="flex items-baseline justify-between gap-6 border-t border-ink/15 py-4 last:border-b"
                    >
                      <span className="text-[15px]">{item}</span>
                      <span className="eyebrow text-umber">
                        0{i + 1}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
