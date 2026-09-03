import { Link } from "react-router-dom";
import { Check, ArrowRight, Minus } from "lucide-react";
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
        subtitle="Clear, fixed design fees so you can plan with confidence. Construction and furniture are quoted separately."
        image={IMAGES.story}
        crumbs={[{ label: "Pricing" }]}
      />

      <section className="luxe-container py-24 md:py-32">
        <Stagger className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {PRICING.map((p) => (
            <StaggerItem key={p.name}>
              <div
                data-testid={`pricing-card-${p.name.toLowerCase()}`}
                className={`flex h-full flex-col p-8 transition-transform duration-500 hover:-translate-y-2 ${
                  p.highlight
                    ? "bg-luxe-charcoal text-white"
                    : "border border-luxe-border bg-luxe-bg text-luxe-ink"
                }`}
              >
                {p.highlight && (
                  <span className="mb-4 inline-block w-fit bg-luxe-gold px-3 py-1 text-xs uppercase tracking-[0.15em] text-white">
                    Most Popular
                  </span>
                )}
                <h3 className="font-display text-2xl">{p.name}</h3>
                <p className={`mt-2 text-sm ${p.highlight ? "text-white/60" : "text-luxe-muted"}`}>{p.tagline}</p>
                <div className="mt-6 flex items-baseline gap-2">
                  <span className="font-display text-3xl md:text-4xl">{p.price}</span>
                  <span className={`text-sm ${p.highlight ? "text-white/50" : "text-luxe-muted"}`}>{p.unit}</span>
                </div>
                <ul className="mt-8 flex-1 space-y-3">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm">
                      <Check className={`mt-0.5 h-4 w-4 shrink-0 ${p.highlight ? "text-luxe-gold" : "text-luxe-gold"}`} />
                      <span className={p.highlight ? "text-white/80" : "text-luxe-soft"}>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  data-testid={`pricing-cta-${p.name.toLowerCase()}`}
                  className={`mt-8 inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium uppercase tracking-[0.15em] transition-colors ${
                    p.highlight
                      ? "bg-luxe-gold text-white hover:bg-white hover:text-luxe-ink"
                      : "bg-luxe-charcoal text-white hover:bg-luxe-gold"
                  }`}
                >
                  Get Started <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* Comparison table */}
      <section className="bg-luxe-cream py-24 md:py-32">
        <div className="luxe-container">
          <SectionHeading overline="Compare" title="Every package, side by side." align="center" className="mb-14" />
          <Reveal className="overflow-x-auto">
            <table className="w-full min-w-[720px] border-collapse bg-luxe-bg" data-testid="pricing-comparison-table">
              <thead>
                <tr className="border-b border-luxe-border">
                  <th className="p-5 text-left font-display text-lg text-luxe-ink">Features</th>
                  {PRICING.map((p) => (
                    <th key={p.name} className="p-5 text-center font-display text-lg text-luxe-ink">{p.name}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map((row, i) => (
                  <tr key={i} className="border-b border-luxe-border last:border-0">
                    <td className="p-4 text-sm text-luxe-soft">{row[0]}</td>
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
