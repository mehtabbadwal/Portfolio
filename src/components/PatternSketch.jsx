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
        {/* Needle body — tapered, horizontal */}
        <path
          className="needle-sketch__needle"
          d="M 10 40 C 12 38, 20 37, 50 39 C 56 39.5, 62 40, 65 40 C 62 40, 56 40.5, 50 41 C 20 43, 12 42, 10 40 Z"
          fill="none"
        />
        {/* Needle tip — sharp left point */}
        <path
          className="needle-sketch__needle-tip"
          d="M 10 40 L 4 40"
          fill="none"
        />
        {/* Needle eye — oval on right end */}
        <ellipse
          className="needle-sketch__eye"
          cx="60" cy="40" rx="5" ry="3.5"
        />

        {/* ── Thread ── */}
        {/* Exits eye, loops confidently, trails right */}
        <path
          className="needle-sketch__thread"
          d="M 65 40 C 90 40, 115 40, 135 30 C 155 20, 168 8, 185 10 C 205 12, 218 36, 205 50 C 192 64, 172 62, 162 50 C 152 38, 165 18, 182 22 C 202 28, 225 46, 265 42 C 295 39, 330 38, 400 38"
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
