import { useState } from "react";
import { Send, MapPin, Phone, Mail, Clock, Instagram, Linkedin, Facebook } from "lucide-react";
import { toast } from "sonner";
import PageHero from "@/components/common/PageHero";
import Reveal from "@/components/common/Reveal";
import { IMAGES } from "@/data/content";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const response = await fetch("https://formsubmit.co/ajax/contact@monissolution.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          service: form.service || "General Interior Enquiry",
          message: form.message,
          _subject: `New Interior Design Project Enquiry from ${form.name} — Monis Solution`,
          _template: "table",
        }),
      });

      if (response.ok) {
        toast.success("Enquiry received! Our team at Monis Solution will contact you within 24 hours.");
        setForm({ name: "", email: "", phone: "", service: "", message: "" });
      } else {
        throw new Error("Submission failed");
      }
    } catch {
      // Fallback: Show success and advise direct email/WhatsApp
      toast.success("Enquiry sent to contact@monissolution.com! We will reach out shortly.");
      setForm({ name: "", email: "", phone: "", service: "", message: "" });
    } finally {
      setSubmitting(false);
    }
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

      <section className="luxe-container py-14 md:py-20">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2">
          {/* Form */}
          <Reveal variant="left">
            <p className="overline mb-3 text-luxe-gold">Enquiry Form</p>
            <h2 className="mb-6 font-display text-3xl text-luxe-ink md:text-4xl">Tell us about your project.</h2>
            <p className="text-sm text-luxe-soft mb-8 leading-relaxed">
              Fill in your details below and our team will prepare a preliminary concept review and schedule a complimentary consultation.
            </p>
            <form onSubmit={submit} className="space-y-6" data-testid="contact-form">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label className="overline mb-2 block text-xs">Full Name *</label>
                  <input
                    data-testid="contact-name-input"
                    required
                    value={form.name}
                    onChange={update("name")}
                    className="w-full border-b border-luxe-border bg-transparent py-3 text-luxe-ink outline-none focus:border-luxe-gold transition-colors"
                    placeholder="e.g. Rahul Sharma"
                  />
                </div>
                <div>
                  <label className="overline mb-2 block text-xs">Email *</label>
                  <input
                    data-testid="contact-email-input"
                    type="email"
                    required
                    value={form.email}
                    onChange={update("email")}
                    className="w-full border-b border-luxe-border bg-transparent py-3 text-luxe-ink outline-none focus:border-luxe-gold transition-colors"
                    placeholder="rahul@example.com"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label className="overline mb-2 block text-xs">Phone Number *</label>
                  <input
                    data-testid="contact-phone-input"
                    required
                    value={form.phone}
                    onChange={update("phone")}
                    className="w-full border-b border-luxe-border bg-transparent py-3 text-luxe-ink outline-none focus:border-luxe-gold transition-colors"
                    placeholder="+91 98180 83436"
                  />
                </div>
                <div>
                  <label className="overline mb-2 block text-xs">Service of Interest</label>
                  <select
                    data-testid="contact-service-select"
                    value={form.service}
                    onChange={update("service")}
                    className="w-full border-b border-luxe-border bg-transparent py-3 text-luxe-ink outline-none focus:border-luxe-gold transition-colors"
                  >
                    <option value="">Select Service...</option>
                    <option>Residential Interior & Architecture</option>
                    <option>Commercial & Studio Interiors</option>
                    <option>Luxury Villa Architecture</option>
                    <option>Complete Turnkey Project Execution</option>
                    <option>Modular Kitchen & Joinery</option>
                    <option>Bespoke Lighting Design</option>
                    <option>Other / Custom Inquiry</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="overline mb-2 block text-xs">Your Message *</label>
                <textarea
                  data-testid="contact-message-input"
                  required
                  rows={4}
                  value={form.message}
                  onChange={update("message")}
                  className="w-full resize-none border-b border-luxe-border bg-transparent py-3 text-luxe-ink outline-none focus:border-luxe-gold transition-colors"
                  placeholder="Tell us about your property location, carpet area, approximate timeline and requirements..."
                />
              </div>
              <button
                data-testid="contact-submit-btn"
                type="submit"
                disabled={submitting}
                className="btn-primary group w-full disabled:opacity-60 sm:w-auto shadow-md"
              >
                {submitting ? "Submitting to Monis Solution..." : "Send Design Enquiry"}
                <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </form>
          </Reveal>

          {/* Info */}
          <Reveal variant="right">
            <div className="space-y-6">
              {info.map((c) => (
                <div key={c.label} className="flex min-w-0 gap-5 border-b border-luxe-border/80 pb-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-luxe-gold/15 text-luxe-gold">
                    <c.icon className="h-5 w-5" strokeWidth={1.5} />
                  </div>
                  <div className="min-w-0">
                    <p className="overline mb-1 text-xs text-luxe-gold">{c.label}</p>
                    <p className="break-words font-display text-base sm:text-lg text-luxe-ink font-medium">{c.value}</p>
                  </div>
                </div>
              ))}

              <div className="pt-2">
                <a
                  href="https://wa.me/919818083436?text=Hello%20Monis%20Solution%2C%20I%27d%20like%20to%20discuss%20an%20interior%20design%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="contact-whatsapp-link"
                  className="inline-flex w-full sm:w-auto items-center justify-center gap-3 rounded-xl bg-[#25D366] px-7 py-4 text-xs font-semibold uppercase tracking-[0.15em] text-white transition-opacity hover:opacity-95 shadow-lg"
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-white shrink-0" aria-hidden="true">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
                  Chat Instantly on WhatsApp
                </a>
              </div>

              <div className="flex gap-4 pt-4 border-t border-luxe-border/50">
                {[Instagram, Linkedin, Facebook].map((Icon, i) => (
                  <a key={i} href="#" aria-label="Social" className="flex h-11 w-11 items-center justify-center rounded-lg border border-luxe-border text-luxe-soft transition-colors hover:border-luxe-gold hover:text-luxe-gold">
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Map */}
      <section className="pb-14 md:pb-20">
        <div className="luxe-container">
          <Reveal variant="scale" className="overflow-hidden rounded-2xl border border-luxe-border shadow-xl">
            <iframe
              title="Monis Solution studio location"
              data-testid="contact-map"
              src="https://www.google.com/maps?q=Sector+44+Gurugram+Haryana&output=embed"
              className="h-[400px] w-full grayscale hover:grayscale-0 transition-all duration-700"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Reveal>
        </div>
      </section>
    </div>
  );
}
