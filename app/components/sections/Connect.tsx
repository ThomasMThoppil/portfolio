"use client";

import { Reveal } from "@/app/components/ui/Reveal";
import { MailIcon, LinkedInIcon } from "@/app/components/icons";

interface ConnectProps {
  setHovering: (v: boolean) => void;
}

const EMAIL = "varundubey771@gmail.com";

const LINKS = [
  { label: "LinkedIn", icon: <LinkedInIcon />, href: "https://www.linkedin.com/in/" },
  { label: "Email", icon: <MailIcon />, href: `mailto:${EMAIL}` },
] as const;

export function Connect({ setHovering }: ConnectProps) {
  return (
    <section id="connect" className="section grid-bg" style={{ overflow: "hidden" }}>
      <div className="section-inner" style={{ textAlign: "center" }}>
        <Reveal>
          <p className="eyebrow" style={{ marginBottom: 22, justifyContent: "center" }}>
            05 — Connect
          </p>
        </Reveal>

        <Reveal delay={0.06}>
          <h2
            className="serif font-semibold"
            style={{
              fontSize: "clamp(44px,8vw,96px)",
              lineHeight: 0.98,
              letterSpacing: "-0.02em",
              color: "var(--text)",
              marginBottom: 22,
            }}
          >
            Let&apos;s build
            <br />
            <em className="grad-text not-italic">something great.</em>
          </h2>
        </Reveal>

        <Reveal delay={0.14}>
          <p style={{ color: "var(--muted)", fontSize: 16, lineHeight: 1.8, maxWidth: 440, margin: "0 auto 36px" }}>
            Open to senior roles and interesting collaborations. The fastest way
            to reach me is a direct note.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <a
            href={`mailto:${EMAIL}`}
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            className="mono no-underline inline-block"
            style={{
              fontSize: "clamp(15px,2.6vw,24px)",
              color: "var(--text)",
              borderBottom: "2px solid var(--accent)",
              paddingBottom: 4,
              marginBottom: 36,
              transition: "color 0.2s",
            }}
          >
            {EMAIL}
          </a>
        </Reveal>

        <Reveal delay={0.26}>
          <div className="flex gap-3 flex-wrap" style={{ justifyContent: "center", marginBottom: 28 }}>
            {LINKS.map(({ label, icon, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noreferrer"
                onMouseEnter={() => setHovering(true)}
                onMouseLeave={() => setHovering(false)}
                className="btn-ghost flex items-center gap-[9px] rounded-[11px] no-underline font-semibold"
                style={{ padding: "12px 22px", fontSize: 14 }}
              >
                {icon} {label}
              </a>
            ))}
            <a
              href="https://docs.google.com/document/d/1zONOvPZMG0a4zGpZel6r0mduLhkxmYtbjl64KGY9AQI/edit?pli=1&tab=t.0"
              target="_blank"
              rel="noreferrer"
              onMouseEnter={() => setHovering(true)}
              onMouseLeave={() => setHovering(false)}
              className="btn-primary inline-flex items-center gap-2 rounded-[11px] font-semibold no-underline"
              style={{ padding: "12px 24px", fontSize: 14 }}
            >
              Résumé ↗
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
