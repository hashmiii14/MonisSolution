import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <motion.a
      data-testid="whatsapp-btn"
      href="https://wa.me/442071234567?text=Hello%20LUXE%20INTERIORS%2C%20I%27d%20like%20to%20discuss%20a%20project."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.5, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.08 }}
      className="fixed bottom-24 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl"
    >
      <MessageCircle className="h-7 w-7" strokeWidth={1.5} />
    </motion.a>
  );
}
