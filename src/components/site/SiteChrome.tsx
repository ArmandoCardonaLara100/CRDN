/* eslint-disable @next/next/no-img-element -- Native images preserve the authoritative HTML rendering exactly. */
import Link from "next/link";
import type { ReactNode } from "react";
import { SiteEffects } from "./SiteEffects";

type PageKind = "home" | "projects" | "insights";

const ArrowRight = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
);

const ArrowUp = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 19V5M6 11l6-6 6 6" /></svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
);

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" /></svg>
);

const MailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
);

function homeHref(kind: PageKind, section: string) {
  return kind === "home" ? `#${section}` : `/#${section}`;
}

function Header({ kind }: { kind: PageKind }) {
  const home = homeHref(kind, "home");
  const desktopNav = [
    ["Inicio", home, "home"],
    ["Estudio", homeHref(kind, "about"), "about"],
    ["Soluciones", homeHref(kind, "solutions"), "solutions"],
    ["Proyectos", "/projects", "projects"],
    ["Insights", "/insights", "insights"],
    ["Contacto", homeHref(kind, "contact"), "contact"],
  ] as const;
  const mobileNav = kind === "insights"
    ? [
        ["01", "Inicio", home], ["02", "Estudio", homeHref(kind, "about")], ["03", "Insights", "/insights"],
        ["04", "Proyectos", "/projects"], ["05", "Proceso", homeHref(kind, "process")], ["06", "Contacto", homeHref(kind, "contact")],
      ]
    : [
        ["01", "Inicio", home], ["02", "Estudio", homeHref(kind, "about")], ["03", "Soluciones", homeHref(kind, "solutions")],
        ["04", "Proyectos", "/projects"], ["05", "Insights", "/insights"], ["06", "Contacto", homeHref(kind, "contact")],
      ];

  return (
    <header className={`header${kind === "home" ? "" : " is-scrolled header--fixed"}`}>
      <div className="shell header__inner">
        <Link className="brand" href={home} aria-label="CRDN — inicio"><img className="brand__logo" src="/images/crdn-wordmark-cropped.png" alt="CRDN" /></Link>
        <nav className="nav" aria-label="Principal"><ul className="nav__list">
          {desktopNav.map(([label, href, id]) => <li key={id}><Link className={`nav__link${(kind === "home" && id === "home") || kind === id ? " is-active" : ""}`} data-spy={kind === "home" ? id : undefined} href={href}>{label}</Link></li>)}
        </ul></nav>
        <div className="header__actions">
          <Link className="header-cta" href={homeHref(kind, "contact")}>Iniciar Proyecto</Link>
          <button className="menu-toggle" type="button" aria-label="Abrir menú" aria-expanded="false" aria-controls="mobile-menu">
            <svg className="icon-open" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M3 6h18M3 12h18M3 18h18" /></svg>
            <svg className="icon-close" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M18 6 6 18M6 6l12 12" /></svg>
          </button>
        </div>
      </div>
      <div className="mobile-menu" id="mobile-menu">
        <nav className="shell mobile-menu__list" aria-label="Menú móvil"><ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
          {mobileNav.map(([number, label, href]) => <li className="mobile-menu__item" key={label}><Link className="mobile-menu__link" href={href}><span className="eyebrow">{number}</span><span className="mobile-menu__num">{label}</span></Link></li>)}
        </ul></nav>
        <div className="shell mobile-menu__foot"><a className="eyebrow" href="mailto:comercial@crdnarquitectura.com">comercial@crdnarquitectura.com</a><span className="eyebrow">México</span></div>
      </div>
    </header>
  );
}

function Footer({ note }: { note?: string }) {
  const footerNote = note ?? "Retail, brand & commercial design — diseñamos espacios que trabajan para tu marca desde León, Guanajuato, México.";
  return (
    <footer className="footer"><div className="shell footer__inner">
      <img className="footer__logo" src="/images/crdn-wordmark-cropped.png" alt="CRDN" />
      <p className="footer__note">{footerNote}</p>
      <ul className="footer__nav"><li><Link href="/#home">Inicio</Link></li><li><Link href="/#about">Estudio</Link></li><li><Link href="/insights">Insights</Link></li><li><Link href="/projects">Proyectos</Link></li><li><Link href="/#process">Proceso</Link></li><li><Link href="/#contact">Contacto</Link></li></ul>
      <div className="footer__social">
        <a href="https://instagram.com/crdnarquitectura" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><InstagramIcon /></a>
        <a href="https://wa.me/525542108800" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><WhatsAppIcon /></a>
        <a href="mailto:comercial@crdnarquitectura.com" aria-label="Email"><MailIcon /></a>
      </div>
      <div className="footer__divider" aria-hidden="true" />
      <div className="footer__base"><p className="eyebrow" style={{ color: "rgba(250,246,240,0.5)" }}>© <span data-year>2026</span> CRDN. Todos los derechos reservados.</p><button className="footer__top" type="button" aria-label="Volver arriba"><span className="eyebrow">Volver arriba</span><span className="footer__top-ico"><ArrowUp /></span></button></div>
    </div></footer>
  );
}

export function SiteChrome({ children, kind, footerNote }: { children: ReactNode; kind: PageKind; footerNote?: string }) {
  return <><SiteEffects /><Header kind={kind} />{children}<Footer note={footerNote} /></>;
}

export { ArrowRight, ArrowUp, InstagramIcon, WhatsAppIcon, MailIcon };
