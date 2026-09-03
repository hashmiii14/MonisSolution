import { useParams, Link } from "react-router-dom";
import { Clock, ArrowLeft, ArrowRight } from "lucide-react";
import PageHero from "@/components/common/PageHero";
import Reveal from "@/components/common/Reveal";
import NotFound from "@/pages/NotFound";
import { BLOG_POSTS } from "@/data/content";

const BODY = [
  "In luxury interiors, the difference between a good room and an unforgettable one rarely lies in a single grand gesture. It lives in the accumulation of small, deliberate decisions — the weight of a door handle, the temperature of the light at dusk, the way a rug meets the floor. This is where our studio spends most of its time.",
  "We begin every project by listening. Before a single material is specified, we want to understand how you move through your day: where you pause with coffee, how you host, what you collect, which view you love most. Only then does design begin, translating those rituals into space, proportion and light.",
  "Material is our language. We favour honest, tactile surfaces that improve with age — natural stone with real veining, timber that patinates, plaster troweled by hand. These are not finishes chosen for a photograph; they are chosen for the decades of living that follow.",
  "The result, we hope, is a space that feels less designed and more discovered — as though it could not have been any other way. That sense of quiet inevitability is the truest mark of luxury, and it is what we chase in every commission.",
];

export default function BlogDetail() {
  const { slug } = useParams();
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return <NotFound />;

  const related = BLOG_POSTS.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <div>
      <PageHero
        overline={post.category}
        title={post.title}
        image={post.image}
        crumbs={[{ label: "Journal", to: "/blog" }, { label: post.title }]}
      />

      <article className="luxe-container max-w-3xl py-24 md:py-32">
        <div className="mb-10 flex items-center gap-4 border-b border-luxe-border pb-8 text-sm text-luxe-muted">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-luxe-gold/15 font-display text-luxe-gold">
            {post.author.charAt(0)}
          </div>
          <div>
            <p className="font-medium text-luxe-ink">{post.author}</p>
            <p className="flex items-center gap-2">
              {post.date} <span>·</span> <Clock className="h-3.5 w-3.5" /> {post.readTime}
            </p>
          </div>
        </div>

        <Reveal>
          <p className="font-display text-2xl leading-relaxed text-luxe-ink">{post.excerpt}</p>
        </Reveal>

        <div className="mt-8 space-y-6 leading-relaxed text-luxe-soft">
          {BODY.map((p, i) => (
            <Reveal key={i} delay={i * 0.04}>
              <p>{p}</p>
            </Reveal>
          ))}
          <Reveal>
            <blockquote className="my-10 border-l-2 border-luxe-gold pl-6 font-display text-2xl italic text-luxe-ink">
              “True luxury is a feeling of ease — the sense that everything is exactly where it should be.”
            </blockquote>
          </Reveal>
          <Reveal>
            <img src={post.image} alt={post.title} loading="lazy" className="my-6 w-full object-cover" />
          </Reveal>
        </div>

        <div className="mt-12 flex flex-wrap gap-2">
          {["Design", post.category, "Luxury", "Studio Notes"].map((t) => (
            <span key={t} className="border border-luxe-border px-4 py-1.5 text-xs uppercase tracking-[0.1em] text-luxe-soft">
              {t}
            </span>
          ))}
        </div>
      </article>

      {/* Related */}
      <section className="bg-luxe-cream py-24 md:py-32">
        <div className="luxe-container">
          <h2 className="mb-12 font-display text-3xl text-luxe-ink md:text-4xl">Related reading</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {related.map((p) => (
              <Link key={p.slug} to={`/blog/${p.slug}`} className="group block">
                <div className="overflow-hidden">
                  <img src={p.image} alt={p.title} loading="lazy" className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <p className="overline mt-4 mb-2">{p.category}</p>
                <h3 className="font-display text-xl text-luxe-ink transition-colors group-hover:text-luxe-gold">{p.title}</h3>
              </Link>
            ))}
          </div>
          <div className="mt-14 flex justify-between border-t border-luxe-border pt-8">
            <Link to="/blog" className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.15em] text-luxe-ink link-underline">
              <ArrowLeft className="h-4 w-4" /> All Articles
            </Link>
            <Link to="/contact" className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.15em] text-luxe-gold link-underline">
              Work With Us <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
