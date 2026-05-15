"use client";

import { useEffect, useState, useRef } from "react";

interface CursorProps {
  smooth: { x: number; y: number };
  raw: { x: number; y: number };
  hovering: boolean;
}

export function Cursor({ smooth, raw, hovering }: CursorProps) {
  const [visible, setVisible] = useState(false);
  const disabled = useRef(false);

  useEffect(() => {
    // Permanently hide custom cursor once a touch interaction is detected.
    // This handles pure touch devices and hybrid laptops switching to touch.
    const onTouchStart = () => {
      disabled.current = true;
      setVisible(false);
    };

    const isTouchDevice = matchMedia("(hover: none) and (pointer: coarse)").matches;
    if (isTouchDevice) {
      disabled.current = true;
      setVisible(false);
      return;
    }

    // Show cursor for hover-capable devices
    setVisible(true);
    window.addEventListener("touchstart", onTouchStart, { passive: true });

    return () => {
      window.removeEventListener("touchstart", onTouchStart);
    };
  }, []);

  if (!visible) return null;

  return (
    <>
      {/* Outer ring */}
      <div
        className="fixed z-[9999] pointer-events-none rounded-full"
        style={{
          left: smooth.x - 18,
          top: smooth.y - 18,
          width: 36,
          height: 36,
          border: "1.5px solid var(--accent)",
          opacity: hovering ? 0.9 : 0.4,
          transform: `scale(${hovering ? 1.7 : 1})`,
          transition: "transform 0.3s ease, opacity 0.3s ease",
        }}
      />
      {/* Inner dot */}
      <div
        className="fixed z-[9999] pointer-events-none rounded-full"
        style={{
          left: raw.x - 3,
          top: raw.y - 3,
          width: 6,
          height: 6,
          background: "var(--accent)",
          opacity: hovering ? 0 : 0.9,
          transition: "opacity 0.2s",
        }}
      />
    </>
  );
}
