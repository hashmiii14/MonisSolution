import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, Calendar, Wallet, Clock, User, ArrowRight, ArrowLeft } from "lucide-react";
import PageHero from "@/components/common/PageHero";
import Reveal from "@/components/common/Reveal";
import Lightbox from "@/components/common/Lightbox";
import ProjectCard from "@/components/common/ProjectCard";
import SectionHeading from "@/components/common/SectionHeading";
import NotFound from "@/pages/NotFound";
import { PROJECTS } from "@/data/content";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = PROJECTS.find((p) => p.slug === slug);
  const [lightIndex, setLightIndex] = useState(null);

  if (!project) return <NotFound />;

  const related = PROJECTS.filter((p) => p.slug !== slug && p.category === project.category).slice(0, 3);
  const relatedFinal = related.length ? related : PROJECTS.filter((p) => p.slug !== slug).slice(0, 3);

  const meta = [
    { icon: User, label: "Client", value: project.client },
    { icon: MapPin, label: "Location", value: project.location },
    { icon: Wallet, label: "Budget", value: project.budget },
    { icon: Clock, label: "Duration", value: project.duration },
    { icon: Calendar, label: "Year", value: project.year },
  ];

  const navImages = (dir) =>
    setLightIndex((i) => (i + dir + project.gallery.length) % project.gallery.length);

  return (
    <div>
      <PageHero
        overline={project.style}
        title={project.title}
        subtitle={project.overview}
        image={project.cover}
        crumbs={[{ label: "Portfolio", to: "/portfolio" }, { label: project.title }]}
      />

      {/* Meta bar */}
      <section className="border-b border-luxe-border bg-luxe-cream">
        <div className="luxe-container grid grid-cols-2 gap-8 py-10 md:grid-cols-5">
          {meta.map((m) => (
            <div key={m.label}>
              <m.icon className="h-5 w-5 text-luxe-gold" strokeWidth={1.4} />
              <p className="mt-3 text-xs uppercase tracking-[0.15em] text-luxe-muted">{m.label}</p>
              <p className="mt-1 font-display text-lg text-luxe-ink">{m.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Overview + challenge + solution */}
      <section className="luxe-container grid grid-cols-1 gap-14 py-24 md:py-32 lg:grid-cols-3">
        <Reveal className="lg:col-span-1">
          <p className="overline mb-4">Overview</p>
          <h2 className="font-display text-2xl leading-snug text-luxe-ink md:text-3xl">
            {project.title}, {project.location.split(",").slice(-1)[0].trim()}
          </h2>
        </Reveal>
        <div className="space-y-10 lg:col-span-2">
          <Reveal>
            <h3 className="font-display text-xl text-luxe-gold">The Challenge</h3>
            <p className="mt-3 leading-relaxed text-luxe-soft">{project.challenge}</p>
          </Reveal>
          <Reveal>
            <h3 className="font-display text-xl text-luxe-gold">The Solution</h3>
            <p className="mt-3 leading-relaxed text-luxe-soft">{project.solution}</p>
          </Reveal>
          <Reveal>
            <h3 className="font-display text-xl text-luxe-gold">Materials & Palette</h3>
            <div className="mt-4 flex flex-wrap gap-3">
              {project.materials.map((m) => (
                <span key={m} className="border border-luxe-border px-4 py-2 text-sm text-luxe-soft">{m}</span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Gallery */}
      <section className="luxe-container pb-24 md:pb-32" data-testid="project-gallery">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {project.gallery.map((src, i) => (
            <Reveal
              key={i}
              variant="scale"
              delay={i * 0.08}
              className={`overflow-hidden ${i === 0 ? "md:col-span-3" : ""}`}
            >
              <button
                onClick={() => setLightIndex(i)}
                data-testid={`gallery-image-${i}`}
                className="group block w-full cursor-target"
                aria-label="Open image"
              >
                <img
                  src={src}
                  alt={`${project.title} ${i + 1}`}
                  loading="lazy"
                  className={`w-full object-cover transition-transform duration-700 group-hover:scale-105 ${
                    i === 0 ? "aspect-[16/9]" : "aspect-[4/3]"
                  }`}
                />
              </button>
            </Reveal>
          ))}
        </div>
      </section>

      <Lightbox images={project.gallery} index={lightIndex} onClose={() => setLightIndex(null)} onNav={navImages} />

      {/* Related */}
      <section className="bg-luxe-cream py-24 md:py-32">
        <div className="luxe-container">
          <div className="mb-14 flex items-end justify-between">
            <SectionHeading overline="More Work" title="Related projects." />
            <Link to="/portfolio" className="hidden text-sm uppercase tracking-[0.15em] text-luxe-ink link-underline md:inline-flex">
              All Projects
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {relatedFinal.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
          <div className="mt-16 flex justify-between border-t border-luxe-border pt-8">
            <Link to="/portfolio" className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.15em] text-luxe-ink link-underline">
              <ArrowLeft className="h-4 w-4" /> Back to Portfolio
            </Link>
            <Link to="/contact" className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.15em] text-luxe-gold link-underline">
              Start a Project <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
