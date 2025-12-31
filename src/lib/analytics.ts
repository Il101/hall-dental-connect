/**
 * Analytics tracking utilities
 */

type EventName =
  | "cta_click"
  | "form_submit_success"
  | "form_submit_error"
  | "phone_click"
  | "service_ask_click"
  | "faq_expand"
  | "map_click";

interface EventProps {
  [key: string]: string | number | boolean | undefined;
}

/**
 * Track an analytics event
 */
export function track(eventName: EventName, props?: EventProps): void {
  // Log to console for development
  if (import.meta.env.DEV) {
    console.log(`[Analytics] ${eventName}`, props || {});
  }

  // Integrations can be added here (GA, Plausible, etc.)
}

/**
 * Track a CTA button click
 */
export function trackCtaClick(location: string, label: string): void {
  track("cta_click", { location, label });
}

/**
 * Track phone link click
 */
export function trackPhoneClick(location: string): void {
  track("phone_click", { location });
}

/**
 * Track form submission
 */
export function trackFormSubmit(success: boolean, service?: string): void {
  if (success) {
    track("form_submit_success", { service });
  } else {
    track("form_submit_error", { service });
  }
}

/**
 * Track service inquiry click
 */
export function trackServiceAsk(serviceId: string): void {
  track("service_ask_click", { service: serviceId });
}
