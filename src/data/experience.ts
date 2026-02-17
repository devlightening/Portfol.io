export type Experience = {
  company: string;
  role: string;
  dateRange: string;
  location: string;
  bullets: string[];
  tech: {
    web: string[];
    frameworks: string[];
    database: string[];
    tools: string[];
  };
};

export const experience: Experience[] = [
  {
    company: "Kivi Strategic Planning & Software (Kivi Software)",
    role: "Software Development Intern",
    dateRange: "Jul 2024 – Aug 2024",
    location: "Konyaaltı, Antalya (On-site)",
    bullets: [
      "Built and maintained WordPress-based web projects; developed customized themes/components and managed content workflows.",
      "Supported enterprise software focused on strategic management & performance tracking; participated in code review and debugging.",
      "Implemented basic CRUD flows in .NET systems and improved data flow between UI and server-side.",
      "Worked on responsive UI/UX improvements, fixing visual and functional issues across breakpoints.",
      "Reviewed technical documentation and completed testing processes for newly developed features.",
    ],
    tech: {
      web: ["WordPress", "PHP", "HTML5", "CSS3", "JavaScript"],
      frameworks: [".NET (C#)", "Bootstrap"],
      database: ["MS SQL Server"],
      tools: ["Visual Studio", "Git", "WordPress Admin Panel"],
    },
  },
];
