import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { MetricCounter } from '../components/MetricCounter';
import './Projects.css';

const caseStudies = [
  {
    year: '2025',
    tag: 'ENTERPRISE SYSTEMS',
    title: 'HPE Agentic Chatbot',
    description: "The fix wasn't smarter AI. It was more honest AI.",
    image: 'hpe-chatbot-hero.svg',
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
    image: 'pfa-hero.svg',
    metrics: [
      { value: '75%', label: 'fewer clicks' },
      { value: '3 wks', label: 'MVP shipped' },
    ],
    slug: 'hpe-pfa',
    categories: ['Enterprise', 'zero-to-one'],
  },
  {
    year: '2024',
    tag: 'AI PRODUCT',
    title: 'Qubera — AI Research Tool',
    description: 'Analysts knew what questions to ask. The tool just made them ask manually, every time.',
    image: 'qubera-hero.webp',
    metrics: [
      { value: '85%', label: 'faster extraction' },
      { value: '30%', label: 'faster decisions' },
    ],
    slug: 'qubera',
    categories: ['AI Products', 'zero-to-one'],
  },
  {
    year: '2023',
    tag: 'MOBILE · FIELD SERVICE',
    title: 'Fluidra Pro Redesign',
    description: 'Built around the 40-minute window, not the system.',
    image: 'fluidra-service-hero.webp',
    metrics: [
      { value: '40%', label: 'feature adoption' },
      { value: '25%', label: 'task efficiency' },
    ],
    slug: 'fluidra',
    categories: ['Mobile'],
  },
  {
    year: '2024',
    tag: 'MOBILE · PLATFORM',
    title: 'Fluidra Rewards Integration',
    description: 'Two products, two logins, one job. The answer was an architecture problem, not a design problem.',
    image: 'fluidra-rewards-hero.webp',
    metrics: [
      { value: '30%', label: 'user interaction' },
      { value: '20%', label: 'user retention' },
      { value: '55', label: 'screens shipped' },
    ],
    slug: 'fluidra-rewards',
    categories: ['Mobile'],
  },
];

const skills = [
  {
    title: 'Design System Skill',
    category: 'Design System',
    tags: 'Tokens, Components, Audits',
    hook: 'A design system process AI can actually follow.',
    howToUse: "Knows what to build first, what to clarify before starting, and how to handle failures mid-way. Built through real use — not theory.",
    downloadUrl: `${import.meta.env.BASE_URL}skills/design-system.zip`,
  },
  {
    title: 'UX Research Skill',
    category: 'UX Research',
    tags: 'Synthesis, Frameworks, Gaps',
    hook: "Understand why users aren't doing what you expected.",
    howToUse: "You'll either get a clear direction grounded in behavior — or proof that your approach already works. Both are useful.",
    downloadUrl: `${import.meta.env.BASE_URL}skills/ux-research.zip`,
  },
  {
    title: 'UI Designer Skill',
    category: 'UI Design',
    tags: 'Hierarchy, Spacing, Decisions',
    hook: 'Make visual decisions that actually hold.',
    howToUse: "Not decoration. Structure. It works through spacing, scale, and hierarchy — and calls out what feels off, even when you can't name it.",
    downloadUrl: `${import.meta.env.BASE_URL}skills/ui-designer.zip`,
  },
  {
    title: 'UX Designer Skill',
    category: 'UX Design',
    tags: 'Roles, Context, Behavior',
    hook: "Design for who's actually using the product.",
    howToUse: "It won't move until it understands the user, their role, and their state of mind. The same problem gets a different answer depending on who's asking it.",
    downloadUrl: `${import.meta.env.BASE_URL}skills/ux-designer.zip`,
  },
  {
    title: 'Motion Designer Skill',
    category: 'Motion Design',
    tags: 'Claims, Choreography, Handoff',
    hook: 'Motion that tells the truth about your product.',
    howToUse: "Runs a claims audit before touching timing curves. Catches what your animations are implying — and whether those implications are true. Specs Figma annotations, Lottie briefs, Rive state machines, and CSS, engineering-ready.",
    downloadUrl: `${import.meta.env.BASE_URL}skills/motion-designer.zip`,
  },
];

