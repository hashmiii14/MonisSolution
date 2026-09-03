import { Diamond } from "lucide-react";

// Slow editorial marquee. Alternating solid + outlined Playfair text.
export default function Marquee({ words = [], className = "" }) {
  const row = [...words, ...words];
  return (
    <div className={`relative overflow-hidden py-6 ${className}`} aria-hidden="true">
      <div className="flex w-max animate-marquee whitespace-nowrap">
        {row.map((word, i) => (
          <span key={i} className="flex items-center">
            <span
              className={`font-display text-5xl md:text-7xl lg:text-8xl leading-none px-6 md:px-10 ${
                i % 2 === 1 ? "marquee-outline" : "text-luxe-ink"
              }`}
            >
              {word}
            </span>
            <Diamond className="h-5 w-5 md:h-7 md:w-7 shrink-0 text-luxe-gold" strokeWidth={1} />
          </span>
        ))}
      </div>
    </div>
  );
}
