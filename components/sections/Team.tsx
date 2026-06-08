"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { TEAM } from "@/lib/constants";
import { staggerContainer, fadeUp, scaleIn } from "@/lib/animations";

export default function Team() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="team"
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
            The Team
          </span>
        </motion.div>

        <motion.h2
          className="font-black leading-none mb-16"
          style={{
            fontSize: "clamp(2.5rem, 5vw, 6rem)",
            color: "#F8F6F2",
            letterSpacing: "-0.03em",
          }}
          variants={fadeUp}
        >
          The People<br />Behind the Work
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {TEAM.map((member) => (
            <motion.div
              key={member.name}
              variants={scaleIn}
              className="group relative rounded-2xl overflow-hidden"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(196,148,90,0.12)",
              }}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
            >
              {/* Avatar placeholder */}
              <div
                className="relative h-64 flex items-center justify-center overflow-hidden"
                style={{ background: "linear-gradient(135deg, #1A3A6B 0%, #0d1f3c 100%)" }}
              >
                <span
                  className="text-5xl font-black"
                  style={{ color: "rgba(45,107,228,0.4)", letterSpacing: "-0.04em" }}
                >
                  {member.initials}
                </span>

                {/* Hover bio overlay */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: "rgba(45,107,228,0.9)" }}
                >
                  <p className="text-center text-sm font-light leading-relaxed" style={{ color: "#F8F6F2" }}>
                    {member.bio}
                  </p>
                </motion.div>
              </div>

              <div className="p-6">
                <h3
                  className="font-black text-lg"
                  style={{ color: "#F8F6F2", letterSpacing: "-0.02em" }}
                >
                  {member.name}
                </h3>
                <p className="text-sm font-light mt-1" style={{ color: "#C4945A" }}>
                  {member.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
