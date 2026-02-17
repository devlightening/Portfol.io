
"use client";

import React, { useEffect, useMemo, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { site } from "@/lib/site";
import { cn, fadeUp, lineReveal, prefersReducedMotion } from "@/lib/utils";

const MASK = {
  hidden: { clipPath: "inset(0 0 100% 0)" },
  show: {
    clipPath: "inset(0 0 0% 0)",
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
} as const;

export function Hero() {
  const prefersReduced = prefersReducedMotion();
  const ref = useRef<HTMLElement | null>(null);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  const sx = useSpring(mx, { stiffness: 120, damping: 20, mass: 0.2 });
  const sy = useSpring(my, { stiffness: 120, damping: 20, mass: 0.2 });

  const bgX = useTransform(sx, [-0.5, 0.5], [-8, 8]);
  const bgY = useTransform(sy, [-0.5, 0.5], [-8, 8]);
  const typeX = useTransform(sx, [-0.5, 0.5], [-4, 4]);
  const typeY = useTransform(sy, [-0.5, 0.5], [-3, 3]);

  useEffect(() => {
    if (prefersReduced) return;

    const el = ref.current;
    if (!el) return;

    const onMove = (e: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      mx.set(x);
      my.set(y);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [mx, my, prefersReduced]);

  const aboutLines = useMemo(
    () => [
      "Building sharp, minimal interfaces",
      "with motion that serves the product.",
      `Based in ${site.location}.`,
    ],
    []
  );

  return (
    <section
      ref={(node) => {
        ref.current = node;
      }}
      className="relative overflow-hidden pt-20 sm:pt-28"
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          x: prefersReduced ? 0 : bgX,
          y: prefersReduced ? 0 : bgY,
        }}
      >
        <div className="absolute -left-40 -top-40 h-[520px] w-[520px] rounded-full bg-white/[0.06] blur-3xl" />
        <div className="absolute -bottom-48 -right-56 h-[620px] w-[620px] rounded-full bg-white/[0.05] blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:72px_72px] opacity-[0.35]" />
      </motion.div>

      <div className="grid gap-10 pb-14 sm:grid-cols-12 sm:items-end sm:gap-8 sm:pb-20">
        <motion.div
          className="sm:col-span-9"
          initial="hidden"
          animate="show"
          variants={fadeUp.container(0.06, 0)}
        >
          <motion.div
            className="relative"
            style={{
              x: prefersReduced ? 0 : typeX,
              y: prefersReduced ? 0 : typeY,
            }}
          >
            <motion.div variants={fadeUp.item(10, 0.6)}>
              <div className="flex flex-wrap items-end justify-between gap-x-6 gap-y-3">
                <div className="text-xs tracking-[0.28em] text-white/55">
                  {site.name}
                </div>
                <div className="text-xs tracking-[0.28em] text-white/45">
                  {site.role}
                </div>
              </div>
            </motion.div>

            <div className="mt-8">
              <motion.div
                className="overflow-hidden"
                variants={MASK}
                initial="hidden"
                animate="show"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2">
                  <div
                    className={cn(
                      "font-[var(--font-display)] font-medium uppercase text-white/90",
                      "leading-[0.85] tracking-[-0.05em]"
                    )}
                    style={{ fontSize: "clamp(56px, 10vw, 140px)" }}
                  >
                    BACK
                  </div>

                  <div className="hidden flex-1 items-center justify-center sm:flex">
                    <div className="h-px w-full max-w-[420px] bg-white/20" />
                  </div>

                  <div
                    className={cn(
                      "font-[var(--font-display)] font-medium uppercase text-white/90",
                      "leading-[0.85] tracking-[-0.05em]"
                    )}
                    style={{ fontSize: "clamp(56px, 10vw, 140px)" }}
                  >
                    END
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="mt-5 flex items-center gap-4 sm:mt-7"
                variants={fadeUp.item(12, 0.6)}
              >
                <div className="h-px w-10 bg-white/30" />
                <div className="text-xs tracking-[0.28em] text-white/55">
                  SYSTEMS / MOTION / UI
                </div>
              </motion.div>

              <motion.div
                className="mt-6 overflow-hidden"
                variants={MASK}
                initial="hidden"
                animate="show"
              >
                <div
                  className={cn(
                    "font-[var(--font-display)] font-medium uppercase text-white/85",
                    "leading-[0.9] tracking-[-0.03em]"
                  )}
                  style={{ fontSize: "clamp(44px, 8.3vw, 120px)" }}
                >
                  DEVELOPER
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="mt-10 flex flex-wrap items-center gap-3"
            variants={fadeUp.item(10, 0.55)}
          >
            <div className="rounded-full border border-white/12 bg-white/5 px-4 py-2 text-xs tracking-[0.18em] text-white/70">
              AVAILABLE FOR WORK
            </div>
            <div className="rounded-full border border-white/12 bg-white/5 px-4 py-2 text-xs tracking-[0.18em] text-white/70">
              REMOTE / ONSITE
            </div>
          </motion.div>
        </motion.div>

        <motion.aside
          className="sm:col-span-3 sm:pb-4"
          initial="hidden"
          animate="show"
          variants={fadeUp.container(0.06, 0.25)}
        >
          <motion.div variants={fadeUp.item(10, 0.6)}>
            <div className="text-xs tracking-[0.3em] text-white/60">ABOUT</div>
          </motion.div>

          <div className="mt-5 space-y-2 overflow-hidden">
            {aboutLines.map((line, idx) => (
              <div key={line} className="overflow-hidden">
                <motion.p
                  className="text-sm leading-6 text-white/60"
                  initial="hidden"
                  animate="show"
                  variants={lineReveal.line(0.35 + idx * 0.08, 0.7)}
                >
                  {line}
                </motion.p>
              </div>
            ))}
          </div>

          <motion.div
            className="mt-8 flex items-center gap-3"
            variants={fadeUp.item(8, 0.5)}
          >
            <div className="h-px flex-1 bg-white/10" />
            <div className="text-[10px] tracking-[0.3em] text-white/45">
              SELECTED WORK BELOW
            </div>
          </motion.div>
        </motion.aside>
      </div>

      <div className="pb-10">
        <div className="flex items-center justify-center">
          <motion.div
            className="flex flex-col items-center gap-3 text-white/55"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="text-[10px] tracking-[0.32em]">SCROLL</div>
            <div className="relative h-10 w-[22px] rounded-full border border-white/20">
              <motion.div
                className="absolute left-1/2 top-2 h-2 w-2 -translate-x-1/2 rounded-full bg-white/40"
                animate={
                  prefersReduced
                    ? { opacity: 1 }
                    : { y: [0, 14, 0], opacity: [0.35, 0.85, 0.35] }
                }
                transition={
                  prefersReduced
                    ? undefined
                    : { duration: 1.4, repeat: Infinity, ease: "easeInOut" }
                }
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
