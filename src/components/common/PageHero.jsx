import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

// Interior page hero banner with breadcrumb.
export default function PageHero({ overline, title, subtitle, image, crumbs = [] }) {
  return (
    <section className="relative flex min-h-[52vh] items-end overflow-hidden pt-28 md:min-h-[60vh]">
      <div className="absolute inset-0">
        <motion.img
          src={image}
          alt={title}
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-luxe-ink/80 via-luxe-ink/30 to-luxe-ink/20" />
      </div>

      <div className="luxe-container relative z-10 pb-14 md:pb-20">
        <motion.nav
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-6 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-white/70"
          data-testid="breadcrumb"
        >
          <Link to="/" className="transition-colors hover:text-luxe-gold">Home</Link>
          {crumbs.map((c, i) => (
            <span key={i} className="flex items-center gap-2">
              <ChevronRight className="h-3 w-3" />
              {c.to ? (
                <Link to={c.to} className="transition-colors hover:text-luxe-gold">{c.label}</Link>
              ) : (
                <span className="text-luxe-gold">{c.label}</span>
              )}
            </span>
          ))}
        </motion.nav>

        {overline && (
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="overline mb-4"
          >
            {overline}
          </motion.p>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.8 }}
          className="max-w-4xl font-display text-4xl leading-[1.05] tracking-tight text-white md:text-6xl"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-5 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
