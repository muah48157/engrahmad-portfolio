export type Skill = {
  name: string;
  featured?: boolean;
};

export type SkillGroup = {
  id: string;
  title: string;
  description: string;
  skills: Skill[];
};

export const skillGroups: SkillGroup[] = [
  {
    id: "mobile-engineering",
    title: "Mobile Engineering",
    description:
      "Cross-platform product development from responsive interfaces through native platform delivery.",
    skills: [
      { name: "Flutter", featured: true },
      { name: "Dart", featured: true },
      { name: "Android" },
      { name: "iOS" },
      { name: "Responsive UI" },
      { name: "Cross-Platform Development" },
    ],
  },
  {
    id: "architecture-state",
    title: "Architecture & State Management",
    description:
      "Practical patterns used to keep production applications modular, testable, and maintainable.",
    skills: [
      { name: "BLoC", featured: true },
      { name: "Cubit", featured: true },
      { name: "GetX" },
      { name: "Repository Pattern" },
      { name: "Feature-First Architecture" },
      { name: "Layered Architecture" },
      { name: "Dependency Injection" },
      { name: "SOLID Principles" },
    ],
  },
  {
    id: "backend-apis",
    title: "Backend & APIs",
    description:
      "Supporting backend capability for integrating mobile clients and building focused application services.",
    skills: [
      { name: "REST APIs", featured: true },
      { name: "Dio" },
      { name: "HTTP" },
      { name: "JSON" },
      { name: "JWT / Bearer Authentication" },
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "MongoDB" },
      { name: "Mongoose" },
      { name: "PHP" },
    ],
  },
  {
    id: "cloud-data",
    title: "Cloud, Data & Integrations",
    description:
      "Cloud services, local persistence, authentication, and real-time data used in connected applications.",
    skills: [
      { name: "Firebase Auth", featured: true },
      { name: "Cloud Firestore" },
      { name: "Firebase Cloud Messaging" },
      { name: "Supabase" },
      { name: "Supabase Storage" },
      { name: "SQLite" },
      { name: "SharedPreferences" },
      { name: "Socket.IO" },
    ],
  },
  {
    id: "payments-maps-media",
    title: "Payments, Maps & Media",
    description:
      "Product integrations spanning commerce, location, secure media, and document workflows.",
    skills: [
      { name: "Stripe", featured: true },
      { name: "Apple In-App Purchase" },
      { name: "StoreKit" },
      { name: "Square" },
      { name: "Google Maps", featured: true },
      { name: "FlutterMap" },
      { name: "GPS Tracking" },
      { name: "VdoCipher" },
      { name: "HLS" },
      { name: "PDF Workflows" },
      { name: "File Upload / Download" },
    ],
  },
  {
    id: "delivery-tooling",
    title: "Delivery & Tooling",
    description:
      "Production delivery and infrastructure exposure supporting release, testing, and media operations.",
    skills: [
      { name: "Google Play Console", featured: true },
      { name: "App Store Connect", featured: true },
      { name: "Git" },
      { name: "GitHub" },
      { name: "Firebase Hosting" },
      { name: "Hetzner" },
      { name: "FFmpeg" },
      { name: "k6 Load Testing" },
    ],
  },
];
