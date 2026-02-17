import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { useEffect, useState } from "react";
import type { Variants } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReduced(mq.matches);
    onChange();
    if (mq.addEventListener) {
      mq.addEventListener("change", onChange);
      return () => mq.removeEventListener("change", onChange);
    }
    mq.addListener(onChange);
    return () => mq.removeListener(onChange);
  }, []);

  return reduced;
}

export const motionPresets = {
  stagger: (stagger = 0.08, delay = 0): Variants => ({
    hidden: {},
    show: { transition: { staggerChildren: stagger, delayChildren: delay } },
  }),

  fadeUp: (y = 16, d = 0.6): Variants => ({
    hidden: { opacity: 0, y },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: d, ease: EASE },
    },
  }),

  fadeIn: (d = 0.6): Variants => ({
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: d, ease: EASE } },
  }),

  scaleIn: (d = 0.7): Variants => ({
    hidden: { opacity: 0, scale: 0.98 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { duration: d, ease: EASE },
    },
  }),

  lineReveal: (d = 0.8): Variants => ({
    hidden: { y: "120%" },
    show: { y: "0%", transition: { duration: d, ease: EASE } },
  }),
};
