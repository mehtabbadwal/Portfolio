import { Link } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Writing.css';

const articles = [
  {
    year: '2026',
    date: 'MAY 5',
    author: 'MEHTAB BADWAL',
    readTime: 7,
    title: 'The Stickiness Trap',
    description: "High retention in B2B is not the same thing as high satisfaction. It’s simply evidence that the switching cost exceeded the pain threshold — for now.",
    image: '/the-stickiness-trap.svg',
    slug: 'the-stickiness-trap',
  },
  {
    year: '2026',
    date: 'APR 16',
    readTime: 7,
    title: 'The Colleague Problem',
    description: "In enterprise software, the most common onboarding flow isn't the one you designed. It's the colleague three desks away — and that's a design signal worth reading.",
    image: '/colleague-problem.svg',
    slug: 'the-colleague-problem',
  },
  {
    year: '2026',
    date: 'MAR 15',
    readTime: 6,
    title: 'The Shadow System Problem',
    description: "Most product teams think shadow systems mean users don't understand the tool. Actually, shadow systems mean users understand it perfectly — they just understand it's not built for them.",
    image: '/shadow-system.svg',
    slug: 'shadow-system-problem',
  },
  {
    year: '2026',
    date: 'MAR 1',
    readTime: 4,
    title: 'Stay out of the way',
    description: "Design shouldn't assume how much time a person has. It should adapt to the fact that the answer changes moment to moment.",
    image: '/stay-out-of-way.svg',
    slug: 'stay-out-of-the-way',
  },
  {
    year: '2026',
    date: 'JAN 16',
    readTime: 5,
    title: 'When AI Shifts Control',
    description: 'As AI becomes embedded in everyday products, something subtle shifts in the user experience: control moves quietly from human judgment to system suggestion.',
    image: '/ai-control.svg',
    slug: 'when-ai-shifts-control',
  },
  {
    year: '2025',
    date: 'OCT 21',
    readTime: 6,
    title: 'Designing for Dignity in Healthcare',
    description: "Healthcare design isn't just about completing tasks. It's about preserving dignity when people feel most vulnerable.",
    image: '/writing-healthcare.svg',
    slug: 'designing-for-dignity',
  },
  {
    year: '2025',
    date: 'OCT 16',
    readTime: 7,
    title: "Why Users Don't Say What They Feel",
    description: 'Most user research asks people what they think about an interface. But much of what drives behavior happens before thought — in instinct, rhythm, and physical reaction.',
    image: "/writing-don't-say.svg",
    slug: 'why-users-dont-say-what-they-feel',
  },
  {
    year: '2025',
    date: 'NOV 13',
    readTime: 5,
    title: 'The Weight of Choice',
    description: "Choice doesn't exhaust us because there are too many options. It exhausts us because each decision feels heavier than it needs to.",
    image: '/writing-weight-choice.svg',
    slug: 'the-weight-of-choice',
  },
];

function Writing() {
  const pageRef = useScrollReveal();

  return (
    <div className="writing-page" ref={pageRef}>

      {/* ── Header ── */}
      <section className="wp__header section">
        <div className="container">
          <div className="wp__section-header fade-up">
            <p className="section-label">Mind Meets Design</p>
            <span className="section-rule" aria-hidden="true" />
          </div>
          <h1 className="wp__title fade-up">
            It starts with observation.{' '}
            <span className="wp__title--accent">Everything else follows.</span>
          </h1>
          <div className="wp__header-flex">
            <p className="wp__intro fade-up">
              I write when something I notice in daily life connects to something
              I&rsquo;ve been thinking about in design. It&rsquo;s not a content
              strategy. It&rsquo;s just what happens when you pay attention.
            </p>
            <p className="wp__count fade-up">{articles.length} essays</p>
          </div>
        </div>
      </section>

      {/* ── Article List ── */}
      <section className="wp__articles section">
        <div className="container">
          <div className="wp__list">
            {articles.map((a, i) => (
              <Link
                key={i}
                to={`/blog/${a.slug}`}
                className={`wp__row fade-up stagger-${Math.min(i + 1, 6)}`}
              >
                <div className="wp__row-image">
                  <img src={a.image} alt={a.title} className="wp__row-img" />
                </div>
                <div className="wp__row-body">
                  <p className="wp__row-meta">
                    <span className="wp__row-year">{a.year}</span>
                    <span className="wp__row-sep" aria-hidden="true">&middot;</span>
                    <span className="wp__row-date">{a.date}</span>
                    <span className="wp__row-sep" aria-hidden="true">&middot;</span>
                    <span className="wp__row-read">{a.readTime} min read</span>
                  </p>
                  <h3 className="wp__row-title">{a.title}</h3>
                  <p className="wp__row-desc">{a.description}</p>
                </div>
                <span className="wp__row-cta" aria-hidden="true">Read &rarr;</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}

export default Writing;
