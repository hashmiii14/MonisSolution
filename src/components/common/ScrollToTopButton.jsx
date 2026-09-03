import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function ScrollToTopButton() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toTop = () => {
    if (window.__lenis) window.__lenis.scrollTo(0, { duration: 1.2 });
    else window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          data-testid="scroll-to-top-btn"
          aria-label="Scroll to top"
          onClick={toTop}
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.6 }}
          className="fixed bottom-6 left-6 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-luxe-charcoal text-white shadow-lg transition-colors duration-300 hover:bg-luxe-gold"
        >
          <ArrowUp className="h-5 w-5" strokeWidth={1.5} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
