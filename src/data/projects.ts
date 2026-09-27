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

export type ProjectScreenshot = {
  path: string;
  alt: string;
  width: number;
  height: number;
};

export type ProjectPlatform = "mobile" | "desktop";

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
  platform?: ProjectPlatform;
  icon?: string;
  image?: string;
  imageAlt?: string;
  imageWidth?: number;
  imageHeight?: number;
  gallery?: string[];
  galleryScreenshots?: ProjectScreenshot[];
  isFeatured: boolean;
  caseStudyPath?: string;
  links?: ProjectLinks;
  caseStudy?: CaseStudyDetail;
};

// Backward-compatible alias for existing components
export type FeaturedProject = ProjectItem;

export function isMobileProject(project: ProjectItem): boolean {
  if (project.platform === "desktop") return false;
  if (project.platform === "mobile") return true;
  if (
    project.id === "clinnote-ai" ||
    project.technologies.includes("Tauri") ||
    project.category.toLowerCase().includes("desktop")
  ) {
    return false;
  }
  if (project.imageWidth && project.imageHeight) {
    return project.imageWidth / project.imageHeight < 1.0;
  }
  return true;
}

export function getProjectPresentation(project: ProjectItem) {
  const isMobile = isMobileProject(project);
  const width = project.imageWidth || (isMobile ? 720 : 1920);
  const height = project.imageHeight || (isMobile ? 1600 : 1080);
  const aspectRatio = width / height;

  // On desktop screens, mobile frames target a visually balanced height (~37.5rem / 600px)
  // so the phone is large, readable, and proportional to its exact aspect ratio
  const mobileMaxWidthRem = Number((37.5 * aspectRatio).toFixed(2));

  return {
    isMobile,
    width,
    height,
    aspectRatio,
    maxWidth: isMobile ? `min(${mobileMaxWidthRem}rem, 85vw)` : "100%",
  };
}

