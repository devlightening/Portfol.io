
import React from "react";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Footer() {
  const year = new Date().getFullYear();

  const linkClassName = cn(
    "text-xs tracking-[0.18em] text-white/55 transition-colors",
    "hover:text-white/85"
  );

  return (
    <footer className="mt-24 border-t border-white/10">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div className="text-xs tracking-[0.18em] text-white/45">
          © {year} {site.name}
        </div>

        <div className="flex flex-wrap items-center gap-6">
          <a
            href={site.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className={linkClassName}
          >
            GITHUB
          </a>
          <a
            href={site.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={linkClassName}
          >
            LINKEDIN
          </a>
          <a href={site.socials.email} className={linkClassName}>
            EMAIL
          </a>
        </div>
      </div>
    </footer>
  );
}
