export type Project = {
  id: string;
  title: string;
  subtitle: string;
  year?: string;
  tags: string[];
  githubUrl: string;
};

export const featuredProjects: Project[] = [
  {
    id: "feat-mydietitian",
    title: "MyDietitianMobileApp",
    subtitle:
      "Dietitian-focused product: mobile + backend architecture and real-world flows.",
    year: "2026",
    tags: [".NET", "PostgreSQL", "Docker", "RabbitMQ", "Redis"],
    githubUrl: "https://github.com/devlightening/MyDietitianMobileApp",
  },
  {
    id: "feat-blinkr",
    title: "Blinkr",
    subtitle: "Fast, modern app concept with strong UI + system thinking.",
    year: "2026",
    tags: ["TypeScript", "UI", "Product"],
    githubUrl: "https://github.com/devlightening/Blinkr",
  },
  {
    id: "feat-drivenow",
    title: "DriveNow",
    subtitle: "Practical application build with clean structure and scalable patterns.",
    year: "2026",
    tags: [".NET", "Clean Architecture", "API"],
    githubUrl: "https://github.com/devlightening/DriveNow",
  },
  {
    id: "feat-signalr",
    title: "RestaurantAppSignalR",
    subtitle: "Real-time experience using SignalR-style interaction patterns.",
    year: "2025",
    tags: [".NET", "SignalR", "Realtime"],
    githubUrl: "https://github.com/devlightening/RestaurantAppSignalR",
  },
  {
    id: "feat-qrmenu",
    title: "QR-Menu-Plugin",
    subtitle: "Plugin-style solution with simple setup and clear UX goals.",
    year: "2025",
    tags: ["Plugin", "Web", "UX"],
    githubUrl: "https://github.com/devlightening/QR-Menu-Plugin",
  },
];

export const projects: Project[] = [
  {
    id: "list-fuzzyball",
    title: "FuzzyBall",
    subtitle: "Experiment/project repo — see README for details & approach.",
    year: "2025",
    tags: ["Game", "Prototype", "Engineering"],
    githubUrl: "https://github.com/devlightening/FuzzyBall",
  },
  {
    id: "list-dotai",
    title: "DotAI",
    subtitle: "AI-related exploration repo — experiments and learning notes.",
    year: "2026",
    tags: ["AI", ".NET", "R&D"],
    githubUrl: "https://github.com/devlightening/DotAI",
  },
  {
    id: "list-yarp",
    title: "Microservices API Gateway (YARP)",
    subtitle: "API Gateway patterns with YARP.",
    year: "2026",
    tags: [".NET", "Microservices", "YARP", "Gateway"],
    githubUrl: "https://github.com/devlightening/Microservices-APIGateway-YARP",
  },
  {
    id: "list-ocelot",
    title: "Microservices API Gateway (Ocelot)",
    subtitle: "API Gateway patterns with Ocelot.",
    year: "2026",
    tags: [".NET", "Microservices", "Ocelot", "Gateway"],
    githubUrl: "https://github.com/devlightening/Microservices-APIGateway-Ocelot",
  },
  {
    id: "list-trace",
    title: "Microservices Traceability",
    subtitle: "Traceability/observability concepts for distributed systems.",
    year: "2026",
    tags: ["Observability", "Tracing", "Microservices"],
    githubUrl: "https://github.com/devlightening/Microservices-Traceability",
  },
  {
    id: "list-health",
    title: "Microservices Health Checks",
    subtitle: "Health checks & service health patterns.",
    year: "2026",
    tags: ["Health", ".NET", "Microservices"],
    githubUrl: "https://github.com/devlightening/Microservices-Health-Checks",
  },
  {
    id: "list-eventstore-read",
    title: "Microservices EventStore (Read Data)",
    subtitle: "Reading/consuming event store data patterns.",
    year: "2026",
    tags: ["EventStore", "CQRS", "Read Model"],
    githubUrl: "https://github.com/devlightening/Microservices-EventStore-ReadData",
  },
  {
    id: "list-outbox",
    title: "Outbox / Inbox Pattern",
    subtitle: "Reliable messaging patterns for distributed systems.",
    year: "2026",
    tags: ["Outbox", "Inbox", "Messaging", "Reliability"],
    githubUrl: "https://github.com/devlightening/Microservices-OutBox-InBox-DesignPattern",
  },
  {
    id: "list-saga-orch",
    title: "Saga Pattern (Orchestration)",
    subtitle: "Saga orchestration approach with clear coordination.",
    year: "2026",
    tags: ["Saga", "Orchestration", "Microservices"],
    githubUrl: "https://github.com/devlightening/Microservices-SagaPattern-Orchestration",
  },
  {
    id: "list-saga-choreo",
    title: "Saga Pattern (Choreography)",
    subtitle: "Saga choreography approach with event-driven flow.",
    year: "2026",
    tags: ["Saga", "Choreography", "Events"],
    githubUrl: "https://github.com/devlightening/Microservices-SagaPattern-Choreography",
  },
  {
    id: "list-interservice",
    title: "Inter-Service Communication Models",
    subtitle: "Communication styles and trade-offs for services.",
    year: "2026",
    tags: ["Communication", "Patterns", "Microservices"],
    githubUrl: "https://github.com/devlightening/Inter-ServiceCommunicationModels",
  },
  {
    id: "list-2pc",
    title: "2PC Distributed Transaction Manager",
    subtitle: "Two-phase commit experiments for distributed transactions.",
    year: "2026",
    tags: ["2PC", "Transactions", "Distributed Systems"],
    githubUrl: "https://github.com/devlightening/2PC-Distributed-Transaction-Manager",
  },
  {
    id: "list-sync-patterns",
    title: "Microservices Synchronization Patterns",
    subtitle: "Synchronization approaches in distributed environments.",
    year: "2026",
    tags: ["Synchronization", "Patterns", "Distributed Systems"],
    githubUrl: "https://github.com/devlightening/Microservices-Synchronization-Patterns",
  },
];
