import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie } from "lucide-react";

export default function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("luxe_cookie_consent")) {
      const t = setTimeout(() => setShow(true), 3500);
      return () => clearTimeout(t);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("luxe_cookie_consent", "accepted");
    setShow(false);
  };
  const decline = () => {
    localStorage.setItem("luxe_cookie_consent", "declined");
    setShow(false);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          data-testid="cookie-banner"
          initial={{ y: 120, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 120, opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-4 left-1/2 z-[8000] w-[92%] max-w-4xl -translate-x-1/2 border border-luxe-border bg-white/90 p-5 shadow-xl backdrop-blur-xl md:p-6"
        >
          <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex items-start gap-3">
              <Cookie className="mt-0.5 h-5 w-5 shrink-0 text-luxe-gold" strokeWidth={1.5} />
              <p className="text-sm text-luxe-soft">
                We use cookies to craft a refined browsing experience and understand how our studio is discovered.
              </p>
            </div>
            <div className="flex shrink-0 gap-3">
              <button
                data-testid="cookie-decline-btn"
                onClick={decline}
                className="border border-luxe-ink px-5 py-2.5 text-xs font-medium uppercase tracking-[0.15em] text-luxe-ink transition-colors hover:bg-luxe-cream"
              >
                Decline
              </button>
              <button
                data-testid="cookie-accept-btn"
                onClick={accept}
                className="bg-luxe-charcoal px-5 py-2.5 text-xs font-medium uppercase tracking-[0.15em] text-white transition-colors hover:bg-luxe-gold"
              >
                Accept
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
