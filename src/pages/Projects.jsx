import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Projects.css';

const caseStudies = [
  {
    year: '2025',
    tag: 'ENTERPRISE SYSTEMS',
    title: 'HPE Agentic Chatbot',
    description: 'The fix wasn\u2019t smarter AI. It was more honest AI.',
    metrics: [
      { value: '32%', label: 'fewer escalations' },
      { value: '3x', label: 'chatbot usage' },
      { value: '2 min', label: 'avg resolution' },
    ],
    slug: 'hpe-chatbot',
    categories: ['Enterprise', 'AI Products'],
  },
  {
    year: '2025',
    tag: 'ENTERPRISE SYSTEMS',
    title: 'HPE Premium Account Family',
    description: 'For power users, a cleaner interface is actually slower. So I built a denser one.',
    metrics: [
      { value: '75%', label: 'fewer clicks' },
      { value: '3 wks', label: 'MVP shipped' },
    ],
    slug: 'hpe-pfa',
    categories: ['Enterprise'],
  },
  {
    year: '2024',
    tag: 'AI PRODUCT',
    title: 'Qubera \u2014 AI Research Tool',
    description: 'Analysts knew what questions to ask. The tool just made them ask manually, every time.',
    metrics: [
      { value: '85%', label: 'faster extraction' },
      { value: '30%', label: 'faster decisions' },
    ],
    slug: 'qubera',
    categories: ['AI Products', '0\u21921'],
  },
  {
    year: '2023',
    tag: 'MOBILE \u00B7 FIELD SERVICE',
    title: 'Fluidra Pro Redesign',
    description: 'Built around the 40-minute window, not the system.',
    metrics: [
      { value: '40%', label: 'feature adoption' },
      { value: '25%', label: 'task efficiency' },
    ],
    slug: 'fluidra',
    categories: ['Mobile'],
  },
  {
    year: '2024',
    tag: 'MOBILE \u00B7 PLATFORM',
    title: 'Fluidra Rewards Integration',
    description: 'Two products, two logins, one job. The answer was an architecture problem, not a design problem.',
    metrics: [
      { value: '30%', label: 'user interaction' },
      { value: '20%', label: 'user retention' },
      { value: '55', label: 'screens shipped' },
    ],
    slug: 'fluidra-rewards',
    categories: ['Mobile', '0\u21921'],
  },
];

const skills = [
  {
    title: 'Design System Skill',
    hook: 'A design system process AI can actually follow.',
    howToUse: "Knows what to build first, what to clarify before starting, and how to handle failures mid-way.\nBuilt through real use \u2014 not theory.",
    downloadUrl: 'https://drive.google.com/uc?export=download&id=1H7SkGFd78dgdBRn6XtnLYD2cA04AWLjM',
  },
  {
    title: 'UX Research Skill',
    hook: "Understand why users aren\u2019t doing what you expected.",
    howToUse: "You\u2019ll either get a clear direction grounded in behavior \u2014 or proof that your approach already works.\nBoth are useful.",
    downloadUrl: 'https://drive.google.com/uc?export=download&id=13bZW0OC0BiBt4s83e_hWSAcEOUBt6qDC',
  },
  {
    title: 'UI Designer Skill',
    hook: 'Make visual decisions that actually hold.',
    howToUse: "Not decoration. Structure.\nIt works through spacing, scale, and hierarchy \u2014 and calls out what feels off, even when you can\u2019t name it.",
    downloadUrl: 'https://drive.google.com/uc?export=download&id=1QYkoH_Ob8sV_x_pkQdBvCCjrBD5Ndwzl',
  },
  {
    title: 'UX Designer Skill',
    hook: "Design for who\u2019s actually using the product.",
    howToUse: "It won\u2019t move until it understands the user, their role, and their state of mind.\nThe same problem gets a different answer depending on who\u2019s asking it.",
    downloadUrl: 'https://drive.google.com/uc?export=download&id=1RsYfjgEEXn6pkaIl0ncFFEm4wvBfmdrf',
  },
];

const filters = ['All', 'Enterprise', 'AI Products', '0\u21921', 'Mobile'];

