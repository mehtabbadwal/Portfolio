import { useEffect, useRef } from 'react';

export function WaveSketch() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('wave-sketch--visible');
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="wave-sketch" ref={ref} aria-hidden="true">
      <svg viewBox="0 0 320 50" width="320" height="50" xmlns="http://www.w3.org/2000/svg">
        <path
          className="wave-sketch__line"
          d="M 0 32 C 20 18, 40 42, 60 32 C 80 22, 100 42, 120 30 C 140 18, 160 38, 180 28 C 200 18, 220 40, 240 30 C 260 20, 280 38, 300 28 C 310 23, 316 26, 320 28"
          fill="none"
        />
      </svg>
    </div>
  );
}
