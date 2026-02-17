
"use client";

import React from "react";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const onContactClick = () => {
    const el = document.getElementById("contact");
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="sticky top-0 z-40">
      <div className="pointer-events-none absolute inset-0 -z-10 backdrop-blur supports-[backdrop-filter]:bg-black/25" />
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="flex h-16 items-center justify-between border-b border-white/10">
          <div className="flex min-w-0 items-center gap-3">
            <span className="truncate font-medium tracking-tight text-white/90">
              {site.name}
            </span>
          </div>

          <div className="hidden flex-1 items-center justify-center sm:flex">
            <div className="text-center text-xs tracking-[0.2em] text-white/55">
              <span className="uppercase">{site.role}</span>
              <span className="mx-2 text-white/25">/</span>
              <span className="uppercase">2019—2026</span>
            </div>
          </div>

          <div className="flex items-center justify-end">
            <button
              type="button"
              onClick={onContactClick}
              className={cn(
                "group inline-flex h-10 items-center gap-2 rounded-full border border-white/15",
                "bg-white/5 px-4 text-xs font-medium tracking-[0.22em] text-white/80",
                "transition-all duration-200",
                "hover:border-white/25 hover:bg-white/10 hover:text-white",
                "active:scale-[0.98]"
              )}
            >
              <span className="relative">
                CONTACT
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-white/40 transition-all duration-300 group-hover:w-full" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
