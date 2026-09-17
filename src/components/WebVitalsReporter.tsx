"use client";

import { useReportWebVitals } from "next/web-vitals";

export default function WebVitalsReporter() {
  useReportWebVitals((metric) => {
    if (typeof window !== "undefined") {
      const w = window as unknown as {
        __webVitals?: Record<
          string,
          {
            value: number;
            rating: "good" | "needs-improvement" | "poor";
            delta: number;
            id: string;
          }
        >;
      };

      w.__webVitals = w.__webVitals || {};
      w.__webVitals[metric.name] = {
        value: metric.value,
        rating: metric.rating,
        delta: metric.delta,
        id: metric.id,
      };

      if (process.env.NODE_ENV === "development") {
        console.debug(
          `[Core Web Vitals: ${metric.name}]`,
          `${metric.value.toFixed(2)}${metric.name === "CLS" ? "" : "ms"}`,
          `(${metric.rating})`,
        );
      }
    }
  });

  return null;
}
