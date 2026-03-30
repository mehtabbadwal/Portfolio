import { Link } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Landing.css';

const philosophyCards = [
  {
    statement: 'The conventional answer is a starting point, not a destination.',
    project: 'HPE Chatbot',
    slug: 'hpe-chatbot',
  },
  {
    statement: 'Clarity is not the same as simplicity.',
    project: 'HPE PFA',
    slug: 'hpe-pfa',
  },
  {
    statement: 'Design for the moment, not the average.',
    project: 'Fluidra',
    slug: 'fluidra',
  },
];

const featuredProject = {
  year: '2025',
  tags: ['Enterprise Systems', 'Conversational AI'],
  title: 'HPE Chatbot',
  description: 'The fix wasn\u2019t smarter AI. It was more honest AI.',
  metrics: [
    { value: '32%', label: 'fewer escalations' },
    { value: '3x', label: 'chatbot usage' },
    { value: '2 min', label: 'avg resolution time' },
  ],
  slug: 'hpe-chatbot',
};

const projectCards = [
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
            <p className="hero__name fade-up stagger-1">Mehtab Badwal</p>
            <h1 className="hero__headline fade-up stagger-2">
              I design how products think &mdash; so users don&rsquo;t have to.
            </h1>
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
          </div>
          <div className="hero__photo fade-up stagger-3">
            <div className="hero__photo-placeholder">
              <span>Photo</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Philosophy ── */}
      <section className="philosophy section">
        <div className="container">
          <p className="section-label fade-up">How I Think</p>
          <h2 className="philosophy__heading fade-up">
            Most design problems already have a standard answer.
          </h2>
          <div className="philosophy__cards">
            {philosophyCards.map((card, i) => (
              <Link
                to={`/case-studies/${card.slug}`}
                key={i}
                className={`philosophy-card fade-up stagger-${i + 1}`}
              >
                <p className="philosophy-card__statement">&ldquo;{card.statement}&rdquo;</p>
                <span className="philosophy-card__link">{card.project} &rarr;</span>
              </Link>
            ))}
          </div>
          <p className="philosophy__footer fade-up">See how this shows up in the work &darr;</p>
        </div>
      </section>

      <hr className="divider container" />

      {/* ── Selected Work ── */}
      <section className="work section">
        <div className="container">
          <div className="work__header fade-up">
            <p className="section-label">Selected Work</p>
            <Link to="/work" className="work__view-all">View all work &rarr;</Link>
          </div>

          {/* Featured */}
          <Link to={`/case-studies/${featuredProject.slug}`} className="featured fade-up">
            <div className="featured__image">
              <div className="featured__placeholder"><span>HPE Chatbot</span></div>
            </div>
            <div className="featured__body">
              <div className="featured__meta">
                <span className="featured__year">{featuredProject.year}</span>
                {featuredProject.tags.map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
              <h3 className="featured__title">{featuredProject.title}</h3>
              <p className="featured__desc">{featuredProject.description}</p>
              <div className="featured__metrics">
                {featuredProject.metrics.map((m) => (
                  <div key={m.label} className="metric">
                    <span className="metric__value">{m.value}</span>
                    <span className="metric__label">{m.label}</span>
                  </div>
                ))}
              </div>
              <span className="featured__cta">Read case study &rarr;</span>
            </div>
          </Link>

          {/* Grid */}
          <div className="work__grid">
            {projectCards.map((project, i) => (
              <Link
                to={`/case-studies/${project.slug}`}
                key={project.slug}
                className={`project-card fade-up stagger-${i + 1}`}
              >
                <div className="project-card__image">
                  <div className="project-card__placeholder"><span>{project.title}</span></div>
                </div>
                <div className="project-card__body">
                  <div className="project-card__meta">
                    <span>{project.year}</span>
                    <span>{project.category}</span>
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-card__metrics">
                    {project.metrics.map((m) => (
                      <div key={m.label} className="metric metric--small">
                        <span className="metric__value">{m.value}</span>
                        <span className="metric__label">{m.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <hr className="divider container" />

      {/* ── Testimonials ── */}
      <section className="testimonials section">
        <div className="container">
          <p className="section-label fade-up">From the people I&rsquo;ve built with</p>
          <div className="testimonials__grid">
            {testimonials.map((t, i) => (
              <blockquote key={i} className={`testimonial fade-up stagger-${i + 1}`}>
                <p className="testimonial__quote">&ldquo;{t.quote}&rdquo;</p>
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
              <span className="tag">HPE</span>
              <span className="tag">Fluidra</span>
              <span className="tag">Qubera</span>
            </div>
          </div>
        </div>
      </section>

      <hr className="divider container" />

      {/* ── Writing ── */}
      <section className="writing section">
        <div className="container">
          <div className="work__header fade-up">
            <p className="section-label">Mind Meets Design</p>
            <Link to="/writing" className="work__view-all">Explore all writing &rarr;</Link>
          </div>

          <div className="writing__featured fade-up">
            <blockquote className="writing__quote">
              &ldquo;I was giving my son a bath when I realized I was out of groceries.&rdquo;
            </blockquote>
            <p className="writing__quote-sub">
              When a platform consolidates everything, it takes on more responsibility &mdash;
              to understand intent, not just expose options.
            </p>
            <div className="writing__featured-meta">
              <strong>&ldquo;Stay Out of My Way&rdquo;</strong>
              <span>Mind Meets Design &middot; Feb 2025</span>
            </div>
          </div>

          <div className="writing__list">
            {articles.map((a, i) => (
              <Link to="/writing" key={i} className={`writing__item fade-up stagger-${i + 1}`}>
                <h3>{a.title}</h3>
                <p>{a.excerpt}</p>
                <span className="writing__arrow">&rarr;</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <hr className="divider container" />

      {/* ── CTA ── */}
      <section className="cta section">
        <div className="container cta__inner">
          <h2 className="cta__heading fade-up">
            If the obvious answer keeps feeling wrong &mdash; let&rsquo;s talk.
          </h2>
          <p className="cta__sub fade-up">
            Currently open to senior and staff UX roles in enterprise, AI, or anything in between.
          </p>
          <div className="cta__actions fade-up">
            <a href="mailto:mehtabbadwal@gmail.com" className="btn btn--accent btn--pill">
              mehtabbadwal@gmail.com
            </a>
            <a href="/resume" target="_blank" rel="noopener noreferrer" className="btn btn--pill">
              Resume
            </a>
          </div>
          <div className="cta__badge fade-up">
            <span className="green-dot" />
            <span>Open to opportunities</span>
          </div>
          <p className="cta__location fade-up">Based in San Diego, CA</p>
        </div>
      </section>
    </div>
  );
}

export default Landing;
