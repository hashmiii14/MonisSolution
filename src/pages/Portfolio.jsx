import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageHero from "@/components/common/PageHero";
import ProjectCard from "@/components/common/ProjectCard";
import { PROJECTS, PROJECT_CATEGORIES, IMAGES } from "@/data/content";

export default function Portfolio() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === active);

  return (
    <div>
      <PageHero
        overline="Selected Work"
        title="A portfolio of quietly bold spaces."
        subtitle="Residential, commercial and hospitality projects across New Delhi NCR and beyond — each authored around its client."
        image={IMAGES.heroSecondary}
        crumbs={[{ label: "Portfolio" }]}
      />

      <section className="luxe-container py-16 md:py-24">
        <div className="mb-12 flex flex-wrap gap-3" data-testid="portfolio-filters">
          {PROJECT_CATEGORIES.map((c) => (
            <button
              key={c}
              data-testid={`filter-${c.toLowerCase().replace(/\s+/g, "-")}`}
              onClick={() => setActive(c)}
              className={`px-5 py-2.5 text-sm font-medium uppercase tracking-[0.12em] transition-colors duration-300 ${
                active === c
                  ? "bg-luxe-charcoal text-white"
                  : "border border-luxe-border text-luxe-soft hover:border-luxe-ink hover:text-luxe-ink"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <motion.div layout className="columns-1 gap-6 sm:columns-2 lg:columns-3 [&>*]:mb-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((p) => (
              <motion.div
                key={p.slug}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="break-inside-avoid"
              >
                <ProjectCard project={p} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <p className="py-20 text-center text-luxe-muted">No projects in this category yet.</p>
        )}
      </section>
    </div>
  );
}
