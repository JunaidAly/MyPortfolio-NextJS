"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

type Direction = "up" | "left" | "right" | "scale";

const hiddenStates: Record<Direction, Record<string, number>> = {
  up: { opacity: 0, y: 100 },
  left: { opacity: 0, x: -100 },
  right: { opacity: 0, x: 100 },
  scale: { opacity: 0, y: 50, scale: 0.94 },
};

type ScrollSectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
  direction?: Direction;
  ariaLabel?: string;
};

export default function ScrollSection({
  children,
  className,
  id,
  direction = "up",
  ariaLabel,
}: ScrollSectionProps) {
  const { ref, isVisible } = useScrollReveal<HTMLElement>(0.9);

  return (
    <motion.section
      ref={ref}
      id={id}
      className={className}
      aria-label={ariaLabel}
      initial={false}
      animate={isVisible ? "visible" : "hidden"}
      variants={{
        hidden: hiddenStates[direction],
        visible: { opacity: 1, x: 0, y: 0, scale: 1 },
      }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.section>
  );
}
