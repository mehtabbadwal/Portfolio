import { Link } from 'react-router-dom';
import './Landing.css';

const principles = [
  {
    number: '01',
    title: 'Start with behavior',
    description: 'Before pixels, understand how people think. Every design decision should be grounded in real behavioral patterns.',
  },
  {
    number: '02',
    title: 'Reduce cognitive load',
    description: 'The best interfaces disappear. Remove every unnecessary decision, step, and distraction between the user and their goal.',
  },
  {
    number: '03',
    title: 'Measure what matters',
    description: 'Design isn\'t done when it looks right — it\'s done when it works right. Validate with data, iterate with intention.',
  },
];

const featuredProject = {
  title: 'HPE Chatbot',
  category: 'AI / Conversational Design',
  description: 'Redesigned the support chatbot experience for Hewlett Packard Enterprise, reducing escalations and dramatically increasing self-service resolution.',
  image: 'https://placehold.co/1200x680/E8E2D8/2D2420?text=HPE+Chatbot',
  slug: 'hpe-chatbot',
  metrics: [
    { value: '32%', label: 'Fewer Escalations' },
    { value: '3x', label: 'Chatbot Usage' },
    { value: '2 min', label: 'Resolution Time' },
  ],
};

const projects = [
  {
    id: 1,
    title: 'HPE PFA',
    slug: 'hpe-pfa',
    category: 'Enterprise / SaaS',
    description: 'Partner-facing analytics platform for Hewlett Packard Enterprise — enabling channel partners to track performance, manage rebates, and make data-driven decisions.',
    image: 'https://placehold.co/800x540/E8E2D8/2D2420?text=HPE+PFA',
  },
  {
    id: 2,
    title: 'Qubera',
    slug: 'qubera',
    category: 'Fintech',
    description: 'A modern investment platform simplifying portfolio management and financial planning for retail investors.',
    image: 'https://placehold.co/800x540/E8E2D8/2D2420?text=Qubera',
  },
  {
    id: 3,
    title: 'Fluidra',
    slug: 'fluidra',
    category: 'IoT / Smart Home',
    description: 'Connected pool management system — giving homeowners and service professionals real-time control over water quality and equipment.',
    image: 'https://placehold.co/800x540/E8E2D8/2D2420?text=Fluidra',
  },
];

const testimonials = [
  {
    quote: 'Mehtab has a rare ability to zoom out and think strategically while still delivering pixel-perfect work. She doesn\'t just design screens — she solves problems.',
    author: 'Navya Nayaki Yelloji',
    role: 'Product Manager',
  },
  {
    quote: 'What sets Mehtab apart is her deep understanding of user behavior. She brings a level of rigor and empathy to design that consistently elevates the product.',
    author: 'Geoffrey Pay',
    role: 'Engineering Lead',
  },
  {
    quote: 'Mehtab is the kind of designer who makes everyone around her better. Her design systems work saved our team countless hours and brought real consistency to the product.',
    author: 'Brian Liss',
    role: 'Director of Design',
  },
];

function Landing() {
  return (
    <div className="landing">
      {/* Hero */}
      <section className="hero section">
        <div className="container">
          <p className="section-label">Designer. Behaviorist. Builder.</p>
          <h1 className="hero__title">
            I design how products think — so users don&rsquo;t have to.
          </h1>
          <p className="hero__subtitle">
            Six years designing complex products — enterprise systems, AI tools,
            things built from scratch. The context always changes. People don&rsquo;t.
          </p>
          <div className="hero__actions">
            <Link to="/work" className="btn btn--filled">
              View Projects &rarr;
            </Link>
            <a href="mailto:mehtabbadwal@gmail.com" className="btn">
              Get in Touch
            </a>
          </div>
          <div className="hero__location">
            San Diego, CA
          </div>
        </div>
      </section>

      <hr className="section-divider container" />

      {/* Philosophy */}
      <section className="philosophy section">
        <div className="container">
          <p className="section-label">Approach</p>
          <h2 className="philosophy__heading">
            Most design problems already have a standard answer.
          </h2>
          <p className="philosophy__subheading">
            I focus on finding it — then making it feel effortless.
          </p>
          <div className="philosophy__grid">
            {principles.map((item) => (
              <div key={item.number} className="principle-card">
                <span className="principle-card__number">{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="section-divider container" />

      {/* Featured Project */}
      <section className="featured-project section">
        <div className="container">
          <p className="section-label">Featured Project</p>
          <Link to={`/case-studies/${featuredProject.slug}`} className="featured-project__card">
            <div className="featured-project__image">
              <img src={featuredProject.image} alt={featuredProject.title} />
            </div>
            <div className="featured-project__body">
              <span className="tag">{featuredProject.category}</span>
              <h2>{featuredProject.title}</h2>
              <p>{featuredProject.description}</p>
              <div className="featured-project__metrics">
                {featuredProject.metrics.map((metric) => (
                  <div key={metric.label} className="metric">
                    <span className="metric__value">{metric.value}</span>
                    <span className="metric__label">{metric.label}</span>
                  </div>
                ))}
              </div>
              <span className="btn">View Case Study &rarr;</span>
            </div>
          </Link>
        </div>
      </section>

      <hr className="section-divider container" />

      {/* Projects Grid */}
      <section className="featured section">
        <div className="container">
          <p className="section-label">Selected Work</p>
          <div className="featured__header">
            <h2>More Projects</h2>
            <Link to="/work" className="btn">View All &rarr;</Link>
          </div>
          <div className="featured__grid">
            {projects.map((project) => (
              <Link to={`/case-studies/${project.slug}`} key={project.id} className="project-card">
                <div className="project-card__image">
                  <img src={project.image} alt={project.title} />
                </div>
                <div className="project-card__info">
                  <span className="tag">{project.category}</span>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <hr className="section-divider container" />

      {/* Testimonials */}
      <section className="testimonials section">
        <div className="container">
          <p className="section-label">Testimonials</p>
          <h2>Kind words from colleagues</h2>
          <div className="testimonials__grid">
            {testimonials.map((item, i) => (
              <blockquote key={i} className="testimonial">
                <p className="testimonial__quote">&ldquo;{item.quote}&rdquo;</p>
                <footer className="testimonial__author">
                  <strong>{item.author}</strong>
                  <span>{item.role}</span>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Landing;
