"use client";

import { motion } from "framer-motion";
import { experience } from "@/data/experience";
import { cn } from "@/lib/utils";

export default function Experience() {
  const xp = experience[0];

  return (
    <section id="experience" className="relative py-24">
      <div className="mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20% 0px -20% 0px" }}
          transition={{ duration: 0.55, ease: [0.2, 0.8, 0.2, 1] }}
          className="grid grid-cols-12 gap-8"
        >
          <div className="col-span-12 lg:col-span-5">
            <div className="text-[12px] tracking-[0.26em] text-white/55">EXPERIENCE</div>
            <div className="mt-5 text-[22px] leading-snug text-white/90">
              Real-world team experience — shipping and learning fast.
            </div>
            <div className="mt-4 text-sm leading-relaxed text-white/70">
              Internship focused on web development, backend fundamentals, debugging, and responsive UI work.
            </div>
          </div>

          <div className="col-span-12 lg:col-span-7">
            <div className="rounded-3xl border border-white/12 bg-white/[0.03] p-6">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <div className="text-lg text-white/90">{xp.company}</div>
                  <div className="mt-1 text-sm text-white/65">{xp.role}</div>
                </div>
                <div className="text-[11px] tracking-[0.26em] text-white/55">
                  {xp.dateRange.toUpperCase()}
                  <div className="mt-1 text-[10px] tracking-[0.26em] text-white/45">
                    {xp.location.toUpperCase()}
                  </div>
                </div>
              </div>

              <div className="mt-6 grid gap-3">
                {xp.bullets.map((b) => (
                  <div key={b} className="flex gap-3 text-sm text-white/75">
                    <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-white/50" />
                    <p className="leading-relaxed">{b}</p>
                  </div>
                ))}
              </div>

              <div className="mt-7 grid gap-3 md:grid-cols-2">
                <TechBlock title="Web" items={xp.tech.web} />
                <TechBlock title="Frameworks" items={xp.tech.frameworks} />
                <TechBlock title="Database" items={xp.tech.database} />
                <TechBlock title="Tools" items={xp.tech.tools} />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function TechBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">
      <div className="text-[11px] tracking-[0.26em] text-white/55">{title.toUpperCase()}</div>
      <div className="mt-3 flex flex-wrap gap-2">
        {items.map((t) => (
          <span
            key={t}
            className={cn(
              "rounded-full border border-white/15 px-3 py-1",
              "text-[10px] tracking-[0.22em] text-white/70"
            )}
          >
            {t.toUpperCase()}
          </span>
        ))}
      </div>
    </div>
  );
}
