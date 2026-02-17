"use client";

import React, { useRef } from "react";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  children: React.ReactNode;
};

export default function SpotlightCard({ className, children }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={ref}
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]",
        className
      )}
      onMouseMove={(e) => {
        const el = ref.current;
        if (!el) return;
        const r = el.getBoundingClientRect();
        el.style.setProperty("--mx", `${e.clientX - r.left}px`);
        el.style.setProperty("--my", `${e.clientY - r.top}px`);
      }}
    >
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100 [background:radial-gradient(520px_circle_at_var(--mx,50%)_var(--my,50%),rgba(255,255,255,0.16),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-70 transition-opacity duration-200 group-hover:opacity-40 backdrop-blur-[6px]" />
      <div className="relative">{children}</div>
    </div>
  );
}
