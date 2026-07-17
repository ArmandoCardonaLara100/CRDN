import type { Variants } from "framer-motion";

/** Studio-wide easing — one rhythm for every animation. */
export const EASE = [0.16, 1, 0.3, 1] as const;

/** Viewport config for scroll-triggered reveals. */
export const VIEWPORT = { once: true, margin: "-64px 0px" } as const;

export const fadeRise: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: EASE },
  },
};

export const maskLine: Variants = {
  hidden: { y: "110%" },
  visible: {
    y: "0%",
    transition: { duration: 1, ease: EASE },
  },
};

export const drawRule: Variants = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 1.2, ease: EASE },
  },
};

export const staggerChildren = (delayChildren = 0, stagger = 0.09): Variants => ({
  hidden: {},
  visible: {
    transition: { staggerChildren: stagger, delayChildren },
  },
});
