import './CaseStudies.css';

const caseStudies = [
  {
    title: 'Reimagining Digital Banking',
    client: 'Finley',
    year: '2025',
    tags: ['Product Design', 'Mobile', 'Fintech'],
    summary: 'How we increased user engagement by 40% through a complete redesign of the mobile banking experience, focusing on simplicity and trust.',
    image: 'https://placehold.co/1200x600/E8E2D8/2D2420?text=Case+Study+1',
    metrics: [
      { label: 'Engagement', value: '+40%' },
      { label: 'App Rating', value: '4.8' },
      { label: 'Time on Task', value: '-30%' },
    ],
  },
  {
    title: 'Building a Design System from Scratch',
    client: 'Studio Nova',
    year: '2024',
    tags: ['Design Systems', 'Web', 'SaaS'],
    summary: 'Creating a comprehensive design system that unified 5 product teams and reduced design-to-development time by 60%.',
    image: 'https://placehold.co/1200x600/E8E2D8/2D2420?text=Case+Study+2',
    metrics: [
      { label: 'Dev Time', value: '-60%' },
      { label: 'Components', value: '200+' },
      { label: 'Teams', value: '5' },
    ],
  },
  {
    title: 'E-Commerce Conversion Optimization',
    client: 'Maison Collective',
    year: '2024',
    tags: ['Web Design', 'E-Commerce', 'UX Research'],
    summary: 'A data-driven redesign of the checkout flow that boosted conversion rates and reduced cart abandonment for a premium fashion brand.',
    image: 'https://placehold.co/1200x600/E8E2D8/2D2420?text=Case+Study+3',
    metrics: [
      { label: 'Conversion', value: '+25%' },
      { label: 'Cart Abandon', value: '-35%' },
      { label: 'AOV', value: '+18%' },
    ],
  },
];

function CaseStudies() {
  return (
    <div className="case-studies">
      <section className="case-studies__hero section">
        <div className="container">
          <p className="section-label">Case Studies</p>
          <h1>Deep dives into selected work</h1>
          <p className="case-studies__intro">
            Detailed explorations of process, challenges, and outcomes.
            Each study walks through the journey from problem to solution.
          </p>
        </div>
      </section>

      <section className="case-studies__list section">
        <div className="container">
          {caseStudies.map((study, i) => (
            <article key={i} className="case-study-card">
              <div className="case-study-card__image">
                <img src={study.image} alt={study.title} />
              </div>
              <div className="case-study-card__body">
                <div className="case-study-card__meta">
                  <span className="case-study-card__client">{study.client}</span>
                  <span className="case-study-card__year">{study.year}</span>
                </div>
                <h2>{study.title}</h2>
                <p>{study.summary}</p>
                <div className="case-study-card__tags">
                  {study.tags.map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
                <div className="case-study-card__metrics">
                  {study.metrics.map((metric) => (
                    <div key={metric.label} className="metric">
                      <span className="metric__value">{metric.value}</span>
                      <span className="metric__label">{metric.label}</span>
                    </div>
                  ))}
                </div>
                <button className="btn">Read Case Study &rarr;</button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export default CaseStudies;
