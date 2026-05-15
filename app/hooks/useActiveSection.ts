"use client";

import { useState, useEffect, useCallback } from "react";

const SECTION_IDS = [
  "home",
  "about",
  "skills",
  "experience",
  "projects",
  "connect",
] as const;

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const fn = () => {
      for (const id of SECTION_IDS) {
        const el = document.getElementById(id);
        if (el) {
          const r = el.getBoundingClientRect();
          if (r.top <= 140 && r.bottom >= 140) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const go = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return { activeSection, go };
}
