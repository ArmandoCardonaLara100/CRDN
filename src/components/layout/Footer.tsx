"use client";

import { ArrowUp } from "lucide-react";
import { footer, nav, studio } from "@/lib/content";
import { InstagramIcon, LinkedinIcon } from "@/components/ui/BrandIcon";
import { Reveal } from "@/components/ui/Reveal";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-night text-bone">
      <div className="shell pb-10 pt-20 md:pt-28">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-10 border-b border-bone/15 pb-14">
            <div>
              <p
                className="font-display text-[clamp(3.5rem,9vw,7.5rem)] leading-none tracking-[0.08em]"
                aria-hidden="true"
              >
                CRDN
              </p>
              <p className="mt-6 max-w-md text-sm leading-relaxed text-bone/60">
                {footer.note}
              </p>
            </div>

            <div className="flex flex-wrap gap-16">
              <nav aria-label="Footer">
                <p className="eyebrow mb-5 text-bone/50">Navigate</p>
                <ul className="space-y-2.5">
                  {nav.map((item) => (
                    <li key={item.id}>
                      <a
                        href={item.href}
                        className="text-sm text-bone/80 transition-colors duration-300 hover:text-bone"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>

              <div>
                <p className="eyebrow mb-5 text-bone/50">Follow</p>
                <div className="flex gap-3">
                  <a
                    href={studio.instagramHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="CRDN on Instagram"
                    className="flex size-11 items-center justify-center rounded-full border border-bone/25 text-bone/80 transition-all duration-300 ease-studio hover:-translate-y-0.5 hover:bg-bone hover:text-ink"
                  >
                    <InstagramIcon size={17} />
                  </a>
                  <a
                    href={studio.linkedinHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="CRDN on LinkedIn"
                    className="flex size-11 items-center justify-center rounded-full border border-bone/25 text-bone/80 transition-all duration-300 ease-studio hover:-translate-y-0.5 hover:bg-bone hover:text-ink"
                  >
                    <LinkedinIcon size={17} />
                  </a>
                </div>
                <p className="eyebrow mt-8 text-bone/50">{studio.coordinates}</p>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="flex flex-wrap items-center justify-between gap-6 pt-8">
          <p className="eyebrow text-bone/50">{footer.copyright}</p>
          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Back to top"
            className="group flex cursor-pointer items-center gap-3"
          >
            <span className="eyebrow text-bone/50 transition-colors duration-300 group-hover:text-bone">
              Back to top
            </span>
            <span className="flex size-11 items-center justify-center rounded-full border border-bone/25 transition-all duration-300 ease-studio group-hover:-translate-y-1 group-hover:bg-bone group-hover:text-ink">
              <ArrowUp size={16} strokeWidth={1.5} aria-hidden="true" />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}
