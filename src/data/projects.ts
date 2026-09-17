export type ProjectVisual =
  | "course"
  | "tracking"
  | "campus"
  | "commerce"
  | "clinical"
  | "utility";

export type ProjectLinks = {
  playStore?: string;
  appStore?: string;
  github?: string;
  demo?: string;
  label?: string;
};

export type CaseStudyDetail = {
  challenge: string;
  architecture: string[];
  backendBoundary: string[];
  performance: string[];
  outcomes: string[];
};

export type ProjectItem = {
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
  isFeatured: boolean;
  caseStudyPath?: string;
  links?: ProjectLinks;
  caseStudy?: CaseStudyDetail;
};

// Backward-compatible alias for existing components
export type FeaturedProject = ProjectItem;

export const projects: ProjectItem[] = [
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
    isFeatured: true,
    caseStudyPath: "/projects/mrcp-syndrome",
    links: {
      label: "Google Play & Apple App Store Releases",
    },
    caseStudy: {
      challenge:
        "Deliver a cross-platform medical e-learning application requiring platform-specific purchase compliance across Google Play and Apple App Store, secure proprietary video and document streaming, and enterprise session safeguards.",
      architecture: [
        "Built with Flutter and Dart using BLoC/Cubit for modular, predictable state management.",
        "Implemented strict separation of presentation, business logic, and repository layers.",
        "Designed platform-specific checkout channels isolating Android and iOS payment logic.",
      ],
      backendBoundary: [
        "Integrated Stripe PaymentSheet on Android and StoreKit In-App Purchases on iOS, synchronized with backend course access control.",
        "Integrated VdoCipher SDK for encrypted video streaming with OTP session verification.",
        "Connected authenticated PDF learning workflows with biometric safeguards and secure token validation.",
      ],
      performance: [
        "Currently engineering migration from third-party video hosting to self-managed HLS streaming infrastructure on Hetzner to reduce operating costs.",
        "Optimized media caching and course asset prefetching for bandwidth-conscious medical students.",
      ],
      outcomes: [
        "Built the Flutter client from zero through production release on both Google Play and Apple App Store.",
        "Personally managed end-to-end app store review compliance for both Android and iOS ecosystems.",
        "Active production product with ongoing video infrastructure enhancements.",
      ],
    },
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
    isFeatured: true,
    caseStudyPath: "/projects/u-track-lite",
    links: {
      label: "Google Play Release · 1K+ Downloads",
    },
    caseStudy: {
      challenge:
        "Deliver a reliable fleet tracking and telemetry application that handles continuous high-frequency GPS updates, heavy route map rendering, and flaky mobile network environments without battery or UI degradation.",
      architecture: [
        "Flutter architecture utilizing BLoC/Cubit for state isolation between map tracking, telemetry metrics, and vehicle list states.",
        "Repository pattern with SQLite local storage for offline-first telemetry caching.",
        "Modular map engine supporting both Google Maps and FlutterMap.",
      ],
      backendBoundary: [
        "Dio HTTP client configured with custom interceptors for authentication, token refreshing, and adaptive request throttling.",
        "Firebase Cloud Messaging (FCM) integration for real-time fleet alarms, route deviations, and geofence alerts.",
      ],
      performance: [
        "Achieved an approximate 40% load-time improvement through local SQLite persistence, data-processing optimizations, and adaptive polling.",
        "Engineered animated route polylines and custom vehicle map markers with smooth 60fps trip replays without frame drops.",
      ],
      outcomes: [
        "Personally engineered and published the complete application to Google Play.",
        "Surpassed 1,000+ Google Play downloads with active commercial fleet operations.",
        "Significant reduction in client bandwidth usage and faster cold-start app launch.",
      ],
    },
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
    isFeatured: true,
    caseStudyPath: "/projects/kaims",
    links: {
      label: "Google Play Release",
    },
    caseStudy: {
      challenge:
        "Coordinate and build a comprehensive university management ecosystem spanning student attendance, course assignments, grading, academic schedules, and real-time student-teacher messaging across web and mobile.",
      architecture: [
        "Led a four-member engineering team delivering the Flutter mobile client.",
        "Implemented GetX state and dependency management for rapid responsive module delivery.",
        "Standardized mobile codebase architecture and Git workflows across team members.",
      ],
      backendBoundary: [
        "Personally engineered the mobile-facing backend APIs using Node.js, Express, MongoDB, and Mongoose.",
        "Secured endpoints with JWT bearer authentication and role-based access control (student, teacher, admin).",
        "Integrated Socket.IO for real-time bidirectional messaging and chat notifications.",
      ],
      performance: [
        "Engineered chunked file upload and download pipelines for large academic PDFs and lecture materials.",
        "Structured database query indexing and projection in MongoDB to minimize payload sizes over mobile connections.",
      ],
      outcomes: [
        "Successfully launched mobile application to Google Play.",
        "Streamlined day-to-day academic workflows, assignments, and attendance for university stakeholders.",
        "Demonstrated cross-discipline execution across frontend mobile leadership and backend API engineering.",
      ],
    },
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
    isFeatured: true,
    caseStudyPath: "/projects/clinnote-ai",
    links: {
      label: "Client-Used Software",
    },
    caseStudy: {
      challenge:
        "Build a high-reliability desktop clinical recording and transcription solution that captures clean multi-channel audio, executes local AI speech-to-text without cloud latency, and generates structured medical documentation.",
      architecture: [
        "Architected using Tauri desktop runtime with a TypeScript frontend and high-performance native Rust core.",
        "Implemented cross-language inter-process communication (IPC) bridging the UI with native audio pipelines.",
        "Engineered patient records, clinic management, and customizable clinical report templates.",
      ],
      backendBoundary: [
        "Integrated Windows WASAPI in native code for dual microphone and system-audio loopback capture.",
        "Integrated local Whisper transcription pipeline with fallback to OpenAI cloud endpoints.",
        "Synchronized structured patient clinical notes and templates with Google Cloud Firestore.",
      ],
      performance: [
        "Utilized Rust for low-overhead audio buffering and WASAPI hardware interaction, minimizing CPU footprint during active consultations.",
        "Local Whisper speech processing ensures confidential patient audio remains on-device whenever required.",
      ],
      outcomes: [
        "Delivered end-to-end desktop software currently deployed and used by the healthcare client.",
        "Eliminated transcription delays and streamlined clinical SOAP note documentation.",
        "Showcases systems-level engineering breadth across Rust, Python, Tauri, and native audio APIs.",
      ],
    },
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
    isFeatured: false,
    links: {
      label: "Google Play Release",
    },
  },
  {
    id: "quick-invoices",
    title: "Quick Invoices",
    category: "Small-Business Invoicing & Billing Workflow",
    summary:
      "A focused mobile invoicing application engineered for small-business document creation, tax and discount handling, and client billing.",
    ownership:
      "Built the complete application from scratch and personally published it to Google Play.",
    highlights: [
      "Implemented invoice and estimate creation with taxes, discounts, and partial-payment handling.",
      "Used Firebase Auth and Firestore for secure user data, with production-ready PDF generation.",
      "Engineered on-device PDF generation and document sharing workflows.",
    ],
    technologies: ["Flutter", "Dart", "BLoC/Cubit", "Firebase Auth", "Firestore", "PDF"],
    status: "Google Play release",
    visual: "utility",
    visualLabel: "Document workflow",
    isFeatured: false,
    links: {
      label: "Google Play Release",
    },
  },
];

export const featuredProjects = projects.filter((p) => p.isFeatured);
export const additionalProjects = projects.filter((p) => !p.isFeatured);
