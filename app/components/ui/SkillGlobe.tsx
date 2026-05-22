"use client";

import { useEffect, useRef } from "react";
import createGlobe, { COBEOptions } from "cobe";

// onRender is present at runtime but omitted from the v2 type declaration
type COBEOptionsWithRender = COBEOptions & {
  onRender: (state: Partial<COBEOptions>) => void;
};

interface SkillGlobeProps {
  dark: boolean;
}

export function SkillGlobe({ dark }: SkillGlobeProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const phiRef = useRef(0);
  const globeRef = useRef<ReturnType<typeof createGlobe> | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let width = canvas.offsetWidth || 400;

    const onResize = () => {
      width = canvas.offsetWidth || 400;
    };
    window.addEventListener("resize", onResize);

    const options: COBEOptionsWithRender = {
      devicePixelRatio: Math.min(typeof window !== "undefined" ? window.devicePixelRatio : 2, 2),
      width: width * 2,
      height: width * 2,
      phi: phiRef.current,
      theta: 0.28,
      dark: dark ? 1 : 0,
      diffuse: 1.15,
      mapSamples: 16000,
      mapBrightness: dark ? 4.5 : 9,
      baseColor: dark ? [0.12, 0.09, 0.06] : [0.97, 0.94, 0.89],
      markerColor: dark ? [0.77, 0.60, 0.42] : [0.62, 0.40, 0.21],
      glowColor: dark ? [0.48, 0.33, 0.18] : [0.70, 0.52, 0.30],
      markers: [
        { location: [19.076, 72.878], size: 0.08 },  // Mumbai (Jio)
        { location: [28.614, 77.209], size: 0.07 },  // Delhi (ZS)
        { location: [37.760, -122.437], size: 0.05 }, // SF
        { location: [51.507, -0.128], size: 0.05 },  // London
        { location: [35.676, 139.650], size: 0.04 }, // Tokyo
        { location: [1.352, 103.820], size: 0.04 },  // Singapore
        { location: [47.606, -122.332], size: 0.04 }, // Seattle
        { location: [48.857, 2.352], size: 0.04 },   // Paris
      ],
      onRender: (state) => {
        state.phi = phiRef.current;
        phiRef.current += 0.0038;
        state.width = width * 2;
        state.height = width * 2;
      },
    };

    globeRef.current = createGlobe(canvas, options as COBEOptions);

    return () => {
      globeRef.current?.destroy();
      window.removeEventListener("resize", onResize);
    };
  }, [dark]);

  return (
    <div style={{ position: "relative", width: "100%", aspectRatio: "1" }}>
      {/* Ambient glow behind globe */}
      <div
        style={{
          position: "absolute",
          inset: "20%",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, var(--accent) 0%, transparent 70%)",
          opacity: dark ? 0.18 : 0.10,
          filter: "blur(40px)",
          pointerEvents: "none",
        }}
      />
      <canvas
        ref={canvasRef}
        style={{ width: "100%", height: "100%", position: "relative" }}
      />
    </div>
  );
}
