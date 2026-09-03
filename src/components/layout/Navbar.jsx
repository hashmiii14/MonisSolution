import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/pricing", label: "Pricing" },
  { to: "/blog", label: "Journal" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  // Lock body scroll (and pause momentum scroll) while the mobile menu is open.
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      window.__lenis?.stop();
    } else {
      document.body.style.overflow = "";
      window.__lenis?.start();
    }
    return () => {
      document.body.style.overflow = "";
      window.__lenis?.start();
    };
  }, [open]);

  // Transparent at start on home page, transitions to white frosted glass on scroll
  const solid = scrolled || !isHome;

  return (
    <>
      <header
        data-testid="navbar"
        className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ease-in-out ${
          solid
            ? "border-b border-luxe-border/80 bg-white/95 py-3.5 shadow-md backdrop-blur-xl"
            : "bg-gradient-to-b from-black/60 via-black/20 to-transparent py-5 sm:py-6"
        }`}
      >
        <nav className="luxe-container flex items-center justify-between">
          <Link
            to="/"
            data-testid="navbar-logo"
            className={`font-display text-xl sm:text-2xl tracking-tight transition-colors ${
              solid ? "text-luxe-ink" : "text-white"
            }`}
          >
            MONIS SOLUTION
          </Link>

          <ul className="hidden items-center gap-8 lg:flex">
            {LINKS.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  data-testid={`nav-link-${l.label.toLowerCase()}`}
                  className={({ isActive }) =>
                    `link-underline text-sm font-medium transition-colors ${
                      solid ? "text-luxe-soft hover:text-luxe-ink" : "text-white/90 hover:text-white"
                    } ${isActive ? "!text-luxe-gold" : ""}`
                  }
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            <Link
              to="/contact"
              data-testid="navbar-contact-cta"
              className={`hidden text-xs font-medium uppercase tracking-[0.15em] transition-colors lg:inline-flex px-6 py-3 ${
                solid
                  ? "bg-luxe-charcoal text-white hover:bg-luxe-gold"
                  : "border border-white/60 text-white hover:bg-white hover:text-luxe-ink"
              }`}
            >
              Book Consultation
            </Link>
            <button
              data-testid="mobile-menu-toggle"
              aria-label="Open menu"
              onClick={() => setOpen(true)}
              className={`p-1 lg:hidden ${solid ? "text-luxe-ink" : "text-white"}`}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            data-testid="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex flex-col bg-luxe-bg px-6 py-5 lg:hidden"
          >
            <div className="flex items-center justify-between shrink-0 pb-3 border-b border-luxe-border/60">
              <span className="font-display text-xl sm:text-2xl tracking-tight text-luxe-ink">
                MONIS SOLUTION
              </span>
              <button
                data-testid="mobile-menu-close"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="p-1.5 text-luxe-ink hover:text-luxe-gold transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <ul className="flex-1 min-h-0 overflow-y-auto overscroll-contain py-2 divide-y divide-luxe-border/40">
              {LINKS.map((l, i) => (
                <motion.li
                  key={l.to}
                  initial={{ opacity: 0, x: 25 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.03 * i }}
                >
                  <NavLink
                    to={l.to}
                    data-testid={`mobile-nav-link-${l.label.toLowerCase()}`}
                    className="block py-2.5 font-display text-2xl text-luxe-ink transition-colors hover:text-luxe-gold"
                  >
                    {l.label}
                  </NavLink>
                </motion.li>
              ))}
            </ul>

            <div className="shrink-0 pt-3 border-t border-luxe-border/60">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-luxe-gold">Monis Solution</p>
              <p className="text-xs text-luxe-soft mt-0.5">Sector 44, Gurugram · +91 98180 83436</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
