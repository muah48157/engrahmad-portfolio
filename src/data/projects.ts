export type ProjectVisual = "course" | "tracking" | "campus" | "commerce" | "clinical";

export type FeaturedProject = {
  id: string;
  title: string;
  category: string;
  summary: string;
  ownership: string;
  highlights: string[];
  technologies: string[];
  status: string;
  visual: ProjectVisual;
  visualLabel: string;
  icon?: string;
  image?: string;
  imageAlt?: string;
};

export const projects: FeaturedProject[] = [
  {
    id: "mrcp-syndrome",
    title: "MRCP Syndrome",
    category: "Medical Learning & Course Commerce Platform",
    summary:
      "A production medical learning application supporting course commerce, protected content delivery, and platform-specific purchase flows across Android and iOS.",
    ownership:
      "Built the Flutter application from scratch through deployment and personally managed its Google Play and Apple App Store releases.",
    highlights: [
      "Implemented Stripe PaymentSheet on Android and Apple IAP with StoreKit on iOS, connected to course access and ownership flows.",
      "Integrated VdoCipher-protected video, PDF learning workflows, and biometric and session safeguards.",
      "Currently engineering the migration toward Hetzner-hosted, self-managed HLS infrastructure.",
    ],
    technologies: ["Flutter", "Dart", "BLoC/Cubit", "Dio", "Stripe", "StoreKit", "VdoCipher"],
    status: "Production app · Migration in progress",
    visual: "course",
    visualLabel: "Secure course delivery",
    icon: "/projects/icons/mrcp-syndrome.svg",
    image: "/projects/mrcp-syndrome.jpg",
    imageAlt: "MRCP Syndrome medical learning course modules and protected video player mockup",
  },
  {
    id: "u-track-lite",
    title: "U-Track Lite",
    category: "Vehicle Tracking & Fleet Management",
    summary:
      "A production fleet application combining live location, trip history, operational records, and network-conscious mobile delivery.",
    ownership:
      "Built the complete application from zero through deployment and personally published it to Google Play.",
    highlights: [
      "Built live fleet tracking with custom map markers, route polylines, and animated trip replay.",
      "Implemented local caching, SQLite persistence, adaptive polling, and data-processing optimizations.",
      "Improved load time by approximately 40% for a product with 1K+ Google Play downloads.",
    ],
    technologies: ["Flutter", "BLoC/Cubit", "Dio", "SQLite", "Google Maps", "FlutterMap", "FCM"],
    status: "Google Play · 1K+ downloads",
    visual: "tracking",
    visualLabel: "Live route telemetry",
    icon: "/projects/icons/u-track-lite.svg",
    image: "/projects/u-track-lite.jpg",
    imageAlt: "U-Track Lite live fleet telemetry and route tracking map interface",
  },
  {
    id: "kaims",
    title: "KAIMS University Management System",
    category: "University Management Platform",
    summary:
      "A mobile academic platform for student and teacher workflows, backed by purpose-built APIs and real-time communication.",
    ownership:
      "Led a four-person team delivering the Flutter app and built its mobile-facing APIs; the wider web and backend platform was developed collaboratively.",
    highlights: [
      "Delivered attendance, assignments, quizzes, marks, course materials, and student and teacher workflows.",
      "Built the app-facing Node.js, Express, MongoDB, and Mongoose APIs with JWT bearer authentication.",
      "Implemented real-time Socket.IO chat plus file upload, download, PDF, and local notification workflows.",
    ],
    technologies: ["Flutter", "GetX", "Node.js", "Express", "MongoDB", "JWT", "Socket.IO"],
    status: "Google Play release",
    visual: "campus",
    visualLabel: "Academic operations",
    icon: "/projects/icons/kaims.svg",
    image: "/projects/kaims.jpg",
    imageAlt: "KAIMS University Management System student schedule and portal interface",
  },
  {
    id: "dys-diyosa",
    title: "DYS / Diyosa",
    category: "Watch, Media & Shop Application",
    summary:
      "A Flutter commerce and media product connecting mobile shopping, video content, and authenticated management workflows.",
    ownership:
      "Built the complete Flutter client and its supporting PHP APIs, then personally published the application to Google Play.",
    highlights: [
      "Integrated WordPress and WooCommerce product, content, cart, and checkout workflows.",
      "Implemented production Square In-App Payments across mobile checkout and backend processing.",
      "Developed video and media experiences with authenticated administration and content flows.",
    ],
    technologies: ["Flutter", "BLoC", "PHP APIs", "WordPress", "WooCommerce", "Square"],
    status: "Production app",
    visual: "commerce",
    visualLabel: "Media-led commerce",
    icon: "/projects/icons/dys-diyosa.svg",
    image: "/projects/dys-diyosa.jpg",
    imageAlt: "DYS / Diyosa luxury watch catalog and mobile media commerce interface",
  },
  {
    id: "clinnote-ai",
    title: "ClinNote AI",
    category: "Medical Transcription & Clinical Reporting Software",
    summary:
      "A cross-language desktop product for capturing clinical audio, transcribing it locally, and producing structured medical reports.",
    ownership:
      "Engineered the product end to end across its desktop interface, native audio layer, transcription pipeline, and supporting services.",
    highlights: [
      "Integrated Tauri, Rust, Python, Firestore, and OpenAI services into a cohesive Windows desktop workflow.",
      "Implemented microphone and system-audio capture with Windows WASAPI and local Whisper transcription.",
      "Built patient, clinic, report-template, permission, and password-reset workflows for software now used by the client.",
    ],
    technologies: ["Tauri", "TypeScript", "Rust", "Python", "WASAPI", "Whisper", "Firestore"],
    status: "Client-used product",
    visual: "clinical",
    visualLabel: "Audio to clinical report",
    icon: "/projects/icons/clinnote-ai.svg",
    image: "/projects/clinnote-ai.jpg",
    imageAlt: "ClinNote AI desktop medical audio waveform and clinical transcription software",
  },
];
