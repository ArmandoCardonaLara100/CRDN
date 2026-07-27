"use client";

import { useEffect } from "react";

/**
 * Client-side behaviour matching the HTML site's small vanilla interaction
 * layer: reveal-on-scroll, header state, counters, the mobile menu, back to
 * top, and the Projects gallery lightbox.
 */
export function SiteEffects() {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const header = document.querySelector<HTMLElement>(".header");
    const processList = document.querySelector<HTMLElement>(".process__list");
    const spine = document.querySelector<HTMLElement>(".process__spine");
    const menuToggle = document.querySelector<HTMLButtonElement>(".menu-toggle");
    const mobileMenu = document.getElementById("mobile-menu");
    const toTop = document.querySelector<HTMLButtonElement>(".footer__top");
    const lightbox = document.getElementById("lightbox");
    const lightboxImage = lightbox?.querySelector<HTMLImageElement>(".lightbox__img");
    const lightboxClose = lightbox?.querySelector<HTMLButtonElement>(".lightbox__close");

    const onScroll = () => {
      header?.classList.toggle("is-scrolled", window.scrollY > 16 || header.classList.contains("header--fixed"));
      if (!spine || !processList || reduceMotion) return;
      const rect = processList.getBoundingClientRect();
      const total = rect.height + window.innerHeight * 0.2;
      const progress = (window.innerHeight * 0.75 - rect.top) / total;
      spine.style.setProperty("--spine", String(Math.max(0, Math.min(1, progress))));
    };

    const closeMenu = () => {
      mobileMenu?.classList.remove("is-open");
      header?.classList.remove("is-menu-open");
      menuToggle?.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
    };

    const toggleMenu = () => {
      if (!mobileMenu) return;
      const open = mobileMenu.classList.toggle("is-open");
      header?.classList.toggle("is-menu-open", open);
      menuToggle?.setAttribute("aria-expanded", String(open));
      document.body.style.overflow = open ? "hidden" : "";
    };

    const hideLightbox = () => {
      lightbox?.classList.remove("is-open");
      lightbox?.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
    };

    const onLightboxClick = (event: MouseEvent) => {
      if (event.target === lightbox) hideLightbox();
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      if (mobileMenu?.classList.contains("is-open")) closeMenu();
      if (lightbox?.classList.contains("is-open")) hideLightbox();
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("keydown", onKeyDown);
    menuToggle?.addEventListener("click", toggleMenu);
    mobileMenu?.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
    toTop?.addEventListener("click", () => window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" }));
    lightboxClose?.addEventListener("click", hideLightbox);
    lightbox?.addEventListener("click", onLightboxClick);

    const galleryItems = Array.from(document.querySelectorAll<HTMLElement>("[data-lightbox]"));
    const openHandlers = new Map<HTMLElement, () => void>();
    galleryItems.forEach((item) => {
      const open = () => {
        if (!lightbox || !lightboxImage) return;
        lightboxImage.src = item.dataset.lightbox ?? "";
        lightboxImage.alt = item.dataset.alt ?? "";
        lightbox.classList.add("is-open");
        lightbox.setAttribute("aria-hidden", "false");
        document.body.style.overflow = "hidden";
        lightboxClose?.focus();
      };
      openHandlers.set(item, open);
      item.addEventListener("click", open);
    });

    const counters = Array.from(document.querySelectorAll<HTMLElement>("[data-count]"));
    const runCounter = (element: HTMLElement) => {
      const target = Number.parseFloat(element.dataset.count ?? "0") || 0;
      const suffix = element.dataset.suffix ?? "";
      if (reduceMotion) {
        element.textContent = `${target}${suffix}`;
        return;
      }
      let start: number | null = null;
      const tick = (now: number) => {
        start ??= now;
        const progress = Math.min((now - start) / 1800, 1);
        const eased = 1 - (1 - progress) ** 3;
        element.textContent = `${Math.round(eased * target)}${suffix}`;
        if (progress < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };

    const revealItems = Array.from(document.querySelectorAll<HTMLElement>(".reveal, .hero"));
    const navLinks = Array.from(document.querySelectorAll<HTMLAnchorElement>(".nav__link[data-spy]"));
    const sections = navLinks
      .map((link) => document.getElementById(link.dataset.spy ?? ""))
      .filter((section): section is HTMLElement => section !== null);

    let revealObserver: IntersectionObserver | undefined;
    let counterObserver: IntersectionObserver | undefined;
    let spyObserver: IntersectionObserver | undefined;

    if (reduceMotion || !("IntersectionObserver" in window)) {
      revealItems.forEach((item) => item.classList.add("is-visible"));
      counters.forEach(runCounter);
    } else {
      revealObserver = new IntersectionObserver(
        (entries) => entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver?.unobserve(entry.target);
          }
        }),
        { rootMargin: "-64px 0px" },
      );
      revealItems.forEach((item) => revealObserver?.observe(item));

      counterObserver = new IntersectionObserver(
        (entries) => entries.forEach((entry) => {
          if (entry.isIntersecting) {
            runCounter(entry.target as HTMLElement);
            counterObserver?.unobserve(entry.target);
          }
        }),
        { rootMargin: "-64px 0px" },
      );
      counters.forEach((counter) => counterObserver?.observe(counter));

      spyObserver = new IntersectionObserver(
        (entries) => entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          navLinks.forEach((link) => link.classList.toggle("is-active", link.dataset.spy === entry.target.id));
        }),
        { rootMargin: "-45% 0px -50% 0px" },
      );
      sections.forEach((section) => spyObserver?.observe(section));
    }

    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("keydown", onKeyDown);
      menuToggle?.removeEventListener("click", toggleMenu);
      mobileMenu?.querySelectorAll("a").forEach((link) => link.removeEventListener("click", closeMenu));
      lightboxClose?.removeEventListener("click", hideLightbox);
      lightbox?.removeEventListener("click", onLightboxClick);
      galleryItems.forEach((item) => item.removeEventListener("click", openHandlers.get(item)!));
      revealObserver?.disconnect();
      counterObserver?.disconnect();
      spyObserver?.disconnect();
      document.body.style.overflow = "";
    };
  }, []);

  return null;
}
