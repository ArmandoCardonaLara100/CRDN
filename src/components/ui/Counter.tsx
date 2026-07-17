"use client";

import { useEffect, useRef } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";
import { EASE } from "@/lib/motion";

interface CounterProps {
  value: number;
  suffix?: string;
  className?: string;
}

/** Counts up when scrolled into view; renders the final value immediately for reduced motion. */
export function Counter({ value, suffix = "", className }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-64px 0px" });
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const node = ref.current;
    if (!node || !inView) return;

    if (reducedMotion) {
      node.textContent = String(value);
      return;
    }

    const controls = animate(0, value, {
      duration: 1.8,
      ease: EASE,
      onUpdate: (latest) => {
        node.textContent = String(Math.round(latest));
      },
    });
    return () => controls.stop();
  }, [inView, value, reducedMotion]);

  return (
    <span className={className}>
      <span ref={ref} className="tabular-nums">
        0
      </span>
      {suffix}
    </span>
  );
}
