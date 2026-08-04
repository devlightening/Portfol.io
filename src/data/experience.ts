import type { LocalizedString } from "@/lib/site";

export type Experience = {
  company: string;
  role: LocalizedString;
  dateRange: string;
  location: LocalizedString;
  summary: LocalizedString;
  bullets: LocalizedString[];
  tech: {
    web: string[];
    backend: string[];
    database: string[];
    tools: string[];
  };
};

export const experience: Experience[] = [
  {
    company: "Kivi Strategic Planning & Software (Kivi Software)",
    role: {
      en: "Software Development Intern",
      tr: "Yazılım Geliştirme Stajyeri",
    },
    dateRange: "Jul 2024 - Aug 2024",
    location: {
      en: "Konyaaltı, Antalya (On-site)",
      tr: "Konyaaltı, Antalya (Yerinde)",
    },
    summary: {
      en: "Worked inside a real software team on WordPress-based web projects, enterprise software support, debugging, responsive UI improvements, and .NET CRUD flows.",
      tr: "Gerçek bir yazılım ekibinde WordPress tabanlı web projeleri, kurumsal yazılım desteği, hata ayıklama, responsive UI iyileştirmeleri ve .NET CRUD akışları üzerinde çalıştım.",
    },
    bullets: [
      {
        en: "Built and maintained WordPress-based web projects, including custom theme/component work and content workflows.",
        tr: "Özelleştirilmiş tema/bileşen çalışmaları ve içerik akışları dahil WordPress tabanlı web projeleri geliştirdim ve bakım yaptım.",
      },
      {
        en: "Supported enterprise software for strategic management and performance tracking through debugging, testing, and documentation review.",
        tr: "Stratejik yönetim ve performans takibi odaklı kurumsal yazılıma debug, test ve teknik dokümantasyon inceleme süreçleriyle destek verdim.",
      },
      {
        en: "Implemented basic CRUD flows in .NET systems and improved data flow between UI and server-side components.",
        tr: ".NET sistemlerde temel CRUD akışları geliştirdim ve UI ile server-side bileşenler arasındaki veri akışını iyileştirdim.",
      },
      {
        en: "Improved responsive UI behavior by fixing visual and functional issues across breakpoints.",
        tr: "Farklı ekran kırılımlarındaki görsel ve fonksiyonel problemleri gidererek responsive UI davranışını iyileştirdim.",
      },
    ],
    tech: {
      web: ["WordPress", "PHP", "HTML5", "CSS3", "JavaScript"],
      backend: [".NET", "C#", "Bootstrap"],
      database: ["MS SQL Server"],
      tools: ["Visual Studio", "Git", "WordPress Admin"],
    },
  },
];
