"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { staggerContainer, fadeUp, slideInLeft, slideInRight } from "@/lib/animations";

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-32 px-6 md:px-16 lg:px-24 overflow-hidden noise-overlay"
      style={{ background: "#0A1628" }}
    >
      {/* Large bg word */}
      <div
        className="absolute -left-8 top-1/2 -translate-y-1/2 text-[18vw] font-black leading-none select-none pointer-events-none rotate-90 opacity-[0.03]"
        style={{ color: "#F8F6F2", letterSpacing: "-0.04em" }}
      >
        CLARITY
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="relative z-10 grid md:grid-cols-2 gap-16 items-center"
      >
        {/* Left: rotated EST + massive word */}
        <motion.div variants={slideInLeft} className="relative flex flex-col gap-8">
          <div className="flex items-center gap-6">
            <span
              className="text-8xl font-black leading-none outline-text select-none"
              style={{
                WebkitTextStroke: "1px rgba(45,107,228,0.4)",
                color: "transparent",
                fontSize: "clamp(4rem, 8vw, 9rem)",
              }}
            >
              EST.
            </span>
            <span
              className="text-8xl font-black leading-none"
              style={{
                color: "#2D6BE4",
                fontSize: "clamp(4rem, 8vw, 9rem)",
              }}
            >
              2010
            </span>
          </div>

          <div
            className="text-[11vw] md:text-[7vw] font-black leading-none select-none"
            style={{
              color: "transparent",
              WebkitTextStroke: "1px rgba(196,148,90,0.35)",
              letterSpacing: "-0.04em",
            }}
          >
            CLARITY
          </div>

          <div className="absolute bottom-0 left-0 w-24 h-1" style={{ background: "#2D6BE4" }} />
        </motion.div>

        {/* Right: text */}
        <motion.div variants={slideInRight} className="flex flex-col gap-8">
          <div className="flex items-center gap-3">
            <span className="w-8 h-px" style={{ background: "#C4945A" }} />
            <span className="text-xs tracking-[0.35em] uppercase" style={{ color: "#C4945A" }}>
              Our Philosophy
            </span>
          </div>

          <h2
            className="font-black leading-tight"
            style={{
              fontSize: "clamp(2rem, 3.5vw, 3.5rem)",
              color: "#F8F6F2",
              letterSpacing: "-0.02em",
            }}
          >
            Strategy without clarity is just noise.
          </h2>

          <p className="text-base leading-relaxed font-light" style={{ color: "#F2E0C8", opacity: 0.7 }}>
            At APEX, we believe the most powerful consulting starts with radical clarity — about
            where you are, where you want to go, and what's standing in the way. We don't arrive
            with frameworks. We arrive with rigor, curiosity, and the discipline to ask the
            questions that others skip.
          </p>

          <p className="text-base leading-relaxed font-light" style={{ color: "#F2E0C8", opacity: 0.7 }}>
            Over 16 years, we've built a reputation for doing the hard work — not just diagnosing
            problems, but staying until they're solved. Our clients call us partners because that's
            exactly what we are.
          </p>

          <div className="flex flex-col gap-4 pt-4">
            {[
              "Rigorous, data-driven analysis",
              "Human-centered implementation",
              "Long-term partnership over quick wins",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <span className="w-5 h-px flex-shrink-0" style={{ background: "#2D6BE4" }} />
                <span className="text-sm font-light" style={{ color: "#F2E0C8", opacity: 0.8 }}>
                  {item}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
