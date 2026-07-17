"use client";

import { ArrowRight, Armchair, Building2, Home } from "lucide-react";
import { services } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";

const ICONS: Record<string, typeof Home> = {
  residential: Home,
  commercial: Building2,
  interiors: Armchair,
};

export function Services() {
  return (
    <section id="services">
      <div className="shell py-24 md:py-32 lg:py-40">
        <SectionHeader
          index={services.index}
          label={services.label}
          heading={services.heading}
        />

        <div className="mt-16 grid gap-5 md:grid-cols-3 lg:mt-24">
          {services.items.map((service, i) => {
            const Icon = ICONS[service.key];
            return (
              <Reveal key={service.key} delay={i * 0.1} className="h-full">
                <article className="group flex h-full flex-col border border-ink/10 bg-bone p-8 transition-colors duration-500 ease-studio hover:bg-sand lg:p-10">
                  <div className="flex items-center justify-between">
                    <span className="flex size-12 items-center justify-center rounded-full border border-ink/20 transition-colors duration-500 ease-studio group-hover:border-ink group-hover:bg-ink group-hover:text-bone">
                      <Icon size={20} strokeWidth={1.25} aria-hidden="true" />
                    </span>
                    <span className="eyebrow text-umber">{service.tag}</span>
                  </div>

                  <h3 className="mt-20 font-display text-[1.65rem] leading-tight lg:mt-24">
                    {service.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-umber">
                    {service.description}
                  </p>

                  <a
                    href="#contact"
                    className="mt-10 inline-flex items-center gap-2 pt-4 font-sans text-[12px] uppercase tracking-[0.18em] text-ink/70 transition-colors duration-300 hover:text-ink"
                  >
                    Enquire
                    <ArrowRight
                      size={13}
                      strokeWidth={1.5}
                      aria-hidden="true"
                      className="transition-transform duration-300 ease-studio group-hover:translate-x-1"
                    />
                  </a>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
