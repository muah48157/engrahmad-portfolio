export type ExperienceProject = {
  name: string;
  summary: string;
  highlights: string[];
  stack: string[];
  metric?: string;
  status?: string;
};

export type ExperienceEntry = {
  company: string;
  role: string;
  dates: string;
  summary: string;
  responsibilities: string[];
  capabilities: string[];
  projects: ExperienceProject[];
};

export const experience: ExperienceEntry[] = [
  {
    company: "Bulk Bytes",
    role: "Flutter Developer",
    dates: "Jan 2024 – Present",
    summary:
      "Engineering production Flutter applications across Android and iOS, leading client architecture, third-party integrations, dual app-store release management, and performance optimization.",
    responsibilities: [
      "Standardizing Flutter architecture and BLoC state management conventions across client applications.",
      "Personally managing Google Play Console and Apple App Store Connect release lifecycles and store compliance.",
      "Collaborating on backend API contracts, payment integrations, and real-time streaming infrastructure.",
      "Driving performance optimization, offline caching with SQLite, and mobile data consumption reduction.",
    ],
    capabilities: [
      "Mobile architecture & delivery",
      "REST APIs & backend support",
      "Payments, maps & GPS",
      "Firebase, Supabase & local data",
      "Media & document workflows",
      "Store release & maintenance",
    ],
    projects: [
      {
        name: "MRCP Syndrome",
        summary:
          "Production medical learning platform featuring dual-store purchase compliance and protected content delivery.",
        highlights: [
          "Architected the Flutter client and personally managed dual releases on Google Play and Apple App Store.",
          "Integrated Stripe on Android and Apple In-App Purchase with StoreKit on iOS for course commerce.",
          "Engineered biometric safeguards, protected video streaming, and ongoing migration to self-hosted Hetzner HLS infrastructure.",
        ],
        stack: ["Flutter", "BLoC/Cubit", "Dio", "Stripe", "StoreKit", "VdoCipher"],
        status: "Production app · Active migration",
      },
      {
        name: "U-Track Lite",
        summary:
          "Live vehicle fleet tracking product with adaptive networking, offline caching, and animated route visualization.",
        highlights: [
          "Built and published the complete mobile application to Google Play, surpassing 1,000+ downloads.",
          "Delivered an approximate 40% load-time improvement through local SQLite persistence and adaptive polling.",
          "Implemented real-time GPS telemetry, custom Google Maps markers, animated polyline replay, and FCM alerts.",
        ],
        stack: ["Flutter", "BLoC/Cubit", "Dio", "SQLite", "Google Maps", "FCM"],
        metric: "1K+ Google Play downloads · ~40% Load-Time Improvement",
        status: "Google Play release",
      },
      {
        name: "DYS / Diyosa",
        summary:
          "Mobile lifestyle commerce and media application with backend API integration and mobile checkout.",
        highlights: [
          "Built the mobile application and supporting PHP APIs, publishing the product to Google Play.",
          "Integrated Square In-App Payments alongside WooCommerce product catalog and checkout flows.",
          "Engineered authenticated media streaming and administrative product management workflows.",
        ],
        stack: ["Flutter", "BLoC", "PHP APIs", "WooCommerce", "Square"],
        status: "Google Play release",
      },
      {
        name: "Quick Invoices",
        summary:
          "Focused small-business billing and document creation application with cloud synchronization.",
        highlights: [
          "Engineered and published the focused invoicing application to Google Play for small-business clients.",
          "Implemented tax calculation, discount structures, partial payments, and client balance tracking.",
          "Connected Firebase Auth and Cloud Firestore for cross-device sync with on-device PDF generation.",
        ],
        stack: ["Flutter", "Cubit/BLoC", "Firebase Auth", "Firestore", "PDF"],
        status: "Google Play release",
      },
    ],
  },
];
