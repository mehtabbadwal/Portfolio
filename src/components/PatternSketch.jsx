import { useEffect, useRef } from 'react';

export function PatternSketch() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('pattern-sketch--visible');
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="pattern-sketch" ref={ref} aria-hidden="true">
      <svg viewBox="0 0 260 155" width="260" height="155" xmlns="http://www.w3.org/2000/svg">

        {/* Main sleeve cap outline */}
        <path
          className="pattern-sketch__outline"
          d="M 35 140 C 32 110, 28 85, 42 58 C 58 28, 100 8, 130 6 C 160 8, 202 28, 218 58 C 232 85, 228 110, 225 140 L 35 140 Z"
          fill="none"
        />

        {/* Grain line — vertical center arrow */}
        <line className="pattern-sketch__grain" x1="130" y1="28" x2="130" y2="125" />
        {/* Arrow heads */}
        <polyline className="pattern-sketch__arrow" points="124,38 130,26 136,38" fill="none" />
        <polyline className="pattern-sketch__arrow" points="124,115 130,127 136,115" fill="none" />

        {/* Notch mark on left seam */}
        <line className="pattern-sketch__notch" x1="38" y1="90" x2="50" y2="87" />

        {/* Notch mark on right seam */}
        <line className="pattern-sketch__notch" x1="222" y1="90" x2="210" y2="87" />

        {/* Corner fold marks — bottom left */}
        <line className="pattern-sketch__fold" x1="35" y1="130" x2="48" y2="130" />
        <line className="pattern-sketch__fold" x1="35" y1="130" x2="35" y2="143" />

        {/* Corner fold marks — bottom right */}
        <line className="pattern-sketch__fold" x1="225" y1="130" x2="212" y2="130" />
        <line className="pattern-sketch__fold" x1="225" y1="130" x2="225" y2="143" />

      </svg>
    </div>
  );
}
