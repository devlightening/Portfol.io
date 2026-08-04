import type { LocalizedString } from "@/lib/site";

export type Project = {
  id: string;
  title: string;
  subtitle: LocalizedString;
  focus: LocalizedString;
  year?: string;
  category: LocalizedString;
  tags: string[];
  githubUrl: string;
};

export const featuredProjects: Project[] = [
  {
    id: "feat-blinkr",
    title: "Blinkr",
    subtitle: {
      en: "Location-based social platform built around clean .NET architecture, API design, and microservices-ready infrastructure.",
      tr: "Clean .NET mimarisi, API tasarımı ve mikroservise hazır altyapı odağıyla geliştirilen konum tabanlı sosyal platform.",
    },
    focus: {
      en: "Events, caching, messaging-ready service boundaries, Docker support, and a C#-heavy backend codebase.",
      tr: "Event akışı, cache, mesajlaşmaya hazır servis sınırları, Docker desteği ve C# ağırlıklı backend kod tabanı.",
    },
    year: "2026",
    category: { en: "Social platform", tr: "Sosyal platform" },
    tags: [".NET", "C#", "Clean Architecture", "Microservices", "Docker"],
    githubUrl: "https://github.com/devlightening/Blinkr",
  },
  {
    id: "feat-dytopia",
    title: "MyDietitianMobileApp-Dytopia",
    subtitle: {
      en: "Freemium dietitian SaaS mobile app for client management, personalized diet plans, ingredient analysis, and meal compliance tracking.",
      tr: "Danışan yönetimi, kişiselleştirilmiş diyet planları, içerik analizi ve öğün uyum takibi için freemium diyetisyen SaaS mobil uygulaması.",
    },
    focus: {
      en: "Product-oriented mobile flows, health-domain data modeling, and a practical SaaS feature set.",
      tr: "Ürün odaklı mobil akışlar, sağlık alanına uygun veri modelleme ve pratik SaaS özellikleri.",
    },
    year: "2026",
    category: { en: "Health SaaS", tr: "Sağlık SaaS" },
    tags: ["TypeScript", "Mobile", "SaaS", "HealthTech", "Product"],
    githubUrl: "https://github.com/devlightening/MyDietitianMobileApp-Dytopia",
  },
  {
    id: "feat-cloakapi",
    title: "CloakAPI",
    subtitle: {
      en: "Privacy firewall reverse proxy with JWT/RBAC-based PII masking, tamper-aware audit events, PostgreSQL, and a Next.js admin dashboard.",
      tr: "JWT/RBAC tabanlı PII maskeleme, müdahaleye duyarlı audit event'leri, PostgreSQL ve Next.js admin paneli içeren privacy firewall reverse proxy.",
    },
    focus: {
      en: "Security-focused API middleware: authorization, masking, auditability, and operational visibility.",
      tr: "Güvenlik odaklı API katmanı: yetkilendirme, maskeleme, denetlenebilirlik ve operasyonel görünürlük.",
    },
    year: "2026",
    category: { en: "Security API", tr: "Güvenlik API'si" },
    tags: [".NET", "PostgreSQL", "JWT", "RBAC", "Next.js"],
    githubUrl: "https://github.com/devlightening/CloakAPI",
  },
  {
    id: "feat-sentimentguard",
    title: "SentimentGuard",
    subtitle: {
      en: "Secure batch sentiment analysis platform with PySpark, HMAC-SHA256 pseudo-anonymization, hash-chain integrity, ASP.NET Core, MongoDB, React, and Docker Compose.",
      tr: "PySpark, HMAC-SHA256 pseudo-anonimleştirme, hash-chain bütünlük kontrolü, ASP.NET Core, MongoDB, React ve Docker Compose içeren güvenli batch sentiment platformu.",
    },
    focus: {
      en: "Data pipeline thinking, privacy controls, integrity checks, and full-stack operational packaging.",
      tr: "Veri pipeline yaklaşımı, gizlilik kontrolleri, bütünlük doğrulama ve full-stack operasyonel paketleme.",
    },
    year: "2026",
    category: { en: "Data security", tr: "Veri güvenliği" },
    tags: ["ASP.NET Core", "PySpark", "MongoDB", "React", "Docker"],
    githubUrl: "https://github.com/devlightening/SentimentGuard",
  },
  {
    id: "feat-drivenow",
    title: "DriveNow",
    subtitle: {
      en: "Online car rental platform using Onion Architecture, CQRS, MediatR, and a domain-driven structure for cars, brands, pricing, and reservations.",
      tr: "Araç, marka, fiyatlandırma ve rezervasyon süreçleri için Onion Architecture, CQRS, MediatR ve domain-driven yapı kullanan online araç kiralama platformu.",
    },
    focus: {
      en: "Maintainable application architecture with separated concerns, business rules, and scalable domain modules.",
      tr: "Ayrıştırılmış sorumluluklar, iş kuralları ve ölçeklenebilir domain modülleriyle sürdürülebilir uygulama mimarisi.",
    },
    year: "2025",
    category: { en: "Rental platform", tr: "Kiralama platformu" },
    tags: [".NET", "Onion Architecture", "CQRS", "MediatR", "DDD"],
    githubUrl: "https://github.com/devlightening/DriveNow",
  },
  {
    id: "feat-foodfacts",
    title: "FoodFacts",
    subtitle: {
      en: "Barcode-scanning food companion for Türkiye, tailored for chronic health profiles with multi-source data and human-in-the-loop OCR.",
      tr: "Türkiye için barkod okuyan; çölyak, diyabet ve hipertansiyon gibi kronik sağlık profillerine göre çalışan, çok kaynaklı veri ve insan doğrulamalı OCR kullanan gıda asistanı.",
    },
    focus: {
      en: "Health-aware product design, food data pipelines, OCR validation, and personalized risk interpretation.",
      tr: "Sağlık odaklı ürün tasarımı, gıda veri akışları, OCR doğrulama ve kişiselleştirilmiş risk yorumu.",
    },
    year: "2026",
    category: { en: "Health product", tr: "Sağlık ürünü" },
    tags: ["TypeScript", "OCR", "HealthTech", "Data", "Product"],
    githubUrl: "https://github.com/devlightening/FoodFacts",
  },
];

