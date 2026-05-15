import type { Project } from "@/app/types";

export const projects: Project[] = [
  {
    name: "Dream Source",
    emoji: "🌙",
    status: "Live",
    description:
      "AI dream journaling — agentic Python backend (Groq) that uncovers patterns and symbols across your dream history.",
    tags: ["Python", "Groq", "AI Agents", "Next.js"],
    link: "https://dream-source.app",
    bar: "#a07050",
  },
  {
    name: "Dream Source POC",
    emoji: "✨",
    status: "Archived",
    description:
      "The original POC that sparked Dream Source. Early AI dream interpretation experiment, not actively maintained.",
    tags: ["Python", "AI", "Dream Analysis"],
    link: "https://dream-source-poc.vercel.app",
    bar: "#7a6248",
  },
  {
    name: "Quill — AI Review",
    emoji: "📄",
    status: "Work Project",
    description:
      "Medical-legal document review platform with sentence-level RAG referencing across 150k+ docs.",
    tags: ["LangGraph", "RAG", "FastAPI", "pgvector"],
    link: "#",
    bar: "#6a5840",
  },
  {
    name: "Network Intelligence",
    emoji: "📡",
    status: "Work Project",
    description:
      "Real-time network monitoring for 1500+ government servers — KPI tracking, Kafka streams, topology graphs.",
    tags: ["FastAPI", "Kafka", "Elasticsearch"],
    link: "#",
    bar: "#8c7050",
  },
];
