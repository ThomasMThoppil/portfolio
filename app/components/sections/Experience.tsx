"use client";

import { Reveal } from "@/app/components/ui/Reveal";
import { experience } from "@/app/data/experience";

interface ExperienceSectionProps {
  setHovering: (v: boolean) => void;
}

export function ExperienceSection({ setHovering }: ExperienceSectionProps) {
  return (
    <section
      id="experience"
      style={{
        padding: "120px clamp(24px,7vw,100px)",
        background: "var(--bg-alt)",
        transition: "background 0.4s",
      }}
    >
      <div style={{ maxWidth: 880 }}>
        <Reveal>
          <p
            className="mono font-medium uppercase tracking-[0.12em]"
            style={{ fontSize: 11, color: "var(--accent)", marginBottom: 14 }}
          >
            Career
          </p>
          <h2
            className="serif font-semibold leading-[1.05]"
            style={{
              fontSize: "clamp(36px,5vw,64px)",
              color: "var(--text)",
              marginBottom: 44,
            }}
          >
            Experience
          </h2>
        </Reveal>

        <div>
          {experience.map((job, i) => (
            <Reveal key={job.company} delay={i * 0.12}>
              <div style={{ marginBottom: 40 }}>
                <div
                  className="lift rounded-[18px]"
                  onMouseEnter={() => setHovering(true)}
                  onMouseLeave={() => setHovering(false)}
                  style={{
                    padding: 36,
                    background: "var(--surface)",
                    border: "1px solid var(--border)",
                    transition: "background 0.4s, border-color 0.4s",
                  }}
                >
                  <div
                    className="flex justify-between items-start flex-wrap gap-3"
                    style={{ marginBottom: 12 }}
                  >
                    <div>
                      <h3
                        className="text-lg font-bold"
                        style={{ color: "var(--text)", marginBottom: 4 }}
                      >
                        {job.title}
                      </h3>
                      <div className="flex items-center gap-3">
                        <span
                          className="font-semibold"
                          style={{ color: "var(--accent)", fontSize: 14 }}
                        >
                          {job.company}
                        </span>
                        <span style={{ color: "var(--muted)", fontSize: 12 }}>
                          · {job.location}
                        </span>
                      </div>
                    </div>
                    <span
                      className="mono whitespace-nowrap font-medium"
                      style={{
                        background: "var(--accent-soft)",
                        color: "var(--accent)",
                        padding: "4px 12px",
                        borderRadius: 100,
                        fontSize: 11,
                        border: "1px solid var(--border)",
                      }}
                    >
                      {job.period}
                    </span>
                  </div>

                  <ul className="list-none flex flex-col gap-3" style={{ marginTop: 20 }}>
                    {job.highlights.map((h, j) => (
                      <li
                        key={j}
                        className="flex gap-3"
                        style={{
                          color: "var(--muted)",
                          fontSize: 14,
                          lineHeight: 1.72,
                        }}
                      >
                        <span
                          className="shrink-0 mt-[3px]"
                          style={{ color: "var(--accent)", opacity: 0.65 }}
                        >
                          →
                        </span>
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
    </section>
  );
}
