"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { staggerContainer, lineAnimation, fadeUp } from "@/lib/animations";
import { STATS } from "@/lib/constants";
import MagneticButton from "@/components/ui/MagneticButton";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

const LINES = ["We Build.", "We Transform.", "We Lead."];

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={ref}
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden noise-overlay"
      style={{ background: "#0A1628" }}
    >
      {/* Geometric floating shapes */}
      <motion.div
        className="absolute top-[15%] right-[8%] w-72 h-72 rounded-full border border-[#2D6BE4]/20 animate-float"
        style={{ y: y3 }}
      />
      <motion.div
        className="absolute top-[20%] right-[10%] w-44 h-44 rounded-full border border-[#2D6BE4]/40 animate-float2"
        style={{ y: y2 }}
      />
      <motion.div
        className="absolute bottom-[20%] left-[5%] w-24 h-24 border border-[#C4945A]/30 rotate-45 animate-float"
        style={{ y: y1 }}
      />
      <motion.div
        className="absolute top-[40%] left-[3%] w-2 h-32 opacity-30 animate-float2"
        style={{ background: "linear-gradient(to bottom, #2D6BE4, transparent)", y: y2 }}
      />
      <motion.div
        className="absolute top-[60%] right-[4%] animate-spin-slow opacity-20"
        style={{ y: y1 }}
      >
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
          <circle cx="40" cy="40" r="38" stroke="#2D6BE4" strokeWidth="1" strokeDasharray="6 4" />
        </svg>
      </motion.div>

      {/* Large bg word */}
      <motion.div
        className="absolute bottom-8 right-0 text-[22vw] font-black leading-none select-none pointer-events-none"
        style={{
          color: "transparent",
          WebkitTextStroke: "1px rgba(45,107,228,0.08)",
          y: y2,
        }}
      >
        APEX
      </motion.div>

      <motion.div
        className="relative z-10 px-6 md:px-16 lg:px-24 pt-32 pb-20"
        style={{ opacity }}
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {/* Eyebrow */}
        <motion.div
          className="flex items-center gap-3 mb-8"
          variants={fadeUp}
        >
          <span className="w-8 h-px" style={{ background: "#C4945A" }} />
          <span className="text-xs tracking-[0.35em] uppercase" style={{ color: "#C4945A" }}>
            Global Management Consulting
          </span>
        </motion.div>

        {/* Headline */}
        <h1 className="mb-8">
          {LINES.map((line, i) => (
            <div className="text-clip" key={i}>
              <motion.span
                className="block font-black leading-none"
                style={{
                  fontSize: "clamp(3rem, 9vw, 10rem)",
                  letterSpacing: "-0.03em",
                  color: i === 2 ? "#2D6BE4" : "#F8F6F2",
                }}
                custom={i}
                variants={lineAnimation}
                initial="hidden"
                animate="visible"
              >
                {line}
              </motion.span>
            </div>
          ))}
        </h1>

        {/* Subtext + CTA row */}
        <motion.div
          className="flex flex-col md:flex-row md:items-end gap-8 md:gap-16"
          variants={fadeUp}
        >
          <p
            className="max-w-sm text-base leading-relaxed font-light"
            style={{ color: "#F2E0C8", opacity: 0.75 }}
          >
            We partner with the world's most ambitious organizations to solve
            their hardest problems and unlock their highest potential.
          </p>
          <div className="flex gap-4">
            <MagneticButton
              className="px-7 py-4 rounded-full font-semibold text-sm tracking-wide"
              style={{ background: "#2D6BE4", color: "#fff", letterSpacing: "0.04em" }}
              href="#services"
            >
              Explore Our Work
            </MagneticButton>
            <MagneticButton
              className="px-7 py-4 rounded-full font-semibold text-sm tracking-wide border"
              style={{
                borderColor: "rgba(242,224,200,0.3)",
                color: "#F2E0C8",
                background: "transparent",
                letterSpacing: "0.04em",
              }}
              href="#contact"
            >
              Get in Touch
            </MagneticButton>
          </div>
        </motion.div>

        {/* Stats row */}
        <motion.div
          className="mt-20 pt-10 border-t flex flex-wrap gap-12"
          style={{ borderColor: "rgba(45,107,228,0.18)" }}
          variants={fadeUp}
        >
          {STATS.map((s) => (
            <div key={s.label} className="flex flex-col gap-1">
              <div className="flex items-baseline gap-1">
                {s.prefix && (
                  <span className="text-3xl font-black" style={{ color: "#F8F6F2" }}>
                    {s.prefix}
                  </span>
                )}
                <AnimatedCounter value={parseInt(s.value)} className="text-4xl font-black" style={{ color: "#F8F6F2" }} />
                <span className="text-3xl font-black" style={{ color: "#2D6BE4" }}>
                  {s.suffix}
                </span>
              </div>
              <span className="text-xs tracking-[0.2em] uppercase font-light" style={{ color: "#C4945A" }}>
                {s.label}
              </span>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Brown gradient bleed */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, rgba(26,15,6,0.5))" }}
      />
    </section>
  );
}
