import { Linkedin, Instagram, Twitter, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import PageHero from "@/components/common/PageHero";
import Reveal, { Stagger, StaggerItem } from "@/components/common/Reveal";
import { TEAM, IMAGES } from "@/data/content";

export default function Team() {
  return (
    <div>
      <PageHero
        overline="Our People"
        title="The minds behind the spaces."
        subtitle="A close-knit team of designers, architects and makers united by an obsession with craft."
        image={IMAGES.studio4}
        crumbs={[{ label: "Team" }]}
      />

      <section className="luxe-container py-24 md:py-32">
        <Stagger className="mx-auto grid max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {TEAM.map((m) => (
            <StaggerItem key={m.name}>
              <div className="group" data-testid={`team-card-${m.name.split(" ")[0].toLowerCase()}`}>
                <div className="relative overflow-hidden">
                  <img
                    src={m.image}
                    alt={m.name}
                    loading="lazy"
                    className="aspect-[3/4] w-full object-cover transition-transform duration-700 ease-luxe group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex items-end bg-gradient-to-t from-luxe-ink/80 via-transparent to-transparent p-5 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <div className="flex gap-3">
                      {[Linkedin, Instagram, Twitter].map((Icon, i) => (
                        <a
                          key={i}
                          href="#"
                          aria-label="Social link"
                          className="flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-luxe-ink transition-colors hover:bg-luxe-gold hover:text-white"
                        >
                          <Icon className="h-4 w-4" />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="mt-5">
                  <div className="flex items-baseline justify-between">
                    <h3 className="font-display text-xl text-luxe-ink">{m.name}</h3>
                    <span className="text-xs uppercase tracking-[0.15em] text-luxe-muted">{m.experience}</span>
                  </div>
                  <p className="mt-1 text-sm text-luxe-gold">{m.role}</p>
                  <p className="mt-3 text-sm leading-relaxed text-luxe-soft">{m.bio}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {m.skills.map((s) => (
                      <span key={s} className="border border-luxe-border px-3 py-1 text-xs text-luxe-soft">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <section className="bg-luxe-cream py-24 text-center">
        <div className="luxe-container">
          <Reveal>
            <p className="overline mb-4">Join Us</p>
            <h2 className="mx-auto max-w-2xl font-display text-3xl text-luxe-ink md:text-5xl">
              We're always looking for exceptional talent.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-luxe-soft">
              If you live for proportion, material and the joy of a beautifully resolved detail, we'd love to hear from you.
            </p>
            <Link to="/contact" className="btn-primary group mt-8">
              Get in Touch <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
