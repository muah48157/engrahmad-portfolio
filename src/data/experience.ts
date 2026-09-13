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
  capabilities: string[];
  projects: ExperienceProject[];
};

export const experience: ExperienceEntry[] = [
  {
    company: "Bulk Bytes",
    role: "Flutter Developer",
    dates: "Jan 2024 – Present",
    summary:
      "Building and maintaining production Flutter applications for Android and iOS, with responsibility spanning architecture, feature delivery, integrations, release workflows, and post-launch improvements.",
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
          "Built the medical learning application from its initial Flutter architecture through production release on Google Play and the Apple App Store.",
        highlights: [
          "Developed course enrollment and ownership flows, protected video and PDF learning, plus biometric and session safeguards.",
          "Integrated Stripe on Android and Apple In-App Purchase with StoreKit on iOS, then personally managed both store releases.",
          "Currently engineering the migration from VdoCipher to self-hosted HLS infrastructure on Hetzner.",
        ],
        stack: ["Flutter", "BLoC/Cubit", "Dio", "Stripe", "StoreKit", "VdoCipher"],
        status: "Active development",
      },
      {
        name: "U-Track Lite",
        summary:
          "Built and shipped a complete fleet-tracking application from zero to its Google Play production release.",
        highlights: [
          "Engineered live GPS tracking, Google Maps and FlutterMap views, animated trip replay, and adaptive networking with local caching.",
          "Delivered maintenance and expense modules, multilingual support, FCM notifications, and PDF reporting.",
          "Improved load time by approximately 40% while supporting a product with 1K+ Google Play downloads.",
        ],
        stack: ["Flutter", "BLoC/Cubit", "Dio", "SQLite", "Maps/GPS", "FCM"],
        metric: "1K+ Play Store downloads · ~40% faster load time",
      },
      {
        name: "DYS / Diyosa",
        summary:
          "Built the Flutter commerce application and its supporting PHP APIs, then personally published the product to Google Play.",
        highlights: [
          "Integrated WordPress and WooCommerce data with production Square payment flows.",
          "Developed product, video, and media experiences alongside authenticated content and administration workflows.",
        ],
        stack: ["Flutter", "BLoC", "PHP APIs", "WooCommerce", "Square"],
      },
      {
        name: "Quick Invoices",
        summary:
          "Built and personally published a focused invoicing application for small-business document workflows.",
        highlights: [
          "Implemented invoice and estimate creation with taxes, discounts, and partial-payment handling.",
          "Used Firebase Auth and Firestore for secure user data, with production-ready PDF generation.",
        ],
        stack: ["Flutter", "Cubit/BLoC", "Firebase Auth", "Firestore", "PDF"],
      },
    ],
  },
];
