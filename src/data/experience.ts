import type { LocalizedString } from "@/lib/site";

export type ExperienceSkillGroup = {
  label: LocalizedString;
  items: string[];
};

export type Experience = {
  company: string;
  companyUrl?: string;
  logo?: string;
  logoAlt?: string;
  role: LocalizedString;
  dateRange: LocalizedString;
  location: LocalizedString;
  duration?: LocalizedString;
  summary: LocalizedString;
  bullets: LocalizedString[];
  skillGroups: ExperienceSkillGroup[];
};

export const experience: Experience[] = [
  {
    company: "BOTAŞ Genel Müdürlüğü",
    companyUrl: "https://www.botas.gov.tr/",
    logo: "/botas-logo.png",
    logoAlt: "BOTAŞ logo",
    role: {
      en: "Cyber Security Intern",
      tr: "Siber Güvenlik Stajyeri",
    },
    dateRange: {
      en: "Jul 2026 - Aug 2026",
      tr: "Tem 2026 - Ağu 2026",
    },
    location: {
      en: "Ankara, Türkiye (On-site)",
      tr: "Ankara, Türkiye (Yerinde)",
    },
    duration: {
      en: "30 working days",
      tr: "30 iş günü",
    },
    summary: {
      en: "Worked with the Cyber Security Directorate across authorized web security assessments, layered SOC technologies, endpoint and data protection, network visibility, and industrial control system security.",
      tr: "Siber Güvenlik Müdürlüğü bünyesinde yetkilendirilmiş web güvenliği değerlendirmeleri, katmanlı SOC teknolojileri, uç nokta ve veri koruma, ağ görünürlüğü ve endüstriyel kontrol sistemi güvenliği üzerine çalıştım.",
    },
    bullets: [
      {
        en: "Performed scoped, low-impact web security reviews with OWASP ZAP and Kali Linux; evaluated CORS, CSP, TLS, cookies, security headers, JavaScript dependencies, and WAF behavior while separating verified evidence from false positives.",
        tr: "OWASP ZAP ve Kali Linux ile kapsamı belirlenmiş, düşük etkili web güvenliği incelemeleri gerçekleştirdim; CORS, CSP, TLS, cookie, güvenlik başlıkları, JavaScript bağımlılıkları ve WAF davranışını doğrulanmış kanıt ile yanlış pozitifleri ayırarak değerlendirdim.",
      },
      {
        en: "Observed layered SOC workflows spanning CrowdStrike Falcon EDR, Logsign SIEM/SOAR, Binayze AIR, Vectra AI NDR, and Brandefense DRP; studied alert correlation, forensic evidence, isolation, and incident response.",
        tr: "CrowdStrike Falcon EDR, Logsign SIEM/SOAR, Binayze AIR, Vectra AI NDR ve Brandefense DRP katmanlarını kapsayan SOC iş akışlarını gözlemledim; alarm korelasyonu, adli kanıt, izolasyon ve olay müdahalesi süreçlerini inceledim.",
      },
      {
        en: "Evaluated F5 WAF, Trend Micro DLP, privileged access, VPN/DNS logging, and network traffic analysis through authorized demos and isolated laboratory exercises.",
        tr: "F5 WAF, Trend Micro DLP, ayrıcalıklı erişim, VPN/DNS loglama ve ağ trafiği analizini yetkili demolar ve izole laboratuvar çalışmaları üzerinden değerlendirdim.",
      },
      {
        en: "Built practical understanding of OT/SCADA defense through the Purdue Model, PLC/RTU/HMI components, IT/OT segmentation, industrial DMZs, data diodes, passive monitoring, resilience, and safety requirements.",
        tr: "Purdue Modeli, PLC/RTU/HMI bileşenleri, IT/OT segmentasyonu, endüstriyel DMZ, veri diyotu, pasif izleme, dayanıklılık ve emniyet gereksinimleri üzerinden OT/SCADA savunmasına yönelik uygulamalı bir bakış geliştirdim.",
      },
    ],
    skillGroups: [
      {
        label: { en: "Assessment", tr: "Değerlendirme" },
        items: ["OWASP ZAP", "Kali Linux", "OpenVAS", "F5 WAF", "TLS/DNS"],
      },
      {
        label: { en: "Security Operations", tr: "Güvenlik Operasyonları" },
        items: ["SOC", "SIEM/SOAR", "EDR/NDR", "DLP", "Incident Response"],
      },
      {
        label: { en: "Network", tr: "Ağ" },
        items: ["Wireshark", "VPN", "DNS", "Traffic Analysis", "Segmentation"],
      },
      {
        label: { en: "Industrial Security", tr: "Endüstriyel Güvenlik" },
        items: ["OT/SCADA", "Purdue Model", "PLC/RTU/HMI", "Industrial DMZ"],
      },
    ],
  },
  {
    company: "Kivi Strategic Planning & Software",
    role: {
      en: "Software Development Intern",
      tr: "Yazılım Geliştirme Stajyeri",
    },
    dateRange: {
      en: "Jul 2024 - Aug 2024",
      tr: "Tem 2024 - Ağu 2024",
    },
    location: {
      en: "Konyaaltı, Antalya (On-site)",
      tr: "Konyaaltı, Antalya (Yerinde)",
    },
    summary: {
      en: "Worked inside a software team on WordPress-based web projects, enterprise software support, debugging, responsive UI improvements, and .NET CRUD flows.",
      tr: "Bir yazılım ekibinde WordPress tabanlı web projeleri, kurumsal yazılım desteği, hata ayıklama, responsive UI iyileştirmeleri ve .NET CRUD akışları üzerinde çalıştım.",
    },
    bullets: [
      {
        en: "Built and maintained WordPress-based web projects, including custom theme and component work.",
        tr: "Özel tema ve bileşen çalışmaları dahil WordPress tabanlı web projeleri geliştirdim ve bakım yaptım.",
      },
      {
        en: "Supported enterprise software through debugging, testing, and technical documentation review.",
        tr: "Kurumsal yazılıma debug, test ve teknik dokümantasyon inceleme süreçleriyle destek verdim.",
      },
      {
        en: "Implemented basic CRUD flows in .NET systems and improved data flow between UI and server-side components.",
        tr: ".NET sistemlerde temel CRUD akışları geliştirdim ve UI ile server-side bileşenler arasındaki veri akışını iyileştirdim.",
      },
    ],
    skillGroups: [
      {
        label: { en: "Web", tr: "Web" },
        items: ["WordPress", "PHP", "HTML5", "CSS3", "JavaScript"],
      },
      {
        label: { en: "Backend", tr: "Backend" },
        items: [".NET", "C#", "MS SQL Server", "Bootstrap"],
      },
      {
        label: { en: "Workflow", tr: "İş Akışı" },
        items: ["Visual Studio", "Git", "Testing", "Debugging"],
      },
    ],
  },
];
