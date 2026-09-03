import { useRef, useState, useCallback } from "react";
import { MoveHorizontal } from "lucide-react";

// Before/after image comparison with perfect alignment (clip-path overlay, no layout shift).
export default function BeforeAfter({ before, after, beforeLabel = "Before", afterLabel = "After" }) {
  const [pos, setPos] = useState(50);
  const containerRef = useRef(null);
  const dragging = useRef(false);

  const setFromClientX = useCallback((clientX) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, pct)));
  }, []);

  const onDown = (e) => {
    dragging.current = true;
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    setFromClientX(clientX);
  };
  const onUp = () => (dragging.current = false);
  const onMove = (e) => {
    if (!dragging.current) return;
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    setFromClientX(clientX);
  };
  const onKey = (e) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      setPos((p) => Math.max(0, p - 4));
    }
    if (e.key === "ArrowRight") {
      e.preventDefault();
      setPos((p) => Math.min(100, p + 4));
    }
    if (e.key === "Home") {
      e.preventDefault();
      setPos(0);
    }
    if (e.key === "End") {
      e.preventDefault();
      setPos(100);
    }
  };

  return (
    <div
      ref={containerRef}
      data-testid="before-after-slider"
      className="relative aspect-[16/10] w-full touch-none select-none overflow-hidden"
      onMouseMove={onMove}
      onMouseUp={onUp}
      onMouseLeave={onUp}
      onTouchMove={onMove}
      onTouchEnd={onUp}
    >
      {/* After image (base) */}
      <img
        src={after}
        alt={afterLabel + " — renovated interior"}
        className="absolute inset-0 h-full w-full object-cover"
        draggable="false"
      />
      <span className="pointer-events-none absolute right-5 top-5 z-10 bg-white/85 px-3 py-1 text-xs font-medium uppercase tracking-[0.15em] text-luxe-ink backdrop-blur">
        {afterLabel}
      </span>

      {/* Before image (clipped overlay, identical dimensions) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      >
        <img
          src={before}
          alt={beforeLabel + " — original interior"}
          className="absolute inset-0 h-full w-full object-cover"
          draggable="false"
        />
        <span className="pointer-events-none absolute left-5 top-5 z-10 bg-luxe-ink/80 px-3 py-1 text-xs font-medium uppercase tracking-[0.15em] text-white backdrop-blur">
          {beforeLabel}
        </span>
      </div>

      {/* Divider + handle */}
      <div className="pointer-events-none absolute inset-y-0 z-20" style={{ left: `${pos}%` }}>
        <div className="absolute inset-y-0 -left-px w-0.5 bg-white" />
        <div
          data-testid="before-after-handle"
          role="slider"
          tabIndex={0}
          aria-label="Drag to compare before and after"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(pos)}
          onMouseDown={onDown}
          onTouchStart={onDown}
          onKeyDown={onKey}
          className="pointer-events-auto absolute top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize items-center justify-center rounded-full bg-white text-luxe-ink shadow-lg focus:outline-none focus:ring-2 focus:ring-luxe-gold focus:ring-offset-2"
        >
          <MoveHorizontal className="h-5 w-5" />
        </div>
      </div>
    </div>
  );
}
