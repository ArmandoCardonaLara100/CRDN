/* eslint-disable @next/next/no-img-element -- Native images preserve the authoritative HTML rendering exactly. */
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "@/components/site/SiteChrome";
import { SiteChrome } from "@/components/site/SiteChrome";

export const metadata: Metadata = {
  title: "Proyectos",
  description: "Portafolio de proyectos de retail y diseño comercial de CRDN: tiendas, boutiques y módulos comerciales.",
};

const projects = [
  {
    id: "proyecto-1", index: "Proyecto 01 — Retail", title: "Tienda de Calzado", location: "León, MX", year: "2024", category: "Retail · Calzado", image: "/images/case1-hd.png", alt: "Tienda de calzado diseñada por CRDN", detail: "Tienda de calzado — detalle",
    lightboxAlt: "Tienda de calzado — vista general",
    paragraphs: ["Renovación integral de una tienda de calzado con foco en el recorrido del cliente. Reorganizamos el flujo de circulación, la jerarquía de exhibición y la zona de caja para que el espacio guíe la compra sin fricción.", "La iluminación de realce, la señalización de temporada y una paleta de materiales cálida refuerzan la identidad de la marca y prolongan el tiempo de permanencia en tienda."],
  },
  {
    id: "proyecto-2", index: "Proyecto 02 — Retail", title: "Boutique Premium", location: "Ciudad de México, MX", year: "2023", category: "Retail · Moda", image: "/images/case2-hd.png", alt: "Boutique premium diseñada por CRDN", detail: "Boutique premium — detalle de exhibición",
    lightboxAlt: "Boutique premium — vista general",
    paragraphs: ["Interiorismo de una boutique de calzado premium. La propuesta combina madera cálida, iluminación puntual y una exhibición escenográfica que eleva el producto y comunica el posicionamiento de la marca.", "El recorrido se organiza en torno a un punto focal central, con estaciones de prueba cómodas que invitan a permanecer y facilitan la decisión de compra."],
  },
  {
    id: "proyecto-3", index: "Proyecto 03 — Comercial", title: "Módulo Comercial", location: "Guadalajara, MX", year: "2022", category: "Comercial · Activación", image: "/images/case3-hd.png", alt: "Módulo comercial diseñado por CRDN", detail: "Módulo comercial — detalle",
    lightboxAlt: "Módulo comercial — vista general",
    paragraphs: ["Diseño de un módulo de retail desmontable para activaciones de marca. La estructura de acero y madera permite montarlo, transportarlo y reconfigurarlo en distintas plazas sin perder la identidad de la marca.", "La exhibición perimetral y la iluminación integrada convierten un formato compacto en un punto de venta con presencia y capacidad de contar una historia."],
  },
] as const;

const BackArrow = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M19 12H5M11 18l-6-6 6-6" /></svg>;

export default function ProjectsPage() {
  return <SiteChrome kind="projects" footerNote="Retail, brand & commercial design — diseñamos espacios que trabajan para tu marca desde México, desde 2009.">
    <main id="content">
      <section className="shell page-hero"><div className="reveal"><Link className="back-link" href="/"><BackArrow />Volver al inicio</Link><h1 className="page-hero__title">Proyectos</h1><p className="page-hero__intro">Cada espacio se diseña a partir de la identidad de la marca, el comportamiento del consumidos y los objetivos específicos de cada negocio.</p></div></section>
      {projects.map((project, index) => <article className="section shell project" id={project.id} style={index === 0 ? { paddingTop: "clamp(2rem,4vw,3rem)" } : undefined} key={project.id}>
        <div className="reveal"><p className="eyebrow project__index">{project.index}</p><h2 className="project__title">{project.title}</h2><div className="project__meta"><span className="eyebrow">{project.location}</span><span className="eyebrow">{project.year}</span><span className="eyebrow">{project.category}</span></div></div>
        <div className="project__hero reveal" data-delay="1"><div className="plate__frame ar-wide gallery-item" data-lightbox={project.image} data-alt={project.lightboxAlt}><img src={project.image} alt={project.alt} /></div></div>
        <div className="project__body"><div className="project__desc reveal">{project.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div></div>
        <div className="project__gallery reveal" data-delay="1"><div className="plate__frame ar-tall gallery-item" data-lightbox={project.image} data-alt={project.detail}><img src={project.image} alt={project.detail} /></div><div className="plate__frame img-ph ar-tall"><span className="img-ph__label">Imagen del proyecto</span></div><div className="plate__frame img-ph ar-tall"><span className="img-ph__label">Imagen del proyecto</span></div></div>
      </article>)}
      <section className="section shell" style={{ borderTop: "1px solid rgba(0,0,0,0.1)", textAlign: "center" }}><div className="reveal"><p className="eyebrow" style={{ justifyContent: "center" }}>Más proyectos próximamente</p><h2 className="section-head__title" style={{ margin: "1.5rem auto 0", textAlign: "center" }}>¿Tienes un espacio en mente?</h2><p style={{ margin: "1.25rem auto 2.5rem", maxWidth: "34rem", fontSize: "15px", lineHeight: 1.7, color: "var(--umber)" }}>Cuéntanos sobre tu proyecto y diseñemos juntos un espacio que trabaje para tu marca.</p><Link className="btn btn--solid" href="/#contact" style={{ margin: "0 auto" }}>Iniciar Proyecto <ArrowRight /></Link></div></section>
    </main>
    <div className="lightbox" id="lightbox" aria-hidden="true" role="dialog" aria-modal="true" aria-label="Imagen ampliada"><button className="lightbox__close" type="button" aria-label="Cerrar"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12" /></svg></button><img className="lightbox__img" alt="" /></div>
  </SiteChrome>;
}
