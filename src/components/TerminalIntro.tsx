"use client";

import { FormEvent, KeyboardEvent, useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Circle, CornerDownLeft, X } from "lucide-react";
import { experience } from "@/data/experience";
import { featuredProjects } from "@/data/projects";
import { site, useI18n } from "@/lib/site";
import { cn, usePrefersReducedMotion } from "@/lib/utils";

const SEEN_KEY = "portfolio_terminal_seen_v3";
const OPEN_EVENT = "portfolio:open-terminal";

type TerminalEntry = {
  id: number;
  command: string;
  lines: string[];
  tone?: "default" | "error" | "success";
};

export default function TerminalIntro() {
  const { locale, setLocale, t } = useI18n();
  const reduced = usePrefersReducedMotion();
  const [ready, setReady] = useState(false);
  const [open, setOpen] = useState(false);
  const [closing, setClosing] = useState(false);
  const [input, setInput] = useState("");
  const [entries, setEntries] = useState<TerminalEntry[]>([]);
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const entryId = useRef(0);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const outputRef = useRef<HTMLDivElement | null>(null);

  const copy = {
    en: {
      boot: [
        "[OK] profile.index loaded",
        "[OK] project.archive mounted",
        "[OK] experience.log synchronized",
      ],
      info: [
        "--about              print profile and core stack",
        "--experience         print internship timeline",
        "--projects           print selected build archive",
        "--contact            print direct contact channels",
        "--go <section>       open about / experience / projects / contact",
        "--github             open GitHub profile",
        "--lang tr|en         change interface language",
        "--enter              launch the portfolio",
        "--clear              clear command output",
      ],
      unknown: (value: string) => `Command not found: ${value}. Run --info for the command index.`,
      sectionError: "Section not found. Use about, experience, projects, or contact.",
      launching: "Launching portfolio interface...",
      navigating: (section: string) => `Opening ${section}...`,
      language: (value: string) => `Interface language changed to ${value.toUpperCase()}.`,
      languageError: "Language not found. Use --lang tr or --lang en.",
      github: "Opening github.com/devlightening...",
      contact: [
        `EMAIL     ${site.socials.email}`,
        `GITHUB    ${site.socials.github}`,
        `LINKEDIN  ${site.socials.linkedin}`,
      ],
    },
    tr: {
      boot: [
        "[OK] profile.index yüklendi",
        "[OK] project.archive bağlandı",
        "[OK] experience.log eşitlendi",
      ],
      info: [
        "--about              profil ve ana teknoloji yığınını göster",
        "--experience         staj zaman çizelgesini göster",
        "--projects           seçili proje arşivini göster",
        "--contact            doğrudan iletişim kanallarını göster",
        "--go <bölüm>         about / experience / projects / contact bölümünü aç",
        "--github             GitHub profilini aç",
        "--lang tr|en         arayüz dilini değiştir",
        "--enter              portfolyoyu başlat",
        "--clear              komut çıktısını temizle",
      ],
      unknown: (value: string) => `Komut bulunamadı: ${value}. Komut dizini için --info çalıştır.`,
      sectionError: "Bölüm bulunamadı. about, experience, projects veya contact kullan.",
      launching: "Portfolyo arayüzü başlatılıyor...",
      navigating: (section: string) => `${section} bölümü açılıyor...`,
      language: (value: string) => `Arayüz dili ${value.toUpperCase()} olarak değiştirildi.`,
      languageError: "Dil bulunamadı. --lang tr veya --lang en kullan.",
      github: "github.com/devlightening açılıyor...",
      contact: [
        `E-POSTA   ${site.socials.email}`,
        `GITHUB    ${site.socials.github}`,
        `LINKEDIN  ${site.socials.linkedin}`,
      ],
    },
  }[locale];

  const focusInput = useCallback(() => {
    window.setTimeout(() => inputRef.current?.focus(), reduced ? 0 : 220);
  }, [reduced]);

  useEffect(() => {
    const hasSeen = window.sessionStorage.getItem(SEEN_KEY) === "1";
    setReady(true);
    setOpen(!hasSeen);
    if (!hasSeen) focusInput();

    const handleOpen = () => {
      setEntries([]);
      setInput("");
      setClosing(false);
      setOpen(true);
      focusInput();
    };

    window.addEventListener(OPEN_EVENT, handleOpen);
    return () => window.removeEventListener(OPEN_EVENT, handleOpen);
  }, [focusInput]);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const closeOnEscape = (event: globalThis.KeyboardEvent) => {
      if (event.key === "Escape") closeTerminal();
    };
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  });

  useEffect(() => {
    outputRef.current?.scrollTo({ top: outputRef.current.scrollHeight, behavior: "smooth" });
  }, [entries]);

  const closeTerminal = (target?: string) => {
    window.sessionStorage.setItem(SEEN_KEY, "1");
    setClosing(true);

    window.setTimeout(
      () => {
        setOpen(false);
        setClosing(false);
        if (target) {
          window.setTimeout(() => {
            document.getElementById(target)?.scrollIntoView({ behavior: "smooth", block: "start" });
          }, 80);
        }
      },
      reduced ? 0 : 360
    );
  };

  const appendEntry = (command: string, lines: string[], tone?: TerminalEntry["tone"]) => {
    entryId.current += 1;
    setEntries((current) => [...current, { id: entryId.current, command, lines, tone }]);
  };

  const runCommand = (rawValue: string) => {
    const raw = rawValue.trim();
    if (!raw) return;

    setHistory((current) => [...current, raw]);
    setHistoryIndex(-1);
    setInput("");

    const [command, ...args] = raw.toLowerCase().split(/\s+/);

    if (command === "--clear" || command === "clear" || command === "cls") {
      setEntries([]);
      return;
    }

    if (command === "--info" || command === "info" || command === "help" || command === "--help") {
      appendEntry(raw, copy.info);
      return;
    }

    if (command === "--about" || command === "about") {
      appendEntry(raw, [
        `${site.name.toUpperCase()} / ${site.role[locale].toUpperCase()}`,
        site.headline[locale],
        `STACK  ${site.stack.join(" / ")}`,
      ]);
      return;
    }

    if (command === "--experience" || command === "experience" || command === "--botas") {
      appendEntry(
        raw,
        experience.flatMap((item, index) => [
          `${String(index + 1).padStart(2, "0")}  ${item.company.toUpperCase()}`,
          `    ${item.role[locale]} / ${item.dateRange[locale]}`,
          `    ${item.summary[locale]}`,
        ])
      );
      return;
    }

    if (command === "--projects" || command === "projects") {
      appendEntry(
        raw,
        featuredProjects.slice(0, 5).map(
          (project, index) =>
            `${String(index + 1).padStart(2, "0")}  ${project.title} / ${project.category[locale]}`
        )
      );
      return;
    }

    if (command === "--contact" || command === "contact") {
      appendEntry(raw, copy.contact);
      return;
    }

    if (command === "--github" || command === "github") {
      appendEntry(raw, [copy.github], "success");
      window.open(site.socials.github, "_blank", "noopener,noreferrer");
      return;
    }

    if (command === "--lang" || command === "lang") {
      const requested = args[0];
      if (requested === "tr" || requested === "en") {
        setLocale(requested);
        appendEntry(raw, [copy.language(requested)], "success");
      } else {
        appendEntry(raw, [copy.languageError], "error");
      }
      return;
    }

    if (command === "--go" || command === "go") {
      const section = args[0];
      const sectionIds = ["about", "experience", "projects", "contact"];
      if (sectionIds.includes(section)) {
        appendEntry(raw, [copy.navigating(section)], "success");
        window.setTimeout(() => closeTerminal(section), reduced ? 0 : 180);
      } else {
        appendEntry(raw, [copy.sectionError], "error");
      }
      return;
    }

    if (command === "--enter" || command === "enter" || command === "start") {
      appendEntry(raw, [copy.launching], "success");
      window.setTimeout(() => closeTerminal(), reduced ? 0 : 180);
      return;
    }

    appendEntry(raw, [copy.unknown(raw)], "error");
  };

  const submit = (event: FormEvent) => {
    event.preventDefault();
    runCommand(input);
  };

  const navigateHistory = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key !== "ArrowUp" && event.key !== "ArrowDown") return;
    event.preventDefault();
    if (!history.length) return;

    if (event.key === "ArrowUp") {
      const nextIndex = historyIndex < 0 ? history.length - 1 : Math.max(0, historyIndex - 1);
      setHistoryIndex(nextIndex);
      setInput(history[nextIndex]);
      return;
    }

    if (historyIndex < 0 || historyIndex >= history.length - 1) {
      setHistoryIndex(-1);
      setInput("");
      return;
    }

    const nextIndex = historyIndex + 1;
    setHistoryIndex(nextIndex);
    setInput(history[nextIndex]);
  };

  if (!ready) return null;

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={t("terminal.title")}
          initial={reduced ? false : { opacity: 0 }}
          animate={{ opacity: closing ? 0 : 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduced ? 0 : 0.34 }}
          className="fixed inset-0 z-[100] overflow-hidden bg-[#050506] p-3 sm:p-5"
        >
          <div className="terminal-grid absolute inset-0 opacity-60" aria-hidden />
          <div className="relative mx-auto flex h-full max-w-[1120px] items-center justify-center">
            <motion.div
              initial={reduced ? false : { opacity: 0, y: 18, scale: 0.99 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: reduced ? 0 : 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="grid h-[min(760px,calc(100dvh-24px))] w-full grid-rows-[auto_1fr_auto] overflow-hidden rounded-lg border border-white/16 bg-[#09090b]/95 shadow-[0_30px_100px_rgba(0,0,0,0.65)] sm:h-[min(760px,calc(100dvh-40px))]"
            >
              <div className="flex h-12 items-center justify-between border-b border-white/10 bg-white/[0.025] px-4">
                <div className="flex items-center gap-2" aria-hidden>
                  <Circle size={9} fill="currentColor" className="text-white/24" />
                  <Circle size={9} fill="currentColor" className="text-white/24" />
                  <Circle size={9} fill="currentColor" className="text-emerald-300/70" />
                </div>
                <div className="truncate px-3 font-mono text-[10px] tracking-[0.2em] text-white/45 sm:text-[11px]">
                  {t("terminal.title")}
                </div>
                <button
                  type="button"
                  onClick={() => closeTerminal()}
                  title={t("terminal.close")}
                  aria-label={t("terminal.close")}
                  className="flex h-8 w-8 items-center justify-center rounded-full text-white/45 transition hover:bg-white/8 hover:text-white"
                >
                  <X size={16} strokeWidth={1.7} />
                </button>
              </div>

              <div
                ref={outputRef}
                onClick={focusInput}
                className="overflow-y-auto px-4 py-6 font-mono sm:px-8 sm:py-8"
              >
                <div className="flex flex-col gap-8 border-b border-white/10 pb-7 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <div className="text-[10px] tracking-[0.24em] text-emerald-300/75">HY/OS 2026.08</div>
                    <div className="mt-3 text-[clamp(30px,6vw,68px)] leading-[0.9] text-white/94">
                      HALIL<br />YILDIRIM
                    </div>
                  </div>
                  <div className="text-left sm:text-right">
                    <div className="text-[10px] tracking-[0.23em] text-white/42">BACKEND / SYSTEMS / SECURITY</div>
                    <div className="mt-3 inline-flex items-center gap-2 text-[10px] tracking-[0.2em] text-emerald-300/75">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
                      {t("terminal.status")}
                    </div>
                  </div>
                </div>

                <div className="mt-7 space-y-2 text-[11px] leading-relaxed text-white/48 sm:text-xs">
                  {copy.boot.map((line) => (
                    <div key={line}>{line}</div>
                  ))}
                </div>

                <div className="mt-6 max-w-[72ch] text-xs leading-relaxed text-white/72 sm:text-sm">
                  {t("terminal.hint")}
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {[
                    { command: "--info", label: "COMMAND INDEX" },
                    { command: "--enter", label: "LAUNCH" },
                  ].map((item) => (
                    <button
                      key={item.command}
                      type="button"
                      onClick={() => runCommand(item.command)}
                      className="inline-flex items-center gap-2 rounded-md border border-white/12 bg-white/[0.025] px-3 py-2 text-[10px] tracking-[0.16em] text-white/64 transition hover:border-white/28 hover:bg-white/[0.06] hover:text-white"
                    >
                      <ArrowRight size={12} strokeWidth={1.8} />
                      {item.command} / {item.label}
                    </button>
                  ))}
                </div>

                <div aria-live="polite" className="mt-8 space-y-7">
                  {entries.map((entry) => (
                    <div key={entry.id}>
                      <div className="flex gap-2 text-xs sm:text-sm">
                        <span className="shrink-0 text-emerald-300/75">visitor@halil:~$</span>
                        <span className="break-all text-white/90">{entry.command}</span>
                      </div>
                      <div
                        className={cn(
                          "mt-3 space-y-1 whitespace-pre-wrap text-[11px] leading-relaxed sm:text-xs",
                          entry.tone === "error" && "text-red-300/80",
                          entry.tone === "success" && "text-emerald-200/75",
                          (!entry.tone || entry.tone === "default") && "text-white/60"
                        )}
                      >
                        {entry.lines.map((line, index) => (
                          <div key={`${entry.id}-${index}`}>{line}</div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <form onSubmit={submit} className="border-t border-white/10 bg-black/35 p-3 sm:p-4">
                <div className="flex min-h-12 items-center gap-2 rounded-md border border-white/14 bg-black/45 px-3 transition focus-within:border-emerald-300/45">
                  <span className="hidden shrink-0 font-mono text-xs text-emerald-300/75 sm:inline">
                    visitor@halil:~$
                  </span>
                  <span className="font-mono text-xs text-emerald-300/75 sm:hidden">$</span>
                  <input
                    ref={inputRef}
                    value={input}
                    onChange={(event) => setInput(event.target.value)}
                    onKeyDown={navigateHistory}
                    autoComplete="off"
                    spellCheck={false}
                    aria-label={t("terminal.placeholder")}
                    placeholder={t("terminal.placeholder")}
                    className="min-w-0 flex-1 bg-transparent font-mono text-xs text-white/90 outline-none placeholder:text-white/28 sm:text-sm"
                  />
                  <button
                    type="submit"
                    title="Run command"
                    aria-label="Run command"
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md text-white/45 transition hover:bg-white/8 hover:text-white"
                  >
                    <CornerDownLeft size={15} strokeWidth={1.7} />
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
