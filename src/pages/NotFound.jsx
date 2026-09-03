import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Home, ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <section className="flex min-h-screen items-center justify-center overflow-hidden bg-luxe-charcoal px-6 text-center">
      <div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="overline mb-6 text-luxe-gold"
        >
          Page not found
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-[7rem] leading-none text-white md:text-[12rem]"
        >
          4<span className="text-luxe-gold">0</span>4
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mx-auto mt-4 max-w-md text-white/70"
        >
          This room seems to be under renovation. Let's guide you back to somewhere beautiful.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          <Link to="/" data-testid="notfound-home-btn" className="btn-primary bg-luxe-gold hover:bg-white hover:text-luxe-ink">
            <Home className="h-4 w-4" /> Back Home
          </Link>
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 border border-white/40 px-8 py-4 text-sm font-medium uppercase tracking-[0.15em] text-white transition-colors hover:bg-white hover:text-luxe-ink"
          >
            View Portfolio <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
