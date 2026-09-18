export const INTRO_KEY = "castell-intro-shown";

export function prefersReducedMotion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function shouldSkipIntro() {
  if (typeof window === "undefined") return false;
  return Boolean(sessionStorage.getItem(INTRO_KEY)) || prefersReducedMotion();
}

export function markIntroShown() {
  if (typeof window === "undefined") return;
  sessionStorage.setItem(INTRO_KEY, "1");
}
