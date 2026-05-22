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
          left: smooth.x - 19,
          top: smooth.y - 19,
          width: 38,
          height: 38,
          border: "1.5px solid var(--accent)",
          background: hovering ? "var(--accent-soft)" : "transparent",
          opacity: hovering ? 1 : 0.45,
          transform: `scale(${hovering ? 1.85 : 1})`,
          transition: "transform 0.32s cubic-bezier(0.34,1.56,0.64,1), opacity 0.3s ease, background 0.3s ease",
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
          opacity: hovering ? 0 : 0.95,
          transform: `scale(${hovering ? 0.4 : 1})`,
          transition: "opacity 0.2s, transform 0.2s",
        }}
      />
    </>
  );
}
