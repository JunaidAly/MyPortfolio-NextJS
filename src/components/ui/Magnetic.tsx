"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import type { PointerEvent, ReactNode } from "react";
import { useRef } from "react";

type MagneticProps = {
  children: ReactNode;
  className?: string;
  strength?: number;
};

export default function Magnetic({ children, className, strength = 0.18 }: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);
  const offsetX = useMotionValue(0);
  const offsetY = useMotionValue(0);
  const x = useSpring(offsetX, { stiffness: 260, damping: 22, mass: 0.45 });
  const y = useSpring(offsetY, { stiffness: 260, damping: 22, mass: 0.45 });

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === "touch" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const bounds = ref.current?.getBoundingClientRect();
    if (!bounds) return;

    offsetX.set((event.clientX - (bounds.left + bounds.width / 2)) * strength);
    offsetY.set((event.clientY - (bounds.top + bounds.height / 2)) * strength);
  };

  const resetPosition = () => {
    offsetX.set(0);
    offsetY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ x, y }}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPosition}
    >
      {children}
    </motion.div>
  );
}

