"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CASE_STUDIES } from "@/lib/constants";
import { staggerContainer, fadeUp, scaleIn } from "@/lib/animations";

export default function Work() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="work"
      ref={ref}
      className="py-32 px-6 md:px-16 lg:px-24 noise-overlay"
      style={{ background: "#0A1628" }}
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.div className="flex items-center gap-3 mb-4" variants={fadeUp}>
          <span className="w-8 h-px" style={{ background: "#C4945A" }} />
          <span className="text-xs tracking-[0.35em] uppercase" style={{ color: "#C4945A" }}>
            Case Studies
          </span>
        </motion.div>

        <motion.div
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16"
          variants={fadeUp}
        >
          <h2
            className="font-black leading-none"
            style={{
              fontSize: "clamp(2.5rem, 5vw, 6rem)",
              color: "#F8F6F2",
              letterSpacing: "-0.03em",
            }}
          >
            Selected Work
          </h2>
          <a
            href="#"
            className="text-sm font-semibold underline-draw"
            style={{ color: "#2D6BE4" }}
          >
            View All Projects
          </a>
        </motion.div>

        {/* Asymmetric grid */}
        <div className="grid md:grid-cols-2 gap-5">
          {/* Large card */}
          <motion.div variants={scaleIn} className="md:row-span-2">
            <WorkCard study={CASE_STUDIES[0]} large />
          </motion.div>

          {/* Small cards */}
          {CASE_STUDIES.slice(1).map((study) => (
            <motion.div key={study.id} variants={scaleIn}>
              <WorkCard study={study} large={false} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function WorkCard({
  study,
  large,
}: {
  study: (typeof CASE_STUDIES)[0];
  large: boolean;
}) {
  return (
    <motion.div
      className={`relative rounded-2xl overflow-hidden group cursor-pointer ${large ? "min-h-[480px]" : "min-h-[220px]"}`}
      style={{
        background: large
          ? "linear-gradient(135deg, #1a0f06 0%, #2a1800 100%)"
          : "linear-gradient(135deg, #0d1f3c 0%, #1A3A6B 100%)",
        border: "1px solid rgba(196,148,90,0.15)",
      }}
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Hover overlay */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
        style={{ background: "rgba(45,107,228,0.15)" }}
      />

      <div className="relative z-20 p-8 h-full flex flex-col justify-between">
        <div className="flex flex-col gap-3">
          <span className="text-xs tracking-[0.3em] uppercase" style={{ color: "#C4945A" }}>
            {study.category}
          </span>
          <h3
            className={`font-black leading-tight ${large ? "text-2xl md:text-3xl" : "text-lg md:text-xl"}`}
            style={{ color: "#F8F6F2", letterSpacing: "-0.02em" }}
          >
            {study.title}
          </h3>
          <div className="flex flex-wrap gap-2 mt-2">
            {study.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1 rounded-full"
                style={{
                  background: "rgba(45,107,228,0.15)",
                  color: "#2D6BE4",
                  border: "1px solid rgba(45,107,228,0.3)",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <motion.div
          className="flex items-center gap-2 text-sm font-semibold"
          style={{ color: "#F2E0C8" }}
        >
          <span className="underline-draw">View Project</span>
          <motion.span
            className="inline-block"
            initial={{ x: 0 }}
            whileHover={{ x: 6 }}
          >
            →
          </motion.span>
        </motion.div>
      </div>

      {/* Decorative corner */}
      <div
        className="absolute top-0 right-0 w-24 h-24 opacity-20"
        style={{
          background: "radial-gradient(circle at top right, #2D6BE4, transparent)",
        }}
      />
    </motion.div>
  );
}
