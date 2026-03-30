import { Link } from 'react-router-dom';
import './Work.css';

const projects = [
  {
    id: 1,
    title: 'Brand Identity Redesign',
    category: 'Branding',
    year: '2025',
    description: 'A complete visual identity overhaul for a modern fintech startup, including logo, typography, and brand guidelines.',
    image: 'https://placehold.co/900x600/E8E2D8/2D2420?text=Brand+Identity',
  },
  {
    id: 2,
    title: 'E-Commerce Platform',
    category: 'Web Design',
    year: '2025',
    description: 'End-to-end design for a premium fashion marketplace with focus on product discovery and seamless checkout.',
    image: 'https://placehold.co/900x600/E8E2D8/2D2420?text=E-Commerce',
  },
  {
    id: 3,
    title: 'Mobile Banking App',
    category: 'Product Design',
    year: '2024',
    description: 'An intuitive mobile banking experience for a challenger bank serving young professionals.',
    image: 'https://placehold.co/900x600/E8E2D8/2D2420?text=Banking+App',
  },
  {
    id: 4,
    title: 'SaaS Dashboard',
    category: 'UI Design',
    year: '2024',
    description: 'A data-rich analytics dashboard designed for clarity and quick decision-making.',
    image: 'https://placehold.co/900x600/E8E2D8/2D2420?text=Dashboard',
  },
  {
    id: 5,
    title: 'Editorial Website',
    category: 'Web Design',
    year: '2024',
    description: 'A clean, typography-focused website for a digital publication covering design and technology.',
    image: 'https://placehold.co/900x600/E8E2D8/2D2420?text=Editorial',
  },
  {
    id: 6,
    title: 'Health & Wellness App',
    category: 'Product Design',
    year: '2023',
    description: 'A mindful wellness application combining habit tracking with guided meditation.',
    image: 'https://placehold.co/900x600/E8E2D8/2D2420?text=Wellness+App',
  },
];

const categories = ['All', ...new Set(projects.map((p) => p.category))];

function Work() {
  return (
    <div className="work">
      <section className="work__hero section">
        <div className="container">
          <p className="section-label">Work</p>
          <h1>Selected projects</h1>
          <p className="work__intro">
            A curated collection of projects spanning brand identity, web design,
            and product design. Each project represents a unique challenge and a
            thoughtful solution.
          </p>
        </div>
      </section>

      <section className="work__projects section">
        <div className="container">
          <div className="work__filters">
            {categories.map((cat) => (
              <button key={cat} className={`tag ${cat === 'All' ? 'tag--active' : ''}`}>
                {cat}
              </button>
            ))}
          </div>

          <div className="work__grid">
            {projects.map((project) => (
              <Link to="/case-studies" key={project.id} className="work-card">
                <div className="work-card__image">
                  <img src={project.image} alt={project.title} />
                </div>
                <div className="work-card__info">
                  <div className="work-card__meta">
                    <span className="tag">{project.category}</span>
                    <span className="work-card__year">{project.year}</span>
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Work;
