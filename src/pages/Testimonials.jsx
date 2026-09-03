import { Star } from "lucide-react";
import PageHero from "@/components/common/PageHero";
import SectionHeading from "@/components/common/SectionHeading";
import Reveal, { Stagger, StaggerItem } from "@/components/common/Reveal";
import TestimonialSlider from "@/components/home/TestimonialSlider";
import { TESTIMONIALS, IMAGES } from "@/data/content";

export default function Testimonials() {
  return (
    <div>
      <PageHero
        overline="Kind Words"
        title="Loved by the people who live in our work."
        subtitle="A few reflections from the homeowners, hoteliers and businesses we've had the privilege to design for."
        image={IMAGES.storyAlt}
        crumbs={[{ label: "Testimonials" }]}
      />

      {/* Featured slider */}
      <section className="bg-luxe-charcoal py-16 md:py-20">
        <div className="luxe-container">
          <TestimonialSlider testimonials={TESTIMONIALS.slice(0, 6)} dark />
        </div>
      </section>

      {/* Grid of cards */}
      <section className="luxe-container py-14 md:py-20">
        <SectionHeading overline="More Reviews" title="Every project, a lasting relationship." align="center" className="mb-16" />
        <Stagger className="columns-1 gap-6 sm:columns-2 lg:columns-3 [&>*]:mb-6">
          {TESTIMONIALS.map((t, i) => (
            <StaggerItem key={i} className="break-inside-avoid">
              <div
                data-testid={`testimonial-card-${i}`}
                className="border border-luxe-border bg-luxe-bg p-8 transition-shadow duration-500 hover:shadow-[0_20px_40px_rgb(0,0,0,0.06)]"
              >
                <div className="mb-4 flex gap-1">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-luxe-gold text-luxe-gold" />
                  ))}
                </div>
                <p className="leading-relaxed text-luxe-soft">“{t.text}”</p>
                <div className="mt-6 flex items-center gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-luxe-gold/15 font-display text-luxe-gold">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-medium text-luxe-ink">{t.name}</p>
                    <p className="text-sm text-luxe-muted">{t.location}</p>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>
    </div>
  );
}
