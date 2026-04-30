import { useState, useEffect } from 'react';
import './SideStepper.css';

const sections = [
  { id: 'approach', number: '01', label: 'Approach', dark: false },
  { id: 'selected-work', number: '02', label: 'Work', dark: false },
  { id: 'practice', number: '03', label: 'Practice', dark: false },
  { id: 'people', number: '04', label: 'People', dark: true },
  { id: 'writing', number: '05', label: 'Writing', dark: true },
  { id: 'connect', number: '06', label: 'Connect', dark: false },
];

function SideStepper() {
  const [activeId, setActiveId] = useState(sections[0].id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-40% 0px -40% 0px',
        threshold: 0,
      }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const activeSection = sections.find((s) => s.id === activeId);
  const isDark = activeSection?.dark || false;

  return (
    <nav
      className={`side-stepper ${isDark ? 'side-stepper--dark' : ''}`}
      aria-label="Page sections"
    >
      {sections.map(({ id, number, label }) => (
        <button
          key={id}
          className={`side-stepper__step ${activeId === id ? 'is-active' : ''}`}
          onClick={() => scrollTo(id)}
          aria-label={`Go to ${label}`}
          aria-current={activeId === id ? 'true' : undefined}
          type="button"
        >
          <span className="side-stepper__line" aria-hidden="true" />
          <span className="side-stepper__label">
            {number} &middot; {label.toUpperCase()}
          </span>
        </button>
      ))}
    </nav>
  );
}

export default SideStepper;
