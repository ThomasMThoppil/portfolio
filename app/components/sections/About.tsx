"use client";

import { Reveal } from "@/app/components/ui/Reveal";

interface AboutProps {
  setHovering: (v: boolean) => void;
}

const FACTS = [
  { k: "Now", v: "ZS Associates", sub: "Senior Applied Scientist" },
  { k: "Before", v: "Prudent Global", sub: "Junior Data Scientist" },
  { k: "Focus", v: "LLMs & GenAI", sub: "Research to production" },
  { k: "Award", v: "Client Impact", sub: "ZS Associates · 2024" },
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
                Building AI that
                <br />
                <em className="grad-text not-italic">actually ships.</em>
              </h2>
            </Reveal>

            <Reveal delay={0.14}>
              <p
                className="leading-[1.9]"
                style={{ color: "var(--muted)", fontSize: 16, marginBottom: 22, maxWidth: 520 }}
              >
                I&apos;m a Senior Applied AI Scientist with 4+ years building and
                scaling production ML systems. At{" "}
                <strong style={{ color: "var(--text)" }}>ZS Associates</strong> I
                lead AI platform development for pharmaceutical clients — from
                LLM-powered content verification to semi-supervised ML pipelines
                that improved medical claims capture by 60%.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <p
                className="leading-[1.9]"
                style={{ color: "var(--muted)", fontSize: 16, marginBottom: 32, maxWidth: 520 }}
              >
                I care about the gap between research and production —
                translating cutting-edge techniques into systems that are
                reliable, scalable, and actually deliver measurable business
                impact.
              </p>
            </Reveal>

            <Reveal delay={0.26}>
              <a
                href="https://drive.google.com/file/d/1KJNrKmxEaTzgw0KLFUfCAvGKsJMvBKj3/view?usp=sharing"
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
