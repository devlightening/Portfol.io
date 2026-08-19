"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Building2,
  CalendarDays,
  CheckCircle2,
  ExternalLink,
  MapPin,
} from "lucide-react";
import { experience } from "@/data/experience";
import { useI18n } from "@/lib/site";
import { cn } from "@/lib/utils";
import { Section } from "@/components/ui/Section";

export default function Experience() {
  const { locale, t } = useI18n();

  return (
    <Section id="experience" eyebrow={t("experience.eyebrow")} kicker={t("experience.kicker")}>
      <div className="grid grid-cols-12 gap-8 lg:gap-12">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20% 0px -20% 0px" }}
          transition={{ duration: 0.55, ease: [0.2, 0.8, 0.2, 1] }}
          className="col-span-12 lg:col-span-4"
        >
          <div className="lg:sticky lg:top-28">
            <div className="text-[24px] leading-snug text-white/92 md:text-[30px]">
              {t("experience.title")}
            </div>
            <p className="mt-4 max-w-[46ch] text-sm leading-relaxed text-white/68">
              {t("experience.body")}
            </p>

            <div className="mt-8 grid grid-cols-2 border-y border-white/10 py-5">
              <Metric value="02" label={t("experience.roles")} />
              <Metric value="30" label={t("experience.cyberDays")} />
            </div>
          </div>
        </motion.div>

        <div className="relative col-span-12 lg:col-span-8">
          <div className="absolute bottom-0 left-[5px] top-0 w-px bg-white/12" />
          <div className="space-y-6">
            {experience.map((xp, index) => (
              <motion.article
                key={`${xp.company}-${xp.role.en}`}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-12% 0px -12% 0px" }}
                transition={{ duration: 0.58, delay: index * 0.08, ease: [0.2, 0.8, 0.2, 1] }}
                className="relative pl-8"
              >
                <span className="absolute left-0 top-8 h-[11px] w-[11px] rounded-full border-2 border-[#070709] bg-white/80 ring-1 ring-white/25" />

                <div className="overflow-hidden rounded-lg border border-white/12 bg-white/[0.03]">
                  <div className="p-5 sm:p-6">
                    <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                      <div className="flex min-w-0 items-start gap-4">
                        {xp.logo ? (
                          <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-md border border-white/15 bg-white p-2">
                            <Image
                              src={xp.logo}
                              alt={xp.logoAlt ?? xp.company}
                              fill
                              sizes="64px"
                              className="object-contain p-1.5"
                            />
                          </div>
                        ) : (
                          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md border border-white/12 bg-white/5 text-white/70">
                            <Building2 size={20} strokeWidth={1.6} />
                          </div>
                        )}

                        <div className="min-w-0">
                          <div className="text-[11px] tracking-[0.24em] text-white/45">
                            {String(index + 1).padStart(2, "0")} / {String(experience.length).padStart(2, "0")}
                          </div>
                          {xp.companyUrl ? (
                            <a
                              href={xp.companyUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="mt-2 inline-flex items-center gap-2 text-lg leading-tight text-white/94 transition hover:text-white"
                            >
                              {xp.company}
                              <ExternalLink size={14} strokeWidth={1.7} className="text-white/45" />
                            </a>
                          ) : (
                            <div className="mt-2 text-lg leading-tight text-white/94">{xp.company}</div>
                          )}
                          <div className="mt-2 text-sm text-white/68">{xp.role[locale]}</div>
                        </div>
                      </div>

                      <div className="space-y-2 text-[10px] tracking-[0.2em] text-white/52 sm:text-right">
                        <div className="flex items-center gap-2 sm:justify-end">
                          <CalendarDays size={13} strokeWidth={1.7} />
                          {xp.dateRange[locale].toUpperCase()}
                        </div>
                        <div className="flex items-center gap-2 sm:justify-end">
                          <MapPin size={12} strokeWidth={1.7} />
                          {xp.location[locale].toUpperCase()}
                        </div>
                        {xp.duration ? (
                          <div className="text-white/72">{xp.duration[locale].toUpperCase()}</div>
                        ) : null}
                      </div>
                    </div>

                    <p className="mt-6 border-y border-white/10 py-5 text-sm leading-relaxed text-white/74">
                      {xp.summary[locale]}
                    </p>

                    <div className={cn("mt-6 grid gap-4", xp.bullets.length > 3 && "md:grid-cols-2")}>
                      {xp.bullets.map((bullet) => (
                        <div key={bullet.en} className="flex gap-3 text-sm text-white/72">
                          <CheckCircle2
                            size={15}
                            strokeWidth={1.8}
                            className="mt-0.5 shrink-0 text-white/52"
                          />
                          <p className="leading-relaxed">{bullet[locale]}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="border-t border-white/10 bg-black/20 p-5 sm:p-6">
                    <div className="grid gap-5 sm:grid-cols-2">
                      {xp.skillGroups.map((group) => (
                        <TechBlock
                          key={group.label.en}
                          title={group.label[locale]}
                          items={group.items}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

function Metric({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="text-2xl leading-none text-white/92">{value}</div>
      <div className="mt-2 text-[10px] uppercase tracking-[0.18em] text-white/45">{label}</div>
    </div>
  );
}

function TechBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <div className="text-[10px] tracking-[0.23em] text-white/45">{title.toUpperCase()}</div>
      <div className="mt-3 flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="rounded-full border border-white/12 bg-white/[0.025] px-2.5 py-1 text-[9px] tracking-[0.14em] text-white/68"
          >
            {item.toUpperCase()}
          </span>
        ))}
      </div>
    </div>
  );
}
