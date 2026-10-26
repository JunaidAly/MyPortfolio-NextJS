"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";

type Particle = {
  id: number;
  x: number;
  y: number;
  size: number;
  hue: number;
  intensity: number;
  driftX: number;
  driftY: number;
};

const MAX_PARTICLES = 24;

export default function GradientCursor() {
  const [enabled, setEnabled] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);
  const lastParticleRef = useRef({ x: 0, y: 0, time: 0 });
  const particleIdRef = useRef(0);

  const removeParticle = useCallback((id: number) => {
    setParticles((current) => current.filter((particle) => particle.id !== id));
  }, []);

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    const updateAvailability = () => {
      setEnabled(finePointer.matches && !reducedMotion.matches);
    };

    const handlePointerMove = (event: PointerEvent) => {
      if (!finePointer.matches || reducedMotion.matches) return;

      const nextHue = Math.round((event.clientX / Math.max(window.innerWidth, 1)) * 360);

      const previous = lastParticleRef.current;
      const distance = Math.hypot(event.clientX - previous.x, event.clientY - previous.y);
      const now = performance.now();

      if (distance < 12 || now - previous.time < 24) return;
      lastParticleRef.current = { x: event.clientX, y: event.clientY, time: now };

      const newParticles: Particle[] = Array.from({ length: 2 }, (_, index) => ({
        id: ++particleIdRef.current,
        x: event.clientX + (Math.random() - 0.5) * 16,
        y: event.clientY + (Math.random() - 0.5) * 16,
        size: 3 + Math.random() * 3,
        hue: (nextHue + index * 28) % 360,
        intensity: 0.55 + Math.random() * 0.35,
        driftX: (Math.random() - 0.5) * 18,
        driftY: (Math.random() - 0.5) * 18,
      }));

      setParticles((current) => [...current, ...newParticles].slice(-MAX_PARTICLES));
    };

    updateAvailability();
    finePointer.addEventListener("change", updateAvailability);
    reducedMotion.addEventListener("change", updateAvailability);
    window.addEventListener("pointermove", handlePointerMove, { passive: true });

    return () => {
      finePointer.removeEventListener("change", updateAvailability);
      reducedMotion.removeEventListener("change", updateAvailability);
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);

  if (!enabled) return null;

  return (
    <AnimatePresence>
      {particles.map((particle) => (
        <motion.span
          aria-hidden="true"
          className="gradient-cursor-particle"
          key={particle.id}
          style={{
            left: particle.x,
            top: particle.y,
            width: particle.size * 3,
            height: particle.size * 3,
            background: `radial-gradient(circle, hsl(${particle.hue} 100% 76%), transparent 72%)`,
            boxShadow: `0 0 ${particle.size * 3}px hsl(${particle.hue} 100% 58% / ${particle.intensity})`,
          }}
          initial={{ opacity: particle.intensity, scale: 0.35 }}
          animate={{ opacity: 0, scale: 2.8, x: particle.driftX, y: particle.driftY }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          onAnimationComplete={() => removeParticle(particle.id)}
        />
      ))}
    </AnimatePresence>
  );
}

