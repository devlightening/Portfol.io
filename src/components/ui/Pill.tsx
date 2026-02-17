import React from "react";

type PillProps = {
  children: React.ReactNode;
  className?: string;
};

export function Pill({ children, className }: PillProps) {
  return (
    <span
      className={
        "rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] tracking-[0.18em] text-white/70 " +
        (className ?? "")
      }
    >
      {children}
    </span>
  );
}
