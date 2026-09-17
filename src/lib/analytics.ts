/**
 * Safe client-side analytics event dispatcher.
 * Supports Google Analytics (window.gtag), Vercel Analytics (window.va),
 * and development console logging.
 *
 * Fails safely and silently if no analytics provider is configured
 * or if blocked by client privacy extensions.
 */

export type AnalyticsEventName =
  | "resume_download"
  | "linkedin_click"
  | "github_click"
  | "email_click"
  | "project_open"
  | "case_study_open"
  | "google_play_click"
  | "app_store_click";

export type AnalyticsEventParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    gtag?: (
      command: "event",
      action: string,
      params?: Record<string, unknown>,
    ) => void;
    va?: (
      command: "event",
      params: { name: string; data?: Record<string, unknown> },
    ) => void;
  }
}

export function trackEvent(
  eventName: AnalyticsEventName,
  params?: AnalyticsEventParams,
): void {
  if (typeof window === "undefined") return;

  try {
    // 1. Google Analytics (gtag.js)
    if (typeof window.gtag === "function") {
      window.gtag("event", eventName, params);
    }

    // 2. Vercel Web Analytics (va.js)
    if (typeof window.va === "function") {
      window.va("event", { name: eventName, data: params });
    }

    // 3. Development logging fallback
    if (process.env.NODE_ENV === "development") {
      console.debug(`[Analytics Event: ${eventName}]`, params ?? {});
    }
  } catch {
    // Fail silently to guarantee zero interference with application execution
  }
}
