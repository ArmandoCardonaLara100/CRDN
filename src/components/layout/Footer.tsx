"use client";

import { ArrowUp, Mail, MessageCircle, Phone } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { footer, nav, studio } from "@/lib/content";
import { InstagramIcon } from "@/components/ui/BrandIcon";
import { Reveal } from "@/components/ui/Reveal";

const contactActions = [
  {
    href: studio.phoneHref,
    label: "Llamar",
    icon: <Phone size={16} strokeWidth={1.4} aria-hidden="true" />,
    external: false,
  },
  {
    href: `mailto:${studio.email}`,
    label: "Email",
    icon: <Mail size={16} strokeWidth={1.4} aria-hidden="true" />,
    external: false,
  },
  {
    href: studio.whatsappHref,
    label: "WhatsApp",
    icon: <MessageCircle size={16} strokeWidth={1.4} aria-hidden="true" />,
    external: true,
  },
  {
    href: studio.instagramHref,
    label: "Instagram",
    icon: <InstagramIcon size={16} />,
    external: true,
  },
] as const;

export function Footer() {
  const pathname = usePathname();
  const onLandingPage = pathname === "/";
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-night text-bone">
      <div className="shell pb-10 pt-20 md:pt-28">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-10 border-b border-bone/15 pb-14">
            <div>
              <Image
                src="/images/crdn-wordmark-cropped.png"
                alt="CRDN"
                width={1050}
                height={300}
                sizes="(max-width: 767px) 176px, (max-width: 1023px) 224px, 256px"
                className="h-auto w-44 invert sm:w-56 lg:w-64"
              />
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
                        href={onLandingPage ? item.href : `/${item.href}`}
                        className="text-sm text-bone/80 transition-colors duration-300 hover:text-bone"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="max-w-sm">
                <p className="eyebrow mb-5 text-bone/50">Contacto</p>
                <div className="flex flex-wrap gap-3">
                  {contactActions.map((action) => (
                    <a
                      key={action.label}
                      href={action.href}
                      {...(action.external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      aria-label={action.label}
                      className="inline-flex items-center gap-2.5 rounded-full border border-bone/25 px-4 py-3 text-[11px] uppercase tracking-[0.16em] text-bone/80 transition-all duration-300 ease-studio hover:-translate-y-0.5 hover:border-bone hover:bg-bone hover:text-ink"
                    >
                      <span className="flex size-4 items-center justify-center">
                        {action.icon}
                      </span>
                      <span>{action.label}</span>
                    </a>
                  ))}
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
