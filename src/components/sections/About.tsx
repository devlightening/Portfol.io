"use client";

import { motion } from "framer-motion";
import { Activity, Braces, Network } from "lucide-react";
import { site, useI18n } from "@/lib/site";
import { motionPresets } from "@/lib/utils";
import { Section } from "@/components/ui/Section";
import { Pill } from "@/components/ui/Pill";
import SpotlightCard from "@/components/ui/SpotlightCard";

const focusIcons = [Network, Braces, Activity] as const;

export default function About() {
  const { locale, t } = useI18n();

  return (
    <Section id="about" eyebrow={t("about.eyebrow")} kicker={t("about.kicker")}>
      <div className="grid grid-cols-12 gap-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-20% 0px -20% 0px" }}
          variants={motionPresets.stagger(0.08, 0.05)}
          className="col-span-12 md:col-span-7"
        >
          <div className="space-y-5">
            {site.aboutLong[locale].paragraphs.map((paragraph) => (
              <motion.p
                key={paragraph}
                variants={motionPresets.fadeUp(14, 0.8)}
                className="max-w-[68ch] text-sm leading-relaxed text-white/72"
              >
                {paragraph}
              </motion.p>
            ))}
          </div>

          <motion.div variants={motionPresets.fadeUp(14, 0.8)} className="mt-10">
            <div className="text-[12px] tracking-[0.32em] text-white/55">{t("about.stack")}</div>
            <div className="mt-4 flex flex-wrap gap-2">
              {site.stack.map((item) => (
                <Pill key={item}>{item.toUpperCase()}</Pill>
              ))}
            </div>
          </motion.div>

          <motion.div variants={motionPresets.fadeUp(14, 0.8)} className="mt-7">
            <div className="text-[12px] tracking-[0.32em] text-white/45">{t("about.extraStack")}</div>
            <div className="mt-4 flex flex-wrap gap-2">
              {site.extraStack.map((item) => (
                <Pill key={item} className="bg-white/[0.025] text-white/58">
                  {item.toUpperCase()}
                </Pill>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-20% 0px -20% 0px" }}
          variants={motionPresets.stagger(0.08, 0.08)}
          className="col-span-12 md:col-span-5"
        >
          <div className="text-[12px] tracking-[0.32em] text-white/55">{t("about.principles")}</div>
          <SpotlightCard className="mt-4">
            <div className="divide-y divide-white/10 p-5">
              {site.focusAreas.map((item, index) => {
                const Icon = focusIcons[index] ?? Braces;

                return (
                  <motion.div
                    key={item.title.en}
                    variants={motionPresets.fadeUp(12, 0.75)}
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                    className="py-5 first:pt-0 last:pb-0"
                  >
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/12 bg-white/5 text-white/75">
                        <Icon size={15} strokeWidth={1.7} />
                      </div>
                      <div>
                        <div className="text-sm tracking-[0.08em] text-white/90">
                          {item.title[locale]}
                        </div>
                        <div className="mt-2 text-sm leading-relaxed text-white/68">
                          {item.desc[locale]}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </SpotlightCard>
        </motion.div>
      </div>
    </Section>
  );
}
