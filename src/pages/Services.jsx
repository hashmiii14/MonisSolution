import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import PageHero from "@/components/common/PageHero";
import SectionHeading from "@/components/common/SectionHeading";
import Reveal from "@/components/common/Reveal";
import { SERVICES, PROCESS, IMAGES } from "@/data/content";

export default function Services() {
  return (
    <div>
      <PageHero
        overline="What We Offer"
        title="Full-service design, from concept to keys."
        subtitle="A single studio for every discipline your project demands — considered, coordinated and crafted."
        image={IMAGES.storyAlt}
        crumbs={[{ label: "Services" }]}
      />

      <section className="luxe-container py-14 md:py-20">
        <div className="space-y-16 md:space-y-20">
          {SERVICES.map((s, i) => (
            <div
              key={s.slug}
              id={s.slug}
              data-testid={`service-${s.slug}`}
              className={`grid grid-cols-1 items-center gap-12 lg:grid-cols-2 ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}
            >
              <Reveal variant={i % 2 === 0 ? "left" : "right"} className="relative overflow-hidden">
                <img src={s.image} alt={s.title} loading="lazy" className="aspect-[4/3] w-full object-cover" />
                <span className="absolute left-6 top-6 bg-white/85 px-4 py-1.5 font-display text-sm text-luxe-ink backdrop-blur">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </Reveal>

              <div>
                <p className="overline mb-3">Service {String(i + 1).padStart(2, "0")}</p>
                <h2 className="font-display text-3xl text-luxe-ink md:text-4xl">{s.title}</h2>
                <p className="mt-4 leading-relaxed text-luxe-soft">{s.excerpt}</p>

                <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
                  <div>
                    <p className="overline mb-4">What's Included</p>
                    <ul className="space-y-3">
                      {s.features.map((f) => (
                        <li key={f} className="flex items-center gap-3 text-sm text-luxe-soft">
                          <Check className="h-4 w-4 text-luxe-gold" /> {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="overline mb-4">Benefits</p>
                    <ul className="space-y-3">
                      {s.benefits.map((b) => (
                        <li key={b} className="flex items-start gap-3 text-sm text-luxe-soft">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-luxe-gold" /> {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <Link to="/contact" data-testid={`service-cta-${s.slug}`} className="btn-primary group mt-10">
                  Enquire About This Service
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="bg-luxe-cream py-14 md:py-20">
        <div className="luxe-container">
          <SectionHeading overline="Our Approach" title="Every service follows the same calm rhythm." align="center" className="mb-16" />
          <div className="grid grid-cols-1 gap-px overflow-hidden border border-luxe-border bg-luxe-border md:grid-cols-2 lg:grid-cols-4">
            {PROCESS.map((p) => (
              <div key={p.step} className="bg-luxe-bg p-8 lg:p-10">
                <p className="font-display text-6xl text-luxe-gold/40">{p.step}</p>
                <h3 className="mt-6 font-display text-xl text-luxe-ink">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-luxe-soft">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-luxe-charcoal py-24 text-center">
        <div className="luxe-container">
          <h2 className="mx-auto max-w-2xl font-display text-3xl text-white md:text-5xl">
            Not sure which service fits your project?
          </h2>
          <Link to="/contact" className="btn-primary bg-luxe-gold hover:bg-white hover:text-luxe-ink mt-8">
            Talk to a Designer <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
