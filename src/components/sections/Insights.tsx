"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { insightsSection } from "@/lib/content";
import { insightArticles } from "@/lib/insights";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function Insights() {
  return (
    <section id="insights">
      <div className="shell py-24 md:py-32 lg:py-40">
        <SectionHeader
          index={insightsSection.index}
          label={insightsSection.label}
          heading={insightsSection.heading}
          tagline={insightsSection.tagline}
        />

        <div className="mt-16 grid gap-5 md:grid-cols-3 lg:mt-24">
          {insightArticles.map((article, i) => (
            <Reveal key={article.slug} delay={i * 0.1} className="h-full">
              <Link
                href={`/insights/${article.slug}`}
                className="group block h-full"
                aria-label={`Leer: ${article.title}`}
              >
                <article className="flex h-full flex-col">
                <div className="relative aspect-[3/2] overflow-hidden border border-ink/10 bg-plaster">
                  <Image
                    src={article.featuredImage}
                    alt=""
                    fill
                    sizes="(max-width: 767px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-studio group-hover:scale-[1.04]"
                  />
                </div>

                <div className="mt-5 flex items-center gap-4">
                  <span className="eyebrow text-umber">{article.category}</span>
                  <span className="eyebrow text-umber">{article.date}</span>
                </div>
                <h3 className="mt-3 font-display text-[1.55rem] leading-tight">
                  {article.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-umber">
                  {article.excerpt}
                </p>

                <span className="mt-6 inline-flex items-center gap-2 pt-1 font-sans text-[12px] uppercase tracking-[0.18em] text-ink/70 transition-colors duration-300 group-hover:text-ink">
                  Leer artículo
                  <ArrowRight
                    size={13}
                    strokeWidth={1.5}
                    aria-hidden="true"
                    className="transition-transform duration-300 ease-studio group-hover:translate-x-1"
                  />
                </span>
                </article>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
