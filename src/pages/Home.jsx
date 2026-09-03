import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import Hero from "@/components/home/Hero";
import Marquee from "@/components/common/Marquee";
import SectionHeading from "@/components/common/SectionHeading";
import Reveal, { Stagger, StaggerItem } from "@/components/common/Reveal";
import Counter from "@/components/common/Counter";
import ProjectCard from "@/components/common/ProjectCard";
import BeforeAfter from "@/components/home/BeforeAfter";
import TestimonialSlider from "@/components/home/TestimonialSlider";
import {
  SERVICES,
  PROJECTS,
  STATS,
  PROCESS,
  WHY,
  CLIENT_LOGOS,
  TESTIMONIALS,
  IMAGES,
} from "@/data/content";

export default function Home() {
  const featuredServices = SERVICES.slice(0, 5);
  const featuredProjects = PROJECTS.slice(0, 6);
  const instaGrid = [IMAGES.studio1, IMAGES.studio2, IMAGES.studio3, IMAGES.studio4, IMAGES.story, IMAGES.storyAlt];

  return (
    <div>
      <Hero />

      {/* Editorial marquee */}
      <section className="border-y border-luxe-border bg-luxe-cream">
        <Marquee words={["Residential", "Hospitality", "Bespoke", "Commercial", "Villa", "Timeless"]} />
      </section>

      {/* Featured Services — bento */}
      <section className="luxe-container py-24 md:py-32" data-testid="featured-services">
        <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            overline="What We Do"
            title="A full-service studio for every space you inhabit."
          />
          <Reveal variant="fade" delay={0.2}>
            <Link to="/services" className="btn-outline group whitespace-nowrap">
              All Services
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>

        <Stagger className="grid grid-cols-1 gap-6 md:grid-cols-6 md:auto-rows-[300px]">
          {featuredServices.map((s, i) => {
            const span =
              i === 0 ? "md:col-span-4 md:row-span-1" : i === 1 ? "md:col-span-2" : "md:col-span-2";
            return (
              <StaggerItem key={s.slug} className={span}>
                <Link
                  to="/services"
                  data-testid={`home-service-${s.slug}`}
                  className="group relative flex h-full min-h-[280px] flex-col justify-end overflow-hidden"
                >
                  <img
                    src={s.image}
                    alt={s.title}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-luxe group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-luxe-ink/85 via-luxe-ink/20 to-transparent" />
                  <div className="relative z-10 p-7">
                    <h3 className="font-display text-2xl text-white md:text-3xl">{s.title}</h3>
                    <p className="mt-2 max-w-md text-sm text-white/75">{s.excerpt}</p>
                    <span className="mt-4 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-luxe-gold">
                      Explore <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              </StaggerItem>
            );
          })}
        </Stagger>
      </section>

      {/* Company Story — numbered manifesto */}
      <section className="bg-luxe-cream py-24 md:py-32" data-testid="company-story">
        <div className="luxe-container grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
          <Reveal variant="left" className="relative">
            <div className="relative overflow-hidden">
              <img src={IMAGES.story} alt="Our studio" loading="lazy" className="w-full object-cover" />
            </div>
            <div className="absolute -bottom-8 -right-4 hidden w-52 bg-luxe-charcoal p-7 text-white md:block">
              <p className="font-display text-4xl text-luxe-gold">18</p>
              <p className="mt-1 text-sm text-white/70">years crafting timeless interiors</p>
            </div>
          </Reveal>

          <div>
            <SectionHeading
              overline="Our Story"
              title="Design that is felt before it is seen."
              className="mb-10"
            />
            <div className="space-y-8">
              {[
                {
                  n: "01",
                  t: "A studio, not a factory",
                  d: "Founded with a vision for refined spatial elegance, Monis Solution was built on the belief that a home should be authored — never assembled from a catalogue.",
                },
                {
                  n: "02",
                  t: "Craft above all",
                  d: "We partner with master craftsmen, stone artisans and ateliers across India, commissioning bespoke pieces made to outlast trends and generations.",
                },
                {
                  n: "03",
                  t: "Your life, distilled",
                  d: "Every scheme begins with how you actually live, gather and rest — then elevates it into something quietly extraordinary.",
                },
              ].map((c) => (
                <Reveal key={c.n} className="relative flex gap-6">
                  <span className="font-display text-5xl leading-none text-luxe-ink/10">{c.n}</span>
                  <div className="pt-1">
                    <h3 className="font-display text-xl text-luxe-ink">{c.t}</h3>
                    <p className="mt-2 leading-relaxed text-luxe-soft">{c.d}</p>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal variant="fade" delay={0.2}>
              <Link to="/about" className="btn-primary group mt-10">
                Our Full Story
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-luxe-charcoal py-20 md:py-24" data-testid="stats">
        <div className="luxe-container grid grid-cols-2 gap-10 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.1} className="text-center md:text-left">
              <p className="font-display text-5xl text-luxe-gold md:text-6xl">
                <Counter value={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-3 text-sm uppercase tracking-[0.15em] text-white/60">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Featured Projects */}
      <section className="luxe-container py-24 md:py-32" data-testid="featured-projects">
        <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading overline="Selected Work" title="A portfolio of quietly bold spaces." />
          <Reveal variant="fade" delay={0.2}>
            <Link to="/portfolio" className="btn-outline group whitespace-nowrap">
              View Portfolio
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
        <div className="columns-1 gap-6 sm:columns-2 lg:columns-3 [&>*]:mb-6">
          {featuredProjects.map((p) => (
            <div key={p.slug} className="break-inside-avoid">
              <ProjectCard project={p} />
            </div>
          ))}
        </div>
      </section>

      {/* Our Process */}
      <section className="bg-luxe-cream py-24 md:py-32" data-testid="process">
        <div className="luxe-container">
          <SectionHeading
            overline="How We Work"
            title="A calm, four-step journey from brief to handover."
            className="mb-16"
          />
          <div className="grid grid-cols-1 gap-px overflow-hidden border border-luxe-border bg-luxe-border md:grid-cols-2 lg:grid-cols-4">
            {PROCESS.map((p, i) => (
              <Reveal
                key={p.step}
                delay={i * 0.1}
                className="group bg-luxe-bg p-8 transition-colors duration-500 hover:bg-white lg:p-10"
              >
                <p className="font-display text-6xl text-luxe-ink/10 transition-colors duration-500 group-hover:text-luxe-gold/40">
                  {p.step}
                </p>
                <h3 className="mt-6 font-display text-xl text-luxe-ink">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-luxe-soft">{p.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us + Before/After */}
      <section className="luxe-container py-24 md:py-32" data-testid="why-choose-us">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <div>
            <SectionHeading
              overline="Why Monis Solution"
              title="Reasons discerning clients choose us."
              className="mb-12"
            />
            <Stagger className="space-y-8">
              {WHY.map((w) => (
                <StaggerItem key={w.title} className="flex gap-5 border-b border-luxe-border pb-8">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-luxe-gold/15 text-luxe-gold">
                    <Check className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl text-luxe-ink">{w.title}</h3>
                    <p className="mt-2 leading-relaxed text-luxe-soft">{w.text}</p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
          <Reveal variant="right">
            <p className="overline mb-4">Before / After</p>
            <h3 className="mb-6 font-display text-2xl text-luxe-ink md:text-3xl">
              Drag to reveal the transformation.
            </h3>
            <BeforeAfter before={IMAGES.beforeImg} after={IMAGES.afterImg} />
          </Reveal>
        </div>
      </section>

      {/* Client logos */}
      <section className="border-y border-luxe-border py-16" data-testid="client-logos">
        <div className="luxe-container">
          <p className="overline mb-10 text-center">Trusted by discerning clients & brands</p>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-8">
            {CLIENT_LOGOS.map((c, i) => (
              <Reveal
                key={c}
                delay={i * 0.05}
                variant="fade"
                className="flex items-center justify-center text-center font-display text-lg text-luxe-muted transition-colors hover:text-luxe-ink"
              >
                {c}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Studio feature — premium static section */}
      <section className="relative flex min-h-[70vh] items-center overflow-hidden" data-testid="studio-feature">
        <img
          src={IMAGES.video}
          alt="Inside the Monis Solution design studio"
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-luxe-ink/85 via-luxe-ink/55 to-luxe-ink/20" />
        <div className="luxe-container relative z-10">
          <Reveal className="max-w-xl">
            <p className="overline mb-5 text-luxe-gold">Inside The Studio</p>
            <h2 className="font-display text-3xl leading-tight text-white md:text-5xl">
              Where craft, light and material become a home.
            </h2>
            <p className="mt-5 leading-relaxed text-white/75">
              Step behind the scenes of our Gurugram design atelier — a space where mood boards, marble
              samples and hand-drawn plans come together into interiors made to last generations.
            </p>
            <Link to="/about" data-testid="studio-feature-cta" className="btn-primary group mt-8 bg-luxe-gold hover:bg-white hover:text-luxe-ink">
              Discover Our Studio
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Testimonials */}
      <section className="luxe-container py-24 md:py-32" data-testid="home-testimonials">
        <SectionHeading
          overline="Kind Words"
          title="Clients who now call our work home."
          align="center"
          className="mb-16"
        />
        <TestimonialSlider testimonials={TESTIMONIALS.slice(0, 6)} />
      </section>

      {/* Instagram gallery */}
      <section className="pb-24 md:pb-32" data-testid="instagram-gallery">
        <div className="luxe-container mb-10 text-center">
          <p className="overline mb-3">@monissolution</p>
          <h2 className="font-display text-3xl text-luxe-ink md:text-4xl">Follow the everyday details</h2>
        </div>
        <div className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-6">
          {instaGrid.map((src, i) => (
            <a key={i} href="#" aria-label="Instagram post" className="group relative aspect-square overflow-hidden">
              <img
                src={src}
                alt="Instagram"
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-luxe-gold/0 transition-colors duration-500 group-hover:bg-luxe-gold/20" />
            </a>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="relative overflow-hidden bg-luxe-charcoal py-24 md:py-32" data-testid="contact-cta">
        <div className="luxe-container relative z-10 text-center">
          <Reveal>
            <p className="overline mb-5 text-luxe-gold">Let's Begin</p>
            <h2 className="mx-auto max-w-3xl font-display text-4xl leading-tight text-white md:text-6xl">
              Ready to create a space you'll never want to leave?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-white/70">
              Book a complimentary discovery call and let's explore what's possible for your home or business.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link to="/contact" data-testid="cta-start-project" className="btn-primary bg-luxe-gold hover:bg-white hover:text-luxe-ink">
                Start Your Project
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/portfolio"
                className="inline-flex items-center justify-center gap-2 border border-white/40 px-8 py-4 text-sm font-medium uppercase tracking-[0.15em] text-white transition-colors hover:bg-white hover:text-luxe-ink"
              >
                Browse Work
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
