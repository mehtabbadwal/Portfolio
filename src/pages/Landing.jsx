import { Link } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { AnimatedDivider } from './AnimatedDivider';
import { MetricCounter } from '../components/MetricCounter';
import { SnailAnimation } from '../components/SnailAnimation';
import './Landing.css';

const philosophyCards = [
  {
    number: '01',
    statement: 'The conventional answer is a starting point, not a destination.',
  },
  {
    number: '02',
    statement: 'Clarity is not the same as simplicity.',
  },
  {
    number: '03',
    statement: 'Design for the moment, not the average.',
  },
];

const projectCards = [
  {
    title: 'HPE Chatbot',
    year: '2025',
    category: 'Enterprise Systems \u00B7 Conversational AI',
    description: 'The fix wasn\u2019t smarter AI. It was more honest AI.',
    metrics: [
      { value: '32%', label: 'fewer escalations' },
      { value: '3x', label: 'chatbot usage' },
      { value: '2 min', label: 'avg resolution time' },
    ],
    slug: 'hpe-chatbot',
    image: 'hpe-chatbot-hero.svg',
  },
  {
    title: 'HPE PFA',
    year: '2025',
    category: 'Enterprise Systems',
    description: 'For power users, a cleaner interface is actually slower. So I built a denser one.',
    metrics: [
      { value: '75%', label: 'fewer clicks' },
      { value: '3 wks', label: 'MVP shipped' },
    ],
    slug: 'hpe-pfa',
    image: 'pfa-hero.svg',
  },
  {
    title: 'Qubera',
    year: '2024',
    category: 'AI Product',
    description: 'Analysts knew what questions to ask. The tool just made them ask manually, every time.',
    metrics: [
      { value: '85%', label: 'faster extraction' },
      { value: '30%', label: 'faster decisions' },
    ],
    slug: 'qubera',
    image: 'qubera-hero.webp',
  },
  {
    title: 'Fluidra',
    year: '2023',
    category: 'Mobile \u00B7 Field Service',
    description: 'Built around the 40-minute window, not the system.',
    metrics: [
      { value: '40%', label: 'feature adoption' },
      { value: '25%', label: 'task efficiency' },
    ],
    slug: 'fluidra',
    image: 'fluidra-service-hero.webp',
  },
];

const testimonials = [
  {
    quote: 'She notices the friction points that others overlook and finds ways to make interactions feel more natural.',
    author: 'Navya Nayaki Yelloji',
    role: 'Senior Product Manager \u00B7 HPE',
  },
  {
    quote: 'Her proactive approach consistently moved projects forward, especially when navigating complex system models with varied user goals.',
    author: 'Geoffrey Pay',
    role: 'Lead Product Designer \u00B7 HPE',
  },
  {
    quote: 'Her ability to translate complex user requirements into seamless UI designs was impressive and significantly enhanced the user experience.',
    author: 'Brian Liss',
    role: 'Lead Engineer \u00B7 Fluidra',
  },
];

const articles = [
  {
    title: 'When AI Changes Who\u2019s in Control',
    excerpt: 'As AI becomes more embedded in products, something subtle shifts in the user experience \u2014 often without being designed for.',
  },
  {
    title: 'Why Users Don\u2019t Say What They Feel',
    excerpt: 'Much of what drives user behavior happens before conscious thought \u2014 in instinct, emotion, and physical reaction.',
  },
  {
    title: 'The Paradox of Choice in UX',
    excerpt: 'Too much freedom can paralyze users. Designing lighter, reversible choices restores ease, flow, and confidence.',
  },
];

