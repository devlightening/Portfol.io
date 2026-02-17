
"use client";

import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Contact() {
  const [copied, setCopied] = useState(false);

  const emailAddress = useMemo(() => {
    const value = site.socials.email;
    if (value.startsWith("mailto:")) return value.replace("mailto:", "");
    return value;
  }, []);

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(emailAddress);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1100);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = emailAddress;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1100);
    }
  };

  const primaryButton = cn(
    "inline-flex h-11 items-center justify-center rounded-full border border-white/15",
    "bg-white/5 px-5 text-xs font-medium tracking-[0.22em]",
    "text-white/80 transition-colors hover:bg-white/10 hover:text-white"
  );

  return (
    <section className="py-16 sm:py-24" id="contact">
      <div className="grid gap-10 border-y border-white/10 py-12 sm:grid-cols-12 sm:gap-8">
        <div className="sm:col-span-4">
          <h2 className="text-xs font-medium tracking-[0.3em] text-white/70">
            CONTACT
          </h2>
        </div>

        <div className="sm:col-span-8">
          <div className="max-w-3xl">
            <h3
              className="font-[var(--font-display)] uppercase text-white/90"
              style={{ fontSize: "clamp(28px, 4.2vw, 56px)", lineHeight: 1.05 }}
            >
              Let’s build something precise.
            </h3>
            <p className="mt-4 text-base leading-8 text-white/65 sm:text-lg">
              If you have a project, a role, or a product that needs a sharper
              interface—send a note. I respond quickly.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href={site.socials.email} className={primaryButton}>
              EMAIL
            </a>
            <a
              href={site.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={primaryButton}
            >
              LINKEDIN
            </a>
            <a
              href={site.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className={primaryButton}
            >
              GITHUB
            </a>

            <div className="relative ml-1">
              <button
                type="button"
                onClick={onCopy}
                className={cn(
                  "group inline-flex h-11 items-center justify-center rounded-full",
                  "border border-white/10 bg-white/[0.03] px-4",
                  "text-[11px] tracking-[0.22em] text-white/60",
                  "transition-colors hover:bg-white/[0.06] hover:text-white/80",
                  "active:scale-[0.98]"
                )}
              >
                COPY EMAIL
              </button>

              <AnimatePresence>
                {copied ? (
                  <motion.div
                    key="copied"
                    initial={{ opacity: 0, y: 6, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -4, scale: 0.98 }}
                    transition={{ duration: 0.18 }}
                    className="pointer-events-none absolute left-1/2 top-full mt-2 -translate-x-1/2 rounded-full border border-white/12 bg-black/60 px-3 py-1 text-[10px] tracking-[0.22em] text-white/70 backdrop-blur"
                  >
                    COPIED
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
