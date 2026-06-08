"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function PageLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[9990] flex items-center justify-center overflow-hidden"
          style={{ background: "#0A1628" }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          {/* Top wipe panel */}
          <motion.div
            className="absolute inset-0"
            style={{ background: "#2D6BE4", transformOrigin: "top" }}
            initial={{ scaleY: 1 }}
            animate={{ scaleY: 0 }}
            transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1], delay: 1.1 }}
          />

          {/* Logo reveal */}
          <motion.div
            className="relative z-10 flex flex-col items-center gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <span
              className="text-6xl font-black tracking-tighter"
              style={{ color: "#F8F6F2", letterSpacing: "-0.04em" }}
            >
              APEX
            </span>
            <motion.div
              className="h-px w-0"
              style={{ background: "#C4945A" }}
              animate={{ width: 120 }}
              transition={{ duration: 0.6, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            />
            <motion.span
              className="text-xs tracking-[0.3em] uppercase"
              style={{ color: "#C4945A", opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              Consulting
            </motion.span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
