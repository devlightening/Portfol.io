"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { usePrefersReducedMotion } from "@/lib/utils";

export function GlobalOverlay() {
  const reduced = usePrefersReducedMotion();
  const rafRef = useRef<number | null>(null);
  const [pos, setPos] = useState({ x: 0.5, y: 0.35 });

  useEffect(() => {
    if (reduced) return;

    const onMove = (e: PointerEvent) => {
      if (rafRef.current != null) return;
      rafRef.current = window.requestAnimationFrame(() => {
        rafRef.current = null;
        const x = Math.min(1, Math.max(0, e.clientX / window.innerWidth));
        const y = Math.min(1, Math.max(0, e.clientY / window.innerHeight));
        setPos({ x, y });
      });
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      if (rafRef.current != null) window.cancelAnimationFrame(rafRef.current);
    };
  }, [reduced]);

  const spotlight = useMemo(() => {
    const x = Math.round(pos.x * 100);
    const y = Math.round(pos.y * 100);
    return `radial-gradient(800px 500px at ${x}% ${y}%, rgba(255,255,255,0.10), rgba(255,255,255,0) 60%)`;
  }, [pos.x, pos.y]);

  return (
    <>
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-50 opacity-[0.06] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='180' height='180' filter='url(%23n)' opacity='.35'/%3E%3C/svg%3E\")",
          backgroundSize: "180px 180px",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-50"
        style={{
          background:
            "radial-gradient(1200px 700px at 50% 35%, rgba(0, 0, 0, 0) 40%, rgba(0, 0, 0, 0.55) 100%)",
          opacity: 0.55,
        }}
      />

      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-50 opacity-[0.18]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(to bottom, rgba(255,255,255,0.05) 0px, rgba(255,255,255,0.05) 1px, rgba(255,255,255,0) 3px, rgba(255,255,255,0) 6px)",
          mixBlendMode: "overlay",
        }}
      />

      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-50 opacity-[0.18]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "140px 140px",
          maskImage:
            "radial-gradient(60% 50% at 50% 20%, black 0%, transparent 75%)",
        }}
      />

      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-50"
        style={{
          background: reduced ? undefined : spotlight,
          opacity: 0.9,
        }}
      />
    </>
  );
}
