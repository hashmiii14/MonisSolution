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
    { icon: MapPin, label: "Visit the Studio", value: "Sector 44, Gurugram, Haryana - 122003, New Delhi NCR, India" },
    { icon: Phone, label: "Call Us", value: "+91 98180 83436" },
    { icon: Mail, label: "Email", value: "contact@monissolution.com" },
    { icon: Clock, label: "Studio Hours", value: "Mon–Sat, 10am–7pm IST" },
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
                    placeholder="+91 98180 83436"
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
                href="https://wa.me/919818083436?text=Hello%20Monis%20Solution%2C%20I%27d%20like%20to%20discuss%20an%20interior%20design%20project."
                target="_blank"
                rel="noopener noreferrer"
                data-testid="contact-whatsapp-link"
                className="inline-flex items-center gap-3 rounded-none bg-[#25D366] px-6 py-4 text-sm font-medium uppercase tracking-[0.15em] text-white transition-opacity hover:opacity-90 shadow-md"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-white shrink-0" aria-hidden="true">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
                Chat on WhatsApp
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
              title="Monis Solution studio location"
              data-testid="contact-map"
              src="https://www.google.com/maps?q=Sector+44+Gurugram+Haryana&output=embed"
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
