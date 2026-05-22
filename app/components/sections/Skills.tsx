"use client";

import { Reveal } from "@/app/components/ui/Reveal";
// import { SkillGlobe } from "@/app/components/ui/SkillGlobe"; // globe paused — see git history to restore
import { SkillIcon } from "@/app/components/ui/SkillIcon";
import { skillGroups } from "@/app/data/skills";

interface SkillsProps {
  dark: boolean;
  setHovering: (v: boolean) => void;
}

// Span layout for the bento cells (must total a tidy grid)
const SPANS = ["col-2", "col-2", "col-2", "col-3", "col-3"];

export function Skills({ dark, setHovering }: SkillsProps) {
  const tickerItems = skillGroups.flatMap((g) => g.items);

  return (
    <section id="skills" className="section" style={{ background: "var(--bg-alt)" }}>
      <div className="section-inner">
        <Reveal>
          <p className="eyebrow" style={{ marginBottom: 18 }}>
            02 — Toolkit
          </p>
          <h2 className="section-title" style={{ marginBottom: 40 }}>
            Stack &amp; Tools
          </h2>
        </Reveal>

        {/* Marquee ticker */}
        <Reveal delay={0.08}>
          <div
            className="marquee-wrap marquee-mask"
            style={{
              marginBottom: 36,
              padding: "16px 0",
              borderTop: "1px solid var(--border)",
              borderBottom: "1px solid var(--border)",
            }}
          >
            <div className="marquee" style={{ gap: 14 }}>
              {[...tickerItems, ...tickerItems].map((s, idx) => (
                <span
                  key={`${s.name}-${idx}`}
                  className="mono inline-flex items-center gap-2 whitespace-nowrap"
                  style={{ fontSize: 13, color: "var(--muted)", paddingRight: 14 }}
                >
                  {s.iconSlug ? (
                    <SkillIcon slug={s.iconSlug} hex={s.hex} size={15} dark={dark} />
                  ) : (
                    <span style={{ width: 5, height: 5, borderRadius: 99, background: "var(--accent)", opacity: 0.6 }} />
                  )}
                  {s.name}
                  <span style={{ color: "var(--border-2)", marginLeft: 6 }}>/</span>
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Bento grid of categories */}
        <div className="bento">
          {skillGroups.map((group, i) => (
            <Reveal key={group.category} delay={0.08 + i * 0.06}>
              <div
                className={`bento-cell ${SPANS[i] ?? "col-2"}`}
                onMouseEnter={() => setHovering(true)}
                onMouseLeave={() => setHovering(false)}
                style={{ height: "100%" }}
              >
                <div className="flex items-baseline justify-between" style={{ marginBottom: 14 }}>
                  <p className="mono font-medium" style={{ fontSize: 10.5, color: "var(--accent)", letterSpacing: "0.05em" }}>
                    {group.comment}
                  </p>
                  <span className="mono" style={{ fontSize: 10, color: "var(--muted)", opacity: 0.6 }}>
                    {String(group.items.length).padStart(2, "0")}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span
                      key={skill.name}
                      className="skill-chip mono inline-flex items-center gap-[7px] font-medium"
                      style={{
                        fontSize: 12,
                        padding: "5px 11px",
                        borderRadius: 8,
                        background: "var(--accent-soft)",
                        color: "var(--tag-text)",
                        border: "1px solid var(--border)",
                      }}
                    >
                      {skill.iconSlug && (
                        <SkillIcon slug={skill.iconSlug} hex={skill.hex} size={13} dark={dark} />
                      )}
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