function Projects() {
  const pageRef = useScrollReveal();
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredStudies = activeFilter === 'All'
    ? caseStudies
    : caseStudies.filter(cs => cs.categories.includes(activeFilter));

  return (
    <div className="projects" ref={pageRef}>
      {/* ── Selected Work ── */}
      <section className="projects__work projects-section section">
        <div className="container">
          <div className="projects__work-header fade-up">
            <p className="projects__label">Selected Work</p>
            <h1 className="projects__heading">Work that started with behavior.</h1>
            <p className="projects__intro">
              Five projects across enterprise, AI, and field environments. Each one
              started with a question about behavior, not about what the interface
              should look like.
            </p>
          </div>

          <div className="projects__filters fade-up" role="group" aria-label="Filter projects by category">
            {filters.map((f) => (
              <button
                key={f}
                className={`projects__filter ${activeFilter === f ? 'projects__filter--active' : ''}`}
                onClick={() => setActiveFilter(f)}
                aria-pressed={activeFilter === f}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="projects__grid case-studies-grid">
            {filteredStudies.map((cs, i) => {
              const hasPage = ['hpe-chatbot', 'hpe-pfa', 'qubera', 'fluidra', 'fluidra-rewards'].includes(cs.slug);
              const CardTag = hasPage ? Link : 'a';
              const cardProps = hasPage
                ? { to: `/case-studies/${cs.slug}` }
                : { href: `#${cs.slug}` };
              return (
                <CardTag {...cardProps} key={cs.slug} className={`cs-card fade-up stagger-${Math.min(i + 1, 5)}`}>
                  <div className="cs-card__meta">
                    <span className="cs-card__year">{cs.year}</span>
                    <span className="cs-card__dot" />
                    <span className="cs-card__tag">{cs.tag}</span>
                  </div>
                  <h3 className="cs-card__title">{cs.title}</h3>
                  <p className="cs-card__desc">{cs.description}</p>
                  <div className="cs-card__metrics">
                    {cs.metrics.map((m) => (
                      <div key={m.label} className="cs-card__metric">
                        <span className="cs-card__metric-value">{m.value}</span>
                        <span className="cs-card__metric-label">{m.label}</span>
                      </div>
                    ))}
                  </div>
                </CardTag>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Claude Skills ── */}
      <section className="projects__skills projects-section section">
        <div className="container">
          <div className="projects__skills-header fade-up">
            <p className="projects__label">Claude Skills</p>
            <h2 className="projects__skills-heading">
              Tools I built for designers who think in systems.
            </h2>
            <p className="projects__skills-intro">
              These are Claude skills I built and use in my own workflow. Each one is a
              prompt system &mdash; paste it into Claude, describe what you&rsquo;re working
              on, and it does the thinking with you. No setup. No API key. Just download
              and use.
            </p>
            <div className="projects__skills-note">
              <span className="projects__skills-note-dot" />
              <p>
                A Claude skill is a structured prompt system. Open Claude, paste the skill,
                describe your design problem. That&rsquo;s it.
              </p>
            </div>
          </div>

          <div className="projects__skills-grid skills-grid">
            {skills.map((s, i) => (
              <div key={s.title} className={`skill-card fade-up stagger-${Math.min(i + 1, 4)}`}>
                <h3 className="skill-card__title">{s.title}</h3>
                <p className="skill-card__hook">{s.hook}</p>
                <p className="skill-card__how">{s.howToUse.split('\n').map((line, j) => (
                  <span key={j}>{line}{j < s.howToUse.split('\n').length - 1 && <br />}</span>
                ))}</p>
                <div className="skill-card__footer">
                  <p className="skill-card__free">Free skill</p>
                  <a href={s.downloadUrl} className="skill-card__download">
                    <span>&darr;</span> Download skill
                  </a>
                  <p className="skill-card__file">Google Drive &middot; ZIP file with skill.md + references</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why These Exist + Skill Request ── */}
      <section className="projects__why projects-section section">
        <div className="container">
          <div className="projects__why-grid two-column-cta">
            <div className="projects__why-left fade-up">
              <p className="projects__label">Why These Exist</p>
              <p className="projects__why-body">
                I started building Claude skills because I kept doing the same thinking
                over and over &mdash; setting up design systems, structuring research plans,
                writing component specs. These skills don&rsquo;t replace the thinking. They
                give it a better starting point.
              </p>
            </div>
            <div className="projects__why-right fade-up">
              <p className="projects__label">Have a Skill Request?</p>
              <p className="projects__why-body">
                If there&rsquo;s a design workflow you&rsquo;d want a skill for, let me know.
                I build these when I find a gap worth closing.
              </p>
              <a href="mailto:mehtabbadwal@gmail.com" className="btn btn--accent">
                mehtabbadwal@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="projects__cta projects-section">
        <div className="container">
          <hr className="projects__cta-divider" />
          <div className="projects__cta-inner">
            <p className="projects__cta-heading">
              If the obvious answer keeps feeling wrong &mdash; let&rsquo;s talk.
            </p>
            <div className="projects__cta-actions">
              <a href="mailto:mehtabbadwal@gmail.com" className="btn btn--accent">
                mehtabbadwal@gmail.com
              </a>
              <a href={`${import.meta.env.BASE_URL}resume-mehtab-badwal.pdf`} target="_blank" rel="noopener noreferrer" className="btn projects__cta-resume">
                Resume
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Projects;
