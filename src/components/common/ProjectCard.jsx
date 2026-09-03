import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

// Portfolio project card with image hover reveal.
export default function ProjectCard({ project, className = "" }) {
  return (
    <Link
      to={`/portfolio/${project.slug}`}
      data-testid={`project-card-${project.slug}`}
      className={`group relative block overflow-hidden bg-luxe-cream ${className}`}
    >
      <div className="relative overflow-hidden">
        <img
          src={project.cover}
          alt={project.title}
          loading="lazy"
          className={`w-full object-cover transition-transform duration-700 ease-luxe group-hover:scale-[1.06] ${
            project.tall ? "aspect-[3/4]" : "aspect-[4/3]"
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-luxe-ink/70 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        <div className="absolute right-5 top-5 flex h-11 w-11 translate-y-3 items-center justify-center rounded-full bg-white/90 text-luxe-ink opacity-0 backdrop-blur transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          <ArrowUpRight className="h-5 w-5" strokeWidth={1.5} />
        </div>
      </div>
      <div className="flex items-end justify-between gap-4 px-1 py-5">
        <div>
          <p className="overline mb-1.5">{project.category}</p>
          <h3 className="font-display text-xl leading-snug text-luxe-ink md:text-2xl">
            {project.title}
          </h3>
        </div>
        <span className="shrink-0 pb-1 text-sm text-luxe-muted">{project.location}</span>
      </div>
    </Link>
  );
}
