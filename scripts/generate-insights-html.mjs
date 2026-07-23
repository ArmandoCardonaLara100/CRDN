import { writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
import { insightArticles } from "../src/lib/insights.ts";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const arrowRight = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';
const arrowLeft = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M19 12H5M11 18l-6-6 6-6"/></svg>';

function escapeHtml(value) {
  return value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;");
}

function staticImage(src) {
  return `public${src}`;
}

function head(title, description) {
  return `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${escapeHtml(title)} — CRDN</title>
  <meta name="description" content="${escapeHtml(description)}" />
  <link rel="icon" type="image/jpeg" href="public/images/logo.jpeg" />
  <link rel="apple-touch-icon" href="public/images/logo.jpeg" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;500;600&family=Instrument+Serif:ital@0;1&family=IBM+Plex+Mono:wght@400;500&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="assets/site.css?v=5" />
</head>`;
}

function header() {
  return `<header class="header is-scrolled">
  <div class="shell header__inner">
    <a class="brand" href="index.html#home" aria-label="CRDN — inicio"><img class="brand__logo" src="public/images/crdn-wordmark-cropped.png" alt="CRDN" /></a>
    <nav class="nav" aria-label="Principal"><ul class="nav__list">
      <li><a class="nav__link" href="index.html#home">Inicio</a></li><li><a class="nav__link" href="index.html#about">Estudio</a></li><li><a class="nav__link" href="index.html#solutions">Soluciones</a></li><li><a class="nav__link" href="projects.html">Proyectos</a></li><li><a class="nav__link is-active" href="insights.html">Insights</a></li><li><a class="nav__link" href="index.html#contact">Contacto</a></li>
    </ul></nav>
    <div class="header__actions"><a class="header-cta" href="index.html#contact">Iniciar Proyecto</a><button class="menu-toggle" type="button" aria-label="Abrir menú" aria-expanded="false" aria-controls="mobile-menu"><svg class="icon-open" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M3 6h18M3 12h18M3 18h18"/></svg><svg class="icon-close" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg></button></div>
  </div>
  <div class="mobile-menu" id="mobile-menu"><nav class="shell mobile-menu__list" aria-label="Menú móvil"><ul style="list-style:none;margin:0;padding:0;">
    <li class="mobile-menu__item"><a class="mobile-menu__link" href="index.html#home"><span class="eyebrow">01</span><span class="mobile-menu__num">Inicio</span></a></li><li class="mobile-menu__item"><a class="mobile-menu__link" href="index.html#about"><span class="eyebrow">02</span><span class="mobile-menu__num">Estudio</span></a></li><li class="mobile-menu__item"><a class="mobile-menu__link" href="insights.html"><span class="eyebrow">03</span><span class="mobile-menu__num">Insights</span></a></li><li class="mobile-menu__item"><a class="mobile-menu__link" href="projects.html"><span class="eyebrow">04</span><span class="mobile-menu__num">Proyectos</span></a></li><li class="mobile-menu__item"><a class="mobile-menu__link" href="index.html#process"><span class="eyebrow">05</span><span class="mobile-menu__num">Proceso</span></a></li><li class="mobile-menu__item"><a class="mobile-menu__link" href="index.html#contact"><span class="eyebrow">06</span><span class="mobile-menu__num">Contacto</span></a></li>
  </ul></nav><div class="shell mobile-menu__foot"><a class="eyebrow" href="mailto:comercial@crdnarquitectura.com">comercial@crdnarquitectura.com</a><span class="eyebrow">México</span></div></div>
</header>`;
}

function footer() {
  return `<footer class="footer"><div class="shell footer__inner">
  <img class="footer__logo" src="public/images/crdn-wordmark-cropped.png" alt="CRDN" /><p class="footer__note">Retail, brand &amp; commercial design — diseñamos espacios que trabajan para tu marca desde León, Guanajuato, México.</p>
  <ul class="footer__nav"><li><a href="index.html#home">Inicio</a></li><li><a href="index.html#about">Estudio</a></li><li><a href="insights.html">Insights</a></li><li><a href="projects.html">Proyectos</a></li><li><a href="index.html#process">Proceso</a></li><li><a href="index.html#contact">Contacto</a></li></ul>
  <div class="footer__social">
    <a href="https://instagram.com/crdnarquitectura" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg></a>
    <a href="https://wa.me/525542108800" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg></a>
    <a href="mailto:comercial@crdnarquitectura.com" aria-label="Email"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg></a>
  </div>
  <div class="footer__divider" aria-hidden="true"></div><div class="footer__base"><p class="eyebrow" style="color:rgba(250,246,240,0.5);">© <span data-year>2026</span> CRDN. Todos los derechos reservados.</p><button class="footer__top" type="button" aria-label="Volver arriba"><span class="eyebrow">Volver arriba</span><span class="footer__top-ico">↑</span></button></div>
</div></footer><script src="assets/site.js?v=2"></script>`;
}

function renderBlock(article, block) {
  if (block.type === "heading") return `<h${block.level}>${escapeHtml(block.text)}</h${block.level}>`;
  if (block.type === "paragraph") return `<p${block.emphasis ? ' class="is-emphasis"' : ""}>${escapeHtml(block.text)}</p>`;
  if (block.type === "list") return `<ul>${block.items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>`;
  if (block.type === "callout") return `<aside class="insight-callout"><h2>${escapeHtml(block.heading)}</h2>${block.paragraphs.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join("")}</aside>`;
  const images = block.images.filter((src) => src !== article.featuredImage);
  return images.length ? `<div class="insight-gallery">${images.map((src) => { const image = article.images.find((item) => item.src === src); return `<figure><img src="${staticImage(src)}" alt="${escapeHtml(image?.alt ?? "")}" loading="lazy" width="1408" height="768" /></figure>`; }).join("")}</div>` : "";
}

function card(article, index) {
  const alt = article.images.find((image) => image.src === article.featuredImage)?.alt ?? "";
  return `<!-- ARTICLE ${index + 1}: edit image, category, date, title, excerpt and link below. -->
  <a class="article-card reveal" data-delay="${index}" href="${article.staticHref}"><div class="article-card__media"><img src="${staticImage(article.featuredImage)}" alt="${escapeHtml(alt)}" /></div><div class="article-card__meta"><span class="eyebrow">${escapeHtml(article.category)}</span><span class="eyebrow">${escapeHtml(article.date)}</span></div><h2 class="article-card__title">${escapeHtml(article.title)}</h2><p class="article-card__excerpt">${escapeHtml(article.excerpt)}</p><span class="article-card__cta">Leer artículo ${arrowRight}</span></a>`;
}

function insightsIndex() {
  return `${head("Insights", "Artículos de CRDN sobre arquitectura comercial, diseño de retail y visual merchandising.")}<body>${header()}
<main id="content"><section class="shell page-hero"><div class="reveal"><a class="back-link" href="index.html#insights">${arrowLeft} Volver al inicio</a><h1 class="page-hero__title">Insights</h1><p class="insights-index__intro">Ideas sobre espacio, marca y comercio: arquitectura comercial, retail y visual merchandising.</p></div></section>
<section class="section shell" style="padding-top:clamp(2rem,4vw,3rem);"><!-- INSIGHTS INDEX: every card is deliberately kept in plain, editable HTML. --><div class="card-grid card-grid--3 insights-index__grid">${insightArticles.map(card).join("\n")}</div></section></main>
${footer()}</body></html>`;
}

function articlePage(article, index) {
  const previous = insightArticles[(index - 1 + insightArticles.length) % insightArticles.length];
  const next = insightArticles[(index + 1) % insightArticles.length];
  const heroAlt = article.images.find((image) => image.src === article.featuredImage)?.alt ?? "";
  return `${head(article.title, article.excerpt)}<body>${header()}
<main id="content" class="insight-article"><article>
  <!-- ARTICLE CONTENT: edit metadata, title, introduction, image and every content block directly in this file. -->
  <header class="shell insight-article__head reveal"><a class="insight-article__back eyebrow" href="insights.html">${arrowLeft} Volver a Insights</a><div class="insight-article__meta"><span class="eyebrow">${escapeHtml(article.category)}</span><span class="eyebrow">${escapeHtml(article.date)}</span></div><h1 class="insight-article__title">${escapeHtml(article.title)}</h1><p class="insight-article__deck">${escapeHtml(article.deck)}</p></header>
  <figure class="shell insight-article__feature reveal"><img src="${staticImage(article.featuredImage)}" alt="${escapeHtml(heroAlt)}" width="1408" height="768" /></figure>
  <div class="shell insight-article__content"><div class="insight-prose">${article.blocks.map((block) => renderBlock(article, block)).join("\n")}</div></div>
</article><nav class="insight-nav" aria-label="Navegación entre artículos"><div class="shell insight-nav__grid"><a class="insight-nav__link" href="${previous.staticHref}"><span class="eyebrow insight-nav__label">${arrowLeft} Anterior</span><span class="insight-nav__title">${escapeHtml(previous.title)}</span></a><a class="insight-nav__link" href="${next.staticHref}"><span class="eyebrow insight-nav__label">Siguiente ${arrowRight}</span><span class="insight-nav__title">${escapeHtml(next.title)}</span></a></div></nav></main>
${footer()}</body></html>`;
}

await writeFile(resolve(root, "insights.html"), insightsIndex());
await Promise.all(insightArticles.map((article, index) => writeFile(resolve(root, article.staticHref), articlePage(article, index))));
console.log(`Generated insights.html and ${insightArticles.length} article pages.`);
