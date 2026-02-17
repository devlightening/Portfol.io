"use client";

import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  children: React.ReactNode;
};

export default function SpotlightCard({ className, children }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const m = window.matchMedia?.("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(Boolean(m?.matches));
    update();
    m?.addEventListener?.("change", update);
    return () => m?.removeEventListener?.("change", update);
  }, []);

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
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 [background:radial-gradient(560px_circle_at_var(--mx,50%)_var(--my,50%),rgba(255,255,255,0.18),transparent_62%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-70 transition-opacity duration-300 group-hover:opacity-35 backdrop-blur-[6px]" />

      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100",
          "[background:linear-gradient(to_bottom,transparent,rgba(255,255,255,0.08),transparent)]",
          reduced ? "" : "animate-[spotlight-scan_2.4s_linear_infinite]"
        )}
        style={{ mixBlendMode: "overlay" }}
      />

      <div aria-hidden className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute inset-0 [background:radial-gradient(900px_220px_at_50%_0%,rgba(255,255,255,0.06),transparent_60%)]" />
      </div>

      <div className="relative">{children}</div>
    </div>
  );
}
