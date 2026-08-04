"use client";

import { motion, useMotionValue, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Github, Mail } from "lucide-react";
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
    <section onMouseMove={onMove} className="relative min-h-[100svh] overflow-hidden pt-20 md:pt-16">
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

            <div className="hidden max-w-[24ch] text-right text-[11px] tracking-[0.24em] text-white/55 sm:block">
              {site.role[locale].toUpperCase()}
            </div>
          </div>

          <div className="mt-8 grid grid-cols-12 gap-8 lg:gap-10">
            <div className="col-span-12 md:col-span-7 lg:col-span-8">
              <motion.div variants={motionPresets.fadeIn(0.75)} className="relative">
                <div
                  className={cn(
                    "select-none font-semibold leading-[0.82] text-white/95",
                    "text-[72px] sm:text-[104px] md:text-[128px] lg:text-[156px]"
                  )}
                >
                  BACK
                </div>
                <div className="mt-5 flex items-center gap-3">
                  <div className="h-px w-20 bg-white/35 sm:w-28 md:w-44" />
                  <div className="text-[11px] tracking-[0.32em] text-white/55">
                    {t("hero.kicker")}
                  </div>
                </div>
                <div
                  className={cn(
                    "mt-7 select-none font-semibold leading-[0.84] text-white/95",
                    "text-[68px] sm:text-[98px] md:text-[122px] lg:text-[150px]"
                  )}
                >
                  END
                </div>
              </motion.div>
            </div>

            <div className="col-span-12 md:col-span-5 lg:col-span-4 md:text-right">
              <motion.div variants={motionPresets.fadeUp(14, 0.85)}>
                <div className="text-[11px] tracking-[0.28em] text-white/55">{t("hero.about")}</div>
                <h1 className="mt-4 text-2xl leading-tight text-white/95 sm:text-3xl lg:text-[38px] md:ml-auto">
                  {site.headline[locale]}
                </h1>
                <p className="mt-4 max-w-[44ch] text-sm leading-relaxed text-white/72 md:ml-auto">
                  {site.tagline[locale]}
                </p>

                <div className="mt-5 flex flex-wrap gap-2 md:justify-end">
                  {site.stack.slice(0, 6).map((item) => (
                    <Pill key={item}>{item.toUpperCase()}</Pill>
                  ))}
                </div>

                <div className="mt-7 flex flex-wrap gap-3 md:justify-end">
                  <a
                    href={site.socials.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-[11px] tracking-[0.24em] text-white/82 transition hover:border-white/35 hover:bg-white/10 hover:text-white"
                  >
                    <Github size={14} strokeWidth={1.8} />
                    {t("hero.github").toUpperCase()}
                  </a>
                  <a
                    href={`mailto:${site.socials.email}`}
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-[11px] tracking-[0.24em] text-white/82 transition hover:border-white/35 hover:bg-white/10 hover:text-white"
                  >
                    <Mail size={14} strokeWidth={1.8} />
                    {t("hero.email").toUpperCase()}
                  </a>
                </div>

                <div className="mt-8 grid grid-cols-3 gap-3 border-y border-white/10 py-4">
                  {site.heroStats.map((stat) => (
                    <div key={`${stat.value}-${stat.label.en}`} className="min-w-0">
                      <div className="text-lg leading-none text-white/92">{stat.value}</div>
                      <div className="mt-2 text-[10px] uppercase tracking-[0.18em] text-white/48">
                        {stat.label[locale]}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>

          <div className="mt-12 flex items-center gap-4">
            <div className="text-[11px] tracking-[0.28em] text-white/50">{t("hero.scroll")}</div>
            <div className="relative h-px flex-1 bg-white/12">
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
              <ArrowDown size={16} strokeWidth={1.7} />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
