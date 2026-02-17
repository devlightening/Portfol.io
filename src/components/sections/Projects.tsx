
import React from "react";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import { cn } from "@/lib/utils";

export function Projects() {
  return (
    <section className="py-16 sm:py-24" id="projects">
      <div className="grid gap-10 sm:grid-cols-12 sm:gap-8">
        <div className="sm:col-span-4">
          <h2 className="text-xs font-medium tracking-[0.3em] text-white/70">
            PROJECTS
          </h2>
        </div>

        <div className="sm:col-span-8">
          <div className="grid gap-2">
            {projects.map((p) => (
              <motion.a
                key={p.id}
                href={p.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                initial={false}
                whileHover="hover"
                className={cn(
                  "group relative block rounded-2xl border border-white/10",
                  "bg-white/[0.03] p-6",
                  "transition-colors duration-200",
                  "hover:bg-white/[0.06]"
                )}
              >
                <div className="flex items-start justify-between gap-6">
                  <div className="min-w-0">
                    <div className="flex items-baseline gap-3">
                      <div className="relative">
                        <div className="text-sm font-medium tracking-tight text-white/85">
                          {p.title}
                        </div>
                        <motion.div
                          className="mt-2 h-px w-full origin-left bg-white/30"
                          variants={{
                            hover: { scaleX: 1 },
                          }}
                          initial={{ scaleX: 0 }}
                          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                        />
                      </div>

                      <motion.span
                        className="text-xs tracking-[0.18em] text-white/45"
                        variants={{ hover: { opacity: 1 } }}
                        initial={{ opacity: 0.85 }}
                        transition={{ duration: 0.2 }}
                      >
                        {p.year}
                      </motion.span>
                    </div>

                    <p className="mt-3 text-sm leading-6 text-white/60">
                      {p.description}
                    </p>
                  </div>

                  <div className="flex shrink-0 items-center gap-2">
                    <motion.span
                      className="text-xs tracking-[0.18em] text-white/55"
                      variants={{ hover: { opacity: 1 } }}
                      initial={{ opacity: 0.75 }}
                      transition={{ duration: 0.2 }}
                    >
                      GITHUB
                    </motion.span>
                    <motion.span
                      className="text-sm text-white/65"
                      variants={{ hover: { x: 0, opacity: 1 } }}
                      initial={{ x: -6, opacity: 0 }}
                      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                    >
                      ↗
                    </motion.span>
                  </div>
                </div>

                <motion.div
                  className="mt-5 flex flex-wrap gap-2"
                  variants={{ hover: { opacity: 1, y: 0 } }}
                  initial={{ opacity: 0.65, y: 2 }}
                  transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                >
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="inline-flex items-center rounded-full border border-white/12 bg-white/5 px-3 py-1.5 text-[10px] tracking-[0.18em] text-white/65"
                    >
                      {s.toUpperCase()}
                    </span>
                  ))}
                </motion.div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
