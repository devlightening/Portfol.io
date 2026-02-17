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
          <div className="flex items-end justify-between gap-6 border-b border-white/10 pb-6">
            <div className="text-[12px] tracking-[0.32em] text-white/55">
              {(eyebrow ?? "").toUpperCase()}
            </div>
            <div className="text-[11px] tracking-[0.28em] text-white/40">
              {(kicker ?? "").toUpperCase()}
            </div>
          </div>
        ) : null}

        {eyebrow || kicker ? <div className="mt-10">{children}</div> : children}
      </div>
    </section>
  );
}
