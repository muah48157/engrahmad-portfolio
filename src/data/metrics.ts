export type ProofMetric = {
  id: string;
  value: string;
  label: string;
  detail: string;
};

export const proofMetrics: ProofMetric[] = [
  {
    id: "downloads",
    value: "1K+",
    label: "Google Play Downloads",
    detail: "Over 1,000 production downloads for live fleet application U-Track Lite.",
  },
  {
    id: "performance",
    value: "~40%",
    label: "Load-Time Improvement",
    detail: "Delivered through local SQLite caching, adaptive polling, and data pipeline optimizations.",
  },
  {
    id: "releases",
    value: "Android & iOS",
    label: "Store Releases",
    detail: "Dual-ecosystem delivery across Google Play Console and Apple App Store Connect.",
  },
  {
    id: "leadership",
    value: "4-Member",
    label: "Team Leadership",
    detail: "Led engineering team delivering the mobile client and custom APIs for KAIMS.",
  },
];
