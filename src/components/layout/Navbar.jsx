import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/team", label: "Team" },
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
    const onScroll = () => setScrolled(window.scrollY > 40);
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

  // On non-home pages the hero is not dark, so use solid style from the start.
  const solid = scrolled || !isHome;

  return (
    <>
      <header
        data-testid="navbar"
        className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${
          solid
            ? "border-b border-luxe-border bg-white/80 py-4 backdrop-blur-xl backdrop-saturate-150"
            : "py-6"
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
            MONIS SOLUTION<span className="text-luxe-gold">.</span>
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

          <div className="flex items-center gap-3 sm:gap-4">
            <Link
              to="/contact"
              data-testid="navbar-contact-cta"
              className={`inline-flex text-xs font-medium uppercase tracking-[0.15em] transition-colors px-3.5 py-2 sm:px-6 sm:py-2.5 ${
                solid
                  ? "bg-luxe-charcoal text-white hover:bg-luxe-gold"
                  : "border border-white/60 text-white hover:bg-white hover:text-luxe-ink"
              }`}
            >
              Contact
            </Link>
            <button
              data-testid="mobile-menu-toggle"
              aria-label="Open menu"
              onClick={() => setOpen(true)}
              className={`lg:hidden ${solid ? "text-luxe-ink" : "text-white"}`}
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
            className="fixed inset-0 z-[60] flex flex-col bg-luxe-bg px-6 py-6 lg:hidden"
          >
            <div className="flex items-center justify-between">
              <span className="font-display text-xl sm:text-2xl text-luxe-ink">
                MONIS SOLUTION<span className="text-luxe-gold">.</span>
              </span>
              <button
                data-testid="mobile-menu-close"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="text-luxe-ink"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <ul className="mt-10 flex flex-col gap-2 overflow-y-auto">
              {LINKS.map((l, i) => (
                <motion.li
                  key={l.to}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i }}
                >
                  <NavLink
                    to={l.to}
                    data-testid={`mobile-nav-link-${l.label.toLowerCase()}`}
                    className="block border-b border-luxe-border py-4 font-display text-3xl text-luxe-ink"
                  >
                    {l.label}
                  </NavLink>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
