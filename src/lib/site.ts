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
        "I’m Halil Yıldırım, a Junior .NET Backend Developer focused on building scalable, maintainable APIs with ASP.NET Core. I care about clean architecture and pragmatic delivery—shipping features that remain reliable in production.",
        "I’ve built RESTful services with authentication (JWT/cookies), real-time capabilities with SignalR, and microservice-style local environments using Docker Compose. I’m especially interested in event-driven systems using RabbitMQ and Redis, and I enjoy CQRS-style patterns where they fit.",
        "Right now I’m strengthening my distributed-systems fundamentals while building production-minded projects and iterating fast with clean, testable code.",
      ],
    },
    tr: {
      paragraphs: [
        "Ben Halil Yıldırım, ASP.NET Core ile ölçeklenebilir ve sürdürülebilir API’ler geliştirmeye odaklanan Junior .NET Backend Developer’ım. Temiz mimariyi ve üretimde sağlam kalan çözümler üretmeyi önemsiyorum.",
        "REST servisleri, kimlik doğrulama (JWT/cookie), SignalR ile gerçek zamanlı özellikler ve Docker Compose ile mikroservis benzeri yerel kurulumlar üzerinde çalıştım. Event-driven sistemler (RabbitMQ, Redis) ve uygun yerlerde CQRS tarzı yaklaşımlar ilgi alanım.",
        "Şu anda dağıtık sistemler temellerimi güçlendirirken, proje geliştirme hızımı koruyup kod kalitesini yüksek tutmaya odaklanıyorum.",
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
