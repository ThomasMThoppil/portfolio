"use client";

import { Reveal } from "@/app/components/ui/Reveal";
import { ExternalIcon } from "@/app/components/icons";
import { projects } from "@/app/data/projects";
import type { Project } from "@/app/types";

interface ProjectsSectionProps {
  dark: boolean;
  setHovering: (v: boolean) => void;
}

function tilt(e: React.MouseEvent<HTMLDivElement>) {
  const rect = e.currentTarget.getBoundingClientRect();
  const x = (e.clientX - rect.left) / rect.width - 0.5;
  const y = (e.clientY - rect.top) / rect.height - 0.5;
  e.currentTarget.style.transition = "transform 0.1s ease-out";
  e.currentTarget.style.transform = `perspective(900px) rotateX(${-y * 7}deg) rotateY(${x * 7}deg) translateZ(8px)`;
}
function untilt(e: React.MouseEvent<HTMLDivElement>) {
  e.currentTarget.style.transition = "transform 0.5s cubic-bezier(0.34,1.56,0.64,1), background 0.4s, border-color 0.4s";
  e.currentTarget.style.transform = "perspective(900px) rotateX(0) rotateY(0) translateZ(0)";
}

function CardArt({ p, dark, large }: { p: Project; dark: boolean; large?: boolean }) {
  const id = `grid-${p.name.replace(/\s/g, "")}`;
  return (
    <div
      className={`relative overflow-hidden shrink-0 ${large ? "featured-art" : ""}`}
      style={{
        height: large ? "100%" : 168,
        minHeight: large ? 220 : undefined,
        background: dark
          ? `linear-gradient(135deg,${p.bar}22,${p.bar}44)`
          : `linear-gradient(135deg,${p.bar}18,${p.bar}38)`,
      }}
    >
      <svg className="absolute inset-0 w-full h-full" style={{ opacity: dark ? 0.12 : 0.08 }} xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id={id} width="24" height="24" patternUnits="userSpaceOnUse">
            <path d="M 24 0 L 0 0 0 24" fill="none" stroke={p.bar} strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${id})`} />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="float" style={{ fontSize: large ? 84 : 56, filter: "drop-shadow(0 4px 16px rgba(0,0,0,0.18))" }}>
          {p.emoji}
        </span>
      </div>
      <span
        className="mono absolute top-3 right-3 font-medium"
        style={{
          fontSize: 10, padding: "3px 9px", borderRadius: 100,
          background: dark ? "rgba(0,0,0,0.45)" : "rgba(255,255,255,0.7)",
          color: "var(--accent)", border: "1px solid var(--border)", backdropFilter: "blur(6px)",
        }}
      >
        {p.status}
      </span>
      <div className="absolute bottom-0 left-0 right-0 h-[3px]" style={{ background: p.bar }} />
    </div>
  );
}

function CardBody({ p }: { p: Project }) {
  return (
    <div className="flex-1 flex flex-col" style={{ padding: 24 }}>
      <h3 className="serif font-semibold" style={{ fontSize: 22, color: "var(--text)", marginBottom: 8, lineHeight: 1.1 }}>
        {p.name}
      </h3>
      <p className="flex-1" style={{ color: "var(--muted)", fontSize: 14, lineHeight: 1.72, marginBottom: 20 }}>
        {p.description}
      </p>
      <div className="flex flex-wrap gap-2" style={{ marginBottom: 16 }}>
        {p.tags.map((t) => (
          <span
            key={t}
            className="mono"
            style={{ fontSize: 10, padding: "4px 9px", background: "var(--accent-soft)", color: "var(--tag-text)", borderRadius: 4, border: "1px solid var(--border)" }}
          >
            {t}
          </span>
        ))}
      </div>
      {p.link !== "#" ? (
        <a href={p.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 font-semibold no-underline" style={{ color: "var(--accent)", fontSize: 13 }}>
          View Project <ExternalIcon />
        </a>
      ) : (
        <span style={{ color: "var(--muted)", fontSize: 12 }}>Private / Work Project</span>
      )}
    </div>
  );
}

export function ProjectsSection({ dark, setHovering }: ProjectsSectionProps) {
  const [featured, ...rest] = projects;

  return (
    <section id="projects" className="section" style={{ background: "var(--bg-alt)" }}>
      <div className="section-inner">
        <Reveal>
          <p className="eyebrow" style={{ marginBottom: 18 }}>
            04 — Work
          </p>
          <h2 className="section-title" style={{ marginBottom: 40 }}>
            Selected Projects
          </h2>
        </Reveal>

        {/* Featured */}
        <Reveal delay={0.06}>
          <div
            className="featured-card rounded-[24px] overflow-hidden grid"
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={(e) => { setHovering(false); untilt(e); }}
            onMouseMove={tilt}
            style={{
              background: "var(--surface)",
              border: "1px solid var(--border)",
              transition: "background 0.4s, border-color 0.4s",
              willChange: "transform",
              marginBottom: 18,
            }}
          >
            <CardArt p={featured} dark={dark} large />
            <div className="flex flex-col justify-center">
              <CardBody p={featured} />
            </div>
          </div>
        </Reveal>

        {/* Rest */}
        <div className="proj-grid">
          {rest.map((p, i) => (
            <Reveal key={p.name} delay={0.1 + i * 0.07}>
              <div
                className="rounded-[22px] overflow-hidden flex flex-col h-full"
                onMouseEnter={() => setHovering(true)}
                onMouseLeave={(e) => { setHovering(false); untilt(e); }}
                onMouseMove={tilt}
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  transition: "background 0.4s, border-color 0.4s",
                  willChange: "transform",
                }}
              >
                <CardArt p={p} dark={dark} />
                <CardBody p={p} />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
