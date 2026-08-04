"use client";

import { motion } from "framer-motion";
import { Building2, CalendarDays, CheckCircle2, MapPin } from "lucide-react";
import { experience } from "@/data/experience";
import { useI18n } from "@/lib/site";
import { cn } from "@/lib/utils";
import { Section } from "@/components/ui/Section";

export default function Experience() {
  const { locale, t } = useI18n();
  const xp = experience[0];

  return (
    <Section id="experience" eyebrow={t("experience.eyebrow")} kicker={t("experience.kicker")}>
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-20% 0px -20% 0px" }}
        transition={{ duration: 0.55, ease: [0.2, 0.8, 0.2, 1] }}
        className="grid grid-cols-12 gap-8"
      >
        <div className="col-span-12 lg:col-span-5">
          <div className="text-[22px] leading-snug text-white/92 md:text-[28px]">
            {t("experience.title")}
          </div>
          <p className="mt-4 max-w-[46ch] text-sm leading-relaxed text-white/68">
            {t("experience.body")}
          </p>
        </div>

        <div className="col-span-12 lg:col-span-7">
          <div className="rounded-2xl border border-white/12 bg-white/[0.03] p-6">
            <div className="flex flex-wrap items-start justify-between gap-5">
              <div>
                <div className="flex items-center gap-2 text-lg text-white/92">
                  <Building2 size={17} strokeWidth={1.7} />
                  {xp.company}
                </div>
                <div className="mt-2 text-sm text-white/65">{xp.role[locale]}</div>
              </div>
              <div className="space-y-2 text-[11px] tracking-[0.24em] text-white/55">
                <div className="flex items-center gap-2 lg:justify-end">
                  <CalendarDays size={13} strokeWidth={1.7} />
                  {xp.dateRange.toUpperCase()}
                </div>
                <div className="flex items-center gap-2 text-[10px] tracking-[0.22em] text-white/45 lg:justify-end">
                  <MapPin size={12} strokeWidth={1.7} />
                  {xp.location[locale].toUpperCase()}
                </div>
              </div>
            </div>

            <p className="mt-6 border-y border-white/10 py-5 text-sm leading-relaxed text-white/72">
              {xp.summary[locale]}
            </p>

            <div className="mt-6 grid gap-4">
              {xp.bullets.map((bullet) => (
                <div key={bullet.en} className="flex gap-3 text-sm text-white/75">
                  <CheckCircle2 size={15} strokeWidth={1.8} className="mt-0.5 shrink-0 text-white/55" />
                  <p className="leading-relaxed">{bullet[locale]}</p>
                </div>
              ))}
            </div>

            <div className="mt-7 grid gap-5 border-t border-white/10 pt-6 md:grid-cols-2">
              <TechBlock title="Web" items={xp.tech.web} />
              <TechBlock title="Backend" items={xp.tech.backend} />
              <TechBlock title="Database" items={xp.tech.database} />
              <TechBlock title="Tools" items={xp.tech.tools} />
            </div>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}

function TechBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <div className="text-[11px] tracking-[0.26em] text-white/50">{title.toUpperCase()}</div>
      <div className="mt-3 flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className={cn(
              "rounded-full border border-white/15 px-3 py-1",
              "text-[10px] tracking-[0.18em] text-white/70"
            )}
          >
            {item.toUpperCase()}
          </span>
        ))}
      </div>
    </div>
  );
}
