"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const GLOW_SIZE = 420;

export default function CursorGlow() {
  const pointerX = useMotionValue(-GLOW_SIZE);
  const pointerY = useMotionValue(-GLOW_SIZE);
  const x = useSpring(pointerX, { stiffness: 130, damping: 24, mass: 0.35 });
  const y = useSpring(pointerY, { stiffness: 130, damping: 24, mass: 0.35 });
  const [visible, setVisible] = useState(false);
  const [enabled, setEnabled] = useState(false);
  const [interactive, setInteractive] = useState(false);
  const interactiveRef = useRef(false);

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    const updateAvailability = () => {
      setEnabled(finePointer.matches && !reducedMotion.matches);
    };

    const handlePointerMove = (event: PointerEvent) => {
      pointerX.set(event.clientX - GLOW_SIZE / 2);
      pointerY.set(event.clientY - GLOW_SIZE / 2);
      setVisible(true);

      const target = event.target instanceof Element ? event.target : null;
      const nextInteractive = Boolean(target?.closest("a, button, input, textarea, select, [role='button']"));
      if (nextInteractive !== interactiveRef.current) {
        interactiveRef.current = nextInteractive;
        setInteractive(nextInteractive);
      }
    };

    const hideGlow = () => setVisible(false);

    updateAvailability();
    finePointer.addEventListener("change", updateAvailability);
    reducedMotion.addEventListener("change", updateAvailability);
    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    document.documentElement.addEventListener("mouseleave", hideGlow);
    window.addEventListener("blur", hideGlow);

    return () => {
      finePointer.removeEventListener("change", updateAvailability);
      reducedMotion.removeEventListener("change", updateAvailability);
      window.removeEventListener("pointermove", handlePointerMove);
      document.documentElement.removeEventListener("mouseleave", hideGlow);
      window.removeEventListener("blur", hideGlow);
    };
  }, [pointerX, pointerY]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="cursor-glow"
      style={{ x, y }}
      animate={{ opacity: visible ? 1 : 0, scale: interactive ? 0.68 : 1 }}
      transition={{ opacity: { duration: 0.22 }, scale: { type: "spring", stiffness: 240, damping: 24 } }}
    />
  );
}

