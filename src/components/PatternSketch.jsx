import { useEffect, useRef } from 'react';

export function PatternSketch() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('needle-sketch--visible');
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="needle-sketch" ref={ref} aria-hidden="true">
      <svg viewBox="0 0 400 80" width="400" height="80" xmlns="http://www.w3.org/2000/svg">

        {/* ── Needle ── */}
        {/* Needle body — long tapered shape */}
        <path
          className="needle-sketch__needle"
          d="M 2 40 L 72 38.5 L 72 41.5 L 2 40 Z"
          fill="none"
        />

        {/* Needle sharp tip */}
        <path
          className="needle-sketch__needle-tip"
          d="M 2 40 L 0 40"
          fill="none"
        />

        {/* Needle eye — clear oval cutout near right end */}
        <ellipse
          className="needle-sketch__eye"
          cx="64" cy="40" rx="6" ry="4"
        />

        {/* ── Thread ── */}
        {/* Thread exits from eye */}
        <path
          className="needle-sketch__thread"
          d="M 70 40 C 95 40, 118 40, 138 30 C 158 20, 170 8, 187 10 C 207 12, 220 36, 207 50 C 194 64, 174 62, 164 50 C 154 38, 167 18, 184 22 C 204 28, 228 46, 268 42 C 298 39, 332 38, 400 38"
          fill="none"
        />

        {/* Knot dot — where thread crosses itself */}
        <circle className="needle-sketch__knot" cx="183" cy="36" r="2.5" />

        {/* ── Tap ripple ── */}
        {/* Outer ripple */}
        <circle className="needle-sketch__ripple needle-sketch__ripple--outer" cx="355" cy="40" r="16" fill="none" />
        {/* Inner ripple */}
        <circle className="needle-sketch__ripple needle-sketch__ripple--inner" cx="355" cy="40" r="9" fill="none" />
        {/* Center tap dot */}
        <circle className="needle-sketch__tap" cx="355" cy="40" r="3" />

      </svg>
    </div>
  );
}
