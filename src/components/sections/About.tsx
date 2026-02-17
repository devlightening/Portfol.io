
import React from "react";
import { motion } from "framer-motion";
import { fadeUp, lineReveal } from "@/lib/utils";

const tech = [
  "Next.js",
  "TypeScript",
  "React",
  "Tailwind",
  "Framer Motion",
  "Node.js",
  "Design Systems",
] as const;

const principles = [
  {
    title: "Clarity first",
    body: "Every detail should reduce cognitive load and increase intent.",
  },
  {
    title: "Motion with meaning",
    body: "Animation should guide attention—not compete for it.",
  },
  {
    title: "Performance is a feature",
    body: "Fast interactions create trust and a premium feel.",
  },
] as const;

export function About() {
  const bioLines = [
    "I build minimal, high-performance interfaces with a strong focus on typography,",
    "interaction details, and reusable systems.",
    "I like shipping work that feels quiet, deliberate, and expensive.",
  ];

  return (
    <section className="py-16 sm:py-24" id="about">
      <div className="grid gap-10 border-y border-white/10 py-12 sm:grid-cols-12 sm:gap-8">
        <div className="sm:col-span-4">
          <h2 className="text-xs font-medium tracking-[0.3em] text-white/70">
            ABOUT
          </h2>
        </div>

        <div className="sm:col-span-8">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }}>
            <motion.div variants={fadeUp.item(10, 0.6)}>
              <div className="text-xs tracking-[0.18em] text-white/55">BIO</div>
            </motion.div>

            <div className="mt-4 space-y-2 overflow-hidden">
              {bioLines.map((line, idx) => (
                <div key={line} className="overflow-hidden">
                  <motion.p
                    className="text-base leading-8 text-white/65 sm:text-lg"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    variants={lineReveal.line(0.08 + idx * 0.08, 0.75)}
                  >
                    {line}
                  </motion.p>
                </div>
              ))}
            </div>

            <motion.div
              className="mt-10"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp.container(0.06, 0)}
            >
              <motion.div variants={fadeUp.item(10, 0.55)}>
                <div className="text-xs tracking-[0.18em] text-white/55">
                  TECH
                </div>
              </motion.div>

              <motion.div
                className="mt-4 flex flex-wrap gap-2"
                variants={fadeUp.item(10, 0.55)}
              >
                {tech.map((t) => (
                  <span
                    key={t}
                    className="inline-flex items-center rounded-full border border-white/12 bg-white/5 px-3 py-1.5 text-[11px] tracking-[0.18em] text-white/70"
                  >
                    {t.toUpperCase()}
                  </span>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              className="mt-12"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp.container(0.06, 0)}
            >
              <motion.div variants={fadeUp.item(10, 0.55)}>
                <div className="text-xs tracking-[0.18em] text-white/55">
                  PRINCIPLES
                </div>
              </motion.div>

              <div className="mt-5 grid gap-3">
                {principles.map((p) => (
                  <motion.div
                    key={p.title}
                    variants={fadeUp.item(10, 0.55)}
                    className="rounded-2xl border border-white/10 bg-white/5 p-5"
                  >
                    <div className="flex items-start gap-3">
                      <div className="mt-1 h-1.5 w-1.5 rounded-full bg-white/40" />
                      <div>
                        <div className="text-sm font-medium tracking-tight text-white/80">
                          {p.title}
                        </div>
                        <div className="mt-1 text-sm leading-6 text-white/60">
                          {p.body}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
