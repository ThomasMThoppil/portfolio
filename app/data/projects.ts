import type { Project } from "@/app/types";

export const projects: Project[] = [
  {
    name: "Pharma LLM Platform",
    emoji: "🤖",
    status: "Work Project",
    description:
      "AI platform serving major pharmaceutical companies — LLM-powered content analysis, validation, and compliance at enterprise scale.",
    tags: ["LLMs", "FastAPI", "Microservices", "JWT"],
    link: "#",
    bar: "#4a7c6a",
  },
  {
    name: "Medical Claims ML",
    emoji: "🧬",
    status: "Work Project",
    description:
      "Semi-supervised ML (PU learning) solution increasing medical claims capture by 60%, improving oncology targeting precision for pharma clients.",
    tags: ["PyTorch", "Semi-Supervised Learning", "Python", "MLOps"],
    link: "#",
    bar: "#6a4a7c",
  },
  {
    name: "AWS Data Enrichment Pipeline",
    emoji: "⚡",
    status: "Work Project",
    description:
      "Automated enrichment pipeline on AWS reducing model inference runtime by 90% via optimized step-functions and data processing workflows.",
    tags: ["AWS", "Step Functions", "Python", "Data Pipelines"],
    link: "#",
    bar: "#7c6a4a",
  },
  {
    name: "RAG Document Analysis",
    emoji: "📄",
    status: "Work Project",
    description:
      "GenAI proof of concept using RAG and generative models to extract structured insights from unstructured client documents.",
    tags: ["RAG", "Generative AI", "LLMs", "NLP"],
    link: "#",
    bar: "#4a5a7c",
  },
];
