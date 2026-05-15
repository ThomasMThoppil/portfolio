"use client";

import { useState, useEffect, useRef } from "react";

interface CursorState {
  x: number;
  y: number;
}

/**
 * Tracks raw and smooth cursor positions for the custom cursor effect.
 *
 * On touch-initiated interactions (touchstart), the custom cursor is
 * permanently disabled for the session — this handles pure touch devices
 * (phones, tablets) as well as touchscreen laptops where the user
 * switches to touch-only mode.
 *
 * On hover-capable devices (mouse/trackpad), the cursor tracks normally.
 */
export function useCursor() {
  const [raw, setRaw] = useState<CursorState>({ x: -200, y: -200 });
  const [smooth, setSmooth] = useState<CursorState>({ x: -200, y: -200 });
  const target = useRef({ x: -200, y: -200 });
  const rafId = useRef<number | null>(null);
  const disabled = useRef(false);

  useEffect(() => {
    // Permanently disable custom cursor once a touch interaction is detected.
    // This handles both pure touch devices and hybrid laptops where the
    // user switches to touch-only mode.
    const onTouchStart = () => {
      disabled.current = true;
    };

    // If the very first interaction is a touch, bail immediately.
    // Also listen for touchstart to catch late switches to touch mode.
    const isTouchDevice = matchMedia("(hover: none) and (pointer: coarse)").matches;
    if (isTouchDevice) {
      disabled.current = true;
      return;
    }

    window.addEventListener("touchstart", onTouchStart, { passive: true });

    const onMove = (e: MouseEvent) => {
      if (disabled.current) return;
      target.current = { x: e.clientX, y: e.clientY };
      setRaw({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", onMove, { passive: true });

    const tick = () => {
      if (disabled.current) return;
      setSmooth((prev) => ({
        x: prev.x + (target.current.x - prev.x) * 0.1,
        y: prev.y + (target.current.y - prev.y) * 0.1,
      }));
      rafId.current = requestAnimationFrame(tick);
    };

    rafId.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("mousemove", onMove);
      if (rafId.current !== null) cancelAnimationFrame(rafId.current);
    };
  }, []);

  return { raw, smooth };
}
