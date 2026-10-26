"use client";

import { useEffect, useRef } from "react";
import initializeFluidCursor from "@/hooks/useFluidCursor";

export default function FluidCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const finePointer = window.matchMedia("(pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (!finePointer.matches || reducedMotion.matches) {
      canvas.hidden = true;
      return;
    }

    let dispose: (() => void) | undefined;
    const initializationFrame = window.requestAnimationFrame(() => {
      try {
        dispose = initializeFluidCursor(canvas);
      } catch {
        canvas.hidden = true;
      }
    });

    return () => {
      window.cancelAnimationFrame(initializationFrame);
      dispose?.();
    };
  }, []);

  return <canvas ref={canvasRef} className="fluid-cursor-canvas" aria-hidden="true" />;
}
