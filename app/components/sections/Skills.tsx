"use client";

import { Reveal } from "@/app/components/ui/Reveal";
import { skills } from "@/app/data/skills";

interface SkillsProps {
  setHovering: (v: boolean) => void;
}

export function Skills({ setHovering }: SkillsProps) {
  return (
    <section
      id="skills"
      style={{
        padding: "120px clamp(24px,7vw,100px)",
        background: "var(--bg)",
        transition: "background 0.4s",
      }}
    >
      <div style={{ maxWidth: 880 }}>
        <Reveal>
          <p
            className="mono font-medium uppercase tracking-[0.12em]"
            style={{ fontSize: 11, color: "var(--accent)", marginBottom: 14 }}
          >
            Toolkit
          </p>
          <h2
            className="serif font-semibold leading-[1.05]"
            style={{
              fontSize: "clamp(36px,5vw,64px)",
              color: "var(--text)",
              marginBottom: 40,
            }}
          >
            Stack
          </h2>
        </Reveal>

        {Object.entries(skills).map(([cat, items], i) => (
          <Reveal key={cat} delay={i * 0.1}>
            <div
              className="rounded-[18px]"
              style={{
                padding: 36,
                marginBottom: 24,
                background: "var(--surface)",
                border: "1px solid var(--border)",
                transition: "background 0.4s, border-color 0.4s",
              }}
            >
              <h3
                className="mono font-medium tracking-[0.07em]"
                style={{
                  fontSize: 11,
                  color: "var(--accent)",
                  marginBottom: 20,
                }}
              >
                {cat === "Languages"
                  ? "// languages"
                  : "// technologies, tools & methods"}
              </h3>
              <div className="flex flex-wrap gap-3">
                {items.map((s) => (
                  <span
                    key={s}
                    className="mono inline-block font-medium"
                    onMouseEnter={() => setHovering(true)}
                    onMouseLeave={() => setHovering(false)}
                    style={{
                      fontSize: 12,
                      padding: "6px 14px",
                      borderRadius: 6,
                      background: "var(--accent-soft)",
                      color: "var(--tag-text)",
                      border: "1px solid var(--border)",
                      transition: "background 0.15s, transform 0.15s",
                    }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
