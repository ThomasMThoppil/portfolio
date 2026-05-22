"use client";

import { useState, useEffect } from "react";

import { useCursor } from "@/app/hooks/useCursor";
import { useActiveSection } from "@/app/hooks/useActiveSection";

import { TopHeader } from "@/app/components/layout/TopHeader";
import { SideNav } from "@/app/components/layout/SideNav";
import { MobileBar } from "@/app/components/layout/MobileBar";
import { Cursor } from "@/app/components/effects/Cursor";
import { GrainOverlay } from "@/app/components/effects/GrainOverlay";
import { AmbientLight } from "@/app/components/effects/AmbientLight";
import { Hero } from "@/app/components/sections/Hero";
import { About } from "@/app/components/sections/About";
import { Skills } from "@/app/components/sections/Skills";
import { ExperienceSection } from "@/app/components/sections/Experience";
import { ProjectsSection } from "@/app/components/sections/Projects";
import { Connect } from "@/app/components/sections/Connect";
import { Footer } from "@/app/components/sections/Footer";

export default function Portfolio() {
  const [dark, setDark] = useState(true);
  const [hovering, setHovering] = useState(false);
  const { raw, smooth } = useCursor();
  const { activeSection, go } = useActiveSection();

  // Sync dark mode to <html> data-theme attribute
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", dark ? "dark" : "light");
  }, [dark]);

  // Toggle .no-cursor on <body> for hover-capable devices.
  // Removed on touch interaction so the native cursor reappears.
  useEffect(() => {
    const isTouchDevice = matchMedia("(hover: none) and (pointer: coarse)").matches;
    if (isTouchDevice) return;

    document.body.classList.add("no-cursor");

    const onTouchStart = () => {
      document.body.classList.remove("no-cursor");
    };
    window.addEventListener("touchstart", onTouchStart, { passive: true });

    return () => {
      window.removeEventListener("touchstart", onTouchStart);
      document.body.classList.remove("no-cursor");
    };
  }, []);

  return (
    <div
      className="min-h-screen"
      style={{
        fontFamily: "'DM Sans', sans-serif",
        background: "var(--bg)",
        color: "var(--text)",
        transition: "background 0.4s, color 0.4s",
      }}
    >
      <GrainOverlay />
      <AmbientLight raw={raw} />
      <Cursor smooth={smooth} raw={raw} hovering={hovering} />

      <TopHeader
        dark={dark}
        setDark={setDark}
        setHovering={setHovering}
        go={go}
        activeSection={activeSection}
      />

      <SideNav setHovering={setHovering} />
      <MobileBar setHovering={setHovering} />

      <main style={{ paddingTop: "clamp(58px, 7vw, 70px)" }}>
        <Hero dark={dark} go={go} setHovering={setHovering} />
        <About setHovering={setHovering} />
        <Skills dark={dark} setHovering={setHovering} />
        <ExperienceSection setHovering={setHovering} />
        <ProjectsSection dark={dark} setHovering={setHovering} />
        <Connect setHovering={setHovering} />
        <Footer />
      </main>
    </div>
  );
}
