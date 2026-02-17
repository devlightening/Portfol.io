"use client";

import { site, useI18n } from "@/lib/site";

export default function Footer() {
  useI18n();
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-3 px-5 py-8 md:flex-row md:items-center md:justify-between">
        <div className="text-[11px] tracking-[0.22em] text-white/45">
          © {new Date().getFullYear()} {site.name}. ALL RIGHTS RESERVED.
        </div>

        <div className="flex gap-4 text-[11px] tracking-[0.22em] text-white/60">
          <a className="hover:text-white" href={site.socials.github} target="_blank" rel="noreferrer">
            GITHUB
          </a>
          <a className="hover:text-white" href={site.socials.linkedin} target="_blank" rel="noreferrer">
            LINKEDIN
          </a>
          <a className="hover:text-white" href={`mailto:${site.socials.email}`}>
            EMAIL
          </a>
        </div>
      </div>
    </footer>
  );
}
