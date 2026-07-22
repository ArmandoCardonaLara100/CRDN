import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { MotionShell } from "@/components/layout/MotionShell";
import { Reveal } from "@/components/ui/Reveal";
import {
  getInsightBySlug,
  insightArticles,
  type InsightArticle,
  type InsightBlock,
} from "@/lib/insights";

interface InsightPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return insightArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: InsightPageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getInsightBySlug(slug);
  if (!article) return {};

  return {
    title: article.title,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      images: [article.featuredImage],
    },
  };
}

function imageAlt(article: InsightArticle, src: string): string {
  return article.images.find((image) => image.src === src)?.alt ?? "";
}

function ArticleBlock({ article, block }: { article: InsightArticle; block: InsightBlock }) {
  if (block.type === "heading") {
    if (block.level === 2) {
      return (
        <h2 className="mt-14 font-display text-[clamp(2rem,5vw,3.25rem)] leading-[1.05] md:mt-20">
          {block.text}
        </h2>
      );
    }
    return (
      <h3 className="mt-10 font-display text-[clamp(1.6rem,4vw,2.25rem)] leading-tight md:mt-14">
        {block.text}
      </h3>
    );
  }

  if (block.type === "paragraph") {
    return (
      <p
        className={`mt-5 text-[17px] leading-[1.85] md:text-lg ${
          block.emphasis ? "font-medium text-ink" : "text-ink/80"
        }`}
      >
        {block.text}
      </p>
    );
  }

  if (block.type === "list") {
    return (
      <ul className="mt-6 space-y-3 border-l border-ink/20 pl-6 text-[17px] leading-relaxed text-ink/80 md:pl-8 md:text-lg">
        {block.items.map((item) => (
          <li key={item} className="relative before:absolute before:-left-6 before:content-['—'] md:before:-left-8">
            {item}
          </li>
        ))}
      </ul>
    );
  }

  if (block.type === "callout") {
    return (
      <aside className="my-16 border-y border-ink/15 bg-sand/45 px-6 py-10 md:-mx-12 md:px-12 md:py-14">
        <p className="font-display text-[clamp(1.8rem,4vw,2.65rem)] leading-tight">{block.heading}</p>
        {block.paragraphs.map((paragraph) => (
          <p key={paragraph} className="mt-5 text-[17px] font-medium leading-relaxed text-ink/80 md:text-lg">
            {paragraph}
          </p>
        ))}
      </aside>
    );
  }

  const galleryImages = block.images.filter((src) => src !== article.featuredImage);
  if (galleryImages.length === 0) return null;

  return (
    <div className="my-16 grid gap-5 md:-mx-28 md:my-24 lg:-mx-48">
      {galleryImages.map((src) => (
        <figure key={src} className="overflow-hidden border border-ink/10 bg-plaster">
          <Image
            src={src}
            alt={imageAlt(article, src)}
            width={1408}
            height={768}
            sizes="(max-width: 767px) 100vw, 1100px"
            className="h-auto w-full"
          />
        </figure>
      ))}
    </div>
  );
}

export default async function InsightPage({ params }: InsightPageProps) {
  const { slug } = await params;
  const article = getInsightBySlug(slug);
  if (!article) notFound();

  const articleIndex = insightArticles.findIndex((item) => item.slug === article.slug);
  const previous = insightArticles[(articleIndex - 1 + insightArticles.length) % insightArticles.length];
  const next = insightArticles[(articleIndex + 1) % insightArticles.length];

  return (
    <MotionShell>
      <Header />
      <main id="content" className="pt-20">
        <article>
          <div className="shell pb-16 pt-16 md:pb-24 md:pt-24 lg:pt-32">
            <Reveal>
              <Link
                href="/#insights"
                className="eyebrow inline-flex items-center gap-3 text-umber transition-colors hover:text-ink"
              >
                <ArrowLeft size={14} strokeWidth={1.5} aria-hidden="true" />
                Volver a Insights
              </Link>
              <div className="mt-12 max-w-5xl">
                <div className="flex flex-wrap gap-4">
                  <span className="eyebrow text-umber">{article.category}</span>
                  <span className="eyebrow text-umber">{article.date}</span>
                </div>
                <h1 className="mt-7 font-display text-[clamp(3rem,8vw,6.8rem)] leading-[0.94] tracking-[-0.025em]">
                  {article.title}
                </h1>
                <p className="mt-8 max-w-3xl font-display text-[clamp(1.45rem,3vw,2.15rem)] italic leading-snug text-umber">
                  {article.deck}
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <figure className="shell">
              <div className="overflow-hidden border border-ink/10 bg-plaster">
                <Image
                  src={article.featuredImage}
                  alt={imageAlt(article, article.featuredImage)}
                  width={1408}
                  height={768}
                  sizes="100vw"
                  preload
                  className="h-auto w-full"
                />
              </div>
            </figure>
          </Reveal>

          <div className="shell py-16 md:py-24 lg:py-32">
            <div className="mx-auto max-w-3xl">
              {article.blocks.map((block, index) => (
                <ArticleBlock key={`${block.type}-${index}`} article={article} block={block} />
              ))}
            </div>
          </div>
        </article>

        <nav className="border-y border-ink/15 bg-plaster" aria-label="Navegación entre artículos">
          <div className="shell grid md:grid-cols-2">
            <Link
              href={`/insights/${previous.slug}`}
              className="group border-b border-ink/15 py-10 md:border-b-0 md:border-r md:pr-10"
            >
              <span className="eyebrow flex items-center gap-2 text-umber">
                <ArrowLeft size={13} strokeWidth={1.5} aria-hidden="true" /> Anterior
              </span>
              <span className="mt-4 block max-w-lg font-display text-2xl leading-tight transition-transform duration-300 ease-studio group-hover:-translate-x-1">
                {previous.title}
              </span>
            </Link>
            <Link
              href={`/insights/${next.slug}`}
              className="group py-10 md:pl-10 md:text-right"
            >
              <span className="eyebrow flex items-center gap-2 text-umber md:justify-end">
                Siguiente <ArrowRight size={13} strokeWidth={1.5} aria-hidden="true" />
              </span>
              <span className="mt-4 block font-display text-2xl leading-tight transition-transform duration-300 ease-studio group-hover:translate-x-1">
                {next.title}
              </span>
            </Link>
          </div>
        </nav>
      </main>
      <Footer />
    </MotionShell>
  );
}
