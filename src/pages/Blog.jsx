import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Clock } from "lucide-react";
import PageHero from "@/components/common/PageHero";
import { BLOG_POSTS, BLOG_CATEGORIES, IMAGES } from "@/data/content";

export default function Blog() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? BLOG_POSTS : BLOG_POSTS.filter((p) => p.category === active);
  const featured = BLOG_POSTS[0];

  return (
    <div>
      <PageHero
        overline="The LUXE Journal"
        title="Notes on design, material & living well."
        subtitle="Insights, guides and stories from our studio — written for those who care about how a space feels."
        image={IMAGES.story}
        crumbs={[{ label: "Journal" }]}
      />

      {/* Featured post */}
      <section className="luxe-container py-16 md:py-24">
        <Link
          to={`/blog/${featured.slug}`}
          data-testid="featured-blog-post"
          className="group grid grid-cols-1 items-center gap-10 lg:grid-cols-2"
        >
          <div className="relative overflow-hidden">
            <img
              src={featured.image}
              alt={featured.title}
              className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <div>
            <p className="overline mb-4">Featured · {featured.category}</p>
            <h2 className="font-display text-3xl leading-tight text-luxe-ink md:text-4xl">{featured.title}</h2>
            <p className="mt-4 leading-relaxed text-luxe-soft">{featured.excerpt}</p>
            <div className="mt-6 flex items-center gap-4 text-sm text-luxe-muted">
              <span>{featured.author}</span>
              <span>·</span>
              <span>{featured.date}</span>
              <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {featured.readTime}</span>
            </div>
            <span className="mt-6 inline-flex items-center gap-2 text-sm uppercase tracking-[0.15em] text-luxe-gold">
              Read Article <ArrowUpRight className="h-4 w-4" />
            </span>
          </div>
        </Link>
      </section>

      {/* Filters + grid */}
      <section className="luxe-container pb-24 md:pb-32">
        <div className="mb-12 flex flex-wrap gap-3" data-testid="blog-filters">
          {BLOG_CATEGORIES.map((c) => (
            <button
              key={c}
              data-testid={`blog-filter-${c.toLowerCase().replace(/\s+/g, "-")}`}
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

        <motion.div layout className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((p) => (
              <motion.div
                key={p.slug}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4 }}
              >
                <Link to={`/blog/${p.slug}`} data-testid={`blog-card-${p.slug}`} className="group block">
                  <div className="relative overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.title}
                      loading="lazy"
                      className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <span className="absolute left-4 top-4 bg-white/85 px-3 py-1 text-xs uppercase tracking-[0.1em] text-luxe-ink backdrop-blur">
                      {p.category}
                    </span>
                  </div>
                  <div className="mt-5">
                    <div className="flex items-center gap-3 text-xs text-luxe-muted">
                      <span>{p.date}</span>
                      <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {p.readTime}</span>
                    </div>
                    <h3 className="mt-3 font-display text-xl leading-snug text-luxe-ink transition-colors group-hover:text-luxe-gold">
                      {p.title}
                    </h3>
                    <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-luxe-soft">{p.excerpt}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>
    </div>
  );
}
