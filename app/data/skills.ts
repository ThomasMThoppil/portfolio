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
      { name: "SQL", hex: "6B7280" },
    ],
  },
  {
    category: "ML & AI",
    comment: "// ml & ai",
    items: [
      { name: "PyTorch", iconSlug: "pytorch", hex: "EE4C2C" },
      { name: "Scikit-Learn", iconSlug: "scikitlearn", hex: "F7931E" },
      { name: "Hugging Face", hex: "FF9D00" },
      { name: "LLMs", hex: "7C3AED" },
      { name: "NLP", hex: "059669" },
      { name: "Generative AI", hex: "7C3AED" },
      { name: "RAG", hex: "4F46E5" },
      { name: "Semi-Supervised Learning", hex: "6B7280" },
    ],
  },
  {
    category: "Frameworks & Tools",
    comment: "// frameworks & tools",
    items: [
      { name: "FastAPI", iconSlug: "fastapi", hex: "009688" },
      { name: "Pandas", iconSlug: "pandas", hex: "150458" },
      { name: "REST API", hex: "6B7280" },
      { name: "Statistical Modeling", hex: "4B5563" },
    ],
  },
  {
    category: "Cloud & Infrastructure",
    comment: "// cloud & infra",
    items: [
      { name: "AWS", iconSlug: "amazonaws", hex: "FF9900" },
      { name: "MLOps", hex: "4B5563" },
      { name: "Microservices", hex: "0078D7" },
    ],
  },
  {
    category: "Practices",
    comment: "// methods & practices",
    items: [
      { name: "LLM Integration", hex: "7C3AED" },
      { name: "Model Development", hex: "059669" },
      { name: "Predictive Analytics", hex: "0052CC" },
      { name: "Data Pipelines", hex: "4B5563" },
    ],
  },
];

export const skills: Record<string, string[]> = {
  Languages: ["Python", "SQL"],
  "Technologies & Tools": skillGroups
    .flatMap((g) => g.items.map((i) => i.name))
    .filter((n) => !["Python", "SQL"].includes(n)),
};
