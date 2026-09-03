import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Toaster } from "@/components/ui/sonner";
import "@/index.css";

import SmoothScroll from "@/components/common/SmoothScroll";
import PageLoader from "@/components/common/PageLoader";
import RouteMeta from "@/components/common/RouteMeta";
import Layout from "@/components/layout/Layout";
import Home from "@/pages/Home";

// Code-split below-the-fold routes for a lighter initial bundle.
const About = lazy(() => import("@/pages/About"));
const Services = lazy(() => import("@/pages/Services"));
const Portfolio = lazy(() => import("@/pages/Portfolio"));
const ProjectDetail = lazy(() => import("@/pages/ProjectDetail"));
const Team = lazy(() => import("@/pages/Team"));
const Pricing = lazy(() => import("@/pages/Pricing"));
const Testimonials = lazy(() => import("@/pages/Testimonials"));
const Blog = lazy(() => import("@/pages/Blog"));
const BlogDetail = lazy(() => import("@/pages/BlogDetail"));
const FAQ = lazy(() => import("@/pages/FAQ"));
const Contact = lazy(() => import("@/pages/Contact"));
const NotFound = lazy(() => import("@/pages/NotFound"));

function Page({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}

function RouteFallback() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-luxe-bg" aria-busy="true">
      <span className="font-display text-2xl md:text-3xl tracking-tight text-luxe-ink">
        MONIS SOLUTION
      </span>
    </div>
  );
}

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route element={<Layout />}>
          <Route index element={<Page><Home /></Page>} />
          <Route path="about" element={<Page><Suspense fallback={<RouteFallback />}><About /></Suspense></Page>} />
          <Route path="services" element={<Page><Suspense fallback={<RouteFallback />}><Services /></Suspense></Page>} />
          <Route path="portfolio" element={<Page><Suspense fallback={<RouteFallback />}><Portfolio /></Suspense></Page>} />
          <Route path="portfolio/:slug" element={<Page><Suspense fallback={<RouteFallback />}><ProjectDetail /></Suspense></Page>} />
          <Route path="team" element={<Page><Suspense fallback={<RouteFallback />}><Team /></Suspense></Page>} />
          <Route path="pricing" element={<Page><Suspense fallback={<RouteFallback />}><Pricing /></Suspense></Page>} />
          <Route path="testimonials" element={<Page><Suspense fallback={<RouteFallback />}><Testimonials /></Suspense></Page>} />
          <Route path="blog" element={<Page><Suspense fallback={<RouteFallback />}><Blog /></Suspense></Page>} />
          <Route path="blog/:slug" element={<Page><Suspense fallback={<RouteFallback />}><BlogDetail /></Suspense></Page>} />
          <Route path="faq" element={<Page><Suspense fallback={<RouteFallback />}><FAQ /></Suspense></Page>} />
          <Route path="contact" element={<Page><Suspense fallback={<RouteFallback />}><Contact /></Suspense></Page>} />
          <Route path="*" element={<Page><Suspense fallback={<RouteFallback />}><NotFound /></Suspense></Page>} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <div className="App">
      <PageLoader />
      <BrowserRouter>
        <RouteMeta />
        <SmoothScroll>
          <AnimatedRoutes />
        </SmoothScroll>
      </BrowserRouter>
      <Toaster position="bottom-right" />
    </div>
  );
}

export default App;
