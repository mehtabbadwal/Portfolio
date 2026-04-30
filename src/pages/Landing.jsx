import { Link } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { AnimatedDivider } from './AnimatedDivider';
import { MetricCounter } from '../components/MetricCounter';
import './Landing.css';

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
    quote: 'We have spoken about philosophy, psychology, neuro-economics that shape our everyday lives. All of these elements show up subtly in her work. She notices the friction points that others overlook and finds ways to make interactions feel more natural.',
    author: 'Navya Nayaki Yelloji',
    role: 'Sr. Product Manager \u00B7 HPE',
    relationship: 'Worked together on the same team',
  },
  {
    quote: 'Mehtab is a kind, empathetic person and a fierce advocate for the user.',
    author: 'Jennifer Cline',
    role: 'UX Manager \u00B7 Senior UX Architect \u00B7 Fluidra',
    relationship: 'Managed Mehtab directly',
  },
];

const articles = [
  {
    title: 'The Shadow System Problem',
    excerpt: 'Users don\u2019t build workarounds because they don\u2019t understand the tool. They build them because they understand it perfectly.',
    date: 'MAR 2025',
    readTime: '8 min read',
    slug: 'shadow-system-problem',
  },
  {
    title: 'The Colleague Problem',
    excerpt: 'The most common onboarding flow isn\u2019t the one you designed. It\u2019s the colleague three desks away.',
    date: 'APR 2025',
    readTime: '7 min read',
    slug: 'the-colleague-problem',
  },
  {
    title: 'Why Users Don\u2019t Say What They Feel',
    excerpt: 'Most research asks what people think. But much of what drives behavior happens before thought \u2014 in instinct, emotion, and physical reaction.',
    date: 'OCT 2024',
    readTime: '7 min read',
    slug: 'why-users-dont-say-what-they-feel',
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
            <h1 className="hero__statement fade-up stagger-1">
              <span className="hero__statement-line">Most designers bring skills.</span>
              <span className="hero__statement-line hero__statement-line--accent">I bring understanding.</span>
            </h1>
            <p className="hero__subhead fade-up stagger-2">
              Hidden behaviors. Emotional friction. The reason a well-built product still doesn&rsquo;t land.
            </p>
            <p className="hero__bio fade-up stagger-3">
              I&rsquo;m <em>Mehtab</em>. Came to UX through fashion. The lens stayed the same. Six years in enterprise, AI, and 0&rarr;1 products.
            </p>
            <div className="hero__actions fade-up stagger-4">
              <Link to="/work" className="btn btn--filled">See the work &rarr;</Link>
              <a href="mailto:mehtabbadwal@gmail.com" className="btn">Let&rsquo;s talk</a>
            </div>
            <Link to="/about" className="hero__learn-more fade-up stagger-5">
              Or read more about how I see the work &rarr;
            </Link>
          </div>
          <div className="hero__photo fade-up stagger-3">
            <img
              src="/hero-photo.jpeg"
              alt="Mehtab Badwal"
              className="hero__photo-img"
            />
          </div>
        </div>
      </section>

      {/* ── Selected Work ── */}
      <section id="selected-work" className="work section">
        <div className="container">
          <div className="work__header fade-up">
            <p className="section-label">Selected Work</p>
            <span className="section-rule" aria-hidden="true" />
            <Link to="/work" className="work__view-all">View all work &rarr;</Link>
          </div>

          {/* Vertical Stack */}
          <div className="work-list">
            {projectCards.map((project, i) => (
              <Link
                to={`/case-studies/${project.slug}`}
                key={project.slug}
                className={`work-card fade-up stagger-${i + 1}`}
              >
                <span className="work-card__number">0{i + 1}</span>
                <div className="work-card__body">
                  <p className="project-card__desc">{project.description}</p>
                  <h3 className="project-card__title">{project.title}</h3>
                  <div className="project-card__meta">
                    <span className="project-card__year">{project.year}</span>
                    <span className="project-card__dot" />
                    <span className="project-card__cat">{project.category}</span>
                  </div>
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
                <div className="work-card__image">
                  {project.image ? (
                    <img
                      src={`${import.meta.env.BASE_URL}${project.image}`}
                      alt={`${project.title} interface`}
                      className="work-card__img"
                    />
                  ) : (
                    <div className="project-card__placeholder">
                      <span>{project.title}</span>
                    </div>
                  )}
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
            <span className="section-rule section-rule--dark" aria-hidden="true" />
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
            <p className="section-label">Mind Meets Design</p>
            <span className="section-rule section-rule--terracotta" aria-hidden="true" />
          </div>

          <div className="writing__list">
            {articles.map((article, i) => (
              <Link
                to={`/blog/${article.slug}`}
                key={article.slug}
                className={`writing-item fade-up stagger-${i + 1}`}
              >
                <span className="writing-item__number">0{i + 1}</span>
                <div className="writing-item__body">
                  <h3 className="writing-item__title">{article.title}</h3>
                  <p className="writing-item__excerpt">{article.excerpt}</p>
                </div>
                <div className="writing-item__meta">
                  <span className="writing-item__date">{article.date}</span>
                  <span className="writing-item__read-time">{article.readTime}</span>
                  <span className="writing-item__arrow" aria-hidden="true">&rarr;</span>
                </div>
              </Link>
            ))}
          </div>

          <div className="writing__footer fade-up">
            <p className="writing__footer-text">7 pieces published. More on the way.</p>
            <Link to="/writing" className="writing__view-all">All pieces &rarr;</Link>
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
