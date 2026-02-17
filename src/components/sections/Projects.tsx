"use client";

import { useMemo, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { featuredProjects, projects } from "@/data/projects";
import { motionPresets } from "@/lib/utils";
import { Section } from "@/components/ui/Section";
import { Pill } from "@/components/ui/Pill";
import { useI18n } from "@/lib/site";

export default function Projects() {
  const { t } = useI18n();

  const featured = useMemo(() => featuredProjects.slice(0, 6), []);
  const other = useMemo(
    () => projects.filter((p) => !featuredProjects.some((f) => f.id === p.id)),
    []
  );

  const railRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: railRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-72%"]);
  const progress = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]); 

  return (
    <Section id="projects" eyebrow={t("projects.eyebrow")} kicker={t("projects.kicker")}>
      <div ref={railRef} className="relative h-[240vh]">
        <div className="sticky top-24 overflow-hidden">
          <div className="flex items-end justify-between gap-6 pb-6">
            <div className="text-[12px] tracking-[0.32em] text-white/55">{t("projects.featured")}</div>
            <div className="hidden w-56 md:block">
              <div className="h-[1px] w-full bg-white/10" />
              <motion.div style={{ width: progress }} className="h-[1px] bg-white/40" />
            </div>
          </div>

          <motion.div style={{ x }} className="flex gap-6 will-change-transform">
            {featured.map((p, idx) => (
              <motion.a
                key={p.id}
                href={p.githubUrl}
                target="_blank"
                rel="noreferrer"
                variants={motionPresets.fadeUp(10, 0.7)}
                className="group relative w-[min(82vw,520px)] shrink-0 overflow-hidden rounded-3xl border border-white/12 bg-white/[0.03] p-6 transition hover:border-white/25 hover:bg-white/[0.05]"
                whileHover={{ y: -6 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center justify-between">
                  <div className="text-[11px] tracking-[0.26em] text-white/45">
                    {t("projects.featured")} • {String(idx + 1).padStart(2, "0")}
                  </div>
                  <div className="text-[11px] tracking-[0.26em] text-white/45">{p.year ?? "—"}</div>
                </div>

                <div className="mt-6 text-[28px] leading-[1.05] tracking-[-0.02em] text-white/95">
                  {p.title}
                </div>
                <div className="mt-3 text-sm leading-relaxed text-white/70">{p.subtitle}</div>

                {p.tags?.length ? (
                  <div className="mt-6 flex flex-wrap gap-2">
                    {p.tags.slice(0, 6).map((t2) => (
                      <Pill key={t2}>{t2.toUpperCase()}</Pill>
                    ))}
                  </div>
                ) : null}

                <div className="mt-8 flex items-center justify-between">
                  <div className="text-[11px] tracking-[0.28em] text-white/70">
                    {t("projects.open")}
                  </div>
                  <div className="h-8 w-8 rounded-full border border-white/15 opacity-70 transition group-hover:opacity-100" />
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-15% 0px -15% 0px" }}
        variants={motionPresets.stagger(0.06, 0.08)}
        className="mt-12"
      >
        <div className="flex items-end justify-between gap-6">
          <div className="text-[12px] tracking-[0.32em] text-white/55">{t("projects.more")}</div>
          <div className="h-[1px] flex-1 bg-white/10" />
        </div>

        <div className="mt-6 grid gap-3">
          {other.map((p) => (
            <motion.a
              key={p.id}
              variants={motionPresets.fadeUp(10, 0.65)}
              href={p.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="group rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition hover:border-white/25 hover:bg-white/[0.04]"
            >
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <div className="text-base tracking-[0.04em] text-white/90 group-hover:text-white">
                    {p.title}
                  </div>
                  <div className="mt-2 text-sm leading-relaxed text-white/65">{p.subtitle}</div>
                </div>
                <div className="text-[11px] tracking-[0.28em] text-white/55">
                  {t("projects.view")} →
                </div>
              </div>
              {p.tags?.length ? (
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.slice(0, 6).map((t2) => (
                    <Pill key={t2}>{t2.toUpperCase()}</Pill>
                  ))}
                </div>
              ) : null}
            </motion.a>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}
