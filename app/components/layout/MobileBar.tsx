"use client";

import { NavBtn } from "@/app/components/ui/NavBtn";
import { MailIcon, LinkedInIcon, ResumeIcon } from "@/app/components/icons";

interface MobileBarProps {
  setHovering: (v: boolean) => void;
}

export function MobileBar({ setHovering }: MobileBarProps) {
  return (
    <nav
      className="mobile-bar fixed bottom-4 left-1/2 -translate-x-1/2 z-[300] rounded-[20px] px-2 py-1.5 flex flex-row items-center gap-0"
      role="navigation"
      aria-label="Social links"
      style={{
        background: "var(--nav-bg)",
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
        border: "1px solid var(--border)",
        boxShadow: "var(--shadow)",
        transition: "background 0.4s, border-color 0.4s",
      }}
    >
      <NavBtn
        showTooltip={false}
        icon={<MailIcon />}
        label="Email"
        href="mailto:varundubey771@gmail.com"
        onHoverChange={setHovering}
      />
      <NavBtn
        showTooltip={false}
        icon={<LinkedInIcon />}
        label="LinkedIn"
        href="https://www.linkedin.com/in/"
        onHoverChange={setHovering}
      />
      <NavBtn
        showTooltip={false}
        icon={<ResumeIcon />}
        label="Resume"
        href="https://docs.google.com/document/d/1zONOvPZMG0a4zGpZel6r0mduLhkxmYtbjl64KGY9AQI/edit?pli=1&tab=t.0"
        onHoverChange={setHovering}
      />
    </nav>
  );
}
