import { Link } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { AnimatedDivider } from './AnimatedDivider';
import './Writing.css';

const articles = [
  {
    date: 'APR 16',
    author: 'MEHTAB BADWAL',
    readTime: 7,
    title: 'The Colleague Problem',
    description: "In enterprise software, the most common onboarding flow isn\u2019t the one you designed. It\u2019s the colleague three desks away \u2014 and that\u2019s a design signal worth reading.",
    image: '/colleague-problem.svg',
    slug: 'the-colleague-problem',
  },
  {
    date: 'MAR 1',
    author: 'MEHTAB BADWAL',
    readTime: 4,
    title: 'Stay out of the way',
    description: "Design shouldn\u2019t assume how much time a person has. It should adapt to the fact that the answer changes moment to moment.",
    image: '/stay-out-of-way.svg',
    slug: 'stay-out-of-the-way',
  },
  {
    date: 'JAN 16',
    author: 'MEHTAB BADWAL',
    readTime: 5,
    title: 'When AI Shifts Control',
    description: 'As AI becomes embedded in everyday products, something subtle shifts in the user experience: control moves quietly from human judgment to system suggestion.',
    image: '/ai-control.svg',
    slug: 'when-ai-shifts-control',
  },
  {
    date: 'OCT 21',
    author: 'MEHTAB BADWAL',
    readTime: 6,
    title: 'Designing for Dignity in Healthcare',
    description: "Healthcare design isn\u2019t just about completing tasks. It\u2019s about preserving dignity when people feel most vulnerable.",
    image: '/writing-healthcare.svg',
    slug: 'designing-for-dignity',
  },
  {
    date: 'OCT 16',
    author: 'MEHTAB BADWAL',
    readTime: 7,
    title: "Why Users Don\u2019t Say What They Feel",
    description: 'Most user research asks people what they think about an interface. But much of what drives behavior happens before thought \u2014 in instinct, rhythm, and physical reaction.',
    image: "/writing-don't-say.svg",
    slug: 'why-users-dont-say-what-they-feel',
  },
  {
    date: 'NOV 13',
    author: 'MEHTAB BADWAL',
    readTime: 5,
    title: 'The Weight of Choice',
    description: "Choice doesn\u2019t exhaust us because there are too many options. It exhausts us because each decision feels heavier than it needs to.",
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
          <p className="wp__label fade-up">Mind Meets Design</p>
          <h1 className="wp__title fade-up">
            Why people do what they do&mdash;and why design often misses it.
          </h1>
          <div className="wp__header-flex">
            <p className="wp__intro fade-up">
              It starts with observation.<br />
              Everything else follows.
            </p>
            <p className="wp__count fade-up">7 essays</p>
          </div>
        </div>
      </section>

      {/* ── Featured ── */}
      <section className="wp__featured section">
        <div className="container">
          <Link to="/blog/shadow-system-problem" className="wp__featured-card fade-up">
            <div className="wp__featured-left">
              <p className="wp__featured-label">Featured</p>
              <h2 className="wp__featured-title">The Shadow System Problem</h2>
              <p className="wp__featured-desc">
                Most product teams think shadow systems mean users don&rsquo;t
                understand the tool. Actually, shadow systems mean users understand
                it perfectly &mdash; they just understand it&rsquo;s not built for
                them.
              </p>
              <div className="wp__featured-meta">
                <span className="wp__featured-date">March 2025</span>
                <span className="wp__featured-link">Read &rarr;</span>
              </div>
            </div>
            <div className="wp__featured-right">
              <img
                src="/shadow-system.svg"
                alt="The Shadow System Problem"
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>
          </Link>
        </div>
      </section>

      {/* ── Article Grid ── */}
      <section className="wp__articles section">
        <div className="container">
          <div className="wp__articles-grid">
            {articles.map((a, i) => {
              const CardTag = a.slug ? Link : 'a';
              const cardProps = a.slug
                ? { to: `/blog/${a.slug}` }
                : { href: '#' };
              return (
              <CardTag {...cardProps} key={i} className={`wp__card fade-up stagger-${i + 1}`}>
                <div className="wp__card-image">
                  {a.image ? (
                    <img src={a.image} alt={a.title} className="wp__card-img" />
                  ) : (
                    <span>Article image</span>
                  )}
                </div>
                <div className="wp__card-body">
                  <div className="wp__card-meta">
                    <span className="wp__card-date">{a.date}</span>
                    <span className="wp__card-dot" />
                    <span className="wp__card-date">{a.author}</span>
                    <span className="wp__card-dot" />
                    <span className="wp__card-date">{a.readTime} min read</span>
                  </div>
                  <h3 className="wp__card-title">{a.title}</h3>
                  <p className="wp__card-desc">{a.description}</p>
                </div>
              </CardTag>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── About Section ── */}
      <section className="wp__about section">
        <div className="container">
          <AnimatedDivider />
          <div className="wp__about-flex">
            <div className="wp__about-left fade-up">
              <p className="wp__label">About Mind Meets Design</p>
              <p className="wp__about-body">
                I write when something I notice in daily life connects to something
                I&rsquo;ve been thinking about in design. It&rsquo;s not a content strategy.
                It&rsquo;s just what happens when you pay attention.
              </p>
            </div>
            <div className="wp__about-stats fade-up">
              <div className="wp__stat">
                <span className="wp__stat-value">7</span>
                <span className="wp__stat-label">essays published</span>
              </div>
              <div className="wp__stat">
                <span className="wp__stat-value">2026</span>
                <span className="wp__stat-label">writing since</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Writing;
