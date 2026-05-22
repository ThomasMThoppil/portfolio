"use client";

import { Reveal } from "@/app/components/ui/Reveal";

interface HeroProps {
  dark: boolean;
  go: (id: string) => void;
  setHovering: (v: boolean) => void;
}

const STATS = [
  { value: "4+", label: "Years shipping\nproduction systems" },
  { value: "1500+", label: "Servers monitored\nin real time" },
  { value: "150k+", label: "Docs indexed for\nRAG retrieval" },
  { value: "60s→.5s", label: "Endpoint latency\noptimized" },
];

export function Hero({ dark, go, setHovering }: HeroProps) {
  return (
    <section
      id="home"
      className="relative overflow-hidden grid-bg"
      style={{
        minHeight: "calc(100dvh - clamp(58px,7vw,70px))",
        display: "flex",
        alignItems: "center",
        padding: "clamp(48px,8vw,80px) clamp(24px,7vw,100px)",
      }}
    >
      {/* Background glow orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute rounded-full"
          style={{
            width: 760, height: 760,
            background: "var(--accent)",
            filter: "blur(150px)",
            opacity: dark ? 0.10 : 0.07,
            top: "-200px", right: "-4%",
            animation: "floatSlow 16s ease-in-out infinite",
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            width: 480, height: 480,
            background: "var(--accent-2)",
            filter: "blur(120px)",
            opacity: dark ? 0.08 : 0.05,
            bottom: "-120px", left: "-100px",
            animation: "floatSlow 20s ease-in-out infinite reverse",
          }}
        />
      </div>

      <div className="relative z-10 w-full" style={{ maxWidth: 1080, margin: "0 auto" }}>
        <div className="hero-grid">
          {/* Left — headline */}
          <div>
            <Reveal delay={0.05}>
              <p className="eyebrow" style={{ marginBottom: 22 }}>
                Senior Software Engineer · ZS Associates
              </p>
            </Reveal>

            <Reveal delay={0.14}>
              <h1
                className="serif font-semibold"
                style={{
                  fontSize: "clamp(52px,8.5vw,104px)",
                  lineHeight: 0.98,
                  letterSpacing: "-0.02em",
                  color: "var(--text)",
                  marginBottom: 24,
                }}
              >
                Building systems
                <br />
                <em className="grad-text not-italic">that scale.</em>
              </h1>
            </Reveal>

            <Reveal delay={0.26}>
              <p
                style={{
                  fontSize: "clamp(15px,1.7vw,18px)",
                  color: "var(--muted)",
                  maxWidth: 460,
                  lineHeight: 1.8,
                  marginBottom: 36,
                }}
              >
                Backend-leaning engineer working across distributed systems,
                AI/LLM platforms and high-performance microservices — turning
                gnarly infrastructure into things that just work.
              </p>
            </Reveal>

            <Reveal delay={0.38}>
              <div className="flex gap-3 flex-wrap">
                <button
                  onClick={() => go("projects")}
                  onMouseEnter={() => setHovering(true)}
                  onMouseLeave={() => setHovering(false)}
                  className="btn-primary rounded-[11px] font-semibold border-none"
                  style={{ padding: "14px 30px", fontSize: 14, fontFamily: "inherit" }}
                >
                  View Projects →
                </button>
                <button
                  onClick={() => go("about")}
                  onMouseEnter={() => setHovering(true)}
                  onMouseLeave={() => setHovering(false)}
                  className="btn-ghost rounded-[11px] font-semibold"
                  style={{ padding: "14px 30px", fontSize: 14, fontFamily: "inherit" }}
                >
                  About Me
                </button>
              </div>
            </Reveal>
          </div>

          {/* Right — stat cards */}
          <Reveal delay={0.3}>
            <div
              className="hero-stats grid"
              style={{ gridTemplateColumns: "1fr 1fr", gap: 12 }}
            >
              {STATS.map((s) => (
                <div
                  key={s.value}
                  className="stat-card"
                  onMouseEnter={() => setHovering(true)}
                  onMouseLeave={() => setHovering(false)}
                >
                  <div
                    className="serif font-semibold"
                    style={{ fontSize: "clamp(28px,3.4vw,40px)", color: "var(--text)", lineHeight: 1, marginBottom: 8 }}
                  >
                    {s.value}
                  </div>
                  <div
                    className="mono"
                    style={{ fontSize: 10.5, color: "var(--muted)", lineHeight: 1.5, whiteSpace: "pre-line", letterSpacing: "0.02em" }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Scroll hint */}
        <Reveal delay={0.5}>
          <div
            className="flex items-center gap-3"
            style={{ marginTop: "clamp(40px,6vw,72px)" }}
          >
            <div
              style={{
                width: 22, height: 34, borderRadius: 12,
                border: "1.5px solid var(--border-2)",
                position: "relative", flexShrink: 0,
              }}
            >
              <span
                style={{
                  position: "absolute", left: "50%", top: 7,
                  width: 3, height: 7, borderRadius: 2,
                  background: "var(--accent)", transform: "translateX(-50%)",
                  animation: "scrollHint 1.8s ease-in-out infinite",
                }}
              />
            </div>
            <span className="mono" style={{ fontSize: 10.5, color: "var(--muted)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
              Scroll to explore
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
