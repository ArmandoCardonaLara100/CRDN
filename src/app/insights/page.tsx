import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { MotionShell } from "@/components/layout/MotionShell";
import { Reveal } from "@/components/ui/Reveal";
import { insightArticles } from "@/lib/insights";

export const metadata: Metadata = {
  title: "Insights",
  description: "Artículos de CRDN sobre arquitectura comercial, diseño de retail y visual merchandising.",
};

export default function InsightsIndexPage() {
  return (
    <MotionShell>
      <Header />
      <main id="content" className="pt-20">
        <section className="shell py-16 md:py-24 lg:py-32">
          <Reveal>
            <Link href="/#insights" className="eyebrow inline-flex items-center gap-3 text-umber">
              <ArrowLeft size={14} strokeWidth={1.5} aria-hidden="true" /> Volver al inicio
            </Link>
            <h1 className="mt-10 font-display text-[clamp(4rem,10vw,8rem)] leading-none">Insights</h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-umber">
              Ideas sobre espacio, marca y comercio: arquitectura comercial, retail y visual merchandising.
            </p>
          </Reveal>

          <div className="mt-16 grid gap-12 md:grid-cols-3 lg:mt-24">
            {insightArticles.map((article, index) => (
              <Reveal key={article.slug} delay={index * 0.08} className="h-full">
                <Link
                  href={`/insights/${article.slug}`}
                  className="group block h-full"
                  aria-label={`Leer: ${article.title}`}
                >
                  <article className="flex h-full flex-col">
                  <div className="relative aspect-[3/2] overflow-hidden border border-ink/10">
                    <Image
                      src={article.featuredImage}
                      alt=""
                      fill
                      sizes="(max-width: 767px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 ease-studio group-hover:scale-[1.04]"
                    />
                  </div>
                  <p className="eyebrow mt-5 text-umber">{article.category} · {article.date}</p>
                  <h2 className="mt-3 font-display text-[1.8rem] leading-tight">{article.title}</h2>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-umber">{article.excerpt}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em]">
                    Leer artículo <ArrowRight size={13} strokeWidth={1.5} aria-hidden="true" />
                  </span>
                  </article>
                </Link>
              </Reveal>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </MotionShell>
  );
}
