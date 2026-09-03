import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

// Image lightbox with prev/next navigation.
export default function Lightbox({ images = [], index, onClose, onNav }) {
  const open = index !== null && index !== undefined;

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNav(1);
      if (e.key === "ArrowLeft") onNav(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose, onNav]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          data-testid="lightbox"
          className="fixed inset-0 z-[9500] flex items-center justify-center bg-luxe-ink/95 p-4 md:p-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <button
            aria-label="Close lightbox"
            data-testid="lightbox-close-btn"
            onClick={onClose}
            className="absolute right-5 top-5 text-white/70 transition-colors hover:text-white"
          >
            <X className="h-7 w-7" />
          </button>
          <button
            aria-label="Previous image"
            data-testid="lightbox-prev-btn"
            onClick={(e) => {
              e.stopPropagation();
              onNav(-1);
            }}
            className="absolute left-4 md:left-8 text-white/60 transition-colors hover:text-luxe-gold"
          >
            <ChevronLeft className="h-9 w-9" strokeWidth={1} />
          </button>
          <motion.img
            key={index}
            src={images[index]}
            alt="Gallery"
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="max-h-[85vh] max-w-full object-contain"
          />
          <button
            aria-label="Next image"
            data-testid="lightbox-next-btn"
            onClick={(e) => {
              e.stopPropagation();
              onNav(1);
            }}
            className="absolute right-4 md:right-8 text-white/60 transition-colors hover:text-luxe-gold"
          >
            <ChevronRight className="h-9 w-9" strokeWidth={1} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
