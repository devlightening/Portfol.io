import React from "react";

type SectionProps = {
  id?: string;
  eyebrow?: string;
  kicker?: string;
  className?: string;
  children: React.ReactNode;
};

export function Section({ id, eyebrow, kicker, className, children }: SectionProps) {
  return (
    <section id={id} className={className ?? ""}>
      <div className="mx-auto max-w-[1200px] px-5 py-16 md:py-24">
        {eyebrow || kicker ? (
          <div className="flex flex-col items-start justify-between gap-3 border-b border-white/10 pb-6 sm:flex-row sm:items-end sm:gap-6">
            <div className="text-[12px] tracking-[0.32em] text-white/55">
              {(eyebrow ?? "").toUpperCase()}
            </div>
            <div className="max-w-full text-[11px] tracking-[0.24em] text-white/40 sm:text-right sm:tracking-[0.28em]">
              {(kicker ?? "").toUpperCase()}
            </div>
          </div>
        ) : null}

        {eyebrow || kicker ? <div className="mt-10">{children}</div> : children}
      </div>
    </section>
  );
}