export const projects: Project[] = [
  {
    id: "list-dotai",
    title: "DotAI",
    subtitle: {
      en: "Practical .NET project demonstrating 20+ AI integrations including OpenAI, OCR, text-to-speech, speech-to-text, and sentiment analysis.",
      tr: "OpenAI, OCR, text-to-speech, speech-to-text ve sentiment analysis dahil 20+ AI entegrasyonunu gösteren pratik .NET projesi.",
    },
    focus: {
      en: "Real-world AI scenarios across OpenAI, Google Cloud, Azure, and Tesseract APIs.",
      tr: "OpenAI, Google Cloud, Azure ve Tesseract API'leriyle gerçek dünya AI senaryoları.",
    },
    year: "2025",
    category: { en: "AI integrations", tr: "AI entegrasyonları" },
    tags: [".NET", "OpenAI", "OCR", "Azure", "Tesseract"],
    githubUrl: "https://github.com/devlightening/DotAI",
  },
  {
    id: "list-fuzzyball",
    title: "FuzzyBall",
    subtitle: {
      en: "Premier League result predictor using a Mamdani fuzzy logic system to analyze form, rank, and goals.",
      tr: "Form, sıralama ve gol verilerini Mamdani fuzzy logic sistemiyle analiz eden Premier League sonuç tahmin uygulaması.",
    },
    focus: {
      en: "Streamlit prototype with explainable scoring rather than a black-box model.",
      tr: "Kara kutu model yerine açıklanabilir skorlamaya dayanan Streamlit prototipi.",
    },
    year: "2025",
    category: { en: "ML prototype", tr: "ML prototipi" },
    tags: ["Python", "Streamlit", "Fuzzy Logic", "Mamdani"],
    githubUrl: "https://github.com/devlightening/FuzzyBall",
  },
  {
    id: "list-yarp",
    title: "Microservices API Gateway - YARP",
    subtitle: {
      en: "Microservices API Gateway built with YARP, routing client requests to backend services through centralized configuration.",
      tr: "Client isteklerini merkezi yapılandırmayla backend servislere yönlendiren YARP tabanlı mikroservis API Gateway projesi.",
    },
    focus: {
      en: "Gateway routing, service aggregation, and reverse proxy configuration in .NET.",
      tr: ".NET içinde gateway routing, servis toplama ve reverse proxy konfigürasyonu.",
    },
    year: "2025",
    category: { en: "Microservices lab", tr: "Mikroservis lab" },
    tags: [".NET", "YARP", "API Gateway", "Reverse Proxy"],
    githubUrl: "https://github.com/devlightening/Microservices-APIGateway-YARP",
  },
  {
    id: "list-ocelot",
    title: "Microservices API Gateway - Ocelot",
    subtitle: {
      en: "Ocelot gateway demo with sample services routed through a single gateway for centralized routing and aggregation.",
      tr: "Merkezi routing ve servis aggregation için sample servisleri tek gateway üzerinden yöneten Ocelot gateway demosu.",
    },
    focus: {
      en: "Learning-oriented gateway comparison against YARP-style routing.",
      tr: "YARP tarzı routing'e karşı öğrenme odaklı gateway karşılaştırması.",
    },
    year: "2025",
    category: { en: "Microservices lab", tr: "Mikroservis lab" },
    tags: [".NET", "Ocelot", "API Gateway", "Microservices"],
    githubUrl: "https://github.com/devlightening/Microservices-APIGateway-Ocelot",
  },
  {
    id: "list-trace",
    title: "Microservices Traceability",
    subtitle: {
      en: "Traceability project demonstrating centralized logging, correlation IDs, and message broker scenarios with ASP.NET Core, console apps, RabbitMQ-like flows, and NLog persistence.",
      tr: "ASP.NET Core, console app'ler, RabbitMQ benzeri akışlar ve NLog persistence ile centralized logging, correlation ID ve message broker senaryolarını gösteren traceability projesi.",
    },
    focus: {
      en: "Operational visibility for distributed requests and asynchronous processing.",
      tr: "Dağıtık request'ler ve asenkron işleme için operasyonel görünürlük.",
    },
    year: "2025",
    category: { en: "Observability", tr: "Gözlemlenebilirlik" },
    tags: [".NET", "NLog", "RabbitMQ", "Correlation ID"],
    githubUrl: "https://github.com/devlightening/Microservices-Traceability",
  },
  {
    id: "list-health",
    title: "Microservices Health Checks",
    subtitle: {
      en: "Service health-check and monitoring demo using .NET and Docker Compose with Redis, MongoDB, and PostgreSQL dependencies.",
      tr: "Redis, MongoDB ve PostgreSQL bağımlılıklarıyla .NET ve Docker Compose üzerinde çalışan service health-check ve monitoring demosu.",
    },
    focus: {
      en: "Runtime readiness, dependency checks, and service status visibility.",
      tr: "Runtime readiness, bağımlılık kontrolleri ve servis durum görünürlüğü.",
    },
    year: "2025",
    category: { en: "Observability", tr: "Gözlemlenebilirlik" },
    tags: [".NET", "Docker Compose", "Redis", "MongoDB", "PostgreSQL"],
    githubUrl: "https://github.com/devlightening/Microservices-Health-Checks",
  },
  {
    id: "list-cqrs",
    title: "Microservices CQRS Pattern",
    subtitle: {
      en: "Practical microservices demo built around Command Query Responsibility Segregation.",
      tr: "Command Query Responsibility Segregation etrafında kurgulanmış pratik mikroservis demosu.",
    },
    focus: {
      en: "Separating write and read concerns inside a distributed system.",
      tr: "Dağıtık sistem içinde yazma ve okuma sorumluluklarını ayırma.",
    },
    year: "2025",
    category: { en: "Microservices lab", tr: "Mikroservis lab" },
    tags: [".NET", "CQRS", "Microservices"],
    githubUrl: "https://github.com/devlightening/Microservices-CQRS-Pattern",
  },
  {
    id: "list-eventstore",
    title: "Microservices Event Store",
    subtitle: {
      en: "Event Sourcing and CQRS architecture using EventStoreDB as an immutable event log to reconstruct read models.",
      tr: "Read model'ları yeniden oluşturmak için EventStoreDB'yi immutable event log olarak kullanan Event Sourcing ve CQRS mimarisi.",
    },
    focus: {
      en: "Transaction history, event replay, and reliable state reconstruction.",
      tr: "Transaction history, event replay ve güvenilir state reconstruction.",
    },
    year: "2025",
    category: { en: "Event sourcing", tr: "Event sourcing" },
    tags: [".NET", "EventStoreDB", "CQRS", "Event Sourcing"],
    githubUrl: "https://github.com/devlightening/Microservices-Event-Store",
  },
  {
    id: "list-eventstore-read",
    title: "EventStore Read Data",
    subtitle: {
      en: "CQRS and Event Sourcing solution using EventStoreDB for events and MongoDB for scalable read models.",
      tr: "Event'ler için EventStoreDB, ölçeklenebilir read model'lar için MongoDB kullanan CQRS ve Event Sourcing çözümü.",
    },
    focus: {
      en: "Projection patterns and read/write separation.",
      tr: "Projection desenleri ve read/write ayrımı.",
    },
    year: "2025",
    category: { en: "Event sourcing", tr: "Event sourcing" },
    tags: [".NET", "EventStoreDB", "MongoDB", "Read Model"],
    githubUrl: "https://github.com/devlightening/Microservices-EventStore-ReadData",
  },
  {
    id: "list-outbox",
    title: "Outbox / Inbox Pattern",
    subtitle: {
      en: "Transactional consistency demo using Outbox and Inbox patterns with MassTransit and RabbitMQ.",
      tr: "MassTransit ve RabbitMQ ile Outbox ve Inbox desenlerini kullanan transactional consistency demosu.",
    },
    focus: {
      en: "Reliable asynchronous messaging between services.",
      tr: "Servisler arasında güvenilir asenkron mesajlaşma.",
    },
    year: "2025",
    category: { en: "Reliability patterns", tr: "Güvenilirlik desenleri" },
    tags: ["MassTransit", "RabbitMQ", "Outbox", "Inbox", ".NET"],
    githubUrl: "https://github.com/devlightening/Microservices-OutBox-InBox-DesignPattern",
  },
  {
    id: "list-saga-orch",
    title: "Saga Pattern - Orchestration",
    subtitle: {
      en: "Saga orchestration demo where a central state machine coordinates distributed transactions and compensating actions.",
      tr: "Merkezi state machine'in distributed transaction ve compensating action'ları koordine ettiği Saga orchestration demosu.",
    },
    focus: {
      en: "Central coordination and explicit failure handling.",
      tr: "Merkezi koordinasyon ve açık failure handling.",
    },
    year: "2025",
    category: { en: "Reliability patterns", tr: "Güvenilirlik desenleri" },
    tags: [".NET", "Saga", "Orchestration", "MassTransit"],
    githubUrl: "https://github.com/devlightening/Microservices-SagaPattern-Orchestration",
  },
  {
    id: "list-saga-choreo",
    title: "Saga Pattern - Choreography",
    subtitle: {
      en: "Saga choreography demo where services coordinate through events and trigger compensating actions when a step fails.",
      tr: "Servislerin event'ler üzerinden koordine olduğu ve hata durumunda compensating action tetiklediği Saga choreography demosu.",
    },
    focus: {
      en: "Decentralized event flow and eventual consistency.",
      tr: "Merkeziyetsiz event akışı ve eventual consistency.",
    },
    year: "2025",
    category: { en: "Reliability patterns", tr: "Güvenilirlik desenleri" },
    tags: [".NET", "Saga", "Choreography", "Events"],
    githubUrl: "https://github.com/devlightening/Microservices-SagaPattern-Choreography",
  },
  {
    id: "list-interservice",
    title: "Inter-Service Communication Models",
    subtitle: {
      en: "Comparison of HTTP/REST, gRPC, and RabbitMQ message broker communication patterns in microservices.",
      tr: "Mikroservislerde HTTP/REST, gRPC ve RabbitMQ message broker iletişim desenlerini karşılaştıran çalışma.",
    },
    focus: {
      en: "Choosing communication styles by coupling, latency, and reliability needs.",
      tr: "Coupling, latency ve güvenilirlik ihtiyaçlarına göre iletişim stili seçimi.",
    },
    year: "2025",
    category: { en: "Communication", tr: "İletişim" },
    tags: [".NET", "REST", "gRPC", "RabbitMQ"],
    githubUrl: "https://github.com/devlightening/Inter-ServiceCommunicationModels",
  },
  {
    id: "list-2pc",
    title: "2PC Distributed Transaction Manager",
    subtitle: {
      en: "Two-Phase Commit implementation for strong consistency and atomicity across multiple .NET microservices.",
      tr: "Birden fazla .NET mikroservisi arasında strong consistency ve atomicity sağlamak için Two-Phase Commit implementasyonu.",
    },
    focus: {
      en: "Coordinator-driven transaction flow and all-or-nothing commit behavior.",
      tr: "Coordinator kontrollü transaction akışı ve all-or-nothing commit davranışı.",
    },
    year: "2025",
    category: { en: "Transactions", tr: "Transaction" },
    tags: [".NET", "2PC", "Transactions", "Distributed Systems"],
    githubUrl: "https://github.com/devlightening/2PC-Distributed-Transaction-Manager",
  },
  {
    id: "list-sync-patterns",
    title: "Microservices Synchronization Patterns",
    subtitle: {
      en: "Comparison of API-based synchronization and event-driven synchronization with MassTransit and RabbitMQ.",
      tr: "API tabanlı senkronizasyon ile MassTransit/RabbitMQ kullanan event-driven senkronizasyonu karşılaştıran çalışma.",
    },
    focus: {
      en: "Maintaining consistency across decoupled services.",
      tr: "Decoupled servisler arasında tutarlılığı koruma.",
    },
    year: "2025",
    category: { en: "Communication", tr: "İletişim" },
    tags: [".NET", "MassTransit", "RabbitMQ", "Synchronization"],
    githubUrl: "https://github.com/devlightening/Microservices-Synchronization-Patterns",
  },
  {
    id: "list-microcommerce",
    title: "MicroCommerce",
    subtitle: {
      en: "Microservices-based e-commerce project featuring Payment, Order, and Stock APIs.",
      tr: "Payment, Order ve Stock API'lerini içeren mikroservis tabanlı e-commerce projesi.",
    },
    focus: {
      en: "Business capability separation across service APIs.",
      tr: "Servis API'leri arasında business capability ayrımı.",
    },
    year: "2025",
    category: { en: "Commerce", tr: "Ticaret" },
    tags: [".NET", "Microservices", "Payment", "Order", "Stock"],
    githubUrl: "https://github.com/devlightening/MicroCommerce",
  },
  {
    id: "list-restaurant-signalr",
    title: "RestaurantAppSignalR",
    subtitle: {
      en: "Dynamic QR code restaurant order management application using SignalR for real-time interaction.",
      tr: "Gerçek zamanlı etkileşim için SignalR kullanan dinamik QR kod restoran sipariş yönetimi uygulaması.",
    },
    focus: {
      en: "Real-time ordering flows, restaurant operations, and dashboard-style interactions.",
      tr: "Gerçek zamanlı sipariş akışları, restoran operasyonları ve dashboard benzeri etkileşimler.",
    },
    year: "2025",
    category: { en: "Realtime app", tr: "Realtime uygulama" },
    tags: [".NET", "SignalR", "QR", "Restaurant"],
    githubUrl: "https://github.com/devlightening/RestaurantAppSignalR",
  },
  {
    id: "list-qrmenu",
    title: "QR-Menu-Plugin",
    subtitle: {
      en: "WordPress plugin developed during internship, providing restaurant management features in a single admin panel.",
      tr: "Staj döneminde geliştirilen, restoran yönetimi özelliklerini tek admin panelinde sunan WordPress plugin'i.",
    },
    focus: {
      en: "Admin workflows, plugin integration, and restaurant management UX.",
      tr: "Admin iş akışları, plugin entegrasyonu ve restoran yönetimi UX'i.",
    },
    year: "2025",
    category: { en: "Internship project", tr: "Staj projesi" },
    tags: ["WordPress", "PHP", "Plugin", "Restaurant"],
    githubUrl: "https://github.com/devlightening/QR-Menu-Plugin",
  },
  {
    id: "list-anima",
    title: "Anima.Api",
    subtitle: {
      en: "AI API that analyzes written messages and notes to generate a personality profile and answer questions based on that profile.",
      tr: "Yazılı mesaj ve notları analiz ederek kişilik profili çıkaran ve bu profile göre soruları cevaplayan AI API.",
    },
    focus: {
      en: "Sensitive AI product thinking, API design, and personality-model response flows.",
      tr: "Hassas AI ürün yaklaşımı, API tasarımı ve kişilik modeli tabanlı cevap akışları.",
    },
    year: "2025",
    category: { en: "AI API", tr: "AI API" },
    tags: [".NET", "AI", "API", "Data Analysis"],
    githubUrl: "https://github.com/devlightening/Anima.Api",
  },
  {
    id: "list-movieapi",
    title: "MovieApi",
    subtitle: {
      en: "API architecture practice with Onion Architecture, CQRS, Mediator, Unit of Work, Repository, Iterator, and Observer patterns.",
      tr: "Onion Architecture, CQRS, Mediator, Unit of Work, Repository, Iterator ve Observer desenleriyle API mimarisi pratiği.",
    },
    focus: {
      en: "Pattern literacy and maintainable application layering.",
      tr: "Tasarım deseni okuryazarlığı ve sürdürülebilir uygulama katmanları.",
    },
    year: "2025",
    category: { en: "Architecture practice", tr: "Mimari pratik" },
    tags: [".NET", "CQRS", "Mediator", "Repository", "Patterns"],
    githubUrl: "https://github.com/devlightening/MovieApi",
  },
  {
    id: "list-noa",
    title: "NOA_RestaurantApp",
    subtitle: {
      en: "Restaurant application using clean code principles with NArchitecture.Gen.",
      tr: "NArchitecture.Gen ile clean code prensiplerine göre geliştirilen restoran uygulaması.",
    },
    focus: {
      en: "Generated architecture conventions and clean application structure.",
      tr: "Generated architecture konvansiyonları ve temiz uygulama yapısı.",
    },
    year: "2025",
    category: { en: "Restaurant system", tr: "Restoran sistemi" },
    tags: [".NET", "NArchitecture", "Clean Code", "Restaurant"],
    githubUrl: "https://github.com/devlightening/NOA_RestaurantApp",
  },
  {
    id: "list-lastrac",
    title: "LastRACProject",
    subtitle: {
      en: "Rent-a-car project built with a layered architecture approach.",
      tr: "Layered Architecture yaklaşımıyla geliştirilen rent-a-car projesi.",
    },
    focus: {
      en: "Earlier architecture practice around a familiar business domain.",
      tr: "Tanıdık bir iş domain'i üzerinden erken dönem mimari pratiği.",
    },
    year: "2025",
    category: { en: "Architecture practice", tr: "Mimari pratik" },
    tags: [".NET", "Layered Architecture", "Rent A Car"],
    githubUrl: "https://github.com/devlightening/LastRACProject",
  },
];
