import { useEffect, useRef } from 'react';

export function HandSystemSketch() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('hand-sketch--visible');
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="hand-sketch" ref={ref} aria-hidden="true">
      <svg viewBox="0 0 260 140" width="260" height="140" xmlns="http://www.w3.org/2000/svg">

        {/* ── Grid (right side, crisp) ── */}
        <line className="hand-sketch__grid hand-sketch__grid--v1" x1="175" y1="25" x2="175" y2="115" />
        <line className="hand-sketch__grid hand-sketch__grid--v2" x1="205" y1="25" x2="205" y2="115" />
        <line className="hand-sketch__grid hand-sketch__grid--v3" x1="235" y1="25" x2="235" y2="115" />
        <line className="hand-sketch__grid hand-sketch__grid--h1" x1="175" y1="25" x2="235" y2="25" />
        <line className="hand-sketch__grid hand-sketch__grid--h2" x1="175" y1="55" x2="235" y2="55" />
        <line className="hand-sketch__grid hand-sketch__grid--h3" x1="175" y1="85" x2="235" y2="85" />
        <line className="hand-sketch__grid hand-sketch__grid--h4" x1="175" y1="115" x2="235" y2="115" />

        {/* ── Hand (left side, sketchy) ── */}
        {/* Palm base */}
        <path className="hand-sketch__hand hand-sketch__hand--1"
          d="M 20 115 C 18 95, 20 78, 28 68 C 34 60, 42 58, 48 62"
          fill="none" />

        {/* Thumb */}
        <path className="hand-sketch__hand hand-sketch__hand--2"
          d="M 28 80 C 22 72, 20 60, 26 54 C 30 50, 36 52, 38 58"
          fill="none" />

        {/* Index finger */}
        <path className="hand-sketch__hand hand-sketch__hand--3"
          d="M 48 62 C 46 48, 50 30, 58 26 C 64 23, 70 28, 70 42 L 68 65"
          fill="none" />

        {/* Middle finger */}
        <path className="hand-sketch__hand hand-sketch__hand--4"
          d="M 68 65 C 68 48, 72 26, 82 22 C 90 19, 96 26, 95 42 L 93 68"
          fill="none" />

        {/* Ring finger */}
        <path className="hand-sketch__hand hand-sketch__hand--5"
          d="M 93 68 C 93 52, 96 34, 105 30 C 113 27, 118 34, 116 50 L 113 72"
          fill="none" />

        {/* Pinky */}
        <path className="hand-sketch__hand hand-sketch__hand--6"
          d="M 113 72 C 114 58, 118 44, 126 42 C 132 40, 136 46, 134 58 L 130 75"
          fill="none" />

        {/* Palm close — connects fingers back to base */}
        <path className="hand-sketch__hand hand-sketch__hand--7"
          d="M 130 75 C 138 85, 140 98, 135 115 L 20 115"
          fill="none" />

        {/* Gap indicator — small terracotta dot in the space between */}
        <circle className="hand-sketch__dot" cx="155" cy="70" r="3" />

      </svg>
    </div>
  );
}
