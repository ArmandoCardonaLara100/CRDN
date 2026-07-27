"use client";

import { useState } from "react";
import { testimonials, testimonialsSection, type Testimonial } from "@/lib/content";
import { Modal } from "@/components/ui/Modal";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";

const CLAMP_THRESHOLD = 320;

export function Testimonials() {
  const [selected, setSelected] = useState<Testimonial | null>(null);
  const [open, setOpen] = useState(false);

  const openTestimonial = (t: Testimonial) => {
    setSelected(t);
    setOpen(true);
  };

  return (
    <section id="testimonials">
      <div className="shell py-24 md:py-32 lg:py-40">
        <SectionHeader
          index={testimonialsSection.index}
          label={testimonialsSection.label}
          heading={testimonialsSection.heading}
          tagline={
            <>
              {testimonialsSection.tagline}
              <br />
              {testimonialsSection.taglineSecondary}
            </>
          }
          centered
          headingSize="lg"
        />

        <div className="mt-16 grid gap-5 md:grid-cols-3 lg:mt-24">
          {testimonials.map((t, i) => {
            const isLong = t.quote.length > CLAMP_THRESHOLD;
            const showMore = isLong || i === 0;
            return (
              <Reveal key={t.role} delay={i * 0.1} className="h-full">
                <figure className="flex h-full flex-col bg-plaster p-8 lg:p-10">
                  <figcaption className="eyebrow !text-sm !tracking-[0.14em] text-center text-ink md:!text-base">
                    {t.role}
                  </figcaption>
                  <blockquote className="mt-6 flex-1">
                    <p className="line-clamp-[9] font-display text-[1.35rem] leading-[1.4]">
                      “{t.quote}”
                    </p>
                  </blockquote>
                  <div className="mt-8 flex items-baseline justify-between gap-4 border-t border-ink/15 pt-5">
                    <p className="text-sm font-medium">{t.name}</p>
                    {showMore && (
                      <button
                        type="button"
                        onClick={() => openTestimonial(t)}
                        aria-haspopup="dialog"
                        aria-label={`Read more about ${t.name || t.role}`}
                        className="eyebrow cursor-pointer text-umber underline decoration-ink/30 underline-offset-4 transition-colors duration-300 hover:text-ink hover:decoration-ink"
                      >
                        Leer más
                      </button>
                    )}
                  </div>
                </figure>
              </Reveal>
            );
          })}
        </div>
      </div>

      <Modal
        open={open}
        onOpenChange={setOpen}
        title={selected ? selected.name || selected.role : "Solución"}
        contentClassName="inset-x-4 top-1/2 -translate-y-1/2 md:inset-x-auto md:left-1/2 md:-translate-x-1/2 md:w-full md:max-w-2xl max-h-[85svh] overflow-y-auto bg-bone border border-ink/15"
      >
        {selected && (
          <figure className="p-8 pt-16 md:p-14 md:pt-16">
            <figcaption className="eyebrow !text-sm !tracking-[0.14em] text-center text-ink md:!text-base">
              {selected.role}
            </figcaption>
            <blockquote className="mt-6">
              <p className="font-display text-2xl leading-[1.45]">
                “{selected.quote}”
              </p>
            </blockquote>
            {selected.name && (
              <p className="mt-8 border-t border-ink/15 pt-5 text-sm font-medium">
                {selected.name}
              </p>
            )}
          </figure>
        )}
      </Modal>
    </section>
  );
}
