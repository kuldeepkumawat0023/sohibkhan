"use client";

import { useEffect, useLayoutEffect } from "react";

export function RouteScrollReset() {
  const useIsomorphicLayoutEffect =
    typeof window !== "undefined" ? useLayoutEffect : useEffect;

  useIsomorphicLayoutEffect(() => {
    // 1. Force manual scroll restoration so browsers do not auto-jump to previous scroll position on refresh
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    // 2. Clear any lingering hash from previous section clicks on refresh
    if (window.location.hash) {
      window.history.replaceState(
        null,
        "",
        window.location.pathname + window.location.search
      );
    }

    // 3. Instant hard reset to top (0, 0)
    const resetToTop = () => {
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    };

    // Immediate execution
    resetToTop();

    // 4. Multiple passes to defeat asynchronous Chromium & WebKit post-hydration restorations
    const rafId = requestAnimationFrame(() => {
      resetToTop();
    });

    const timeoutId1 = setTimeout(() => {
      resetToTop();
    }, 50);

    const timeoutId2 = setTimeout(() => {
      resetToTop();
    }, 150);

    // 5. Pre-save top position on page exit/refresh so the browser records (0, 0) before unload
    const handleBeforeUnload = () => {
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "manual";
      }
      resetToTop();
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(timeoutId1);
      clearTimeout(timeoutId2);
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  return null;
}
