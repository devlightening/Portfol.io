
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export type MotionVariant = {
  hidden: Record<string, unknown>;
  show: Record<string, unknown>;
};

export const fadeUp = {
  container: (stagger = 0.08, delayChildren = 0) =>
    ({
      hidden: {},
      show: {
        transition: {
          staggerChildren: stagger,
          delayChildren,
        },
      },
    }) satisfies MotionVariant,
  item: (y = 16, duration = 0.5) =>
    ({
      hidden: { opacity: 0, y },
      show: {
        opacity: 1,
        y: 0,
        transition: {
          duration,
          ease: [0.22, 1, 0.36, 1],
        },
      },
    }) satisfies MotionVariant,
};

export const lineReveal = {
  line: (delay = 0, duration = 0.6) =>
    ({
      hidden: { y: "110%" },
      show: {
        y: "0%",
        transition: {
          delay,
          duration,
          ease: [0.22, 1, 0.36, 1],
        },
      },
    }) satisfies MotionVariant,
};

export const scaleIn = {
  item: (from = 0.96, duration = 0.45) =>
    ({
      hidden: { opacity: 0, scale: from },
      show: {
        opacity: 1,
        scale: 1,
        transition: {
          duration,
          ease: [0.22, 1, 0.36, 1],
        },
      },
    }) satisfies MotionVariant,
};

export function prefersReducedMotion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
