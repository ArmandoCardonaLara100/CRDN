"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { nav, studio } from "@/lib/content";
import { EASE } from "@/lib/motion";

function subscribeNoop(): () => void {
  return () => {};
}

function useScrolled(threshold = 16): boolean {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);
  return scrolled;
}

function useActiveSection(): string {
  const [active, setActive] = useState("home");
  useEffect(() => {
    const sections = nav
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  return active;
}

export function Header() {
  const pathname = usePathname();
  const onLandingPage = pathname === "/";
  const onInsightsPage = pathname.startsWith("/insights");
  const scrolled = useScrolled();
  const active = useActiveSection();
  const [menuOpen, setMenuOpen] = useState(false);
  /* True only after hydration — the menu portal needs document.body. */
  const mounted = useSyncExternalStore(
    subscribeNoop,
    () => true,
    () => false
  );

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  /* When the menu is open the header must stay blur-free: backdrop-filter
     creates a containing block that would trap the fixed overlay inside it. */
  const headerSurface = menuOpen
    ? "border-b border-ink/10 bg-bone"
    : scrolled
      ? "border-b border-ink/10 bg-bone/80 backdrop-blur-lg"
      : "border-b border-transparent bg-transparent";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-studio ${headerSurface}`}
    >
      <div
        className={`shell flex items-center justify-between transition-all duration-500 ease-studio ${
          scrolled ? "h-16" : "h-20"
        }`}
      >
        <a
          href={onLandingPage ? "#home" : "/#home"}
          className="block"
          aria-label="CRDN — back to top"
          onClick={() => setMenuOpen(false)}
        >
          <Image
            src="/images/crdn-wordmark-cropped.png"
            alt="CRDN"
            width={1050}
            height={300}
            sizes="(max-width: 767px) 124px, 156px"
            className="h-auto w-[7.75rem] sm:w-[9.75rem]"
          />
        </a>

        <nav
          aria-label="Primary"
          className="absolute left-1/2 hidden -translate-x-1/2 lg:block"
        >
          <ul className="flex items-center gap-9">
            {nav.map((item) => (
              <li key={item.id}>
                <a
                  href={onLandingPage ? item.href : `/${item.href}`}
                  aria-current={
                    (onLandingPage && active === item.id) ||
                    (onInsightsPage && item.id === "insights")
                      ? "page"
                      : undefined
                  }
                  className="group relative py-2 font-sans text-[11px] uppercase tracking-[0.22em] text-ink/70 transition-colors duration-300 hover:text-ink aria-[current]:text-ink"
                >
                  {item.label}
                  <span
                    aria-hidden="true"
                    className={`absolute -bottom-0.5 left-0 h-px w-full origin-left bg-ink transition-transform duration-300 ease-studio ${
                      (onLandingPage && active === item.id) ||
                      (onInsightsPage && item.id === "insights")
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={onLandingPage ? "#contact" : "/#contact"}
            className="hidden h-10 items-center rounded-[2px] bg-ink px-5 font-sans text-[12px] tracking-[0.08em] text-bone transition-all duration-300 ease-studio hover:-translate-y-0.5 hover:shadow-[0_8px_24px_-10px_rgba(0,0,0,0.4)] md:inline-flex"
          >
            Iniciar Proyecto
          </a>
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="flex size-11 cursor-pointer items-center justify-center lg:hidden"
          >
            {menuOpen ? (
              <X size={22} strokeWidth={1.5} aria-hidden="true" />
            ) : (
              <Menu size={22} strokeWidth={1.5} aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Portaled to <body>: the header's backdrop-filter would otherwise
          become the containing block and trap this fixed overlay inside it. */}
      {mounted &&
        createPortal(
          <AnimatePresence>
            {menuOpen && (
              <motion.div
                id="mobile-menu"
                className="fixed inset-0 top-16 z-40 flex flex-col bg-bone lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
            transition={{ duration: 0.3 }}
          >
            <nav aria-label="Mobile" className="shell flex-1 overflow-y-auto pt-6">
              <ul>
                {nav.map((item, i) => (
                  <motion.li
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: EASE, delay: 0.05 + i * 0.06 }}
                    className="border-b border-ink/10"
                  >
                    <a
                      href={onLandingPage ? item.href : `/${item.href}`}
                      onClick={() => setMenuOpen(false)}
                      className="flex items-baseline gap-6 py-5"
                    >
                      <span className="eyebrow text-umber">0{i + 1}</span>
                      <span className="font-display text-4xl">{item.label}</span>
                    </a>
                  </motion.li>
                ))}
              </ul>
            </nav>
                <motion.div
                  className="shell flex flex-wrap items-center justify-between gap-3 border-t border-ink/10 py-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <a href={`mailto:${studio.email}`} className="eyebrow text-umber">
                    {studio.email}
                  </a>
                  <span className="eyebrow text-umber">{studio.city}</span>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </header>
  );
}
