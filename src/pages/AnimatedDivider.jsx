import { useEffect, useRef } from 'react';

export function AnimatedDivider() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('divider--visible');
          observer.disconnect();
        }
      },
      { threshold: 0, rootMargin: '0px 0px -80px 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return <div className="animated-divider container" ref={ref} />;
}
