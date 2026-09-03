import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, Check, MapPin, Phone, Clock, Mail, Sparkles, Layers } from "lucide-react";
import Hero from "@/components/home/Hero";
import Marquee from "@/components/common/Marquee";
import SectionHeading from "@/components/common/SectionHeading";
import Reveal, { Stagger, StaggerItem } from "@/components/common/Reveal";
import Counter from "@/components/common/Counter";
import TestimonialSlider from "@/components/home/TestimonialSlider";
import {
  SERVICES,
  STATS,
  PROCESS,
  WHY,
  CLIENT_LOGOS,
  TESTIMONIALS,
  IMAGES,
} from "@/data/content";

const MATERIALS = [
  {
    title: "Italian Statuario & Marble",
    tag: "Stone Architecture",
    desc: "Direct-sourced natural slabs from Carrara and Makrana with custom vein-matched bookmatching.",
    image: IMAGES.detail1,
  },
  {
    title: "Seasoned Burma Teak & Walnut",
    tag: "Bespoke Millwork",
    desc: "Grade-A timber kiln-dried for Indian humidity, crafted by master joiners into heirloom cabinetry.",
    image: IMAGES.detail2,
  },
  {
    title: "Architectural Lighting Scenes",
    tag: "Atmospheric Design",
    desc: "Smart DALI and warm dimming fixtures planned meticulously from daylight wash to midnight repose.",
    image: IMAGES.detail3,
  },
  {
    title: "Brushed Brass & Fluted Glass",
    tag: "Custom Metalcraft",
    desc: "PVD-coated metal details, custom acoustic wall fluting and textured partition systems.",
    image: IMAGES.detail4,
  },
];

