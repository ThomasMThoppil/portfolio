"use client";

import { useEffect, useState, useRef } from "react";

interface AmbientLightProps {
  raw: { x: number; y: number };
}

export function AmbientLight({ raw }: AmbientLightProps) {
  const [visible, setVisible] = useState(false);
  const disabled = useRef(false);

  useEffect(() => {
    // Permanently hide ambient light once a touch interaction is detected.
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

    setVisible(true);
    window.addEventListener("touchstart", onTouchStart, { passive: true });

    return () => {
      window.removeEventListener("touchstart", onTouchStart);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed pointer-events-none z-0"
      style={{
        left: raw.x - 300,
        top: raw.y - 300,
        width: 600,
        height: 600,
        borderRadius: "50%",
        background:
          "radial-gradient(circle, var(--accent-soft) 0%, transparent 60%)",
        filter: "blur(80px)",
        transition: "background 0.3s",
      }}
    />
  );
}
