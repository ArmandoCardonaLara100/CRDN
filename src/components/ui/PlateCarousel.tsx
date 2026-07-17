"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { PlateSpec } from "@/lib/content";
import { EASE } from "@/lib/motion";
import { PlateArt } from "./PlateArt";

interface PlateCarouselProps {
  plates: PlateSpec[];
  index: number;
  onIndexChange: (index: number) => void;
  dark?: boolean;
  className?: string;
}

const variants = {
  enter: (dir: number) => ({ x: dir > 0 ? "10%" : "-10%", opacity: 0 }),
  center: {
    x: "0%",
    opacity: 1,
    transition: { duration: 0.55, ease: EASE },
  },
  exit: (dir: number) => ({
    x: dir > 0 ? "-6%" : "6%",
    opacity: 0,
    transition: { duration: 0.3, ease: EASE },
  }),
};

function pad(n: number): string {
  return String(n).padStart(2, "0");
}

/** Swipeable, keyboard-friendly image carousel shared by modals and lightbox. */
export function PlateCarousel({
  plates,
  index,
  onIndexChange,
  dark = false,
  className = "",
}: PlateCarouselProps) {
  const [direction, setDirection] = useState(0);
  const count = plates.length;
  const plate = plates[index];

  const paginate = (delta: number) => {
    setDirection(delta);
    onIndexChange((index + delta + count) % count);
  };

  const muted = dark ? "text-bone/60" : "text-umber";
  const controlClass = `flex size-11 shrink-0 cursor-pointer items-center justify-center rounded-full border transition-colors duration-300 ${
    dark
      ? "border-bone/30 text-bone hover:bg-bone hover:text-ink"
      : "border-ink/20 text-ink hover:bg-ink hover:text-bone"
  }`;

  return (
    <div className={`flex h-full min-h-0 flex-col ${className}`}>
      <div className="relative min-h-0 flex-1 overflow-hidden bg-plaster">
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={index}
            role="img"
            aria-label={plate.alt}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.12}
            onDragEnd={(_, info) => {
              if (info.offset.x < -64) paginate(1);
              else if (info.offset.x > 64) paginate(-1);
            }}
            className="absolute inset-0 cursor-grab active:cursor-grabbing"
          >
            {plate.src ? (
              <Image
                src={plate.src}
                alt=""
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="pointer-events-none object-cover"
              />
            ) : (
              <PlateArt
                motif={plate.motif}
                className="pointer-events-none absolute inset-0 h-full w-full"
              />
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      <div
        className={`flex h-16 shrink-0 items-center justify-between gap-4 border-t px-5 ${
          dark ? "border-bone/15" : "border-ink/10"
        }`}
      >
        <p className={`eyebrow min-w-0 truncate ${muted}`} aria-live="polite">
          {plate.caption}
        </p>
        <div className="flex items-center gap-4">
          <span className={`eyebrow tabular-nums ${muted}`}>
            {pad(index + 1)} / {pad(count)}
          </span>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => paginate(-1)}
              aria-label="Previous image"
              className={controlClass}
            >
              <ChevronLeft size={18} strokeWidth={1.5} aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => paginate(1)}
              aria-label="Next image"
              className={controlClass}
            >
              <ChevronRight size={18} strokeWidth={1.5} aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
