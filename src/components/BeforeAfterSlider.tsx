import { useCallback, useRef, useState } from "react";
import type { PointerEvent as ReactPointerEvent, KeyboardEvent as ReactKeyboardEvent } from "react";
import type { BeforeAfterPair } from "../data/beforeAfter";

/** Comparador visual antes/depois com arraste (funciona por toque no mobile). */
export function BeforeAfterSlider({ pair }: { pair: BeforeAfterPair }) {
  const [pos, setPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const updateFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(100, Math.max(0, pct)));
  }, []);

  const handlePointerDown = (event: ReactPointerEvent) => {
    dragging.current = true;
    event.currentTarget.setPointerCapture(event.pointerId);
    updateFromClientX(event.clientX);
  };

  const handlePointerMove = (event: ReactPointerEvent) => {
    if (dragging.current) updateFromClientX(event.clientX);
  };

  const stopDragging = () => {
    dragging.current = false;
  };

  const handleKeyDown = (event: ReactKeyboardEvent) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      setPos((p) => Math.max(0, p - 5));
    }
    if (event.key === "ArrowRight") {
      event.preventDefault();
      setPos((p) => Math.min(100, p + 5));
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative aspect-[4/3] w-full select-none overflow-hidden rounded-2xl shadow-lg"
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={stopDragging}
      onPointerLeave={stopDragging}
      onKeyDown={handleKeyDown}
      role="slider"
      aria-label={`Comparativo antes e depois: ${pair.title}`}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(pos)}
      tabIndex={0}
    >
      <img
        src={pair.after}
        alt={pair.altAfter}
        aria-hidden="true"
        draggable={false}
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      >
        <img
          src={pair.before}
          alt={pair.altBefore}
          draggable={false}
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
        />
      </div>

      <div aria-hidden="true" className="absolute inset-y-0" style={{ left: `${pos}%` }}>
        <div className="absolute inset-y-0 -left-px w-0.5 bg-white/90" />
        <div className="absolute top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-deep shadow-md">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5"
          >
            <path d="m9 8-4 4 4 4" />
            <path d="m15 8 4 4-4 4" />
          </svg>
        </div>
      </div>

      <span className="pointer-events-none absolute left-4 top-4 rounded-full bg-deep/70 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
        Antes
      </span>
      <span className="pointer-events-none absolute right-4 top-4 rounded-full bg-white/85 px-3 py-1 text-xs font-semibold text-deep backdrop-blur-sm">
        Depois
      </span>
    </div>
  );
}