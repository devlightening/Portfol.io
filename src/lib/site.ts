"use client";

import { createContext, createElement, useContext, useEffect, useMemo, useState } from "react";

export type Locale = "en" | "tr";
export type LocalizedString = Record<Locale, string>;

const STORAGE_KEY = "portfolio_locale_v1";

export const site = {
  name: "Halil Yıldırım",
  role: {
    en: "Junior .NET Backend Developer",
    tr: "Junior .NET Backend Geliştirici",
  },
  location: {
    en: "Türkiye",
    tr: "Türkiye",
  },
  headline: {
    en: "Security-aware backend systems, built with clean boundaries.",
    tr: "Temiz sınırlar ve güvenlik bilinciyle tasarlanan backend sistemler.",
  },
  tagline: {
    en: "I build .NET APIs and distributed systems with a focus on reliability, observability, maintainable architecture, and security-minded delivery.",
    tr: ".NET API'ler ve dağıtık sistemleri; güvenilirlik, gözlemlenebilirlik, sürdürülebilir mimari ve güvenlik bilinci odağıyla geliştiriyorum.",
  },
  aboutLong: {
    en: {
      paragraphs: [
        "I am a senior Computer Engineering student at Tarsus University and a backend developer focused on scalable, resilient, and observable distributed systems.",
        "My internships at Kivi Software and BOTAŞ gave me hands-on exposure to software delivery, enterprise workflows, authorized security assessment, SOC operations, and OT/SCADA security.",
        "My strongest area is the .NET ecosystem: ASP.NET Core APIs, Clean Architecture, Domain-Driven Design, CQRS, MediatR, API gateway patterns, and service-to-service communication models.",
        "I work hands-on with RabbitMQ, MassTransit, Redis, Docker, PostgreSQL, MongoDB, EventStoreDB, and monitoring concepts such as health checks, correlation IDs, logging, and traceability.",
        "I care about clear contracts, defensive coding, measurable reliability, and codebases that can keep evolving as requirements and teams grow.",
      ],
    },
    tr: {
      paragraphs: [
        "Tarsus Üniversitesi Bilgisayar Mühendisliği son sınıf öğrencisiyim; ölçeklenebilir, dayanıklı ve gözlemlenebilir dağıtık sistemlere odaklanan bir backend geliştiricisiyim.",
        "Kivi Software ve BOTAŞ stajlarım sayesinde yazılım teslimi, kurumsal iş akışları, yetkili güvenlik değerlendirmeleri, SOC operasyonları ve OT/SCADA güvenliği alanlarında uygulamalı deneyim kazandım.",
        "En güçlü alanım .NET ekosistemi: ASP.NET Core API'ler, Clean Architecture, Domain-Driven Design, CQRS, MediatR, API gateway desenleri ve servisler arası iletişim modelleri.",
        "RabbitMQ, MassTransit, Redis, Docker, PostgreSQL, MongoDB, EventStoreDB ve health check, correlation ID, logging, traceability gibi gözlemlenebilirlik konularında uygulamalı çalışmalar yapıyorum.",
        "Net sözleşmeler, defensive coding, ölçülebilir güvenilirlik ve ekip büyüdükçe evrilebilen kod tabanları üretmeye önem veriyorum.",
      ],
    },
  },
  heroStats: [
    {
      value: "39",
      label: { en: "public repos", tr: "public repo" },
    },
    {
      value: "02",
      label: { en: "internships", tr: "staj deneyimi" },
    },
    {
      value: ".NET",
      label: { en: "core focus", tr: "ana odak" },
    },
  ],
  focusAreas: [
    {
      title: { en: "Distributed systems", tr: "Dağıtık sistemler" },
      desc: {
        en: "Microservice patterns, service boundaries, messaging, and data consistency trade-offs.",
        tr: "Mikroservis desenleri, servis sınırları, mesajlaşma ve veri tutarlılığı trade-off'ları.",
      },
    },
    {
      title: { en: "Backend architecture", tr: "Backend mimarisi" },
      desc: {
        en: "Clean Architecture, DDD, CQRS, MediatR, repository/unit-of-work patterns, and API design.",
        tr: "Clean Architecture, DDD, CQRS, MediatR, repository/unit-of-work desenleri ve API tasarımı.",
      },
    },
    {
      title: { en: "Security-aware delivery", tr: "Güvenlik odaklı teslim" },
      desc: {
        en: "Secure API thinking informed by web assessment, SOC workflows, network visibility, and OT/SCADA fundamentals.",
        tr: "Web değerlendirmesi, SOC iş akışları, ağ görünürlüğü ve OT/SCADA temelleriyle beslenen güvenli API yaklaşımı.",
      },
    },
  ],
  stack: [".NET", "ASP.NET Core", "PostgreSQL", "Docker", "RabbitMQ", "Redis", "EventStoreDB"],
  extraStack: [
    "MongoDB",
    "MassTransit",
    "YARP",
    "Ocelot",
    "TypeScript",
    "OWASP ZAP",
    "Wireshark",
  ],
  socials: {
    github: "https://github.com/devlightening/",
    linkedin: "https://www.linkedin.com/in/0001myprofile",
    email: "ce.hybusiness@gmail.com",
  },
} as const;

