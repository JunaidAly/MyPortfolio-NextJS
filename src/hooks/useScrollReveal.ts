"use client";

import { useEffect, useRef, useState } from "react";

export function useScrollReveal<T extends HTMLElement>(threshold = 0.88) {
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let frame = 0;
    let revealed = false;

    const checkPosition = () => {
      frame = 0;
      const element = ref.current;
      if (!element || revealed) return;

      const rect = element.getBoundingClientRect();
      const isVisible = rect.top <= window.innerHeight * threshold && rect.bottom >= 0;

      if (isVisible) {
        revealed = true;
        setIsVisible(true);
        window.removeEventListener("scroll", scheduleCheck);
        window.removeEventListener("resize", scheduleCheck);
      }
    };

    const scheduleCheck = () => {
      if (!frame) frame = window.requestAnimationFrame(checkPosition);
    };

    window.addEventListener("scroll", scheduleCheck, { passive: true });
    window.addEventListener("resize", scheduleCheck);
    scheduleCheck();
    const delayedCheck = window.setTimeout(scheduleCheck, 250);

    return () => {
      window.removeEventListener("scroll", scheduleCheck);
      window.removeEventListener("resize", scheduleCheck);
      window.clearTimeout(delayedCheck);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [threshold]);

  return { ref, isVisible };
}
