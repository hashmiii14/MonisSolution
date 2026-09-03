import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, ArrowRight } from "lucide-react";
import PageHero from "@/components/common/PageHero";
import Reveal from "@/components/common/Reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQS, IMAGES } from "@/data/content";

export default function FAQ() {
  const [query, setQuery] = useState("");
  const filtered = FAQS.filter(
    (f) =>
      f.q.toLowerCase().includes(query.toLowerCase()) ||
      f.a.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <div>
      <PageHero
        overline="Good to Know"
        title="Frequently asked questions."
        subtitle="Everything you need to know about working with Monis Solution. Can't find an answer? Just ask."
        image={IMAGES.studio3}
        crumbs={[{ label: "FAQ" }]}
      />

      <section className="luxe-container max-w-3xl py-14 md:py-20">
        <div className="relative mb-12">
          <Search className="absolute left-0 top-1/2 h-5 w-5 -translate-y-1/2 text-luxe-muted" />
          <input
            data-testid="faq-search-input"
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search questions..."
            className="w-full border-b border-luxe-border bg-transparent py-4 pl-8 text-luxe-ink outline-none placeholder:text-luxe-muted focus:border-luxe-gold"
          />
        </div>

        {filtered.length === 0 ? (
          <p className="py-10 text-center text-luxe-muted">No questions match your search.</p>
        ) : (
          <Reveal>
            <Accordion type="single" collapsible className="w-full" data-testid="faq-accordion">
              {filtered.map((f, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-b border-luxe-border">
                  <AccordionTrigger
                    data-testid={`faq-question-${i}`}
                    className="py-6 text-left font-display text-lg text-luxe-ink hover:no-underline hover:text-luxe-gold md:text-xl"
                  >
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 text-base leading-relaxed text-luxe-soft">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        )}
      </section>

      <section className="bg-luxe-cream py-20 text-center">
        <div className="luxe-container">
          <h2 className="mx-auto max-w-xl font-display text-3xl text-luxe-ink md:text-4xl">
            Still have a question?
          </h2>
          <Link to="/contact" className="btn-primary group mt-8">
            Contact the Studio <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </div>
  );
}
