import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send } from "lucide-react";
import { IMAGES } from "@/data/content";

export default function NewsletterPopup() {
  const [open, setOpen] = useState(false);
  const [done, setDone] = useState(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (sessionStorage.getItem("luxe_newsletter_seen")) return;
    const t = setTimeout(() => setOpen(true), 7000);
    return () => clearTimeout(t);
  }, []);

  const close = () => {
    setOpen(false);
    sessionStorage.setItem("luxe_newsletter_seen", "1");
  };

  const submit = (e) => {
    e.preventDefault();
    if (!email) return;
    setDone(true);
    setTimeout(close, 1800);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[9000] flex items-center justify-center bg-luxe-ink/50 px-6 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={close}
          data-testid="newsletter-popup"
        >
          <motion.div
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.92, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.92, opacity: 0, y: 20 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative grid w-full max-w-3xl grid-cols-1 overflow-hidden bg-luxe-bg shadow-2xl md:grid-cols-2"
          >
            <div className="hidden md:block">
              <img
                src={IMAGES.storyAlt}
                alt="Luxury interior"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="relative p-8 md:p-12">
              <button
                onClick={close}
                aria-label="Close newsletter"
                data-testid="newsletter-close-btn"
                className="absolute right-4 top-4 text-luxe-muted transition-colors hover:text-luxe-ink"
              >
                <X className="h-5 w-5" />
              </button>
              {done ? (
                <div className="flex h-full flex-col items-center justify-center text-center">
                  <h3 className="font-display text-3xl text-luxe-ink">Welcome</h3>
                  <p className="mt-3 text-luxe-soft">You're on the list. Beautiful things ahead.</p>
                </div>
              ) : (
                <>
                  <p className="overline mb-3">The Monis Solution Journal</p>
                  <h3 className="font-display text-3xl md:text-4xl leading-tight text-luxe-ink">
                    Design notes, delivered quietly.
                  </h3>
                  <p className="mt-4 text-luxe-soft">
                    Join our private list for material stories, project reveals and studio insights. No noise.
                  </p>
                  <form onSubmit={submit} className="mt-8 space-y-4">
                    <input
                      data-testid="newsletter-email-input"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      className="w-full border-b border-luxe-border bg-transparent py-3 text-luxe-ink outline-none placeholder:text-luxe-muted focus:border-luxe-gold"
                    />
                    <button data-testid="newsletter-submit-btn" type="submit" className="btn-primary w-full">
                      Subscribe <Send className="h-4 w-4" />
                    </button>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
