"use client";

import { MARQUEE_ITEMS } from "@/lib/constants";

export default function Marquee() {
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <section
      className="relative overflow-hidden py-6 noise-overlay"
      style={{ background: "#8B5E3C" }}
      aria-label="Services ticker"
    >
      <div className="flex animate-marquee whitespace-nowrap">
        {items.map((item, i) => (
          <div key={i} className="flex items-center gap-6 pr-6">
            <span
              className="text-sm font-semibold tracking-[0.25em] uppercase"
              style={{ color: "#F2E0C8" }}
            >
              {item}
            </span>
            <span
              className="w-2 h-2 rounded-full flex-shrink-0"
              style={{ background: "#2D6BE4" }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
