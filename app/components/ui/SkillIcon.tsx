"use client";

import {
  siPython,
  siJavascript,
  siTypescript,
  siFastapi,
  siFlask,
  siNextdotjs,
  siReact,
  siDocker,
  siKubernetes,
  siApachekafka,
  siRedis,
  siElasticsearch,
  siPostgresql,
  siMysql,
  siKibana,
  siExcalidraw,
} from "simple-icons";

const ICONS: Record<string, { path: string; hex: string }> = {
  python: { path: siPython.path, hex: siPython.hex },
  javascript: { path: siJavascript.path, hex: siJavascript.hex },
  typescript: { path: siTypescript.path, hex: siTypescript.hex },
  fastapi: { path: siFastapi.path, hex: siFastapi.hex },
  flask: { path: siFlask.path, hex: siFlask.hex },
  nextdotjs: { path: siNextdotjs.path, hex: siNextdotjs.hex },
  react: { path: siReact.path, hex: siReact.hex },
  docker: { path: siDocker.path, hex: siDocker.hex },
  kubernetes: { path: siKubernetes.path, hex: siKubernetes.hex },
  apachekafka: { path: siApachekafka.path, hex: siApachekafka.hex },
  redis: { path: siRedis.path, hex: siRedis.hex },
  elasticsearch: { path: siElasticsearch.path, hex: siElasticsearch.hex },
  postgresql: { path: siPostgresql.path, hex: siPostgresql.hex },
  mysql: { path: siMysql.path, hex: siMysql.hex },
  kibana: { path: siKibana.path, hex: siKibana.hex },
  excalidraw: { path: siExcalidraw.path, hex: siExcalidraw.hex },
};

function getLuminance(hex: string): number {
  const r = parseInt(hex.slice(0, 2), 16) / 255;
  const g = parseInt(hex.slice(2, 4), 16) / 255;
  const b = parseInt(hex.slice(4, 6), 16) / 255;
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

interface SkillIconProps {
  slug: string;
  hex?: string;
  size?: number;
  dark: boolean;
}

export function SkillIcon({ slug, hex, size = 14, dark }: SkillIconProps) {
  const icon = ICONS[slug];
  if (!icon) return null;

  const baseHex = hex || icon.hex;
  const luminance = getLuminance(baseHex);
  // Very dark icons (e.g. Next.js black, Kafka near-black) get a light stand-in in dark mode
  const color = dark && luminance < 0.12 ? "c8b99a" : baseHex;

  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill={`#${color}`}
      style={{ flexShrink: 0 }}
      aria-hidden="true"
    >
      <path d={icon.path} />
    </svg>
  );
}
