import type { ReactNode } from "react";

export interface AvatarProps {
  size: number;
  accentColor: string;
  borderColor: string;
  shadowColor: string;
}

export interface TopHeaderProps {
  dark: boolean;
  setDark: (fn: (v: boolean) => boolean) => void;
  setHovering: (v: boolean) => void;
  go: (id: string) => void;
  activeSection: string;
}

export interface NavBtnProps {
  icon: ReactNode;
  label: string;
  href?: string;
  onClick?: () => void;
  showTooltip?: boolean;
  onHoverChange?: (v: boolean) => void;
}

export interface RevealProps {
  children: ReactNode;
  delay?: number;
}

export interface Experience {
  company: string;
  location: string;
  period: string;
  title: string;
  highlights: string[];
}

export interface Project {
  name: string;
  emoji: string;
  status: string;
  description: string;
  tags: string[];
  link: string;
  bar: string;
}
