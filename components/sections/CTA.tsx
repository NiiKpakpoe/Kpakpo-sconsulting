"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { staggerContainer, fadeUp } from "@/lib/animations";
import MagneticButton from "@/components/ui/MagneticButton";

export default function CTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [email, setEmail] = useState("");

  return (
    <section
      id="contact"
      ref={ref}
      className="relative py-40 px-6 md:px-16 lg:px-24 overflow-hidden noise-overlay"
      style={{ background: "#0A1628" }}
    >
      {/* Decorative orb */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(45,107,228,0.08) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-64 h-64 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(196,148,90,0.06) 0%, transparent 70%)",
        }}
      />

      {/* Top border line */}
      <div
        className="absolute top-0 left-16 right-16 h-px"
        style={{ background: "linear-gradient(to right, transparent, #C4945A, transparent)" }}
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="relative z-10 max-w-4xl"
      >
        <motion.div className="flex items-center gap-3 mb-8" variants={fadeUp}>
          <span className="w-8 h-px" style={{ background: "#C4945A" }} />
          <span className="text-xs tracking-[0.35em] uppercase" style={{ color: "#C4945A" }}>
            Let's Connect
          </span>
        </motion.div>

        <motion.h2
          className="font-black leading-none mb-8"
          style={{
            fontSize: "clamp(3rem, 7vw, 9rem)",
            color: "#F8F6F2",
            letterSpacing: "-0.03em",
          }}
          variants={fadeUp}
        >
          Let's Shape<br />
          <span style={{ color: "#2D6BE4" }}>What's Next.</span>
        </motion.h2>

        <motion.p
          className="text-base font-light max-w-md mb-12 leading-relaxed"
          style={{ color: "#F2E0C8", opacity: 0.7 }}
          variants={fadeUp}
        >
          Ready to transform your organization? Let's start a conversation about
          what's possible.
        </motion.p>

        <motion.form
          variants={fadeUp}
          className="flex flex-col sm:flex-row gap-4 max-w-lg"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            required
            aria-label="Email address"
            className="flex-1 px-6 py-4 rounded-full text-sm outline-none"
            style={{
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(45,107,228,0.3)",
              color: "#F8F6F2",
            }}
          />
          <MagneticButton
            type="submit"
            className="px-8 py-4 rounded-full font-semibold text-sm tracking-wide whitespace-nowrap"
            style={{
              background: "#2D6BE4",
              color: "#fff",
              letterSpacing: "0.04em",
            }}
          >
            Start a Project →
          </MagneticButton>
        </motion.form>

        {/* Social links */}
        <motion.div className="mt-16 flex items-center gap-8" variants={fadeUp}>
          {["LinkedIn", "Twitter", "Instagram"].map((social) => (
            <a
              key={social}
              href="#"
              className="text-sm font-light underline-draw"
              style={{ color: "rgba(248,246,242,0.45)" }}
            >
              {social}
            </a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
