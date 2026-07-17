"use client";

import { useState } from "react";
import { gallery, gallerySection } from "@/lib/content";
import { Modal } from "@/components/ui/Modal";
import { Plate } from "@/components/ui/Plate";
import { PlateCarousel } from "@/components/ui/PlateCarousel";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function Gallery() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const openAt = (i: number) => {
    setIndex(i);
    setOpen(true);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") setIndex((i) => (i + 1) % gallery.length);
    else if (e.key === "ArrowLeft")
      setIndex((i) => (i - 1 + gallery.length) % gallery.length);
  };

  return (
    <section id="gallery" className="border-t border-ink/10">
      <div className="shell py-24 md:py-32 lg:py-40">
        <SectionHeader
          index={gallerySection.index}
          label={gallerySection.label}
          heading={gallerySection.heading}
        />

        <div className="mt-16 columns-1 gap-5 sm:columns-2 lg:mt-24 lg:columns-3">
          {gallery.map((item, i) => (
            <Reveal
              key={item.caption}
              delay={(i % 3) * 0.07}
              className="mb-10 break-inside-avoid"
            >
              <button
                type="button"
                onClick={() => openAt(i)}
                aria-haspopup="dialog"
                aria-label={`Open in viewer: ${item.caption}`}
                className="group block w-full cursor-pointer text-left"
              >
                <Plate
                  plate={item}
                  aspectClass={item.aspect}
                  zoom
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <Modal
        open={open}
        onOpenChange={setOpen}
        title="Gallery viewer"
        dark
        onKeyDown={handleKeyDown}
        contentClassName="inset-0 flex flex-col bg-night text-bone"
      >
        <div className="mx-auto flex h-full w-full max-w-6xl flex-col px-4 pb-4 pt-16 md:px-8 md:pb-6">
          <PlateCarousel
            plates={gallery}
            index={index}
            onIndexChange={setIndex}
            dark
            className="h-full"
          />
        </div>
      </Modal>
    </section>
  );
}