export function getProjectGallery(project: ProjectItem): ProjectScreenshot[] {
  if (project.galleryScreenshots && project.galleryScreenshots.length > 0) {
    return project.galleryScreenshots;
  }
  if (project.gallery && project.gallery.length > 0) {
    return project.gallery.map((path, idx) => ({
      path,
      alt: `${project.title} interface view 0${idx + 1}`,
      width: 720,
      height: 1600,
    }));
  }
  return [];
}

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
    platform: "mobile",
    icon: "/projects/mrcp-syndrome/icon-web.png",
    image: "/projects/mrcp-syndrome/1.jpeg",
    imageAlt: "MRCP Syndrome medical course catalog screen with filter tabs, course cards, ratings, and bottom navigation",
    imageWidth: 720,
    imageHeight: 1600,
    gallery: [
      "/projects/mrcp-syndrome/1.jpeg",
      "/projects/mrcp-syndrome/2.jpeg",
      "/projects/mrcp-syndrome/3.jpeg",
      "/projects/mrcp-syndrome/4.jpeg",
      "/projects/mrcp-syndrome/5.jpeg",
      "/projects/mrcp-syndrome/6.jpeg",
      "/projects/mrcp-syndrome/7.jpeg",
    ],
    galleryScreenshots: [
      {
        path: "/projects/mrcp-syndrome/1.jpeg",
        alt: "MRCP Syndrome medical course catalog screen with filter tabs, course cards, ratings, and navigation",
        width: 720,
        height: 1600,
      },
      {
        path: "/projects/mrcp-syndrome/2.jpeg",
        alt: "MRCP Syndrome course detail and subscription pricing packages selection screen",
        width: 720,
        height: 1600,
      },
      {
        path: "/projects/mrcp-syndrome/3.jpeg",
        alt: "MRCP Syndrome shopping cart and checkout order summary screen",
        width: 1080,
        height: 2400,
      },
      {
        path: "/projects/mrcp-syndrome/4.jpeg",
        alt: "MRCP Syndrome My Learning screen with enrolled medical revision courses",
        width: 720,
        height: 1600,
      },
      {
        path: "/projects/mrcp-syndrome/5.jpeg",
        alt: "MRCP Syndrome user profile screen with biometric sign-in preferences",
        width: 720,
        height: 1600,
      },
      {
        path: "/projects/mrcp-syndrome/6.jpeg",
        alt: "MRCP Syndrome authentication login screen with biometric prompt",
        width: 720,
        height: 1600,
      },
      {
        path: "/projects/mrcp-syndrome/7.jpeg",
        alt: "MRCP Syndrome user registration and account creation screen",
        width: 720,
        height: 1600,
      },
    ],
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
    platform: "mobile",
    icon: "/projects/u-track-lite/icon.webp",
    image: "/projects/u-track-lite/4.webp",
    imageAlt: "U-Track Lite real-time vehicle telemetry screen with speedometer, RPM gauge, and live GPS map tracking",
    imageWidth: 135,
    imageHeight: 296,
    gallery: [
      "/projects/u-track-lite/1.webp",
      "/projects/u-track-lite/2.webp",
      "/projects/u-track-lite/3.webp",
      "/projects/u-track-lite/4.webp",
      "/projects/u-track-lite/5.webp",
      "/projects/u-track-lite/6.webp",
      "/projects/u-track-lite/7.webp",
      "/projects/u-track-lite/8.webp",
    ],
    galleryScreenshots: [
      {
        path: "/projects/u-track-lite/4.webp",
        alt: "U-Track Lite live telemetry screen with speedometer, RPM gauge, and GPS map tracking",
        width: 135,
        height: 296,
      },
      {
        path: "/projects/u-track-lite/1.webp",
        alt: "U-Track Lite login screen with server selector and vehicle graphics",
        width: 136,
        height: 296,
      },
      {
        path: "/projects/u-track-lite/2.webp",
        alt: "U-Track Lite fleet dashboard with moving, idle, parked, and offline status counters",
        width: 134,
        height: 296,
      },
      {
        path: "/projects/u-track-lite/3.webp",
        alt: "U-Track Lite map view with vehicle route breadcrumbs and waypoint history",
        width: 136,
        height: 296,
      },
      {
        path: "/projects/u-track-lite/5.webp",
        alt: "U-Track Lite language selection screen supporting English, Urdu, and Arabic",
        width: 135,
        height: 296,
      },
      {
        path: "/projects/u-track-lite/6.webp",
        alt: "U-Track Lite fleet vehicle list with live ignition and movement status badges",
        width: 135,
        height: 296,
      },
      {
        path: "/projects/u-track-lite/7.webp",
        alt: "U-Track Lite vehicle search and filter drawer interface",
        width: 135,
        height: 296,
      },
      {
        path: "/projects/u-track-lite/8.webp",
        alt: "U-Track Lite navigation menu drawer with user profile and quick access links",
        width: 135,
        height: 296,
      },
    ],
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
    platform: "mobile",
    icon: "/projects/kaims/icon.webp",
    image: "/projects/kaims/4.webp",
    imageAlt: "KAIMS My Courses academic management view with attendance, materials, quizzes, and planner modules",
    imageWidth: 132,
    imageHeight: 296,
    gallery: [
      "/projects/kaims/1.webp",
      "/projects/kaims/2.webp",
      "/projects/kaims/3.webp",
      "/projects/kaims/4.webp",
      "/projects/kaims/5.webp",
      "/projects/kaims/6.webp",
      "/projects/kaims/7.jpg",
    ],
    galleryScreenshots: [
      {
        path: "/projects/kaims/4.webp",
        alt: "KAIMS My Courses academic view with attendance, course materials, quizzes, and planner modules",
        width: 132,
        height: 296,
      },
      {
        path: "/projects/kaims/1.webp",
        alt: "KAIMS multi-role login portal with student roll number authentication",
        width: 134,
        height: 296,
      },
      {
        path: "/projects/kaims/2.webp",
        alt: "KAIMS teacher login portal screen",
        width: 132,
        height: 296,
      },
      {
        path: "/projects/kaims/3.webp",
        alt: "KAIMS student dashboard with campus announcements and lecture schedule",
        width: 132,
        height: 296,
      },
      {
        path: "/projects/kaims/5.webp",
        alt: "KAIMS course materials repository with downloadable academic resources",
        width: 132,
        height: 296,
      },
      {
        path: "/projects/kaims/6.webp",
        alt: "KAIMS quizzes and assignments interface displaying active quiz deadlines",
        width: 134,
        height: 296,
      },
      {
        path: "/projects/kaims/7.jpg",
        alt: "KAIMS student assignments list with submission deadlines and marks",
        width: 133,
        height: 296,
      },
    ],
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
    platform: "desktop",
    icon: "/projects/clinnote-ai/icon.png",
    image: "/projects/clinnote-ai/2.png",
    imageAlt: "ClinNote AI desktop transcription workspace with Whisper model selector and real-time consultation transcription",
    imageWidth: 1917,
    imageHeight: 999,
    gallery: [
      "/projects/clinnote-ai/1.png",
      "/projects/clinnote-ai/2.png",
      "/projects/clinnote-ai/3.png",
      "/projects/clinnote-ai/4.png",
      "/projects/clinnote-ai/5.png",
      "/projects/clinnote-ai/6.png",
      "/projects/clinnote-ai/7.png",
    ],
    galleryScreenshots: [
      {
        path: "/projects/clinnote-ai/2.png",
        alt: "ClinNote AI desktop transcription workspace with Whisper model selector and consultation notes",
        width: 1917,
        height: 999,
      },
      {
        path: "/projects/clinnote-ai/1.png",
        alt: "ClinNote AI desktop authentication login screen",
        width: 1917,
        height: 1006,
      },
      {
        path: "/projects/clinnote-ai/3.png",
        alt: "ClinNote AI live audio capture recording state with audio stream monitor",
        width: 1917,
        height: 1003,
      },
      {
        path: "/projects/clinnote-ai/4.png",
        alt: "ClinNote AI patient records management directory and encounter history",
        width: 1918,
        height: 1008,
      },
      {
        path: "/projects/clinnote-ai/5.png",
        alt: "ClinNote AI settings panel for clinic tokens and API configuration",
        width: 1917,
        height: 1008,
      },
      {
        path: "/projects/clinnote-ai/6.png",
        alt: "ClinNote AI report formats and clinical documentation template editor",
        width: 1917,
        height: 997,
      },
      {
        path: "/projects/clinnote-ai/7.png",
        alt: "ClinNote AI user roles and permissions configuration matrix",
        width: 1917,
        height: 1003,
      },
    ],
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
    platform: "mobile",
    icon: "/projects/dys/icon.webp",
    image: "/projects/dys/1.webp",
    imageAlt: "DIYOSA Radio Watch & Shop mobile home screen with featured video stream and trending merchandise",
    imageWidth: 325,
    imageHeight: 724,
    gallery: [
      "/projects/dys/1.webp",
      "/projects/dys/2.webp",
      "/projects/dys/3.webp",
      "/projects/dys/4.webp",
      "/projects/dys/5.webp",
      "/projects/dys/6.webp",
    ],
    galleryScreenshots: [
      {
        path: "/projects/dys/1.webp",
        alt: "DIYOSA Radio Watch & Shop mobile home screen with featured video stream and trending merchandise",
        width: 325,
        height: 724,
      },
      {
        path: "/projects/dys/2.webp",
        alt: "DIYOSA Radio video playlist catalog with thumbnail stream feed",
        width: 325,
        height: 727,
      },
      {
        path: "/projects/dys/3.webp",
        alt: "DIYOSA Radio video player interface with streaming playback and related videos",
        width: 328,
        height: 721,
      },
      {
        path: "/projects/dys/4.webp",
        alt: "DIYOSA mobile shop merchandise catalog with product listings and pricing",
        width: 325,
        height: 724,
      },
      {
        path: "/projects/dys/5.webp",
        alt: "DIYOSA apparel product details view with size selector and add to cart action",
        width: 325,
        height: 724,
      },
      {
        path: "/projects/dys/6.webp",
        alt: "DIYOSA mobile checkout screen with Square payment integration",
        width: 327,
        height: 726,
      },
    ],
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
    platform: "mobile",
    icon: "/projects/quick-invoices/icon.webp",
    image: "/projects/quick-invoices/5.jpeg",
    imageAlt: "Quick Invoices dashboard with financial summary, invoice search, status filters, and invoice creation action",
    imageWidth: 720,
    imageHeight: 1600,
    gallery: [
      "/projects/quick-invoices/1.jpeg",
      "/projects/quick-invoices/2.jpeg",
      "/projects/quick-invoices/3.jpeg",
      "/projects/quick-invoices/4.jpeg",
      "/projects/quick-invoices/5.jpeg",
      "/projects/quick-invoices/6.jpeg",
      "/projects/quick-invoices/7.jpeg",
    ],
    galleryScreenshots: [
      {
        path: "/projects/quick-invoices/5.jpeg",
        alt: "Quick Invoices dashboard with financial summary, invoice search, status filters, and creation action",
        width: 720,
        height: 1600,
      },
      {
        path: "/projects/quick-invoices/1.jpeg",
        alt: "Quick Invoices sign-in authentication screen",
        width: 720,
        height: 1600,
      },
      {
        path: "/projects/quick-invoices/2.jpeg",
        alt: "Quick Invoices settings and preferences screen with currency and organization controls",
        width: 720,
        height: 1600,
      },
      {
        path: "/projects/quick-invoices/3.jpeg",
        alt: "Quick Invoices estimate creation interface with client selection and itemized lines",
        width: 720,
        height: 1600,
      },
      {
        path: "/projects/quick-invoices/4.jpeg",
        alt: "Quick Invoices new invoice creation screen with due date and client entry",
        width: 720,
        height: 1600,
      },
      {
        path: "/projects/quick-invoices/6.jpeg",
        alt: "Quick Invoices Quick Report financial snapshot with payment breakdown gauge",
        width: 720,
        height: 1600,
      },
      {
        path: "/projects/quick-invoices/7.jpeg",
        alt: "Quick Invoices estimates management screen with status filtering",
        width: 720,
        height: 1600,
      },
    ],
    isFeatured: false,
    links: {
      label: "Google Play Release",
    },
  },
];

export const featuredProjects = projects.filter((p) => p.isFeatured);
export const additionalProjects = projects.filter((p) => !p.isFeatured);
