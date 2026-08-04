"use client";

import { useMemo, useState } from "react";
import { Check, Copy, Github, Linkedin, Mail } from "lucide-react";
import { site, useI18n } from "@/lib/site";
import { motionPresets } from "@/lib/utils";
import { Section } from "@/components/ui/Section";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { useToast } from "@/components/ui/Toast";
import { motion } from "framer-motion";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const emailText = useMemo(() => site.socials.email, []);
  const toast = useToast();
  const { locale, t } = useI18n();

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(emailText);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = emailText;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
    }
    setCopied(true);
    toast.push(t("contact.toastCopied"));
    window.setTimeout(() => setCopied(false), 1400);
  };

  return (
    <Section id="contact" eyebrow={t("contact.eyebrow")} kicker={t("contact.kicker")}>
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-15% 0px -15% 0px" }}
        variants={motionPresets.stagger(0.08, 0.1)}
        className="grid grid-cols-12 gap-8"
      >
        <motion.div variants={motionPresets.fadeUp(14, 0.8)} className="col-span-12 md:col-span-7">
          <div className="text-[30px] leading-tight text-white/92 md:text-[40px]">
            {t("contact.title")}
          </div>
          <p className="mt-4 max-w-[58ch] text-sm leading-relaxed text-white/70">
            {t("contact.body")}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <MagneticButton
              onClick={() => window.open(`mailto:${site.socials.email}`, "_self")}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-[11px] tracking-[0.24em] text-white/80 transition hover:border-white/35 hover:bg-white/10 hover:text-white"
            >
              <Mail size={14} strokeWidth={1.8} />
              EMAIL
            </MagneticButton>
            <MagneticButton
              onClick={() => window.open(site.socials.github, "_blank", "noreferrer")}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-[11px] tracking-[0.24em] text-white/80 transition hover:border-white/35 hover:bg-white/10 hover:text-white"
            >
              <Github size={14} strokeWidth={1.8} />
              GITHUB
            </MagneticButton>
            <MagneticButton
              onClick={() => window.open(site.socials.linkedin, "_blank", "noreferrer")}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-[11px] tracking-[0.24em] text-white/80 transition hover:border-white/35 hover:bg-white/10 hover:text-white"
            >
              <Linkedin size={14} strokeWidth={1.8} />
              LINKEDIN
            </MagneticButton>

            <MagneticButton
              onClick={copyEmail}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-[11px] tracking-[0.24em] text-white/80 transition hover:border-white/35 hover:bg-white/10 hover:text-white"
            >
              {copied ? <Check size={14} strokeWidth={1.8} /> : <Copy size={14} strokeWidth={1.8} />}
              {copied ? t("contact.copied") : t("contact.copy")}
            </MagneticButton>
          </div>

          <div className="mt-10 text-[11px] tracking-[0.22em] text-white/55">
            {t("contact.availability")}
          </div>
        </motion.div>

        <motion.div variants={motionPresets.fadeUp(14, 0.8)} className="col-span-12 md:col-span-5">
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
            <div className="text-[12px] tracking-[0.32em] text-white/55">{t("contact.details")}</div>
            <div className="mt-5 divide-y divide-white/10 text-sm text-white/70">
              <Detail label={t("contact.name")} value={site.name} />
              <Detail label={t("contact.role")} value={site.role[locale]} />
              <Detail label={t("contact.location")} value={site.location[locale]} />
              <Detail label={t("contact.email")} value={site.socials.email} />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </Section>
  );
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-4 py-3 first:pt-0 last:pb-0">
      <span className="text-white/50">{label}</span>
      <span className="text-right text-white/86">{value}</span>
    </div>
  );
}
