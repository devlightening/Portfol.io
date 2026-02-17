"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { site, useI18n } from "@/lib/site";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const { locale, setLocale, t } = useI18n();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 160, damping: 30, mass: 0.2 });

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const goContact = () => {
    scrollTo("contact");
  };

  return (
    <>
      <motion.div
        style={{ scaleX }}
        className="fixed left-0 top-0 z-[60] h-[2px] w-full origin-left bg-white/70"
      />

      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed left-0 right-0 top-0 z-50",
          "border-b border-white/10 bg-black/35 backdrop-blur-xl"
        )}
      >
        <div className="mx-auto flex max-w-[1200px] items-center justify-between px-5 py-4">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex flex-col text-left leading-none"
          >
            <span className="text-xs tracking-[0.24em] text-white/70">
              {site.name.toUpperCase()}
            </span>
            <span className="mt-1 text-[11px] tracking-[0.22em] text-white/45">
              {site.role[locale].toUpperCase()}
            </span>
          </button>

          <div className="hidden text-[11px] tracking-[0.22em] text-white/45 md:block">
            {site.location[locale].toUpperCase()} ·{" "}
            {site.stack.slice(0, 3).join(" / ").toUpperCase()}
          </div>

          <div className="flex items-center gap-3">
            <nav className="hidden items-center gap-1 md:flex">
              <button
                onClick={() => scrollTo("about")}
                className="rounded-xl px-3 py-2 text-[11px] tracking-[0.22em] text-white/60 transition hover:bg-white/10 hover:text-white"
              >
                {t("nav.about").toUpperCase()}
              </button>
              <button
                onClick={() => scrollTo("experience")}
                className="rounded-xl px-3 py-2 text-[11px] tracking-[0.22em] text-white/60 transition hover:bg-white/10 hover:text-white"
              >
                {t("nav.experience").toUpperCase()}
              </button>
              <button
                onClick={() => scrollTo("projects")}
                className="rounded-xl px-3 py-2 text-[11px] tracking-[0.22em] text-white/60 transition hover:bg-white/10 hover:text-white"
              >
                {t("nav.projects").toUpperCase()}
              </button>
            </nav>

            <div className="hidden h-7 w-px bg-white/10 md:block" />

            <div className="flex items-center gap-1 rounded-full border border-white/15 bg-white/5 p-1">
              <button
                onClick={() => setLocale("en")}
                className={cn(
                  "rounded-full px-2 py-1 text-[11px] tracking-[0.18em] transition",
                  locale === "en" ? "bg-white/15 text-white" : "text-white/55 hover:text-white"
                )}
              >
                EN
              </button>
              <button
                onClick={() => setLocale("tr")}
                className={cn(
                  "rounded-full px-2 py-1 text-[11px] tracking-[0.18em] transition",
                  locale === "tr" ? "bg-white/15 text-white" : "text-white/55 hover:text-white"
                )}
              >
                TR
              </button>
            </div>

            <button
              onClick={goContact}
              className={cn(
                "rounded-full border border-white/20 bg-white/5 px-4 py-2",
                "text-[11px] tracking-[0.28em] text-white/80",
                "transition hover:border-white/35 hover:bg-white/10 hover:text-white"
              )}
            >
              {t("nav.contact").toUpperCase()}
            </button>
          </div>
        </div>
      </motion.header>
    </>
  );
}
