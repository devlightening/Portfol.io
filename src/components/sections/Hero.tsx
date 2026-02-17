"use client";

import { motion, useMotionValue, useScroll, useTransform } from "framer-motion";
import { site, useI18n } from "@/lib/site";
import { cn, motionPresets, usePrefersReducedMotion } from "@/lib/utils";
import { Pill } from "@/components/ui/Pill";

export default function Hero() {
  const reduced = usePrefersReducedMotion();
  const { locale, t } = useI18n();

  const { scrollYProgress } = useScroll();
  const progressX = useTransform(scrollYProgress, [0, 0.18], reduced ? [0, 0] : [0, 1]);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  const px = useTransform(mx, [-0.5, 0.5], reduced ? [0, 0] : [-10, 10]);
  const py = useTransform(my, [-0.5, 0.5], reduced ? [0, 0] : [-6, 6]);

  const onMove = (e: React.MouseEvent) => {
    if (reduced) return;
    const r = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    mx.set(x);
    my.set(y);
  };

  return (
    <section
      onMouseMove={onMove}
      className="relative min-h-[100svh] overflow-hidden pt-16"
    >
      <div className="mx-auto flex min-h-[calc(100svh-4rem)] max-w-[1200px] flex-col px-5">
        <motion.div
          style={{ x: px, y: py }}
          initial="hidden"
          animate="show"
          variants={motionPresets.stagger(0.07, 0.08)}
          className="relative flex flex-1 flex-col justify-center"
        >
          <div className="flex items-start justify-between gap-6">
            <div className="text-[11px] tracking-[0.24em] text-white/55">
              {site.name.toUpperCase()}
            </div>

            <div className="text-right text-[11px] tracking-[0.24em] text-white/55">
              {site.role[locale].toUpperCase()}
            </div>
          </div>

          <div className="mt-8 grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-8">
              <motion.div
                variants={motionPresets.fadeIn(0.75)}
                className="relative"
                style={
                  reduced
                    ? undefined
                    : {
                        clipPath: "inset(0% 0% 0% 0% round 0px)",
                      }
              }
              >
                <div
                  className={cn(
                    "select-none leading-[0.78] tracking-[-0.06em] text-white/95",
                    "text-[clamp(76px,11vw,170px)]"
                  )}
                >
                  BACK
                </div>
                <div className="mt-3 flex items-center gap-3">
                  <div className="h-[1px] w-24 bg-white/35 md:w-44" />
                  <div className="text-[11px] tracking-[0.32em] text-white/55">
                    {t("hero.kicker")}
                  </div>
                </div>
                <div
                  className={cn(
                    "mt-6 select-none leading-[0.80] tracking-[-0.06em] text-white/95",
                    "text-[clamp(72px,10.5vw,160px)]"
                  )}
                >
                  END
                </div>
              </motion.div>
            </div>

            <div className="col-span-12 md:col-span-4 md:text-right">
              <motion.div variants={motionPresets.fadeUp(14, 0.85)}>
                <div className="text-[11px] tracking-[0.28em] text-white/55">{t("hero.about")}</div>
                <p className="mt-3 max-w-[42ch] text-sm leading-relaxed text-white/75 md:ml-auto">
                  {site.tagline[locale]}
                </p>

                <div className="mt-5 flex flex-wrap gap-2 md:justify-end">
                  {site.stack.map((t) => (
                    <Pill key={t}>{t.toUpperCase()}</Pill>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>

          <div className="mt-12 flex items-center gap-4">
            <div className="text-[11px] tracking-[0.28em] text-white/50">{t("hero.scroll")}</div>
            <div className="relative h-[1px] flex-1 bg-white/12">
              <motion.div
                aria-hidden
                style={{ scaleX: progressX }}
                className="absolute inset-y-0 left-0 origin-left bg-white/40"
              />
            </div>
            <motion.div
              aria-hidden
              animate={reduced ? {} : { y: [0, 6, 0] }}
              transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
              className="text-white/60"
            >
              ↓
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
