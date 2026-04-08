import { useEffect, useRef } from 'react';

export function PatternSketch() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('thread-sketch--visible');
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="thread-sketch" ref={ref} aria-hidden="true">
      <svg viewBox="0 0 320 80" width="320" height="80" xmlns="http://www.w3.org/2000/svg">
        <path
          className="thread-sketch__line"
          d="M 0 55 C 18 55, 28 38, 45 42 C 62 46, 68 62, 85 58 C 102 54, 108 35, 128 38 C 148 41, 155 65, 172 60 C 186 56, 188 40, 200 40 C 220 40, 240 44, 280 42 C 295 41, 308 40, 320 40"
          fill="none"
        />
      </svg>
    </div>
  );
}
