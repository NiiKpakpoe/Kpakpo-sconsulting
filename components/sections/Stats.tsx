"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { STATS } from "@/lib/constants";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { staggerContainer, fadeUp } from "@/lib/animations";

export default function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="stats"
      ref={ref}
      className="py-28 px-6 md:px-16 lg:px-24 noise-overlay"
      style={{ background: "#1A3A6B" }}
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.div className="flex items-center gap-3 mb-16" variants={fadeUp}>
          <span className="w-8 h-px" style={{ background: "#C4945A" }} />
          <span className="text-xs tracking-[0.35em] uppercase" style={{ color: "#C4945A" }}>
            Our Impact
          </span>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="flex flex-col gap-2"
              variants={fadeUp}
            >
              <div className="flex items-baseline gap-1">
                {stat.prefix && (
                  <span
                    className="font-black leading-none"
                    style={{
                      fontSize: "clamp(2rem, 4vw, 5rem)",
                      color: "#F8F6F2",
                      letterSpacing: "-0.03em",
                    }}
                  >
                    {stat.prefix}
                  </span>
                )}
                <AnimatedCounter
                  value={parseInt(stat.value)}
                  className="font-black leading-none"
                  style={{
                    fontSize: "clamp(2rem, 4vw, 5rem)",
                    color: "#F8F6F2",
                    letterSpacing: "-0.03em",
                  }}
                />
                <span
                  className="font-black leading-none"
                  style={{
                    fontSize: "clamp(2rem, 4vw, 5rem)",
                    color: "#C4945A",
                    letterSpacing: "-0.03em",
                  }}
                >
                  {stat.suffix}
                </span>
              </div>
              <span
                className="text-xs tracking-[0.2em] uppercase font-light"
                style={{ color: "rgba(242,224,200,0.6)" }}
              >
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
