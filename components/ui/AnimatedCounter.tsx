"use client";

import { useEffect, useRef, CSSProperties } from "react";
import { useInView, useMotionValue, useSpring, animate } from "framer-motion";

interface Props {
  value: number;
  className?: string;
  style?: CSSProperties;
}

export default function AnimatedCounter({ value, className, style }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const count = useMotionValue(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(count, value, {
      duration: 2,
      ease: "easeOut",
      onUpdate(v) {
        if (ref.current) {
          ref.current.textContent = Math.round(v).toString();
        }
      },
    });
    return controls.stop;
  }, [inView, value, count]);

  return (
    <span ref={ref} className={className} style={style}>
      0
    </span>
  );
}
