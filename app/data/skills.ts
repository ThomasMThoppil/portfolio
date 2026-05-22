export interface SkillItem {
  name: string;
  iconSlug?: string;
  hex?: string;
}

export interface SkillGroup {
  category: string;
  comment: string;
  items: SkillItem[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: "Languages",
    comment: "// languages",
    items: [
      { name: "Python", iconSlug: "python", hex: "3776AB" },
      { name: "JavaScript", iconSlug: "javascript", hex: "F7DF1E" },
      { name: "TypeScript", iconSlug: "typescript", hex: "3178C6" },
      { name: "SQL", hex: "6B7280" },
    ],
  },
  {
    category: "Frameworks",
    comment: "// frameworks & libraries",
    items: [
      { name: "FastAPI", iconSlug: "fastapi", hex: "009688" },
      { name: "Flask", iconSlug: "flask", hex: "3BABC3" },
      { name: "Next.js", iconSlug: "nextdotjs", hex: "000000" },
      { name: "React", iconSlug: "react", hex: "61DAFB" },
      { name: "SQLAlchemy", hex: "D71F00" },
      { name: "LangChain", hex: "1C3C3C" },
      { name: "LangGraph", hex: "2D5016" },
      { name: "LangFuse", hex: "7C3AED" },
    ],
  },
  {
    category: "Infrastructure",
    comment: "// infra & devops",
    items: [
      { name: "Docker", iconSlug: "docker", hex: "2496ED" },
      { name: "Kubernetes", iconSlug: "kubernetes", hex: "326CE5" },
      { name: "Kafka", iconSlug: "apachekafka", hex: "231F20" },
      { name: "Redis", iconSlug: "redis", hex: "FF4438" },
      { name: "Azure DevOps", hex: "0078D7" },
      { name: "CI/CD", hex: "4B5563" },
    ],
  },
  {
    category: "Data & Observability",
    comment: "// data & observability",
    items: [
      { name: "Elasticsearch", iconSlug: "elasticsearch", hex: "005571" },
      { name: "PostgreSQL", iconSlug: "postgresql", hex: "4169E1" },
      { name: "MySQL", iconSlug: "mysql", hex: "4479A1" },
      { name: "Oracle", hex: "F80000" },
      { name: "Kibana", iconSlug: "kibana", hex: "005571" },
      { name: "Zabbix", hex: "CC0000" },
      { name: "NoSQL", hex: "6B7280" },
    ],
  },
  {
    category: "Practices",
    comment: "// methods & practices",
    items: [
      { name: "Gen AI / LLM", hex: "7C3AED" },
      { name: "Agile", hex: "0052CC" },
      { name: "Excalidraw", iconSlug: "excalidraw", hex: "6965DB" },
    ],
  },
];

// Keep backward compat for any remaining legacy imports
export const skills: Record<string, string[]> = {
  Languages: ["Python", "JavaScript", "TypeScript", "SQL"],
  "Technologies & Tools": skillGroups
    .flatMap((g) => g.items.map((i) => i.name))
    .filter((n) => !["Python", "JavaScript", "TypeScript", "SQL"].includes(n)),
};
