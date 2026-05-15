"use client";

interface AmbientLightProps {
  raw: { x: number; y: number };
}

export function AmbientLight({ raw }: AmbientLightProps) {
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
