import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ArrowLeft, ArrowRight } from "lucide-react";

// Animated testimonial slider.
export default function TestimonialSlider({ testimonials = [], dark = false }) {
  const [[index, dir], setState] = useState([0, 0]);
  const t = testimonials[index];

  const paginate = (d) => {
    const next = (index + d + testimonials.length) % testimonials.length;
    setState([next, d]);
  };

  return (
    <div className="relative mx-auto max-w-3xl text-center" data-testid="testimonial-slider">
      <Quote className={`mx-auto h-12 w-12 ${dark ? "text-luxe-gold" : "text-luxe-gold"}`} strokeWidth={1} />
      <div className="relative mt-8 min-h-[220px] md:min-h-[200px]">
        <AnimatePresence mode="wait" custom={dir}>
          <motion.div
            key={index}
            initial={{ opacity: 0, x: dir >= 0 ? 40 : -40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: dir >= 0 ? -40 : 40 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mb-6 flex justify-center gap-1">
              {Array.from({ length: t.rating }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-luxe-gold text-luxe-gold" />
              ))}
            </div>
            <p
              className={`font-display text-2xl leading-relaxed md:text-3xl ${
                dark ? "text-white" : "text-luxe-ink"
              }`}
            >
              “{t.text}”
            </p>
            <div className="mt-8">
              <p className={`font-medium ${dark ? "text-white" : "text-luxe-ink"}`}>{t.name}</p>
              <p className={`text-sm ${dark ? "text-white/60" : "text-luxe-muted"}`}>{t.location}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-10 flex items-center justify-center gap-4">
        <button
          data-testid="testimonial-prev"
          aria-label="Previous testimonial"
          onClick={() => paginate(-1)}
          className={`flex h-12 w-12 items-center justify-center rounded-full border transition-colors ${
            dark
              ? "border-white/30 text-white hover:bg-white hover:text-luxe-ink"
              : "border-luxe-ink/30 text-luxe-ink hover:bg-luxe-ink hover:text-white"
          }`}
        >
          <ArrowLeft className="h-5 w-5" />
        </button>
        <span className={`text-sm tabular-nums ${dark ? "text-white/60" : "text-luxe-muted"}`}>
          {String(index + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}
        </span>
        <button
          data-testid="testimonial-next"
          aria-label="Next testimonial"
          onClick={() => paginate(1)}
          className={`flex h-12 w-12 items-center justify-center rounded-full border transition-colors ${
            dark
              ? "border-white/30 text-white hover:bg-white hover:text-luxe-ink"
              : "border-luxe-ink/30 text-luxe-ink hover:bg-luxe-ink hover:text-white"
          }`}
        >
          <ArrowRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
