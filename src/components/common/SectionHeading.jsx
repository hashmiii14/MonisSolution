import Reveal from "@/components/common/Reveal";

// Reusable editorial section heading with overline + title.
export default function SectionHeading({
  overline,
  title,
  subtitle,
  align = "left",
  light = false,
  className = "",
}) {
  const alignCls = align === "center" ? "text-center mx-auto items-center" : "text-left items-start";
  return (
    <Reveal className={`flex max-w-3xl flex-col ${alignCls} ${className}`}>
      {overline && <p className="overline mb-4">{overline}</p>}
      <h2
        className={`font-display text-3xl md:text-4xl lg:text-5xl leading-[1.1] tracking-tight ${
          light ? "text-white" : "text-luxe-ink"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-5 text-base md:text-lg leading-relaxed ${light ? "text-white/70" : "text-luxe-soft"}`}>
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
