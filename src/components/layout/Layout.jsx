import { Outlet } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollToTopButton from "@/components/common/ScrollToTopButton";
import WhatsAppButton from "@/components/common/WhatsAppButton";
import NewsletterPopup from "@/components/common/NewsletterPopup";
import CookieBanner from "@/components/common/CookieBanner";
import ScrollRestoration from "@/components/common/ScrollRestoration";

export default function Layout() {
  return (
    <div className="relative min-h-screen bg-luxe-bg">
      <ScrollRestoration />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <ScrollToTopButton />
      <WhatsAppButton />
      <NewsletterPopup />
      <CookieBanner />
    </div>
  );
}
