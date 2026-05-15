import type { Experience } from "@/app/types";

export const experience: Experience[] = [
  {
    company: "ZS Associates",
    location: "Bangalore",
    period: "Nov 2024 – Present",
    title: "Senior Software Engineer",
    highlights: [
      "Leading Quill — an AI medical-legal review platform processing 150k+ docs with RAG retrieval and multi-agent orchestration.",
      "Migrated a legacy monolith to event-driven microservices (FastAPI, Celery, Redis, pgvector) deployed on Kubernetes.",
      "Built a multi-agent PoC with LangGraph; integrated Langfuse for real-time LLM observability and prompt tuning.",
    ],
  },
  {
    company: "Jio",
    location: "Navi Mumbai",
    period: "Jul 2022 – Nov 2024",
    title: "Software Development Engineer",
    highlights: [
      "Cut API response times from 60s → <500ms across 50+ endpoints via Python concurrency and Elasticsearch optimisation.",
      "Onboarded and monitored 1500+ government servers; built Kafka event streams and Kubernetes KPI microservices.",
      "Achieved ~100% network topology visibility through ARP data collection pipelines and graph visualisation.",
    ],
  },
];
