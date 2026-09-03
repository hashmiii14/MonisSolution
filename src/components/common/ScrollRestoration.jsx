import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Resets scroll position to top on every route change.
export default function ScrollRestoration() {
  const { pathname } = useLocation();
  useEffect(() => {
    if (window.__lenis) window.__lenis.scrollTo(0, { immediate: true });
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}
