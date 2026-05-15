"use client";

import { useState, useEffect, useRef, useCallback } from "react";

interface CursorState {
  x: number;
  y: number;
}

/**
 * Tracks raw and smooth cursor positions.
 * Smooth position is interpolated via requestAnimationFrame
 * using refs to avoid React re-renders on every frame.
 */
export function useCursor() {
  const [raw, setRaw] = useState<CursorState>({ x: -200, y: -200 });
  const [smooth, setSmooth] = useState<CursorState>({ x: -200, y: -200 });
  const target = useRef({ x: -200, y: -200 });
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      target.current = { x: e.clientX, y: e.clientY };
      setRaw({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", onMove, { passive: true });

    const tick = () => {
      setSmooth((prev) => ({
        x: prev.x + (target.current.x - prev.x) * 0.1,
        y: prev.y + (target.current.y - prev.y) * 0.1,
      }));
      rafId.current = requestAnimationFrame(tick);
    };

    rafId.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      if (rafId.current !== null) cancelAnimationFrame(rafId.current);
    };
  }, []);

  return { raw, smooth };
}
