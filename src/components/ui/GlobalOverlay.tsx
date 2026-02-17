import React from "react";

export function GlobalOverlay() {
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
    </>
  );
}