export type Site = typeof site;

type DictValue = string | string[];
type Dict = Record<string, DictValue>;

export const dictionaries: Record<Locale, Dict> = {
  en: {
    "nav.about": "About",
    "nav.experience": "Experience",
    "nav.projects": "Projects",
    "nav.contact": "Contact",

    "hero.kicker": "SYSTEMS / ARCHITECTURE / SHIPPING",
    "hero.about": "POSITIONING",
    "hero.scroll": "SCROLL",
    "hero.github": "GitHub",
    "hero.email": "Email",
    "hero.console": "Open console",

    "about.eyebrow": "ABOUT",
    "about.kicker": "BIO / TECH / PRINCIPLES",
    "about.principles": "ENGINEERING FOCUS",
    "about.stack": "CORE STACK",
    "about.extraStack": "ALSO USING",

    "experience.eyebrow": "EXPERIENCE",
    "experience.kicker": "SOFTWARE / CYBERSECURITY / TEAMWORK",
    "experience.title": "Two internships, one wider engineering perspective.",
    "experience.body": "From software delivery at Kivi to critical-infrastructure security at BOTAŞ, each role strengthened a different part of how I design and evaluate systems.",
    "experience.roles": "internship roles",
    "experience.cyberDays": "cybersecurity days",

    "terminal.title": "HALIL.Y / PORTFOLIO CONSOLE",
    "terminal.status": "SYSTEM READY",
    "terminal.hint": "Run --info to inspect the interface, or --enter to launch the portfolio.",
    "terminal.placeholder": "type a command",
    "terminal.close": "Close console",

    "projects.eyebrow": "PROJECTS",
    "projects.kicker": "FEATURED + GITHUB ARCHIVE",
    "projects.featured": "FEATURED",
    "projects.more": "SELECTED REPOS",
    "projects.view": "VIEW REPO",
    "projects.open": "OPEN ON GITHUB",
    "projects.repo": "REPOSITORY",
    "projects.githubArchive": "View full GitHub archive",

    "contact.eyebrow": "CONTACT",
    "contact.kicker": "LET'S BUILD",
    "contact.title": "Open to junior backend roles, internships, and production-minded projects.",
    "contact.body": "If your team needs someone who enjoys APIs, distributed systems, and clean delivery, I would be happy to talk.",
    "contact.copy": "COPY EMAIL",
    "contact.copied": "COPIED",
    "contact.toastCopied": "Copied to clipboard",
    "contact.availability": "AVAILABLE FOR INTERNSHIPS / JUNIOR BACKEND ROLES / FREELANCE",
    "contact.details": "DETAILS",
    "contact.name": "Name",
    "contact.role": "Role",
    "contact.location": "Location",
    "contact.email": "Email",
  },
  tr: {
    "nav.about": "Hakkımda",
    "nav.experience": "Deneyim",
    "nav.projects": "Projeler",
    "nav.contact": "İletişim",

    "hero.kicker": "SİSTEMLER / MİMARİ / ÜRETİM",
    "hero.about": "KONUMLANDIRMA",
    "hero.scroll": "KAYDIR",
    "hero.github": "GitHub",
    "hero.email": "E-posta",
    "hero.console": "Konsolu aç",

    "about.eyebrow": "HAKKIMDA",
    "about.kicker": "BİYOGRAFİ / TEKNOLOJİ / PRENSİPLER",
    "about.principles": "MÜHENDİSLİK ODAĞI",
    "about.stack": "ANA STACK",
    "about.extraStack": "AYRICA",

    "experience.eyebrow": "DENEYİM",
    "experience.kicker": "YAZILIM / SİBER GÜVENLİK / EKİP ÇALIŞMASI",
    "experience.title": "İki staj, daha geniş bir mühendislik bakışı.",
    "experience.body": "Kivi'deki yazılım tesliminden BOTAŞ'taki kritik altyapı güvenliğine uzanan bu deneyimler, sistemleri tasarlama ve değerlendirme yaklaşımımın farklı yönlerini güçlendirdi.",
    "experience.roles": "staj rolü",
    "experience.cyberDays": "siber güvenlik günü",

    "terminal.title": "HALIL.Y / PORTFOLYO KONSOLU",
    "terminal.status": "SİSTEM HAZIR",
    "terminal.hint": "Arayüzü incelemek için --info, portfolyoyu açmak için --enter komutunu çalıştır.",
    "terminal.placeholder": "bir komut yaz",
    "terminal.close": "Konsolu kapat",

    "projects.eyebrow": "PROJELER",
    "projects.kicker": "ÖNE ÇIKANLAR + GITHUB ARŞİVİ",
    "projects.featured": "ÖNE ÇIKANLAR",
    "projects.more": "SEÇİLİ REPO'LAR",
    "projects.view": "REPO'YU GÖR",
    "projects.open": "GITHUB'DA AÇ",
    "projects.repo": "REPOSITORY",
    "projects.githubArchive": "Tüm GitHub arşivini gör",

    "contact.eyebrow": "İLETİŞİM",
    "contact.kicker": "BİRLİKTE GELİŞTİRELİM",
    "contact.title": "Junior backend rollerine, staj fırsatlarına ve üretim odaklı projelere açığım.",
    "contact.body": "API'ler, dağıtık sistemler ve temiz teslim süreçleriyle ilgilenen bir ekip arıyorsanız konuşmaktan memnun olurum.",
    "contact.copy": "E-POSTAYI KOPYALA",
    "contact.copied": "KOPYALANDI",
    "contact.toastCopied": "Panoya kopyalandı",
    "contact.availability": "STAJ / JUNIOR BACKEND ROLLERİ / FREELANCE İÇİN UYGUN",
    "contact.details": "DETAYLAR",
    "contact.name": "İsim",
    "contact.role": "Rol",
    "contact.location": "Konum",
    "contact.email": "E-posta",
  },
};

type I18nValue = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: (key: string) => string;
  ta: (key: string) => string[];
};

const I18nContext = createContext<I18nValue | null>(null);

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY) as Locale | null;
    if (saved === "en" || saved === "tr") {
      window.setTimeout(() => setLocaleState(saved), 0);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const setLocale = (l: Locale) => {
    setLocaleState(l);
    window.localStorage.setItem(STORAGE_KEY, l);
  };

  const value = useMemo<I18nValue>(() => {
    const dict = dictionaries[locale];

    const t = (key: string) => {
      const v = dict[key];
      if (!v) return key;
      return Array.isArray(v) ? v.join(" ") : v;
    };

    const ta = (key: string) => {
      const v = dict[key];
      if (!v) return [];
      return Array.isArray(v) ? v : [String(v)];
    };

    return { locale, setLocale, t, ta };
  }, [locale]);

  return createElement(I18nContext.Provider, { value }, children);
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used inside I18nProvider");
  return ctx;
}
