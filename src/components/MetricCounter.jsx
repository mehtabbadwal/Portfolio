import { useEffect, useRef, useState } from 'react';

// Parses "32%", "+40%", "3x", "2 min", "6 wks" into { prefix, number, suffix }
// Returns null for non-numeric values like "Eliminated", "Live"
function parse(value) {
  const match = String(value).match(/^([+\-]?)(\d+(?:\.\d+)?)(.*)/);
  if (!match) return null;
  return { prefix: match[1], number: parseFloat(match[2]), suffix: match[3] };
}

export function MetricCounter({ value, className }) {
  const parts = parse(value);
  const ref = useRef(null);
  const [display, setDisplay] = useState(parts ? `${parts.prefix}0${parts.suffix}` : value);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!parts) return;
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasAnimated.current) return;
        hasAnimated.current = true;
        observer.disconnect();

        const duration = 900;
        const start = performance.now();
        const target = parts.number;

        const tick = (now) => {
          const elapsed = now - start;
          const progress = Math.min(elapsed / duration, 1);
          // ease-out cubic
          const eased = 1 - Math.pow(1 - progress, 3);
          const current = target % 1 === 0
            ? Math.round(eased * target)
            : Math.round(eased * target * 10) / 10;
          setDisplay(`${parts.prefix}${current}${parts.suffix}`);
          if (progress < 1) requestAnimationFrame(tick);
        };

        requestAnimationFrame(tick);
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return <span ref={ref} className={className}>{display}</span>;
}
