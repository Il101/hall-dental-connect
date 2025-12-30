/**
 * Simple analytics tracking utility
 * Replace the implementation with your analytics provider (GA, Plausible, etc.)
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
 * Currently logs to console - replace with your analytics provider
 */
export function track(eventName: EventName, props?: EventProps): void {
  // Log to console for development
  console.log(`[Analytics] ${eventName}`, props || {});

  // TODO: Replace with your analytics provider
  // Example for Google Analytics 4:
  // if (typeof window !== 'undefined' && window.gtag) {
  //   window.gtag('event', eventName, props);
  // }

  // Example for Plausible:
  // if (typeof window !== 'undefined' && window.plausible) {
  //   window.plausible(eventName, { props });
  // }
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
