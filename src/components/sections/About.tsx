"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { site, useI18n } from "@/lib/site";
import { motionPresets, usePrefersReducedMotion } from "@/lib/utils";
import { Section } from "@/components/ui/Section";
import { Pill } from "@/components/ui/Pill";
import SpotlightCard from "@/components/ui/SpotlightCard";

export default function About() {
  const reduced = usePrefersReducedMotion();
  const { locale } = useI18n();
  const aboutText = site.aboutLong[locale].paragraphs.join(" ");
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "end 0.15"],
  });

  const p1 = useTransform(scrollYProgress, [0.0, 0.2], reduced ? [1, 1] : [0, 1]);
  const p2 = useTransform(scrollYProgress, [0.15, 0.35], reduced ? [1, 1] : [0, 1]);
  const p3 = useTransform(scrollYProgress, [0.3, 0.55], reduced ? [1, 1] : [0, 1]);
  const chips = useTransform(scrollYProgress, [0.38, 0.62], reduced ? [1, 1] : [0, 1]);

  const panelY = useTransform(scrollYProgress, [0, 1], reduced ? [0, 0] : [16, -16]);
  const panelOpacity = useTransform(scrollYProgress, [0.15, 0.45], reduced ? [1, 1] : [0.75, 1]);
  const panelFilter = useTransform(
    scrollYProgress,
    [0.1, 0.45],
    reduced ? ["blur(0px)", "blur(0px)"] : ["blur(8px)", "blur(0px)"]
  );

  const principles = [
    {
      title: "Signal over noise",
      desc: "I design APIs and flows that stay readable under pressure—clear contracts, fewer surprises, higher confidence.",
    },
    {
      title: "Reliability is the product",
      desc: "Graceful failure paths, idempotency, and defensive defaults—because production is the real benchmark.",
    },
    {
      title: "Boundaries, not layers",
      desc: "Clean domain boundaries and modular services where it matters—DDD when it helps, simplicity when it doesn’t.",
    },
    {
      title: "Events > assumptions",
      desc: "I lean toward event-driven thinking: RabbitMQ, Redis, and eventual consistency—optimized for change and scale.",
    },
    {
      title: "Observability by design",
      desc: "Logs, metrics, traces—built-in from day one. If you can’t measure it, you can’t trust it.",
    },
    {
      title: "Ship, then sharpen",
      desc: "Fast iteration with production-minded quality—small releases, clean refactors, continuous improvement.",
    },
  ];

  return (
    <Section id="about" eyebrow="ABOUT" kicker="BIO / TECH / PRINCIPLES">
      <div ref={ref} className="grid grid-cols-12 gap-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-20% 0px -20% 0px" }}
          variants={motionPresets.stagger(0.08, 0.05)}
          className="col-span-12 md:col-span-7"
        >
          <motion.p
            variants={motionPresets.fadeUp(14, 0.8)}
            style={{ opacity: p1 }}
            className="max-w-[65ch] text-sm leading-relaxed text-white/70"
          >
            {aboutText}
          </motion.p>

          <motion.div
            variants={motionPresets.fadeUp(14, 0.8)}
            style={{ opacity: chips, y: reduced ? 0 : undefined }}
            className="mt-10"
          >
            <div className="text-[12px] tracking-[0.32em] text-white/55">TECH</div>
            <motion.div
              variants={motionPresets.stagger(0.05, 0)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-20% 0px -20% 0px" }}
              className="mt-4 flex flex-wrap gap-2"
            >
              {site.stack.map((t) => (
                <motion.div key={t} variants={motionPresets.fadeUp(10, 0.6)}>
                  <Pill>{t.toUpperCase()}</Pill>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-20% 0px -20% 0px" }}
          variants={motionPresets.stagger(0.08, 0.08)}
          className="col-span-12 md:col-span-5"
        >
          <div className="text-[12px] tracking-[0.32em] text-white/55">PRINCIPLES</div>
          <motion.div style={{ y: panelY, opacity: panelOpacity, filter: panelFilter as unknown as string }} className="mt-4">
            <SpotlightCard>
              <div className="divide-y divide-white/10">
                <div className="p-5 text-white/55 [filter:blur(0.9px)] transition-all duration-500 group-hover:text-white/95 group-hover:[filter:blur(0px)] group-hover:[text-shadow:0_0_18px_rgba(255,255,255,0.12)]">
                  {principles.map((p) => (
                    <motion.div
                      key={p.title}
                      variants={motionPresets.fadeUp(12, 0.75)}
                      whileHover={{ x: 6 }}
                      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                      className="group/item py-4 first:pt-0 last:pb-0"
                    >
                      <div className="text-sm tracking-[0.10em] transition-colors duration-300 group-hover/item:text-white">
                        {p.title}
                      </div>
                      <div className="mt-2 text-sm leading-relaxed transition-colors duration-300 group-hover/item:text-white/90">
                        {p.desc}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </SpotlightCard>
          </motion.div>
        </motion.div>
      </div>
    </Section>
  );
}
