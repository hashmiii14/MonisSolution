import { Link } from "react-router-dom";
import { ArrowRight, Target, Eye, Award, Heart, Leaf, Sparkles } from "lucide-react";
import PageHero from "@/components/common/PageHero";
import SectionHeading from "@/components/common/SectionHeading";
import Reveal, { Stagger, StaggerItem } from "@/components/common/Reveal";
import Counter from "@/components/common/Counter";
import Marquee from "@/components/common/Marquee";
import { IMAGES, STATS } from "@/data/content";

const TIMELINE = [
  { year: "2012", title: "The studio is founded", text: "Monis Hashmi establishes a design studio in New Delhi NCR with a focus on bespoke residential architecture." },
  { year: "2016", title: "First luxury villa delivery", text: "A sprawling private villa in Gurugram marks our signature integration of natural stone and spatial light." },
  { year: "2019", title: "Design Excellence Award", text: "Recognised for landmark penthouse and luxury residential transformations across NCR." },
  { year: "2021", title: "Commercial & Hospitality expansion", text: "We expand into corporate offices and boutique hospitality spaces with complete turnkey FF&E delivery." },
  { year: "2024", title: "480+ projects delivered", text: "A multidisciplinary team now serves discerning homeowners and businesses across New Delhi, Gurugram, and pan-India." },
];

const VALUES = [
  { icon: Sparkles, title: "Craft", text: "We obsess over the millimetre, the joint, the finish — because true luxury lives in the detail." },
  { icon: Heart, title: "Empathy", text: "We design for real lives, listening deeply before we ever pick up a pencil." },
  { icon: Leaf, title: "Responsibility", text: "We source consciously, favouring materials with provenance, longevity and integrity." },
  { icon: Award, title: "Excellence", text: "We hold every scheme to an exacting standard, from concept to the final cushion." },
];

export default function About() {
  return (
    <div>
      <PageHero
        overline="Our Story"
        title="We craft interiors that feel inevitable."
        subtitle="For over a decade, Monis Solution has designed spaces that balance architectural rigour with deep human warmth."
        image={IMAGES.storyAlt}
        crumbs={[{ label: "About" }]}
      />

      {/* Story */}
      <section className="luxe-container grid grid-cols-1 items-center gap-14 py-24 md:py-32 lg:grid-cols-2">
        <Reveal variant="left">
          <img src={IMAGES.story} alt="Studio" className="w-full object-cover" loading="lazy" />
        </Reveal>
        <div>
          <SectionHeading overline="Who We Are" title="A studio built on quiet obsession." className="mb-6" />
          <div className="space-y-5 leading-relaxed text-luxe-soft">
            <p>
              Monis Solution began with a single belief: that a well-designed space can change how it feels
              to be alive in it. What started as an architectural atelier in New Delhi NCR has grown into a premier
              studio delivering residential, commercial and turnkey hospitality projects across India.
            </p>
            <p>
              We are not interested in trends for their own sake. Instead, we design interiors that feel timeless and
              personal — spaces authored around your rituals, your family, and the way light moves through your
              rooms. Based in Sector 44, Gurugram, every project is led end-to-end by a dedicated designer, protecting both vision and craft.
            </p>
          </div>
          <Link to="/services" className="btn-outline group mt-8">
            Explore Services
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-luxe-cream py-24 md:py-32">
        <div className="luxe-container grid grid-cols-1 gap-8 md:grid-cols-2">
          {[
            { icon: Target, label: "Our Mission", title: "To craft spaces that elevate everyday life.", text: "We translate how you live into interiors of lasting beauty — considered, tactile and unmistakably yours." },
            { icon: Eye, label: "Our Vision", title: "To be the studio for timeless, responsible luxury.", text: "We believe luxury and responsibility belong together: exquisite materials, ethically sourced, designed to endure." },
          ].map((m, i) => (
            <Reveal key={m.label} delay={i * 0.15} className="border border-luxe-border bg-luxe-bg p-10 md:p-14">
              <m.icon className="h-10 w-10 text-luxe-gold" strokeWidth={1.2} />
              <p className="overline mt-6 mb-3">{m.label}</p>
              <h3 className="font-display text-2xl text-luxe-ink md:text-3xl">{m.title}</h3>
              <p className="mt-4 leading-relaxed text-luxe-soft">{m.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="luxe-container py-24 md:py-32">
        <SectionHeading overline="Our Journey" title="Milestones along the way." align="center" className="mb-16" />
        <div className="relative mx-auto max-w-3xl">
          <div className="absolute left-[7px] top-2 h-full w-px bg-luxe-border md:left-1/2" />
          {TIMELINE.map((t, i) => (
            <Reveal
              key={t.year}
              delay={i * 0.05}
              className={`relative mb-12 pl-10 md:w-1/2 md:pl-0 ${
                i % 2 === 0 ? "md:pr-12 md:text-right" : "md:ml-auto md:pl-12"
              }`}
            >
              <span
                className={`absolute top-1.5 h-3.5 w-3.5 rounded-full border-2 border-luxe-gold bg-luxe-bg left-0 md:left-auto ${
                  i % 2 === 0 ? "md:-right-[7px]" : "md:-left-[7px]"
                }`}
              />
              <p className="font-display text-2xl text-luxe-gold">{t.year}</p>
              <h3 className="mt-1 font-display text-xl text-luxe-ink">{t.title}</h3>
              <p className="mt-2 leading-relaxed text-luxe-soft">{t.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Achievements */}
      <section className="bg-luxe-charcoal py-20 md:py-24">
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

      {/* Studio gallery */}
      <section className="luxe-container py-24 md:py-32">
        <SectionHeading overline="Inside the Studio" title="Where ideas take shape." className="mb-12" />
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {[IMAGES.studio1, IMAGES.studio2, IMAGES.studio3, IMAGES.studio4].map((src, i) => (
            <Reveal key={i} delay={i * 0.08} variant="scale" className="overflow-hidden">
              <img src={src} alt="Studio" loading="lazy" className="aspect-[3/4] w-full object-cover transition-transform duration-700 hover:scale-105" />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="bg-luxe-cream py-24 md:py-32">
        <div className="luxe-container">
          <SectionHeading overline="Our Values" title="The principles behind every project." align="center" className="mb-16" />
          <Stagger className="grid grid-cols-1 gap-px overflow-hidden border border-luxe-border bg-luxe-border sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v) => (
              <StaggerItem key={v.title} className="bg-luxe-bg p-10">
                <v.icon className="h-9 w-9 text-luxe-gold" strokeWidth={1.2} />
                <h3 className="mt-6 font-display text-xl text-luxe-ink">{v.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-luxe-soft">{v.text}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="border-y border-luxe-border bg-luxe-cream">
        <Marquee words={["Craft", "Warmth", "Timeless", "Bespoke", "Considered"]} />
      </section>
    </div>
  );
}