function Projects() {
  const pageRef = useScrollReveal();

  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;
    const id = hash.slice(1);
    let attempts = 0;
    const tryScroll = () => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      } else if (attempts < 15) {
        attempts++;
        setTimeout(tryScroll, 100);
      }
    };
    setTimeout(tryScroll, 150);
  }, []);

  return (
    <div className="projects" ref={pageRef}>
      {/* ── Selected Work ── */}
      <section className="projects__work projects-section section">
        <div className="container">
          <div className="projects__work-header fade-up">
            <div className="projects__section-header">
              <p className="section-label">Selected Work</p>
              <span className="section-rule" aria-hidden="true" />
            </div>
            <h1 className="projects__heading">
              Five products. The question I asked before{' '}
              <span className="projects__heading--accent">
                each one wasn&rsquo;t about the interface.
              </span>
            </h1>
          </div>

          <div className="projects__list">
            {caseStudies.map((cs, i) => {
              const hasPage = ['hpe-chatbot', 'hpe-pfa', 'qubera', 'fluidra', 'fluidra-rewards'].includes(cs.slug);
              const CardTag = hasPage ? Link : 'a';
              const cardProps = hasPage
                ? { to: `/case-studies/${cs.slug}` }
                : { href: `#${cs.slug}` };
              return (
                <CardTag {...cardProps} key={cs.slug} className={`projects__card fade-up stagger-${Math.min(i + 1, 5)}`}>
                  <div className="projects__card-image">
                    {cs.image ? (
                      <img
                        src={`${import.meta.env.BASE_URL}${cs.image}`}
                        alt={cs.title}
                        className="projects__card-img"
                      />
                    ) : (
                      <div className="projects__card-placeholder">
                        <span>{cs.title}</span>
                      </div>
                    )}
                  </div>
                  <div className="projects__card-body">
                    <p className="projects__card-desc">{cs.description}</p>
                    <h3 className="projects__card-title">{cs.title}</h3>
                    <div className="projects__card-meta">
                      <span className="projects__card-year">{cs.year}</span>
                      <span className="projects__card-dot" />
                      <span className="projects__card-tag">{cs.tag}</span>
                    </div>
                    <div className="projects__card-metrics">
                      {cs.metrics.map((m) => (
                        <div key={m.label} className="projects__card-metric">
                          <MetricCounter value={m.value} className="projects__card-metric-value" />
                          <span className="projects__card-metric-label">{m.label}</span>
                        </div>
                      ))}
                    </div>
                    <span className="projects__card-cta">Read case study &rarr;</span>
                  </div>
                </CardTag>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Claude Skills ── */}
      <section id="claude-skills" className="projects__skills projects-section section">
        <div className="container">
          <div className="projects__skills-header fade-up">
            <div className="projects__section-header">
              <p className="section-label">Claude Skills</p>
              <span className="section-rule" aria-hidden="true" />
            </div>
            <h2 className="projects__skills-heading">
              The same way of reading, written down for designers and AIs to use.
            </h2>
            <p className="projects__skills-intro">
              Most of what I do isn&rsquo;t tools or process &mdash; it&rsquo;s a
              way of reading problems. These skills are that reading, packaged.
              They give designers a better starting point.{' '}
              <strong>They&rsquo;re free.</strong>
            </p>
          </div>

          <div className="projects__skills-list">
            {skills.map((s, i) => (
              <div key={s.title} className={`skill-row fade-up stagger-${Math.min(i + 1, 4)}`}>
                <span className="skill-row__num">0{i + 1}</span>
                <div className="skill-row__body">
                  <p className="skill-row__meta">
                    <span className="skill-row__category">{s.category}</span>
                    <span className="skill-row__meta-dot" aria-hidden="true" />
                    <span className="skill-row__tags">{s.tags}</span>
                  </p>
                  <h3 className="skill-row__hook">{s.hook}</h3>
                  <p className="skill-row__desc">{s.howToUse}</p>
                </div>
                <a
                  href={s.downloadUrl}
                  className="skill-row__download"
                  target="_blank"
                  rel="noopener noreferrer"
                  download={!s.downloadUrl.startsWith('http')}
                >
                  <span className="skill-row__download-label">Download &darr;</span>
                  <span className="skill-row__download-meta">ZIP &middot; skill.md</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Projects;
