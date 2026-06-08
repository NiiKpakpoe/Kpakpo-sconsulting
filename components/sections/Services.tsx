"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { SERVICES } from "@/lib/constants";
import { staggerContainer, fadeUp } from "@/lib/animations";

const ICONS: Record<string, React.ReactNode> = {
  strategy: (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
      <path d="M6 30L18 6L30 30" stroke="#2D6BE4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10 22h16" stroke="#2D6BE4" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
  digital: (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
      <rect x="4" y="8" width="28" height="20" rx="2" stroke="#2D6BE4" strokeWidth="2"/>
      <path d="M14 28v4M22 28v4M10 32h16" stroke="#2D6BE4" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="18" cy="18" r="4" stroke="#2D6BE4" strokeWidth="2"/>
    </svg>
  ),
  ops: (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
      <circle cx="18" cy="18" r="6" stroke="#2D6BE4" strokeWidth="2"/>
      <path d="M18 4v4M18 28v4M4 18h4M28 18h4" stroke="#2D6BE4" strokeWidth="2" strokeLinecap="round"/>
      <path d="M8.34 8.34l2.83 2.83M24.83 24.83l2.83 2.83M8.34 27.66l2.83-2.83M24.83 11.17l2.83-2.83" stroke="#2D6BE4" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
  leadership: (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
      <circle cx="18" cy="12" r="5" stroke="#2D6BE4" strokeWidth="2"/>
      <path d="M8 32c0-5.52 4.48-10 10-10s10 4.48 10 10" stroke="#2D6BE4" strokeWidth="2" strokeLinecap="round"/>
      <path d="M26 8l2 2-2 2" stroke="#C4945A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
};

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-80px" });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative"
      style={{ height: "300vh" }}
    >
      <div className="sticky top-0 h-screen overflow-hidden noise-overlay" style={{ background: "#0D1F3C" }}>
        {/* Section header */}
        <motion.div
          ref={titleRef}
          className="px-6 md:px-16 pt-24 pb-12"
          variants={staggerContainer}
          initial="hidden"
          animate={titleInView ? "visible" : "hidden"}
        >
          <motion.div className="flex items-center gap-3 mb-4" variants={fadeUp}>
            <span className="w-8 h-px" style={{ background: "#C4945A" }} />
            <span className="text-xs tracking-[0.35em] uppercase" style={{ color: "#C4945A" }}>
              What We Do
            </span>
          </motion.div>
          <motion.h2
            className="font-black leading-none"
            style={{
              fontSize: "clamp(2.5rem, 5vw, 6rem)",
              color: "#F8F6F2",
              letterSpacing: "-0.03em",
            }}
            variants={fadeUp}
          >
            Our Services
          </motion.h2>
          <motion.p
            className="mt-3 text-sm tracking-widest text-right mr-8"
            style={{ color: "rgba(248,246,242,0.3)" }}
            variants={fadeUp}
          >
            ← Scroll to explore →
          </motion.p>
        </motion.div>

        {/* Horizontal scroll track */}
        <div className="overflow-hidden px-6 md:px-16" ref={trackRef}>
          <motion.div
            className="flex gap-6"
            style={{ x, width: `${SERVICES.length * 360}px` }}
          >
            {SERVICES.map((service, i) => (
              <ServiceCard key={service.id} service={service} index={i} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  service,
  index,
}: {
  service: (typeof SERVICES)[0];
  index: number;
}) {
  return (
    <motion.div
      className="flex-shrink-0 w-80 rounded-2xl p-8 flex flex-col gap-6 group relative overflow-hidden"
      style={{
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(45,107,228,0.2)",
        borderTop: "3px solid #2D6BE4",
        width: "320px",
      }}
      whileHover={{ y: -8, borderTopColor: "#C4945A" }}
      transition={{ duration: 0.3 }}
    >
      <div className="text-xs font-semibold tracking-[0.3em]" style={{ color: "#2D6BE4" }}>
        {service.id}
      </div>
      <div>{ICONS[service.icon]}</div>
      <h3
        className="font-black text-xl leading-tight"
        style={{ color: "#F8F6F2", letterSpacing: "-0.02em" }}
      >
        {service.title}
      </h3>
      <p className="text-sm leading-relaxed font-light" style={{ color: "#F2E0C8", opacity: 0.65 }}>
        {service.description}
      </p>
      <div className="mt-auto flex items-center gap-2 text-sm font-semibold" style={{ color: "#2D6BE4" }}>
        <span>Learn more</span>
        <motion.span
          initial={{ x: 0 }}
          whileHover={{ x: 4 }}
          className="inline-block"
        >
          →
        </motion.span>
      </div>

      {/* Hover glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
        style={{
          background: "radial-gradient(circle at 50% 0%, rgba(45,107,228,0.08) 0%, transparent 70%)",
        }}
      />
    </motion.div>
  );
}
