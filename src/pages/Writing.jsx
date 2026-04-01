import { useScrollReveal } from '../hooks/useScrollReveal';
import './Writing.css';

const articles = [
  {
    date: 'JAN 16',
    author: 'MEHTAB BADWAL',
    readTime: 5,
    title: 'When AI Shifts Control',
    description: 'As AI becomes embedded in everyday products, something subtle shifts in the user experience: control moves quietly from human judgment to system suggestion.',
    image: null,
  },
  {
    date: 'OCT 21',
    author: 'MEHTAB BADWAL',
    readTime: 6,
    title: 'Designing for Dignity in Healthcare',
    description: "Healthcare design isn\u2019t just about completing tasks. It\u2019s about preserving dignity when people feel most vulnerable.",
    image: null,
  },
  {
    date: 'OCT 16',
    author: 'MEHTAB BADWAL',
    readTime: 7,
    title: "Why Users Don\u2019t Say What They Feel",
    description: 'Most user research asks people what they think about an interface. But much of what drives behavior happens before thought \u2014 in instinct, rhythm, and physical reaction.',
    image: null,
  },
  {
    date: 'NOV 13',
    author: 'MEHTAB BADWAL',
    readTime: 5,
    title: 'The Weight of Choice',
    description: "Choice doesn\u2019t exhaust us because there are too many options. It exhausts us because each decision feels heavier than it needs to.",
    image: null,
  },
];

function Writing() {
  const pageRef = useScrollReveal();

  return (
    <div className="writing-page" ref={pageRef}>
      {/* ── Header ── */}
      <section className="wp__header section">
        <div className="container">
          <div className="wp__header-flex">
            <div className="wp__header-left">
              <p className="wp__label fade-up">Mind Meets Design</p>
              <h1 className="wp__title fade-up">
                Writing about why people do what they do and what it means
                for the products we build.
              </h1>
              <p className="wp__intro fade-up">
                I write about why people do what they do and what it means for the
                products we build. It starts with observation. Usually in the middle
                of something else entirely.
              </p>
            </div>
            <p className="wp__count fade-up">5 essays</p>
          </div>
        </div>
      </section>

      {/* ── Featured ── */}
      <section className="wp__featured section">
        <div className="container">
          <div className="wp__featured-flex">
            <div className="wp__featured-left fade-up">
              <p className="wp__featured-label">Featured</p>
              <h2 className="wp__featured-title">Stay out of the way</h2>
              <p className="wp__featured-desc">
                I don&rsquo;t hate complexity &mdash; I hate being slowed down when I
                know what I need. Turns out, a four-year-old in the bathtub will change
                how you think about UX.
              </p>
              <div className="wp__featured-meta">
                <span className="wp__featured-date">February 2025</span>
                <a href="#" className="wp__featured-link">Read essay &rarr;</a>
              </div>
            </div>
            <div className="wp__featured-right fade-up">
              <span className="wp__featured-image-label">Featured article image</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Article Grid ── */}
      <section className="wp__articles section">
        <div className="container">
          <div className="wp__articles-grid">
            {articles.map((a, i) => (
              <a href="#" key={i} className={`wp__card fade-up stagger-${i + 1}`}>
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
                  <span className="wp__card-cta">Read essay &rarr;</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── About Section ── */}
      <section className="wp__about section">
        <div className="container">
          <hr className="wp__about-divider" />
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
                <span className="wp__stat-value">5</span>
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
