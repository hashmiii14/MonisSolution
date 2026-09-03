import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { PROJECTS, BLOG_POSTS } from "@/data/content";

const BASE = "https://design-showcase-live-2.preview.emergentagent.com";
const SITE = "LUXE INTERIORS";

const META = {
  "/": {
    title: "LUXE INTERIORS — Timeless Luxury Interior Design Studio",
    desc: "Award-winning luxury interior design studio crafting timeless residential, commercial and hospitality spaces across London, New York and Milan.",
  },
  "/about": { title: `About Us — ${SITE}`, desc: "For nearly two decades LUXE INTERIORS has designed interiors that balance architectural rigour with deep human warmth. Discover our story, mission and values." },
  "/services": { title: `Interior Design Services — ${SITE}`, desc: "Full-service interior design: residential, commercial, luxury villas, hospitality, kitchens, lighting, FF&E, renovation and 3D visualisation." },
  "/portfolio": { title: `Portfolio — ${SITE}`, desc: "Explore our portfolio of quietly bold residential, commercial and hospitality interiors delivered across three continents." },
  "/team": { title: `Our Team — ${SITE}`, desc: "Meet the designers, architects and makers behind LUXE INTERIORS — a close-knit team united by an obsession with craft." },
  "/pricing": { title: `Pricing & Packages — ${SITE}`, desc: "Transparent interior design packages in INR — Starter, Premium, Luxury and Enterprise — with a clear comparison of what's included." },
  "/testimonials": { title: `Client Testimonials — ${SITE}`, desc: "Read what homeowners, hoteliers and businesses say about working with LUXE INTERIORS." },
  "/blog": { title: `The LUXE Journal — Interior Design Insights`, desc: "Design notes, guides and stories on luxury interiors, materials, lighting and living well from the LUXE INTERIORS studio." },
  "/faq": { title: `FAQ — ${SITE}`, desc: "Answers to frequently asked questions about working with LUXE INTERIORS: process, pricing, timelines and more." },
  "/contact": { title: `Contact — ${SITE}`, desc: "Start a conversation with LUXE INTERIORS. Tell us about your space and book a complimentary discovery call." },
};

function setMeta(name, content, attr = "name") {
  let el = document.querySelector(`meta[${attr}="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setCanonical(href) {
  let el = document.querySelector('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

export default function RouteMeta() {
  const { pathname } = useLocation();

  useEffect(() => {
    let meta = META[pathname];

    if (!meta && pathname.startsWith("/portfolio/")) {
      const slug = pathname.split("/")[2];
      const p = PROJECTS.find((x) => x.slug === slug);
      if (p) meta = { title: `${p.title} — ${SITE}`, desc: p.overview };
    }
    if (!meta && pathname.startsWith("/blog/")) {
      const slug = pathname.split("/")[2];
      const b = BLOG_POSTS.find((x) => x.slug === slug);
      if (b) meta = { title: `${b.title} — ${SITE}`, desc: b.excerpt };
    }
    if (!meta) meta = { title: `Page Not Found — ${SITE}`, desc: "The page you're looking for could not be found." };

    document.title = meta.title;
    setMeta("description", meta.desc);
    setMeta("og:title", meta.title, "property");
    setMeta("og:description", meta.desc, "property");
    setMeta("og:url", BASE + pathname, "property");
    setMeta("twitter:title", meta.title);
    setMeta("twitter:description", meta.desc);
    setCanonical(BASE + pathname);
  }, [pathname]);

  return null;
}
