"use client";

interface CursorProps {
  smooth: { x: number; y: number };
  raw: { x: number; y: number };
  hovering: boolean;
}

export function Cursor({ smooth, raw, hovering }: CursorProps) {
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
