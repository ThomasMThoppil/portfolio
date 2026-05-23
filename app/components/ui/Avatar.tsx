"use client";

import { useState } from "react";
import type { AvatarProps } from "@/app/types";

export function AvatarImage({
  size,
  accentColor,
  borderColor,
  shadowColor,
}: AvatarProps) {
  const [error, setError] = useState(false);

  return (
    <div
      className="relative shrink-0 overflow-hidden rounded-full"
      style={{
        width: size,
        height: size,
        border: `2px solid ${borderColor}`,
        boxShadow: `0 0 0 3px ${shadowColor}, 0 4px 20px rgba(0,0,0,0.3)`,
        background: "color-mix(in srgb, var(--accent) 13%, transparent)",
        transition: "border-color 0.4s, box-shadow 0.4s",
      }}
    >
      {!error && (
        <img
          src="/images/thomas.jpg"
          alt="Thomas M Thoppil"
          onError={() => setError(true)}
          className="block h-full w-full object-cover object-top"
        />
      )}

      {error && (
        <div
          className="absolute inset-0 flex items-center justify-center select-none"
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontWeight: 600,
            fontSize: size * 0.34,
            color: accentColor,
            letterSpacing: "-0.02em",
          }}
        >
          TT
        </div>
      )}
    </div>
  );
}
