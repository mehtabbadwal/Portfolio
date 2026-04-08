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
      <svg viewBox="0 0 180 220" width="180" height="220" xmlns="http://www.w3.org/2000/svg">

        {/* Center front — straight left edge */}
        <line className="pattern-sketch__outline pattern-sketch__outline--1"
          x1="30" y1="30" x2="30" y2="195" />

        {/* Neckline — curves from center front up to shoulder */}
        <path className="pattern-sketch__outline pattern-sketch__outline--2"
          d="M 30 30 C 30 20, 52 14, 75 18"
          fill="none" />

        {/* Shoulder seam — angled line to armhole */}
        <line className="pattern-sketch__outline pattern-sketch__outline--3"
          x1="75" y1="18" x2="130" y2="42" />

        {/* Armscye — armhole curve sweeping down */}
        <path className="pattern-sketch__outline pattern-sketch__outline--4"
          d="M 130 42 C 148 58, 150 88, 142 115"
          fill="none" />

        {/* Side seam — slight inward curve */}
        <path className="pattern-sketch__outline pattern-sketch__outline--5"
          d="M 142 115 C 138 145, 134 168, 132 195"
          fill="none" />

        {/* Waist line — bottom */}
        <line className="pattern-sketch__outline pattern-sketch__outline--6"
          x1="30" y1="195" x2="132" y2="195" />

        {/* Grain line */}
        <line className="pattern-sketch__grain"
          x1="80" y1="55" x2="80" y2="175" />

        {/* Grain arrow top */}
        <polyline className="pattern-sketch__arrow pattern-sketch__arrow--1"
          points="75,65 80,53 85,65" fill="none" />

        {/* Grain arrow bottom */}
        <polyline className="pattern-sketch__arrow pattern-sketch__arrow--2"
          points="75,165 80,177 85,165" fill="none" />

        {/* Shoulder notch — terracotta */}
        <line className="pattern-sketch__notch"
          x1="100" y1="29" x2="103" y2="36" />

        {/* Side seam notch — terracotta */}
        <line className="pattern-sketch__notch"
          x1="142" y1="115" x2="134" y2="116" />

        {/* Corner seam allowance marks — bottom left */}
        <line className="pattern-sketch__fold" x1="30" y1="185" x2="40" y2="185" />
        <line className="pattern-sketch__fold" x1="30" y1="185" x2="30" y2="197" />

      </svg>
    </div>
  );
}
