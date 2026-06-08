"use client";

import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { TESTIMONIALS } from "@/lib/constants";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const next = () => setIndex((i) => (i + 1) % TESTIMONIALS.length);
  const prev = () => setIndex((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  const current = TESTIMONIALS[index];

  return (
    <section
      id="testimonials"
      ref={ref}
      className="relative py-32 px-6 md:px-24 lg:px-40 overflow-hidden noise-overlay"
      style={{ background: "#0D1F3C" }}
    >
      {/* Giant quote mark */}
      <div
        className="absolute top-8 left-8 text-[20vw] font-black leading-none select-none pointer-events-none"
        style={{ color: "#2D6BE4", opacity: 0.06, lineHeight: 1 }}
      >
        "
      </div>
      <div
        className="absolute -bottom-8 right-8 text-[18vw] font-black leading-none select-none pointer-events-none"
        style={{ color: "#2D6BE4", opacity: 0.04, lineHeight: 1 }}
      >
        "
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
        className="relative z-10 max-w-4xl mx-auto"
      >
        <div className="flex items-center gap-3 mb-12">
          <span className="w-8 h-px" style={{ background: "#C4945A" }} />
          <span className="text-xs tracking-[0.35em] uppercase" style={{ color: "#C4945A" }}>
            Client Stories
          </span>
        </div>

        <div className="relative min-h-[240px] flex items-center">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="text-2xl md:text-3xl font-light leading-relaxed"
              style={{ color: "#F8F6F2", letterSpacing: "-0.01em" }}
            >
              &ldquo;{current.quote}&rdquo;
            </motion.blockquote>
          </AnimatePresence>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={`author-${index}`}
            className="mt-8 flex flex-col gap-1"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
          >
            <span className="font-semibold text-base" style={{ color: "#F8F6F2" }}>
              {current.author}
            </span>
            <span className="text-sm font-light" style={{ color: "#C4945A" }}>
              {current.role}
            </span>
          </motion.div>
        </AnimatePresence>

        {/* Controls */}
        <div className="mt-10 flex items-center gap-6">
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className="w-12 h-12 rounded-full border flex items-center justify-center transition-colors hover:border-[#2D6BE4]"
            style={{ borderColor: "rgba(248,246,242,0.2)", color: "#F8F6F2" }}
          >
            ←
          </button>
          <div className="flex gap-2">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className="h-1 rounded-full transition-all duration-300"
                style={{
                  width: i === index ? 32 : 8,
                  background: i === index ? "#2D6BE4" : "rgba(248,246,242,0.2)",
                }}
              />
            ))}
          </div>
          <button
            onClick={next}
            aria-label="Next testimonial"
            className="w-12 h-12 rounded-full border flex items-center justify-center transition-colors hover:border-[#2D6BE4]"
            style={{ borderColor: "rgba(248,246,242,0.2)", color: "#F8F6F2" }}
          >
            →
          </button>
        </div>
      </motion.div>
    </section>
  );
}