function Landing() {
  const pageRef = useScrollReveal();

  return (
    <div className="landing" ref={pageRef}>
      {/* ── Hero ── */}
      <section className="hero section">
        <div className="container hero__grid">
          <div className="hero__content">
            <div className="hero__accent-line fade-up stagger-1" />
            <h1 className="hero__name fade-up stagger-1">Mehtab Badwal</h1>
            <p className="hero__headline fade-up stagger-2">
              I design how products think &mdash; so users don&rsquo;t have to.
            </p>
            <p className="hero__tagline fade-up stagger-3">Designer. Behaviorist. Builder.</p>
            <p className="hero__desc fade-up stagger-3">
              Six years designing complex products &mdash; enterprise systems, AI tools,
              things built from scratch. The context always changes. People don&rsquo;t.
            </p>
            <div className="hero__actions fade-up stagger-4">
              <Link to="/work" className="btn btn--filled">View my work</Link>
              <a href="mailto:mehtabbadwal@gmail.com" className="btn">Get in touch</a>
            </div>
            <Link to="/about" className="hero__learn-more fade-up stagger-5">
              Or learn more about me &rarr;
            </Link>
            <SnailAnimation />
          </div>
          <div className="hero__photo fade-up stagger-3">
            <img
              src="/hero-photo.jpeg"
              alt="Mehtab Badwal - UX Designer"
              className="hero__photo-img"
            />
          </div>
        </div>
      </section>

      {/* ── Philosophy ── */}
      <section className="philosophy section">
        <div className="container">
          <p className="section-label section-label--line fade-up">How I Think</p>
          <h2 className="philosophy__heading fade-up">
            Most design problems already have a standard answer.
          </h2>
          <div className="philosophy__cards">
            {philosophyCards.map((card, i) => (
              <div key={i} className={`philosophy-card philosophy-card--${i + 1} fade-up stagger-${i + 1}`}>
                <div className="philosophy-card__accent" />
                <p className="philosophy-card__statement">&ldquo;{card.statement}&rdquo;</p>
                <span className="philosophy-card__number">{card.number}</span>
              </div>
            ))}
          </div>
          <button
            className="philosophy__footer fade-up"
            onClick={() => document.getElementById('selected-work').scrollIntoView({ behavior: 'smooth' })}
          >
            See how this shows up in the work &darr;
          </button>
        </div>
      </section>

      <AnimatedDivider />

      {/* ── Selected Work ── */}
      <section id="selected-work" className="work section">
        <div className="container">
          <div className="work__header fade-up">
            <p className="section-label">Selected Work</p>
            <Link to="/work" className="work__view-all">View all work &rarr;</Link>
          </div>

          {/* 2x2 Grid — All Equal Cards */}
          <div className="work__grid work__grid--2x2">
            {projectCards.map((project, i) => (
              <Link
                to={`/case-studies/${project.slug}`}
                key={project.slug}
                className={`project-card fade-up stagger-${i + 1}`}
              >
                <div className="project-card__image">
                  {project.image ? (
                    <img
                      src={`${import.meta.env.BASE_URL}${project.image}`}
                      alt={`${project.title} interface`}
                      className="project-card__img"
                    />
                  ) : (
                    <div className="project-card__placeholder"><span>{project.title}</span></div>
                  )}
                </div>
                <div className="project-card__body">
                  <div className="project-card__meta">
                    <span className="project-card__year">{project.year}</span>
                    <span className="project-card__dot" />
                    <span className="project-card__cat">{project.category}</span>
                  </div>
                  <h3 className="project-card__title">{project.title}</h3>
                  <p className="project-card__desc">{project.description}</p>
                  <div className="project-card__metrics">
                    {project.metrics.map((m) => (
                      <div key={m.label} className="metric metric--small">
                        <MetricCounter value={m.value} className="metric__value" />
                        <span className="metric__label">{m.label}</span>
                      </div>
                    ))}
                  </div>
                  <span className="project-card__cta">Read case study &rarr;</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <AnimatedDivider />

      {/* ── Testimonials ── */}
      <section className="testimonials section">
        <div className="container">
          <div className="testimonials__header fade-up">
            <p className="section-label">From the people I&rsquo;ve built with</p>
            <div className="testimonials__accent" />
          </div>
          <div className="testimonials__grid">
            {testimonials.map((t, i) => (
              <blockquote key={i} className={`testimonial fade-up stagger-${i + 1}`}>
                <span className="testimonial__mark">&ldquo;</span>
                <p className="testimonial__quote">{t.quote}</p>
                <footer className="testimonial__author">
                  <strong>{t.author}</strong>
                  <span>{t.role}</span>
                </footer>
              </blockquote>
            ))}
          </div>
          <div className="testimonials__footer fade-up">
            <p>Across enterprise, startup, and field environments.</p>
            <div className="testimonials__tags">
              <span className="testimonials__tag">HPE</span>
              <span className="testimonials__tag">Fluidra</span>
              <span className="testimonials__tag">Qubera</span>
            </div>
          </div>
        </div>
      </section>

      <AnimatedDivider />

      {/* ── Writing ── */}
      <section className="writing section">
        <div className="container">
          <div className="writing__header fade-up">
            <p className="writing__label">Mind Meets Design</p>
            <Link to="/writing" className="writing__view-all">Explore all writing &rarr;</Link>
          </div>

          <div className="writing__columns">
            {/* Left — Featured */}
            <Link to="/writing" className="writing__featured fade-up">
              <span className="writing__mark">&ldquo;</span>
              <p className="writing__quote">
                I was giving my son a bath when I realized I was out of groceries.
              </p>
              <p className="writing__quote-sub">
                When a platform consolidates everything, it takes on more responsibility &mdash;
                to understand intent, not just expose options.
              </p>
              <div className="writing__featured-meta">
                <div className="writing__meta-line" />
                <div className="writing__meta-text">
                  <strong>&ldquo;Stay Out of My Way&rdquo;</strong>
                  <span>Mind Meets Design &middot; Feb 2025</span>
                </div>
              </div>
            </Link>

            {/* Right — Article list */}
            <div className="writing__list">
              {articles.map((a, i) => (
                <Link to="/writing" key={i} className={`writing__item fade-up stagger-${i + 1}`}>
                  <h3 className="writing__item-title">{a.title}</h3>
                  <p className="writing__item-excerpt">{a.excerpt}</p>
                  <span className="writing__item-link">Read &rarr;</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <AnimatedDivider />

      {/* ── CTA ── */}
      <section className="cta section">
        <div className="container">
          <AnimatedDivider />
          <div className="cta__grid">
            <div className="cta__content">
              <h2 className="cta__heading fade-up">
                If the obvious answer keeps feeling wrong &mdash; let&rsquo;s talk.
              </h2>
              <p className="cta__sub fade-up">
                Currently open to senior and staff UX roles in enterprise, AI, or anything in between.
              </p>
              <div className="cta__actions fade-up">
                <a href="mailto:mehtabbadwal@gmail.com" className="btn btn--accent cta__email">
                  mehtabbadwal@gmail.com
                </a>
                <a href={`${import.meta.env.BASE_URL}resume-mehtab-badwal.pdf`} target="_blank" rel="noopener noreferrer" className="btn cta__resume">
                  Resume
                </a>
              </div>
            </div>
            <div className="cta__status fade-up">
              <div className="cta__badge">
                <span className="green-dot green-dot--lg" />
                <span>Open to opportunities</span>
              </div>
              <p className="cta__location">Based in San Diego, CA</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Landing;
