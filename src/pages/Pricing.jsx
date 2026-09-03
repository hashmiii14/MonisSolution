import { Link } from "react-router-dom";
import { Check, ArrowRight, Minus, Sparkles } from "lucide-react";
import PageHero from "@/components/common/PageHero";
import SectionHeading from "@/components/common/SectionHeading";
import Reveal, { Stagger, StaggerItem } from "@/components/common/Reveal";
import { PRICING, IMAGES } from "@/data/content";

const COMPARISON = [
  ["Design consultation", true, true, true, true],
  ["Concept mood board", true, true, true, true],
  ["Space planning", false, true, true, true],
  ["3D visualisations", false, true, true, true],
  ["Custom joinery design", false, true, true, true],
  ["Procurement & sourcing", false, true, true, true],
  ["Full project management", false, false, true, true],
  ["Bespoke furniture commissions", false, false, true, true],
  ["12-month aftercare", false, false, true, true],
  ["Dedicated design team", false, false, false, true],
  ["Phased multi-unit delivery", false, false, false, true],
];

const Cell = ({ v }) =>
  v ? (
    <Check className="mx-auto h-4 w-4 text-luxe-gold" />
  ) : (
    <Minus className="mx-auto h-4 w-4 text-luxe-border" />
  );

export default function Pricing() {
  return (
    <div>
      <PageHero
        overline="Investment"
        title="Transparent packages for every ambition."
        subtitle="Clear, fixed design fees tailored for Indian homes and commercial spaces. Quoted transparently in INR so you can budget with total confidence."
        image={IMAGES.story}
        crumbs={[{ label: "Pricing" }]}
      />

      {/* Pricing Cards */}
      <section className="luxe-container py-14 md:py-20">
        <Stagger className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 items-stretch">
          {PRICING.map((p) => (
            <StaggerItem key={p.name} className="flex">
              <div
                data-testid={`pricing-card-${p.name.toLowerCase()}`}
                className={`relative flex w-full flex-col justify-between rounded-2xl p-7 sm:p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${
                  p.highlight
                    ? "bg-luxe-charcoal text-white border-2 border-luxe-gold shadow-xl ring-1 ring-luxe-gold/30"
                    : "border border-luxe-border/80 bg-white text-luxe-ink shadow-sm hover:border-luxe-gold/50"
                }`}
              >
                {/* Highlight Badge */}
                {p.highlight && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-luxe-gold px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-white shadow-md">
                      <Sparkles className="h-3 w-3" /> Most Popular
                    </span>
                  </div>
                )}

                <div>
                  <div className="border-b border-luxe-border/40 pb-6">
                    <h3 className="font-display text-2xl font-semibold tracking-tight">{p.name}</h3>
                    <p className={`mt-2 text-xs leading-relaxed ${p.highlight ? "text-white/70" : "text-luxe-soft"}`}>
                      {p.tagline}
                    </p>
                    <div className="mt-5 flex items-baseline gap-1.5">
                      <span className="font-display text-3xl font-bold tracking-tight text-luxe-gold md:text-4xl">
                        {p.price}
                      </span>
                      <span className={`text-xs font-medium ${p.highlight ? "text-white/50" : "text-luxe-muted"}`}>
                        {p.unit}
                      </span>
                    </div>
                  </div>

                  {/* Feature Checklist */}
                  <div className="pt-6">
                    <p className={`mb-4 text-[11px] font-semibold uppercase tracking-[0.15em] ${p.highlight ? "text-luxe-gold" : "text-luxe-muted"}`}>
                      What's Included:
                    </p>
                    <ul className="space-y-3.5">
                      {p.features.map((f) => (
                        <li key={f} className="flex items-start gap-3 text-sm">
                          <div className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full ${p.highlight ? "bg-luxe-gold/20 text-luxe-gold" : "bg-luxe-gold/15 text-luxe-gold"}`}>
                            <Check className="h-3 w-3 stroke-[2.5]" />
                          </div>
                          <span className={`leading-tight ${p.highlight ? "text-white/85" : "text-luxe-soft"}`}>
                            {f}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card CTA */}
                <div className="mt-8 pt-6 border-t border-luxe-border/30">
                  <Link
                    to="/contact"
                    data-testid={`pricing-cta-${p.name.toLowerCase()}`}
                    className={`inline-flex w-full items-center justify-center gap-2 rounded-xl py-3.5 text-xs font-semibold uppercase tracking-[0.15em] transition-all duration-300 ${
                      p.highlight
                        ? "bg-luxe-gold text-white shadow-lg shadow-luxe-gold/30 hover:bg-white hover:text-luxe-ink"
                        : "bg-luxe-charcoal text-white hover:bg-luxe-gold hover:shadow-md"
                    }`}
                  >
                    Select Package <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* Comparison table */}
      <section className="bg-luxe-cream py-14 md:py-20 border-t border-luxe-border">
        <div className="luxe-container">
          <SectionHeading overline="Compare" title="Every package, side by side." align="center" className="mb-12" />
          <Reveal className="overflow-x-auto rounded-2xl border border-luxe-border bg-white shadow-lg">
            <table className="w-full min-w-[720px] border-collapse" data-testid="pricing-comparison-table">
              <thead>
                <tr className="border-b border-luxe-border bg-luxe-bg/60">
                  <th className="p-5 text-left font-display text-base font-semibold text-luxe-ink">Features</th>
                  {PRICING.map((p) => (
                    <th key={p.name} className="p-5 text-center font-display text-base font-semibold text-luxe-ink">
                      {p.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-luxe-border/60">
                {COMPARISON.map((row, i) => (
                  <tr key={i} className="hover:bg-luxe-bg/30 transition-colors">
                    <td className="p-4 text-sm font-medium text-luxe-ink">{row[0]}</td>
                    <td className="p-4"><Cell v={row[1]} /></td>
                    <td className="p-4"><Cell v={row[2]} /></td>
                    <td className="p-4"><Cell v={row[3]} /></td>
                    <td className="p-4"><Cell v={row[4]} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
