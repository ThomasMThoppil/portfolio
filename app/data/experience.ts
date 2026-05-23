import type { Experience } from "@/app/types";

export const experience: Experience[] = [
  {
    company: "ZS Associates",
    location: "India",
    period: "2024 – Present",
    title: "Senior Applied Scientist",
    highlights: [
      "Scaled AI platform serving multiple major pharmaceutical companies, leveraging LLMs for content analysis and validation with enterprise-level compliance standards.",
      "Led modernization initiative migrating monolithic architecture to microservices using FastAPI, improving system performance and scalability for a growing user base.",
      "Developed LLM-powered content verification system, optimizing prompting strategies to reduce response latency by 40%.",
      "Implemented JWT-based authentication and role-based access control, preventing potential data breaches across the platform.",
      "Built intelligent AI agents to automate key workflows, reducing manual effort and increasing operational efficiency across cross-functional teams.",
      "Recognized with the Client Impact Award for delivering high-impact product outcomes.",
    ],
  },
  {
    company: "ZS Associates",
    location: "India",
    period: "2022 – 2024",
    title: "Data Science Associate Consultant",
    highlights: [
      "Architected semi-supervised ML solution (PU learning) increasing medical claims capture by 60%, directly improving market share accuracy and oncology targeting precision for pharmaceutical clients.",
      "Built automated data enrichment pipeline on AWS, reducing model inference runtime by 90% through optimized step-functions, data processing workflows, and automated quality reporting.",
      "Led cross-functional collaboration with data engineering and UI/UX teams to deploy enrichment solutions across multiple tumor areas on live production applications.",
      "Delivered GenAI proof of concept implementing RAG and generative models for accurate document analysis, successfully extracting insights from unstructured data.",
    ],
  },
  {
    company: "Prudent Global Technologies",
    location: "India",
    period: "2021 – 2022",
    title: "Junior Data Scientist",
    highlights: [
      "Developed predictive maintenance models analyzing sensor data to identify equipment failure patterns, reducing downtime through early detection algorithms.",
      "Implemented tree-based and time series models to forecast equipment trends and optimize maintenance scheduling for industrial operations.",
    ],
  },
];
