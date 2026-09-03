import { useState } from "react";
import { Link } from "react-router-dom";
import { Instagram, Linkedin, Facebook, Send, MapPin, Phone, Mail } from "lucide-react";
import { IMAGES } from "@/data/content";

const insta = [IMAGES.studio1, IMAGES.studio2, IMAGES.studio3, IMAGES.studio4, IMAGES.story, IMAGES.storyAlt];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    if (email) setSent(true);
  };

  return (
    <footer data-testid="footer" className="bg-luxe-charcoal text-white">
      <div className="luxe-container py-20 md:py-28">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link to="/" className="font-display text-2xl sm:text-3xl tracking-tight text-white">
              MONIS SOLUTION
            </Link>
            <p className="mt-6 max-w-xs leading-relaxed text-white/60">
              An award-winning luxury interior design & architecture studio crafting timeless, bespoke spaces in Sector 44, Gurugram, New Delhi NCR, and across India.
            </p>
            <div className="mt-8 flex gap-4">
              {[
                { icon: Instagram, label: "Instagram" },
                { icon: Linkedin, label: "LinkedIn" },
                { icon: Facebook, label: "Facebook" },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  data-testid={`footer-social-${label.toLowerCase()}`}
                  className="flex h-10 w-10 items-center justify-center border border-white/20 text-white/70 transition-colors hover:border-luxe-gold hover:text-luxe-gold"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="overline mb-6 text-luxe-gold">Explore</p>
            <ul className="space-y-3 text-white/70">
              {[
                ["About", "/about"],
                ["Services", "/services"],
                ["Portfolio", "/portfolio"],
                ["Team", "/team"],
                ["Pricing", "/pricing"],
                ["Journal", "/blog"],
              ].map(([label, to]) => (
                <li key={to}>
                  <Link to={to} className="link-underline text-sm transition-colors hover:text-white">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="overline mb-6 text-luxe-gold">Contact</p>
            <ul className="space-y-4 text-sm text-white/70">
              <li className="flex gap-3">
                <MapPin className="h-4 w-4 shrink-0 text-luxe-gold" />
                Sector 44, Gurugram, Haryana - 122003, New Delhi NCR, India
              </li>
              <li className="flex gap-3">
                <Phone className="h-4 w-4 shrink-0 text-luxe-gold" />
                +91 98180 83436
              </li>
              <li className="flex gap-3">
                <Mail className="h-4 w-4 shrink-0 text-luxe-gold" />
                contact@monissolution.com
              </li>
            </ul>
          </div>

          <div>
            <p className="overline mb-6 text-luxe-gold">The Journal</p>
            <p className="mb-4 text-sm text-white/60">Design notes, delivered quietly to your inbox.</p>
            <form onSubmit={submit} className="flex border-b border-white/20 focus-within:border-luxe-gold" data-testid="footer-newsletter-form">
              <input
                data-testid="footer-newsletter-input"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                className="w-full bg-transparent py-3 text-sm text-white outline-none placeholder:text-white/40"
              />
              <button data-testid="footer-newsletter-submit" aria-label="Subscribe" className="px-2 text-luxe-gold">
                <Send className="h-4 w-4" />
              </button>
            </form>
            {sent && <p className="mt-3 text-xs text-luxe-gold">Thank you — you're subscribed.</p>}

            <div className="mt-8 grid grid-cols-3 gap-2">
              {insta.map((src, i) => (
                <a key={i} href="#" aria-label="Instagram post" className="group relative aspect-square overflow-hidden">
                  <img
                    src={src}
                    alt="Instagram"
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/50 md:flex-row">
          <p>© {new Date().getFullYear()} MONIS SOLUTION. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="transition-colors hover:text-white">Privacy Policy</a>
            <a href="#" className="transition-colors hover:text-white">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
