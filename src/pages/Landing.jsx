import { Link } from 'react-router-dom';
import './Landing.css';

const featuredProjects = [
  {
    id: 1,
    title: 'Brand Identity Redesign',
    category: 'Branding',
    description: 'A complete visual identity overhaul for a modern fintech startup.',
    image: 'https://placehold.co/800x540/E8E2D8/2D2420?text=Project+1',
  },
  {
    id: 2,
    title: 'E-Commerce Platform',
    category: 'Web Design',
    description: 'End-to-end design for a premium fashion marketplace.',
    image: 'https://placehold.co/800x540/E8E2D8/2D2420?text=Project+2',
  },
  {
    id: 3,
    title: 'Mobile Banking App',
    category: 'Product Design',
    description: 'Intuitive mobile experience for a challenger bank.',
    image: 'https://placehold.co/800x540/E8E2D8/2D2420?text=Project+3',
  },
];

const testimonials = [
  {
    quote: 'Working with them was an absolute pleasure. They brought our vision to life with a level of craft and attention to detail that exceeded our expectations.',
    author: 'Sarah Chen',
    role: 'CEO, Lumina Studios',
  },
  {
    quote: 'Their strategic approach to design transformed how we think about our product. The results speak for themselves — engagement is up 40%.',
    author: 'Marcus Rivera',
    role: 'Head of Product, Finley',
  },
];

const writingPreviews = [
  {
    title: 'The Art of Whitespace in Modern Web Design',
    date: 'March 2026',
    excerpt: 'Why giving your designs room to breathe is the most impactful decision you can make.',
  },
  {
    title: 'Building Design Systems That Scale',
    date: 'February 2026',
    excerpt: 'Lessons learned from creating component libraries for growing teams.',
  },
  {
    title: 'From Figma to Code: Bridging the Gap',
    date: 'January 2026',
    excerpt: 'Practical strategies for improving designer-developer collaboration.',
  },
];

function Landing() {
  return (
    <div className="landing">
      {/* Hero */}
      <section className="hero section">
        <div className="container">
          <p className="section-label">Designer & Developer</p>
          <h1 className="hero__title">
            I craft thoughtful digital experiences that tell your story
          </h1>
          <p className="hero__subtitle">
            A multidisciplinary designer focused on creating beautiful, functional
            products with a keen eye for detail and a love for clean, purposeful design.
          </p>
          <div className="hero__actions">
            <Link to="/work" className="btn btn--filled">
              View My Work &rarr;
            </Link>
            <Link to="/about" className="btn">
              About Me
            </Link>
          </div>
        </div>
      </section>

      <hr className="section-divider container" />

      {/* Featured Work */}
      <section className="featured section">
        <div className="container">
          <p className="section-label">Selected Work</p>
          <div className="featured__header">
            <h2>Featured Projects</h2>
            <Link to="/work" className="btn">View All &rarr;</Link>
          </div>
          <div className="featured__grid">
            {featuredProjects.map((project) => (
              <Link to={`/work`} key={project.id} className="project-card">
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
          <h2>Kind words from clients</h2>
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

      <hr className="section-divider container" />

      {/* Writing Preview */}
      <section className="writing-preview section">
        <div className="container">
          <p className="section-label">Writing</p>
          <div className="featured__header">
            <h2>Recent Articles</h2>
            <Link to="/writing" className="btn">Read All &rarr;</Link>
          </div>
          <div className="writing-preview__list">
            {writingPreviews.map((post, i) => (
              <Link to="/writing" key={i} className="writing-preview__item">
                <div className="writing-preview__meta">
                  <span className="writing-preview__date">{post.date}</span>
                </div>
                <div className="writing-preview__content">
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                </div>
                <span className="writing-preview__arrow">&rarr;</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Landing;
