"use client";

import { createContext, createElement, useContext, useEffect, useMemo, useState } from "react";

export type Locale = "en" | "tr";

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
  tagline: {
    en: "Building reliable backend systems with clean architecture, strong fundamentals, and a bias for shipping.",
    tr: "Clean architecture, güçlü temeller ve üretime odaklı bir yaklaşımla güvenilir backend sistemler geliştiriyorum.",
  },
  aboutLong: {
    en: {
     paragraphs: [
        "I am a senior Computer Engineering student at Tarsus University and a Backend Developer with a strong passion for designing scalable, resilient, and high-performance distributed systems.",
        "My primary technical focus is on the .NET ecosystem, where I specialize in building backend-heavy applications using Microservices architecture, Domain-Driven Design (DDD), and CQRS. I have hands-on experience with modern backend technologies such as RabbitMQ for asynchronous messaging, Docker for containerization, and Redis for distributed caching.",
        "I am highly interested in Event-Driven Architectures, system observability, and clean architectural principles. I strive to write maintainable, well-structured code and continuously improve system reliability and performance in agile development environments.",
        "I am motivated to contribute to large-scale, production-grade systems where engineering quality, architectural thinking, and continuous learning are valued.",
      ],
    },
    tr: {
      paragraphs: [
        "Tarsus Üniversitesi Bilgisayar Mühendisliği son sınıf öğrencisiyim ve ölçeklenebilir, dayanıklı ve yüksek performanslı dağıtık sistemler tasarlamaya odaklanan bir .NET Backend Geliştiricisiyim.",
        "Ana uzmanlık alanım .NET ekosistemi (ASP.NET Core). Backend odaklı ürünler geliştirirken Clean Architecture, Mikroservis yaklaşımları, Domain-Driven Design (DDD) ve uygun senaryolarda CQRS prensiplerini; anlaşılabilirlik ve sürdürülebilirlik sağladığı ölçüde kullanıyorum. RESTful API tasarımı, veri sözleşmeleri ve servis sınırlarının üretim koşullarına uygun kurgulanması konularında rahatım.",
        "RabbitMQ ile event-driven / message-based iletişim, Docker ile konteyner tabanlı geliştirme ve dağıtım akışları, Redis ile dağıtık önbellekleme konularında uygulamalı deneyime sahibim. Ayrıca EventStore benzeri yaklaşımlar ve gerçek sistemlerde tutarlılık, eventual consistency ve güvenilirlik (reliability) pattern’lerinin getirdiği trade-off’lar ilgimi çekiyor.",
        "Mühendislik kalitesine önem veriyorum: gözlemlenebilirlik (log/metric/trace), net sahiplik, defensive coding ve performans odaklı tasarım. Zamanla ekip büyüdükçe ölçeklenebilen ve güvenle evrilebilen kod tabanları üretmeyi hedefliyorum.",
        "Mimari düşünmenin, sürekli öğrenmenin ve ölçülebilir sistem güvenilirliğinin değer gördüğü production-grade platformlarda; tasarımdan yayına kadar sorumluluk alarak katkı sağlamaya motiveyim.",
      ],
    },
  },
  stack: [".NET", "PostgreSQL", "Docker", "RabbitMQ", "Redis", "EventStore"],
  extraStack: ["TypeScript", "React Native"],
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
    "hero.about": "ABOUT",
    "hero.scroll": "SCROLL",

    "projects.eyebrow": "PROJECTS",
    "projects.kicker": "FEATURED + REPOS",
    "projects.featured": "FEATURED",
    "projects.more": "MORE REPOS",
    "projects.view": "VIEW",
    "projects.open": "OPEN ON GITHUB",

    "contact.eyebrow": "CONTACT",
    "contact.kicker": "LET’S BUILD",
    "contact.copy": "COPY EMAIL",
    "contact.copied": "COPIED ✓",
    "contact.toastCopied": "Copied to clipboard",
  },
  tr: {
    "nav.about": "Hakkımda",
    "nav.experience": "Deneyim",
    "nav.projects": "Projeler",
    "nav.contact": "İletişim",

    "hero.kicker": "SİSTEMLER / MİMARİ / ÜRETİM",
    "hero.about": "HAKKIMDA",
    "hero.scroll": "KAYDIR",

    "projects.eyebrow": "PROJELER",
    "projects.kicker": "ÖNE ÇIKANLAR + REPO'LAR",
    "projects.featured": "ÖNE ÇIKANLAR",
    "projects.more": "DİĞER REPO'LAR",
    "projects.view": "GÖRÜNTÜLE",
    "projects.open": "GITHUB’DA AÇ",

    "contact.eyebrow": "İLETİŞİM",
    "contact.kicker": "HADİ YAPALIM",
    "contact.copy": "E-POSTAYI KOPYALA",
    "contact.copied": "KOPYALANDI ✓",
    "contact.toastCopied": "Panoya kopyalandı",
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
    if (saved === "en" || saved === "tr") setLocaleState(saved);
  }, []);

  const setLocale = (l: Locale) => {
    setLocaleState(l);
    window.localStorage.setItem(STORAGE_KEY, l);
    document.documentElement.lang = l;
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

  return createElement(I18nContext.Provider, { value, children });
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used inside I18nProvider");
  return ctx;
}
