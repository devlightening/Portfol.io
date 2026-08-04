"use client";

import { useMemo, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { featuredProjects, projects } from "@/data/projects";
import { motionPresets } from "@/lib/utils";
import { Section } from "@/components/ui/Section";
import { Pill } from "@/components/ui/Pill";
import { site, useI18n } from "@/lib/site";

export default function Projects() {
  const { locale, t } = useI18n();

  const featured = useMemo(() => featuredProjects.slice(0, 6), []);
  const other = useMemo(() => projects, []);

  const railRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: railRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-74%"]);
  const progress = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <Section id="projects" eyebrow={t("projects.eyebrow")} kicker={t("projects.kicker")}>
      <div ref={railRef} className="relative h-[230vh]">
        <div className="sticky top-24 overflow-hidden">
          <div className="flex items-end justify-between gap-6 pb-6">
            <div className="text-[12px] tracking-[0.32em] text-white/55">{t("projects.featured")}</div>
            <div className="hidden w-56 md:block">
              <div className="h-px w-full bg-white/10" />
              <motion.div style={{ width: progress }} className="h-px bg-white/40" />
            </div>
          </div>

          <motion.div style={{ x }} className="flex gap-6 will-change-transform">
            {featured.map((project, index) => (
              <motion.a
                key={project.id}
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                variants={motionPresets.fadeUp(10, 0.7)}
                className="group relative flex min-h-[360px] w-[min(86vw,560px)] shrink-0 flex-col overflow-hidden rounded-2xl border border-white/12 bg-white/[0.03] p-6 transition hover:border-white/25 hover:bg-white/[0.05]"
                whileHover={{ y: -6 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="text-[11px] tracking-[0.24em] text-white/45">
                    {project.category[locale].toUpperCase()} · {String(index + 1).padStart(2, "0")}
                  </div>
                  <div className="text-[11px] tracking-[0.24em] text-white/45">{project.year}</div>
                </div>

                <h3 className="mt-7 text-[28px] leading-[1.05] text-white/95 md:text-[34px]">
                  {project.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-white/72">
                  {project.subtitle[locale]}
                </p>

                <p className="mt-5 border-t border-white/10 pt-4 text-sm leading-relaxed text-white/58">
                  {project.focus[locale]}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.slice(0, 6).map((tag) => (
                    <Pill key={tag}>{tag.toUpperCase()}</Pill>
                  ))}
                </div>

                <div className="mt-auto flex items-center justify-between pt-8">
                  <div className="inline-flex items-center gap-2 text-[11px] tracking-[0.24em] text-white/70">
                    <Github size={14} strokeWidth={1.8} />
                    {t("projects.open")}
                  </div>
                  <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/60 transition group-hover:border-white/30 group-hover:text-white">
                    <ExternalLink size={15} strokeWidth={1.8} />
                  </div>
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
        variants={motionPresets.stagger(0.04, 0.08)}
        className="mt-12"
      >
        <div className="flex items-end justify-between gap-6">
          <div className="text-[12px] tracking-[0.32em] text-white/55">{t("projects.more")}</div>
          <div className="h-px flex-1 bg-white/10" />
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-2">
          {other.map((project) => (
            <motion.a
              key={project.id}
              variants={motionPresets.fadeUp(10, 0.65)}
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="group flex min-h-[236px] flex-col rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition hover:border-white/25 hover:bg-white/[0.04]"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <div className="text-[11px] tracking-[0.24em] text-white/45">
                    {project.category[locale].toUpperCase()}
                  </div>
                  <h3 className="mt-3 text-lg leading-tight text-white/92 group-hover:text-white">
                    {project.title}
                  </h3>
                </div>
                <div className="shrink-0 text-[11px] tracking-[0.22em] text-white/45">{project.year}</div>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-white/66">{project.subtitle[locale]}</p>
              <p className="mt-3 text-sm leading-relaxed text-white/48">{project.focus[locale]}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.slice(0, 5).map((tag) => (
                  <Pill key={tag}>{tag.toUpperCase()}</Pill>
                ))}
              </div>

              <div className="mt-auto flex items-center justify-between pt-6">
                <div className="inline-flex items-center gap-2 text-[11px] tracking-[0.24em] text-white/55">
                  <Github size={13} strokeWidth={1.8} />
                  {t("projects.repo")}
                </div>
                <div className="inline-flex items-center gap-2 text-[11px] tracking-[0.24em] text-white/58 transition group-hover:text-white">
                  {t("projects.view")}
                  <ExternalLink size={13} strokeWidth={1.8} />
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <a
            href={site.socials.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-[11px] tracking-[0.24em] text-white/70 transition hover:border-white/30 hover:bg-white/10 hover:text-white"
          >
            <Github size={14} strokeWidth={1.8} />
            {t("projects.githubArchive").toUpperCase()}
          </a>
        </div>
      </motion.div>
    </Section>
  );
}
