"use client";

import { Reveal } from "@/app/components/ui/Reveal";
import { experience } from "@/app/data/experience";

interface ExperienceSectionProps {
  setHovering: (v: boolean) => void;
}

export function ExperienceSection({ setHovering }: ExperienceSectionProps) {
  return (
    <section id="experience" className="section">
      <div className="section-inner">
        <Reveal>
          <p className="eyebrow" style={{ marginBottom: 18 }}>
            03 — Career
          </p>
          <h2 className="section-title" style={{ marginBottom: 48 }}>
            Experience
          </h2>
        </Reveal>

        {/* Timeline */}
        <div style={{ position: "relative" }}>
          {/* vertical line */}
          <div
            className="hidden sm:block"
            style={{
              position: "absolute",
              left: 7,
              top: 6,
              bottom: 6,
              width: 1,
              background: "linear-gradient(var(--border-2), var(--border) 70%, transparent)",
            }}
          />

          <div className="flex flex-col" style={{ gap: 14 }}>
            {experience.map((job, i) => (
              <Reveal key={job.company} delay={i * 0.12}>
                <div
                  className="sm:pl-9"
                  style={{ position: "relative" }}
                >
                  {/* dot */}
                  <span
                    className="timeline-dot hidden sm:block"
                    style={{
                      position: "absolute",
                      left: 1,
                      top: 30,
                      width: 13,
                      height: 13,
                      borderRadius: 99,
                      background: i === 0 ? "var(--accent)" : "var(--surface-2)",
                      border: "1.5px solid var(--accent)",
                    }}
                  />

                  <div
                    className="lift rounded-[20px]"
                    onMouseEnter={() => setHovering(true)}
                    onMouseLeave={() => setHovering(false)}
                    style={{
                      padding: "26px 28px",
                      background: "var(--surface)",
                      border: "1px solid var(--border)",
                    }}
                  >
                    <div className="flex justify-between items-start flex-wrap gap-3" style={{ marginBottom: 14 }}>
                      <div>
                        <h3 className="serif font-semibold" style={{ fontSize: 24, color: "var(--text)", lineHeight: 1.1, marginBottom: 6 }}>
                          {job.title}
                        </h3>
                        <div className="flex items-center gap-3 flex-wrap">
                          <span className="font-semibold" style={{ color: "var(--accent)", fontSize: 14 }}>
                            {job.company}
                          </span>
                          <span style={{ color: "var(--muted)", fontSize: 12 }}>· {job.location}</span>
                        </div>
                      </div>
                      <span
                        className="mono whitespace-nowrap font-medium"
                        style={{
                          background: "var(--accent-soft)",
                          color: "var(--accent)",
                          padding: "5px 13px",
                          borderRadius: 100,
                          fontSize: 11,
                          border: "1px solid var(--border)",
                        }}
                      >
                        {job.period}
                      </span>
                    </div>

                    <ul className="list-none flex flex-col gap-2.5" style={{ marginTop: 16 }}>
                      {job.highlights.map((h, j) => (
                        <li
                          key={j}
                          className="flex gap-3"
                          style={{ color: "var(--muted)", fontSize: 14, lineHeight: 1.72 }}
                        >
                          <span className="shrink-0 mt-[3px]" style={{ color: "var(--accent)", opacity: 0.7 }}>→</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
