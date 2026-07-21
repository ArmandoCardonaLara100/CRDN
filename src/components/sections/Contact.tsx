"use client";

import { Mail, MessageCircle, Phone } from "lucide-react";
import { contactSection, studio } from "@/lib/content";
import { InstagramIcon } from "@/components/ui/BrandIcon";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";

function ChannelIcon({ channel }: { channel: string }) {
  const common = { size: 22, strokeWidth: 1.25, "aria-hidden": true } as const;
  switch (channel) {
    case "phone":
      return <Phone {...common} />;
    case "email":
      return <Mail {...common} />;
    case "whatsapp":
      return <MessageCircle {...common} />;
    case "instagram":
      return <InstagramIcon size={22} />;
    default:
      return null;
  }
}

export function Contact() {
  return (
    <section id="contact" className="bg-sand">
      <div className="shell py-24 md:py-32 lg:py-40">
        <SectionHeader
          index={contactSection.index}
          label={contactSection.label}
          heading={contactSection.heading}
        />

        <Reveal delay={0.1}>
          <p className="mt-8 max-w-xl text-[15px] leading-relaxed text-umber">
            {contactSection.support}
          </p>
        </Reveal>

        <ul className="mx-auto mt-16 grid max-w-5xl grid-cols-2 gap-x-8 gap-y-14 md:grid-cols-4 lg:mt-24 lg:gap-x-12">
          {contactSection.channels.map((channel, i) => (
            <Reveal key={channel.key} delay={i * 0.07}>
              <li>
                <a
                  href={channel.href}
                  {...(channel.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  aria-label={`${channel.label}: ${channel.value}`}
                  className="group flex flex-col items-center gap-5 text-center"
                >
                  <span className="flex size-20 items-center justify-center rounded-full border border-ink/25 bg-sand transition-all duration-400 ease-studio group-hover:-translate-y-1.5 group-hover:border-ink group-hover:bg-ink group-hover:text-bone group-hover:shadow-[0_18px_36px_-18px_rgba(0,0,0,0.45)]">
                    <ChannelIcon channel={channel.key} />
                  </span>
                  <span>
                    <span className="eyebrow block text-umber transition-colors duration-300 group-hover:text-ink">
                      {channel.label}
                    </span>
                    <span className="mt-2 block text-sm">{channel.value}</span>
                  </span>
                </a>
              </li>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={0.2}>
          <p className="eyebrow mt-20 border-t border-ink/15 pt-6 text-umber lg:mt-28">
            {studio.address} — visitas con cita previa
          </p>
        </Reveal>
      </div>
    </section>
  );
}
