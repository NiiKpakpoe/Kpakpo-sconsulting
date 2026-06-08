"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { NAV_LINKS } from "@/lib/constants";
import MagneticButton from "@/components/ui/MagneticButton";

export default function Nav() {
  const [visible, setVisible] = useState(true);
  const [glassy, setGlassy] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastY = useRef(0);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (current) => {
    const diff = current - lastY.current;
    setGlassy(current > 60);
    if (current < 80) {
      setVisible(true);
    } else if (diff > 4) {
      setVisible(false);
      setMenuOpen(false);
    } else if (diff < -4) {
      setVisible(true);
    }
    lastY.current = current;
  });

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-[100] px-6 md:px-12 py-5 flex items-center justify-between transition-all duration-300 ${
          glassy ? "glass-nav" : ""
        }`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        <a href="#" className="text-2xl font-black tracking-tighter" style={{ color: "#F8F6F2", letterSpacing: "-0.04em" }}>
          APEX
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm tracking-wide underline-draw"
                style={{ color: "#F8F6F2", opacity: 0.75 }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <MagneticButton
            className="hidden md:block px-5 py-2.5 rounded-full text-sm font-semibold tracking-wide transition-colors"
            style={{
              background: "#2D6BE4",
              color: "#fff",
              fontSize: "0.8rem",
              letterSpacing: "0.04em",
            }}
          >
            Start a Project
          </MagneticButton>

          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <motion.span
              className="block w-6 h-px"
              style={{ background: "#F8F6F2" }}
              animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 5 : 0 }}
            />
            <motion.span
              className="block w-6 h-px"
              style={{ background: "#F8F6F2" }}
              animate={{ opacity: menuOpen ? 0 : 1 }}
            />
            <motion.span
              className="block w-6 h-px"
              style={{ background: "#F8F6F2" }}
              animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -5 : 0 }}
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-[90] flex flex-col items-center justify-center"
            style={{ background: "#0A1628" }}
            initial={{ opacity: 0, clipPath: "circle(0% at 95% 3%)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at 95% 3%)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at 95% 3%)" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <ul className="flex flex-col items-center gap-8">
              {NAV_LINKS.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.07 }}
                >
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-4xl font-black tracking-tighter"
                    style={{ color: "#F8F6F2" }}
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
            <motion.a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-12 px-8 py-4 rounded-full font-semibold text-base"
              style={{ background: "#2D6BE4", color: "#fff" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Start a Project
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
