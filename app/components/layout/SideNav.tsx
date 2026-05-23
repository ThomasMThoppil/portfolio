"use client";

import { NavBtn } from "@/app/components/ui/NavBtn";
import { MailIcon, LinkedInIcon, ResumeIcon } from "@/app/components/icons";

interface SideNavProps {
  setHovering: (v: boolean) => void;
}

export function SideNav({ setHovering }: SideNavProps) {
  return (
    <nav
      className="side-nav fixed right-6 top-1/2 -translate-y-1/2 z-[300]"
      role="navigation"
      aria-label="Social links"
    >
      <div
        className="flex flex-col items-center gap-0.5 rounded-[20px] px-1.5 py-2"
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
          icon={<MailIcon />}
          label="Email"
          href="mailto:thomasthoppil98@gmail.com"
          onHoverChange={setHovering}
        />
        <NavBtn
          icon={<LinkedInIcon />}
          label="LinkedIn"
          href="https://www.linkedin.com/in/thomas-thoppil/"
          onHoverChange={setHovering}
        />
        <NavBtn
          icon={<ResumeIcon />}
          label="Resume"
          href="https://drive.google.com/file/d/1KJNrKmxEaTzgw0KLFUfCAvGKsJMvBKj3/view?usp=sharing"
          onHoverChange={setHovering}
        />
      </div>
    </nav>
  );
}
