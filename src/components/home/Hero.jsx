import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ArrowDown } from "lucide-react";
import { IMAGES } from "@/data/content";

const LINES = ["Interiors that", "feel like a", "quiet luxury."];

const lineContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14, delayChildren: 0.4 } },
};
const lineVariant = {
  hidden: { y: "110%" },
  visible: { y: "0%", transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-end overflow-hidden pt-20" data-testid="hero">
      {/* High-performance GPU-composited background without scroll lag */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img
          src={IMAGES.heroPrimary}
          alt="Luxury interior design by Monis Solution Sector 44 Gurugram"
          fetchPriority="high"
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-luxe-ink via-luxe-ink/35 to-transparent" />
      </div>

      <div className="luxe-container relative z-10 w-full pb-16 md:pb-24">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="overline mb-6 text-luxe-gold"
        >
          Monis Solution — Sector 44, Gurugram · New Delhi NCR
        </motion.p>

        <motion.h1
          variants={lineContainer}
          initial="hidden"
          animate="visible"
          className="max-w-5xl font-display text-4xl leading-[1.02] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl"
        >
          {LINES.map((line, i) => (
            <span key={i} className="block overflow-hidden py-2.5 pr-6 -mr-6">
              <motion.span variants={lineVariant} className="block">
                {i === 2 ? (
                  <span>
                    quiet <span className="italic text-luxe-gold pr-3 inline-block">luxury</span>
                  </span>
                ) : (
                  line
                )}
              </motion.span>
            </span>
          ))}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="mt-8 max-w-xl text-base leading-relaxed text-white/80 md:text-lg"
        >
          We design timeless residential and commercial spaces where architecture, light and
          material meet — crafted around the way you truly live.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.8 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Link to="/services" data-testid="hero-primary-cta" className="btn-primary group">
            Explore Services
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          <Link
            to="/contact"
            data-testid="hero-secondary-cta"
            className="inline-flex items-center justify-center gap-2 border border-white/60 px-8 py-4 text-sm font-medium uppercase tracking-[0.15em] text-white transition-colors duration-300 hover:bg-white hover:text-luxe-ink"
          >
            Start a Project
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-8 right-6 z-10 hidden items-center gap-3 text-xs uppercase tracking-[0.2em] text-white/70 md:flex"
      >
        Scroll
        <motion.span animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.8 }}>
          <ArrowDown className="h-4 w-4" />
        </motion.span>
      </motion.div>
    </section>
  );
}
