
export type Project = {
  id: string;
  title: string;
  year: string;
  stack: string[];
  description: string;
  githubUrl: string;
};

export const projects: Project[] = [
  {
    id: "monochrome-portfolio",
    title: "Monochrome Portfolio",
    year: "2026",
    stack: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    description:
      "A futuristic black/white portfolio system with motion presets, smooth scrolling, and reusable UI primitives.",
    githubUrl: "https://github.com/your-handle/monochrome-portfolio",
  },
  {
    id: "design-system-kit",
    title: "Design System Kit",
    year: "2025",
    stack: ["React", "TypeScript", "Storybook", "Tokens"],
    description:
      "A small component library focused on typography, spacing, and accessible interaction states.",
    githubUrl: "https://github.com/your-handle/design-system-kit",
  },
  {
    id: "motion-lab",
    title: "Motion Lab",
    year: "2024",
    stack: ["Framer Motion", "GSAP", "UI Engineering"],
    description:
      "A collection of micro-interactions and layout transitions built to feel premium while staying lightweight.",
    githubUrl: "https://github.com/your-handle/motion-lab",
  },
];
