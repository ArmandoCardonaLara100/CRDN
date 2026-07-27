/* eslint-disable @next/next/no-img-element -- Native images preserve the authoritative HTML rendering exactly. */
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteChrome } from "@/components/site/SiteChrome";
import { insightArticles, getInsightBySlug, type InsightArticle, type InsightBlock } from "@/lib/insights";

interface InsightPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return insightArticles.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: InsightPageProps): Promise<Metadata> {
  const article = getInsightBySlug((await params).slug);
  if (!article) return {};
  return { title: article.title, description: article.excerpt, openGraph: { title: article.title, description: article.excerpt, type: "article", images: [article.featuredImage] } };
}

const BackArrow = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M19 12H5M11 18l-6-6 6-6" /></svg>;
const ForwardArrow = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>;

function imageAlt(article: InsightArticle, source: string) {
  return article.images.find((image) => image.src === source)?.alt ?? "";
}

function ArticleBlock({ article, block }: { article: InsightArticle; block: InsightBlock }) {
  if (block.type === "heading") return block.level === 2 ? <h2>{block.text}</h2> : <h3>{block.text}</h3>;
  if (block.type === "paragraph") return <p className={block.emphasis ? "is-emphasis" : undefined}>{block.text}</p>;
  if (block.type === "list") return <ul>{block.items.map((item) => <li key={item}>{item}</li>)}</ul>;
  if (block.type === "callout") return <aside className="insight-callout"><h2>{block.heading}</h2>{block.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</aside>;

  const images = block.images.filter((image) => image !== article.featuredImage);
  return images.length ? <div className="insight-gallery">{images.map((source) => <figure key={source}><img src={source} alt={imageAlt(article, source)} loading="lazy" width="1408" height="768" /></figure>)}</div> : null;
}

export default async function InsightPage({ params }: InsightPageProps) {
  const article = getInsightBySlug((await params).slug);
  if (!article) notFound();

  const currentIndex = insightArticles.findIndex((item) => item.slug === article.slug);
  const previous = insightArticles[(currentIndex - 1 + insightArticles.length) % insightArticles.length];
  const next = insightArticles[(currentIndex + 1) % insightArticles.length];

  return <SiteChrome kind="insights">
    <main id="content" className="insight-article"><article>
      <header className="shell insight-article__head reveal"><Link className="insight-article__back eyebrow" href="/insights"><BackArrow />Volver a Insights</Link><div className="insight-article__meta"><span className="eyebrow">{article.category}</span><span className="eyebrow">{article.date}</span></div><h1 className="insight-article__title">{article.title}</h1><p className="insight-article__deck">{article.deck}</p></header>
      <figure className="shell insight-article__feature reveal"><img src={article.featuredImage} alt={imageAlt(article, article.featuredImage)} width="1408" height="768" /></figure>
      <div className="shell insight-article__content"><div className="insight-prose">{article.blocks.map((block, index) => <ArticleBlock key={`${block.type}-${index}`} article={article} block={block} />)}</div></div>
    </article><nav className="insight-nav" aria-label="Navegación entre artículos"><div className="shell insight-nav__grid"><Link className="insight-nav__link" href={`/insights/${previous.slug}`}><span className="eyebrow insight-nav__label"><BackArrow />Anterior</span><span className="insight-nav__title">{previous.title}</span></Link><Link className="insight-nav__link" href={`/insights/${next.slug}`}><span className="eyebrow insight-nav__label">Siguiente<ForwardArrow /></span><span className="insight-nav__title">{next.title}</span></Link></div></nav>
    </main>
  </SiteChrome>;
}
