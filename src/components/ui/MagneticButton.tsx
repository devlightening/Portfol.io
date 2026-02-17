"use client";

import React, { useRef, useState } from "react";
import { cn, usePrefersReducedMotion } from "@/lib/utils";

type MagneticButtonProps = {
  className?: string;
  strength?: number;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function MagneticButton({ className, strength = 8, ...props }: MagneticButtonProps) {
  const reduced = usePrefersReducedMotion();
  const ref = useRef<HTMLButtonElement | null>(null);
  const [xy, setXy] = useState({ x: 0, y: 0 });

  const onMove = (e: React.MouseEvent) => {
    if (reduced) return;
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const dx = e.clientX - (r.left + r.width / 2);
    const dy = e.clientY - (r.top + r.height / 2);
    setXy({
      x: Math.max(-strength, Math.min(strength, dx / 8)),
      y: Math.max(-strength, Math.min(strength, dy / 8)),
    });
  };

  const onLeave = () => setXy({ x: 0, y: 0 });

  return (
    <button
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={reduced ? undefined : { transform: `translate3d(${xy.x}px, ${xy.y}px, 0)` }}
      className={cn("transition-transform duration-150", className)}
      {...props}
    />
  );
}
