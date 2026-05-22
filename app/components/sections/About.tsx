"use client";

import { Reveal } from "@/app/components/ui/Reveal";

interface AboutProps {
  setHovering: (v: boolean) => void;
}

const FACTS = [
  { k: "Now", v: "ZS Associates", sub: "Senior SWE · Bangalore" },
  { k: "Before", v: "Jio", sub: "SDE · Navi Mumbai" },
  { k: "Focus", v: "Distributed + AI", sub: "Systems & LLM platforms" },
  { k: "Style", v: "Backend-leaning", sub: "Pragmatic, resilient" },
];

export function About({ setHovering }: AboutProps) {
  return (
    <section id="about" className="section">
      <div className="section-inner">
        <Reveal>
          <p className="eyebrow" style={{ marginBottom: 18 }}>
            01 — About
          </p>
        </Reveal>

        <div className="split-2">
          {/* Left — narrative */}
          <div>
            <Reveal delay={0.05}>
              <h2 className="section-title" style={{ marginBottom: 28 }}>
                Crafting intelligent,
                <br />
                <em className="grad-text not-italic">resilient software.</em>
              </h2>
            </Reveal>

            <Reveal delay={0.14}>
              <p
                className="leading-[1.9]"
                style={{ color: "var(--muted)", fontSize: 16, marginBottom: 22, maxWidth: 520 }}
              >
                I&apos;m a backend-leaning engineer with a track record across
                distributed systems and AI platforms. At{" "}
                <strong style={{ color: "var(--text)" }}>ZS Associates</strong> I
                build AI-powered enterprise tooling; before that at{" "}
                <strong style={{ color: "var(--text)" }}>Jio</strong> I owned
                large-scale cloud observability modules monitoring thousands of
                servers in real time.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <p
                className="leading-[1.9]"
                style={{ color: "var(--muted)", fontSize: 16, marginBottom: 32, maxWidth: 520 }}
              >
                I care about the unglamorous parts — latency budgets, failure
                modes, clean boundaries — because that&apos;s what lets the
                interesting parts ship.
              </p>
            </Reveal>

            <Reveal delay={0.26}>
              <a
                href="https://docs.google.com/document/d/1zONOvPZMG0a4zGpZel6r0mduLhkxmYtbjl64KGY9AQI/edit?pli=1&tab=t.0"
                target="_blank"
                rel="noreferrer"
                onMouseEnter={() => setHovering(true)}
                onMouseLeave={() => setHovering(false)}
                className="btn-primary inline-flex items-center gap-2 rounded-[11px] font-semibold no-underline"
                style={{ padding: "13px 26px", fontSize: 14 }}
              >
                View CV ↗
              </a>
            </Reveal>
          </div>

          {/* Right — fact cards */}
          <Reveal delay={0.2}>
            <div className="grid" style={{ gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              {FACTS.map((f) => (
                <div
                  key={f.k}
                  className="stat-card"
                  onMouseEnter={() => setHovering(true)}
                  onMouseLeave={() => setHovering(false)}
                  style={{ padding: "18px 20px" }}
                >
                  <p className="mono" style={{ fontSize: 10, color: "var(--accent)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 10 }}>
                    {f.k}
                  </p>
                  <p className="serif font-semibold" style={{ fontSize: 22, color: "var(--text)", lineHeight: 1.1, marginBottom: 5 }}>
                    {f.v}
                  </p>
                  <p style={{ fontSize: 12, color: "var(--muted)", lineHeight: 1.4 }}>
                    {f.sub}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
