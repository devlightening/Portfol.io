"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { site, useI18n } from "@/lib/site";
import { motionPresets } from "@/lib/utils";
import { Section } from "@/components/ui/Section";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { useToast } from "@/components/ui/Toast";

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
          <div className="text-[clamp(26px,3vw,42px)] leading-tight tracking-[-0.02em] text-white/90">
            Open to internships, junior roles, and real-world backend challenges.
          </div>
          <div className="mt-4 text-sm leading-relaxed text-white/70">
            If you have a project, a role, or a problem worth solving, I’d love to talk.
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <MagneticButton
              onClick={() => window.open(`mailto:${site.socials.email}`, "_self")}
              className="rounded-full border border-white/20 bg-white/5 px-4 py-2 text-[11px] tracking-[0.28em] text-white/80 transition hover:border-white/35 hover:bg-white/10 hover:text-white"
            >
              EMAIL
            </MagneticButton>
            <MagneticButton
              onClick={() => window.open(site.socials.github, "_blank", "noreferrer")}
              className="rounded-full border border-white/20 bg-white/5 px-4 py-2 text-[11px] tracking-[0.28em] text-white/80 transition hover:border-white/35 hover:bg-white/10 hover:text-white"
            >
              <span className="inline-flex items-center gap-2">
                <span>GITHUB</span>
                <motion.span
                  aria-hidden
                  animate={{ x: [0, 2, 0] }}
                  transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                  className="opacity-80"
                >
                  ↗
                </motion.span>
              </span>
            </MagneticButton>
            <MagneticButton
              onClick={() => window.open(site.socials.linkedin, "_blank", "noreferrer")}
              className="rounded-full border border-white/20 bg-white/5 px-4 py-2 text-[11px] tracking-[0.28em] text-white/80 transition hover:border-white/35 hover:bg-white/10 hover:text-white"
            >
              <span className="inline-flex items-center gap-2">
                <span>LINKEDIN</span>
                <motion.span
                  aria-hidden
                  animate={{ x: [0, 2, 0] }}
                  transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                  className="opacity-80"
                >
                  ↗
                </motion.span>
              </span>
            </MagneticButton>

            <MagneticButton
              onClick={copyEmail}
              className="rounded-full border border-white/20 bg-white/5 px-4 py-2 text-[11px] tracking-[0.28em] text-white/80 transition hover:border-white/35 hover:bg-white/10 hover:text-white"
            >
              {copied ? t("contact.copied") : t("contact.copy")}
            </MagneticButton>
          </div>

          <div className="mt-10 text-[11px] tracking-[0.24em] text-white/55">
            AVAILABLE FOR INTERNSHIPS / JUNIOR BACKEND ROLES / FREELANCE
          </div>
        </motion.div>

        <motion.div
          variants={motionPresets.fadeUp(14, 0.8)}
          className="col-span-12 md:col-span-5"
        >
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
            <div className="text-[12px] tracking-[0.32em] text-white/55">DETAILS</div>
            <div className="mt-4 space-y-3 text-sm text-white/70">
              <div className="flex items-center justify-between gap-4">
                <span className="text-white/50">Name</span>
                <span className="text-white/85">{site.name}</span>
              </div>
              <div className="flex items-center justify-between gap-4">
                <span className="text-white/50">Role</span>
                <span className="text-white/85">{site.role[locale]}</span>
              </div>
              <div className="flex items-center justify-between gap-4">
                <span className="text-white/50">Location</span>
                <span className="text-white/85">{site.location[locale]}</span>
              </div>
              <div className="flex items-center justify-between gap-4">
                <span className="text-white/50">Email</span>
                <span className="text-white/85">{site.socials.email}</span>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </Section>
  );
}
