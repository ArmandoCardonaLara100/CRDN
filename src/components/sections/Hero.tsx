"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { hero, studio } from "@/lib/content";
import { drawRule, fadeRise, maskLine, staggerChildren } from "@/lib/motion";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Plate } from "@/components/ui/Plate";

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-svh flex-col">
      <motion.div
        className="shell flex flex-1 flex-col justify-end pb-8 pt-28 md:pt-32"
        variants={staggerChildren(0.15)}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="flex items-baseline justify-between gap-6"
          variants={fadeRise}
        >
          <p className="eyebrow text-umber">{hero.eyebrow}</p>
          <p className="eyebrow hidden text-umber sm:block">{hero.est}</p>
        </motion.div>

        <motion.span
          className="mt-5 block h-px w-full origin-left bg-ink/20"
          variants={drawRule}
          aria-hidden="true"
        />

        <h1 className="mt-10 font-display text-[clamp(2.75rem,12.5vw,5rem)] leading-[0.98] tracking-[-0.02em] md:text-[clamp(5rem,9.5vw,8.5rem)]">
          <span className="block overflow-hidden pb-1">
            <motion.span className="block" variants={maskLine}>
              {hero.headlineLead}
            </motion.span>
          </span>
          <span className="block overflow-hidden pb-2">
            <motion.span className="block" variants={maskLine}>
              <em>{hero.headlineEmphasis}</em>
            </motion.span>
          </span>
        </h1>

        <div className="mt-10 flex flex-col gap-8 md:flex-row md:items-end md:justify-between lg:mt-12">
          <motion.p
            className="max-w-md text-[15px] leading-relaxed text-umber"
            variants={fadeRise}
          >
            {hero.support}
          </motion.p>
          <motion.div
            className="flex shrink-0 flex-wrap items-center gap-x-5 gap-y-3"
            variants={fadeRise}
          >
            <ButtonLink href={hero.primaryCta.href} variant="solid">
              {hero.primaryCta.label}
            </ButtonLink>
            <ButtonLink href={hero.secondaryCta.href} variant="ghost">
              {hero.secondaryCta.label}
            </ButtonLink>
          </motion.div>
        </div>

        <motion.div className="mt-14 lg:mt-16" variants={fadeRise}>
          <Plate
            plate={hero.plate}
            number="01"
            aspectClass="aspect-[16/10] md:aspect-[21/9]"
            sizes="100vw"
          />
        </motion.div>

        <motion.div
          className="mt-12 flex items-center justify-between gap-6 border-t border-ink/15 pt-5"
          variants={fadeRise}
        >
          <p className="eyebrow text-umber">{studio.coordinates}</p>
          <p className="eyebrow hidden text-umber md:block">§ 01 — Practice</p>
          <a
            href="#about"
            className="group flex items-center gap-2.5 py-2"
            aria-label="Scroll to the studio section"
          >
            <span className="eyebrow text-umber transition-colors duration-300 group-hover:text-ink">
              Scroll
            </span>
            <ArrowDown
              size={13}
              strokeWidth={1.5}
              aria-hidden="true"
              className="text-umber transition-all duration-300 group-hover:translate-y-0.5 group-hover:text-ink"
            />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
