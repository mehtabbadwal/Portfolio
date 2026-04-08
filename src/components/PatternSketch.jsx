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
        {/* Needle body — tapers to sharp left point, wider blunt right end */}
        <path
          className="needle-sketch__needle"
          d="M 5 40 C 8 40, 30 38, 58 37.5 C 64 37.5, 72 38, 75 40 C 72 42, 64 42.5, 58 42.5 C 30 42, 8 40, 5 40 Z"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Needle eye — small oval sitting inside the body near right end */}
        <ellipse
          className="needle-sketch__eye"
          cx="64" cy="40" rx="3.5" ry="2"
        />

        {/* ── Thread — exits eye, loops into teardrop, trails right ── */}
        <path
          className="needle-sketch__thread"
          d="M 75 40 C 95 40, 112 40, 128 32 C 144 24, 152 12, 165 14 C 180 16, 188 34, 178 46 C 168 58, 152 56, 148 46 C 144 36, 154 20, 168 24 C 185 30, 205 44, 240 41 C 280 38, 330 38, 400 38"
          fill="none"
        />

        {/* Knot dot */}
        <circle className="needle-sketch__knot" cx="164" cy="34" r="2.5" />

        {/* ── Tap ripple ── */}
        <circle className="needle-sketch__ripple needle-sketch__ripple--outer" cx="355" cy="40" r="14" fill="none" />
        <circle className="needle-sketch__ripple needle-sketch__ripple--inner" cx="355" cy="40" r="7" fill="none" />
        <circle className="needle-sketch__tap" cx="355" cy="40" r="3" />

      </svg>
    </div>
  );
}
