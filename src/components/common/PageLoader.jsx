import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Elegant full-screen page loader shown on first load.
export default function PageLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 2100);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          data-testid="page-loader"
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-luxe-bg"
          initial={{ opacity: 1 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
        >
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <p className="overline mb-4">Interior Design Studio</p>
            <h1 className="font-display text-4xl md:text-6xl tracking-tight text-luxe-ink">
              LUXE<span className="text-luxe-gold">.</span>
            </h1>
          </motion.div>
          <div className="mt-8 h-[2px] w-40 overflow-hidden bg-luxe-border">
            <motion.div
              className="h-full bg-luxe-gold"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.8, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
