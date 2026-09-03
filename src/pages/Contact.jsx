import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, Instagram, Linkedin, Facebook } from "lucide-react";
import { toast } from "sonner";
import PageHero from "@/components/common/PageHero";
import Reveal from "@/components/common/Reveal";
import { IMAGES } from "@/data/content";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    // Demo only — no backend persistence.
    setTimeout(() => {
      setSubmitting(false);
      toast.success("Thank you — we'll be in touch within one business day.");
      setForm({ name: "", email: "", phone: "", service: "", message: "" });
    }, 900);
  };

  const info = [
    { icon: MapPin, label: "Visit the Studio", value: "12 Marylebone Lane, London, W1U 2NR" },
    { icon: Phone, label: "Call Us", value: "+44 20 7123 4567" },
    { icon: Mail, label: "Email", value: "studio@luxeinteriors.com" },
    { icon: Clock, label: "Studio Hours", value: "Mon–Fri, 9am–6pm GMT" },
  ];

  return (
    <div>
      <PageHero
        overline="Let's Talk"
        title="Start a conversation."
        subtitle="Tell us about your space and your aspirations. Every great project begins with a simple hello."
        image={IMAGES.heroSecondary}
        crumbs={[{ label: "Contact" }]}
      />

      <section className="luxe-container py-24 md:py-32">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          {/* Form */}
          <Reveal variant="left">
            <p className="overline mb-3">Enquiry Form</p>
            <h2 className="mb-8 font-display text-3xl text-luxe-ink md:text-4xl">Tell us about your project.</h2>
            <form onSubmit={submit} className="space-y-6" data-testid="contact-form">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label className="overline mb-2 block">Full Name</label>
                  <input
                    data-testid="contact-name-input"
                    required
                    value={form.name}
                    onChange={update("name")}
                    className="w-full border-b border-luxe-border bg-transparent py-3 text-luxe-ink outline-none focus:border-luxe-gold"
                    placeholder="Jane Doe"
                  />
                </div>
                <div>
                  <label className="overline mb-2 block">Email</label>
                  <input
                    data-testid="contact-email-input"
                    type="email"
                    required
                    value={form.email}
                    onChange={update("email")}
                    className="w-full border-b border-luxe-border bg-transparent py-3 text-luxe-ink outline-none focus:border-luxe-gold"
                    placeholder="jane@email.com"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label className="overline mb-2 block">Phone</label>
                  <input
                    data-testid="contact-phone-input"
                    value={form.phone}
                    onChange={update("phone")}
                    className="w-full border-b border-luxe-border bg-transparent py-3 text-luxe-ink outline-none focus:border-luxe-gold"
                    placeholder="+44 ..."
                  />
                </div>
                <div>
                  <label className="overline mb-2 block">Service of Interest</label>
                  <select
                    data-testid="contact-service-select"
                    value={form.service}
                    onChange={update("service")}
                    className="w-full border-b border-luxe-border bg-transparent py-3 text-luxe-ink outline-none focus:border-luxe-gold"
                  >
                    <option value="">Select...</option>
                    <option>Residential Interior</option>
                    <option>Commercial Interior</option>
                    <option>Luxury Villa</option>
                    <option>Hospitality</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="overline mb-2 block">Your Message</label>
                <textarea
                  data-testid="contact-message-input"
                  required
                  rows={4}
                  value={form.message}
                  onChange={update("message")}
                  className="w-full resize-none border-b border-luxe-border bg-transparent py-3 text-luxe-ink outline-none focus:border-luxe-gold"
                  placeholder="Tell us about your space, timeline and vision..."
                />
              </div>
              <button data-testid="contact-submit-btn" type="submit" disabled={submitting} className="btn-primary group w-full disabled:opacity-60 sm:w-auto">
                {submitting ? "Sending..." : "Send Enquiry"}
                <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </form>
          </Reveal>

          {/* Info */}
          <Reveal variant="right">
            <div className="space-y-8">
              {info.map((c) => (
                <div key={c.label} className="flex min-w-0 gap-5 border-b border-luxe-border pb-8">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-luxe-gold/15 text-luxe-gold">
                    <c.icon className="h-5 w-5" strokeWidth={1.5} />
                  </div>
                  <div className="min-w-0">
                    <p className="overline mb-1.5">{c.label}</p>
                    <p className="break-words font-display text-lg text-luxe-ink">{c.value}</p>
                  </div>
                </div>
              ))}

              <a
                href="https://wa.me/442071234567"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="contact-whatsapp-link"
                className="inline-flex items-center gap-3 bg-[#25D366] px-6 py-4 text-sm font-medium uppercase tracking-[0.15em] text-white transition-opacity hover:opacity-90"
              >
                <MessageCircle className="h-5 w-5" /> Chat on WhatsApp
              </a>

              <div className="flex gap-4 pt-2">
                {[Instagram, Linkedin, Facebook].map((Icon, i) => (
                  <a key={i} href="#" aria-label="Social" className="flex h-11 w-11 items-center justify-center border border-luxe-border text-luxe-soft transition-colors hover:border-luxe-gold hover:text-luxe-gold">
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Map */}
      <section className="pb-24 md:pb-32">
        <div className="luxe-container">
          <Reveal variant="scale" className="overflow-hidden border border-luxe-border">
            <iframe
              title="LUXE INTERIORS studio location"
              data-testid="contact-map"
              src="https://www.google.com/maps?q=Marylebone+Lane+London&output=embed"
              className="h-[420px] w-full grayscale"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Reveal>
        </div>
      </section>
    </div>
  );
}
