/* eslint-disable @next/next/no-img-element -- Native images preserve the authoritative HTML rendering exactly. */
import type { Metadata } from "next";
import Link from "next/link";
import { insightArticles } from "@/lib/insights";
import { ArrowRight } from "@/components/site/SiteChrome";
import { SiteChrome } from "@/components/site/SiteChrome";

export const metadata: Metadata = {
  title: "Insights",
  description: "Artículos de CRDN sobre arquitectura comercial, diseño de retail y visual merchandising.",
};

const BackArrow = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M19 12H5M11 18l-6-6 6-6" /></svg>;

export default function InsightsIndexPage() {
  return <SiteChrome kind="insights">
    <main id="content" className="insights-index">
      <section className="shell page-hero"><div className="reveal"><Link className="back-link" href="/#insights"><BackArrow />Volver al inicio</Link><h1 className="page-hero__title">Insights</h1><p className="insights-index__intro">Ideas sobre espacio, marca y comercio: arquitectura comercial, retail y visual merchandising.</p></div></section>
      <section className="section shell" style={{ paddingTop: "clamp(2rem,4vw,3rem)" }}><div className="card-grid card-grid--4 insights-index__grid">{insightArticles.map((article, index) => <Link className="article-card reveal" data-delay={index} href={`/insights/${article.slug}`} key={article.slug}><div className="article-card__media"><img src={article.featuredImage} alt={article.images.find((image) => image.src === article.featuredImage)?.alt ?? ""} /></div><div className="article-card__meta"><span className="eyebrow">{article.category}</span><span className="eyebrow">{article.date}</span></div><h2 className="article-card__title">{article.title}</h2><p className="article-card__excerpt">{article.excerpt}</p><span className="article-card__cta">Leer artículo <ArrowRight /></span></Link>)}</div></section>
    </main>
  </SiteChrome>;
}