export default function Home() {
  const featuredServices = SERVICES.slice(0, 5);
  const instaGrid = [IMAGES.studio1, IMAGES.studio2, IMAGES.studio3, IMAGES.studio4, IMAGES.story, IMAGES.storyAlt];

  return (
    <div>
      <Hero />

      {/* Editorial marquee */}
      <section className="border-y border-luxe-border bg-luxe-cream">
        <Marquee words={["Residential Architecture", "Turnkey Luxury", "Bespoke Millwork", "Commercial Studios", "Private Villas", "Sector 44 Gurugram"]} />
      </section>

      {/* Featured Services — bento */}
      <section className="luxe-container py-14 md:py-20" data-testid="featured-services">
        <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            overline="What We Do"
            title="A full-service architecture & design atelier."
          />
          <Reveal variant="fade" delay={0.2}>
            <Link to="/services" className="btn-outline group whitespace-nowrap">
              All Services
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-12">
          {/* Card 1 — Large feature */}
          <Reveal className="group relative overflow-hidden bg-luxe-charcoal md:col-span-3 lg:col-span-7">
            <Link to={`/services/${featuredServices[0]?.slug}`} className="block">
              <div className="aspect-[16/11] overflow-hidden">
                <img
                  src={featuredServices[0]?.image}
                  alt={featuredServices[0]?.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-luxe-ink via-luxe-ink/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <p className="overline mb-2 text-luxe-gold">01 / Residential</p>
                <h3 className="font-display text-2xl md:text-3xl">{featuredServices[0]?.title}</h3>
                <p className="mt-2 line-clamp-2 text-sm text-white/70">{featuredServices[0]?.shortDesc}</p>
              </div>
            </Link>
          </Reveal>

          {/* Card 2 */}
          <Reveal delay={0.1} className="group relative overflow-hidden bg-luxe-charcoal md:col-span-3 lg:col-span-5">
            <Link to={`/services/${featuredServices[1]?.slug}`} className="block">
              <div className="aspect-[16/11] overflow-hidden lg:aspect-auto lg:h-[460px]">
                <img
                  src={featuredServices[1]?.image}
                  alt={featuredServices[1]?.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-luxe-ink via-luxe-ink/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <p className="overline mb-2 text-luxe-gold">02 / Commercial</p>
                <h3 className="font-display text-2xl">{featuredServices[1]?.title}</h3>
                <p className="mt-2 line-clamp-2 text-sm text-white/70">{featuredServices[1]?.shortDesc}</p>
              </div>
            </Link>
          </Reveal>

          {/* Cards 3, 4, 5 — bottom trio */}
          {featuredServices.slice(2, 5).map((s, i) => (
            <Reveal key={s.slug} delay={0.1 * (i + 2)} className="group relative overflow-hidden bg-luxe-charcoal md:col-span-1 lg:col-span-4">
              <Link to={`/services/${s.slug}`} className="block">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-luxe-ink via-luxe-ink/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <p className="overline mb-1 text-luxe-gold">0{i + 3} / {s.category}</p>
                  <h3 className="font-display text-xl">{s.title}</h3>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Company story */}
      <section className="bg-luxe-cream py-14 md:py-20" data-testid="company-story">
        <div className="luxe-container grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
          <Reveal variant="left" className="relative">
            <div className="relative overflow-hidden border border-luxe-border shadow-xl">
              <img
                src={IMAGES.story}
                alt="Inside the Monis Solution studio"
                loading="lazy"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 hidden h-48 w-48 border border-luxe-gold bg-luxe-bg p-6 lg:block shadow-lg">
              <p className="overline text-luxe-gold">Sector 44</p>
              <p className="mt-2 font-display text-3xl text-luxe-ink">Gurugram</p>
              <p className="mt-1 text-xs text-luxe-soft">Architectural Atelier</p>
            </div>
          </Reveal>

          <div>
            <SectionHeading
              overline="About The Studio"
              title="We do not follow trends. We author homes."
              className="mb-10"
            />
            <div className="space-y-6">
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
                <Reveal key={c.n} className="relative flex gap-5 border-b border-luxe-border/70 pb-6">
                  <span className="font-display text-2xl text-luxe-gold/50 shrink-0">{c.n}</span>
                  <div>
                    <h3 className="font-display text-lg text-luxe-ink">{c.t}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-luxe-soft">{c.d}</p>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal className="mt-8">
              <Link to="/about" className="btn-primary group">
                Our Full Story
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-luxe-charcoal py-16 md:py-20" data-testid="stats">
        <div className="luxe-container grid grid-cols-2 gap-8 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.1} className="text-center md:text-left">
              <p className="font-display text-4xl text-luxe-gold md:text-5xl lg:text-6xl">
                <Counter value={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-2.5 text-xs uppercase tracking-[0.15em] text-white/70">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Noble Materials & Finishes Showcase */}
      <section className="luxe-container py-14 md:py-20" data-testid="materials-showcase">
        <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            overline="Noble Materials"
            title="Curated palettes that age with distinction."
          />
          <Reveal variant="fade" delay={0.2}>
            <Link to="/contact" className="btn-outline group whitespace-nowrap">
              Request Material Moodboard
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {MATERIALS.map((m, i) => (
            <Reveal key={m.title} delay={i * 0.1} className="group overflow-hidden rounded-2xl border border-luxe-border bg-white shadow-sm hover:shadow-xl transition-all duration-500">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={m.image}
                  alt={m.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-luxe-gold">{m.tag}</p>
                <h3 className="mt-1.5 font-display text-lg text-luxe-ink">{m.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-luxe-soft">{m.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Our Process */}
      <section className="bg-luxe-cream py-14 md:py-20" data-testid="process">
        <div className="luxe-container">
          <SectionHeading
            overline="How We Work"
            title="A calm, four-step journey from brief to handover."
            className="mb-12"
          />
          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-luxe-border bg-luxe-border md:grid-cols-2 lg:grid-cols-4">
            {PROCESS.map((p, i) => (
              <Reveal
                key={p.step}
                delay={i * 0.1}
                className="group bg-luxe-bg p-8 transition-colors duration-500 hover:bg-white lg:p-10"
              >
                <p className="font-display text-5xl text-luxe-ink/10 transition-colors duration-500 group-hover:text-luxe-gold/50">
                  {p.step}
                </p>
                <h3 className="mt-5 font-display text-xl text-luxe-ink">{p.title}</h3>
                <p className="mt-2.5 text-xs leading-relaxed text-luxe-soft">{p.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="luxe-container py-14 md:py-20" data-testid="why-choose-us">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading
              overline="Why Monis Solution"
              title="Reasons discerning homeowners choose us."
              className="mb-10"
            />
            <Stagger className="space-y-6">
              {WHY.map((w) => (
                <StaggerItem key={w.title} className="flex gap-4 border-b border-luxe-border/80 pb-6">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-luxe-gold/15 text-luxe-gold">
                    <Check className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg text-luxe-ink">{w.title}</h3>
                    <p className="mt-1.5 text-xs leading-relaxed text-luxe-soft">{w.text}</p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
          <Reveal variant="right" className="relative overflow-hidden">
            <div className="overflow-hidden rounded-2xl border border-luxe-border shadow-xl">
              <img
                src={IMAGES.afterImg}
                alt="Bespoke luxury interior transformation by Monis Solution"
                loading="lazy"
                className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="mt-4 flex items-center justify-between text-xs uppercase tracking-[0.15em] text-luxe-muted">
              <span>Bespoke Architectural Craft</span>
              <span>Sector 44, Gurugram</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Client logos */}
      <section className="border-y border-luxe-border py-14" data-testid="client-logos">
        <div className="luxe-container">
          <p className="overline mb-8 text-center text-xs">Trusted by luxury developments & discerning clients</p>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-8">
            {CLIENT_LOGOS.map((c, i) => (
              <Reveal
                key={c}
                delay={i * 0.05}
                variant="fade"
                className="flex items-center justify-center text-center font-display text-base text-luxe-muted transition-colors hover:text-luxe-ink"
              >
                {c}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Studio feature — premium static section */}
      <section className="relative flex min-h-[60vh] items-center overflow-hidden" data-testid="studio-feature">
        <img
          src={IMAGES.video}
          alt="Inside the Monis Solution design studio"
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-luxe-ink/90 via-luxe-ink/65 to-luxe-ink/30" />
        <div className="luxe-container relative z-10 py-16">
          <Reveal className="max-w-xl">
            <p className="overline mb-4 text-luxe-gold">Inside The Studio</p>
            <h2 className="font-display text-3xl leading-tight text-white md:text-5xl">
              Where craft, light and material become a home.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/80">
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
      <section className="luxe-container py-14 md:py-20" data-testid="home-testimonials">
        <SectionHeading
          overline="Kind Words"
          title="Clients who now call our work home."
          align="center"
          className="mb-12"
        />
        <TestimonialSlider testimonials={TESTIMONIALS.slice(0, 6)} />
      </section>

      {/* Instagram gallery */}
      <section className="pb-14 md:pb-20" data-testid="instagram-gallery">
        <div className="luxe-container mb-8 text-center">
          <p className="overline mb-2">@monissolution</p>
          <h2 className="font-display text-2xl text-luxe-ink md:text-3xl">Follow the everyday details</h2>
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

      {/* Studio Location & Interactive Google Map */}
      <section className="border-t border-luxe-border bg-luxe-cream py-14 md:py-20" data-testid="home-map-section">
        <div className="luxe-container">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <SectionHeading
                overline="Studio Atelier"
                title="Visit us in Sector 44, Gurugram."
                className="mb-6"
              />
              <p className="text-sm leading-relaxed text-luxe-soft mb-8">
                Drop by our Gurugram studio to review tactile samples, discuss your residential floor plans, and consult directly with our principal architects.
              </p>
              <div className="space-y-4 border-l-2 border-luxe-gold pl-5 text-sm">
                <div>
                  <p className="font-semibold text-luxe-ink">Studio Address</p>
                  <p className="text-xs text-luxe-soft mt-0.5">Sector 44, Gurugram, Haryana - 122003, New Delhi NCR</p>
                </div>
                <div>
                  <p className="font-semibold text-luxe-ink">Studio Hours</p>
                  <p className="text-xs text-luxe-soft mt-0.5">Mon–Sat: 10:00 AM – 7:00 PM IST</p>
                </div>
                <div>
                  <p className="font-semibold text-luxe-ink">Direct Contact</p>
                  <p className="text-xs text-luxe-soft mt-0.5">+91 98180 83436 · contact@monissolution.com</p>
                </div>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="https://maps.google.com/?q=Sector+44+Gurugram+Haryana"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Get Directions
                  <ArrowUpRight className="h-4 w-4" />
                </a>
                <Link to="/contact" className="btn-outline">
                  Schedule a Visit
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="overflow-hidden rounded-2xl border border-luxe-border shadow-xl">
                <iframe
                  title="Monis Solution Studio Location Map"
                  src="https://www.google.com/maps?q=Sector+44+Gurugram+Haryana&output=embed"
                  className="h-[360px] sm:h-[400px] w-full border-0 grayscale hover:grayscale-0 transition-all duration-700"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="relative overflow-hidden bg-luxe-charcoal py-16 md:py-24" data-testid="contact-cta">
        <div className="luxe-container relative z-10 text-center">
          <Reveal>
            <p className="overline mb-4 text-luxe-gold">Let's Begin</p>
            <h2 className="mx-auto max-w-3xl font-display text-3xl leading-tight text-white md:text-5xl">
              Ready to create a space you'll never want to leave?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm text-white/70">
              Book a complimentary discovery discussion and let's explore what's possible for your luxury home or commercial space.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link to="/contact" data-testid="cta-start-project" className="btn-primary bg-luxe-gold hover:bg-white hover:text-luxe-ink">
                Start Your Project
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 border border-white/40 px-8 py-4 text-sm font-medium uppercase tracking-[0.15em] text-white transition-colors hover:bg-white hover:text-luxe-ink"
              >
                Our Services
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
