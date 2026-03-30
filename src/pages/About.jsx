import './About.css';

const skills = [
  { category: 'Design', items: ['UI/UX Design', 'Brand Identity', 'Design Systems', 'Prototyping'] },
  { category: 'Development', items: ['React', 'JavaScript', 'HTML/CSS', 'Node.js'] },
  { category: 'Tools', items: ['Figma', 'Adobe Creative Suite', 'VS Code', 'Git'] },
];

const experience = [
  {
    role: 'Senior Product Designer',
    company: 'Studio Nova',
    period: '2023 — Present',
    description: 'Leading design for SaaS products, building design systems, and mentoring junior designers.',
  },
  {
    role: 'Product Designer',
    company: 'Craft Digital',
    period: '2021 — 2023',
    description: 'Designed end-to-end experiences for e-commerce and fintech clients.',
  },
  {
    role: 'Junior Designer',
    company: 'Pixel & Co',
    period: '2019 — 2021',
    description: 'Created responsive websites and marketing materials for small businesses.',
  },
];

function About() {
  return (
    <div className="about">
      <section className="about__hero section">
        <div className="container">
          <p className="section-label">About</p>
          <h1>A designer who cares about craft, clarity, and impact</h1>
          <div className="about__intro">
            <div className="about__photo">
              <img
                src="https://placehold.co/480x600/E8E2D8/2D2420?text=Photo"
                alt="Portrait"
              />
            </div>
            <div className="about__bio">
              <p>
                I&rsquo;m a multidisciplinary designer and developer with over 6 years of
                experience crafting digital products. I believe great design lives at the
                intersection of aesthetics and usability.
              </p>
              <p>
                My approach is rooted in deep understanding — of users, business goals, and
                the medium itself. I work closely with founders, product teams, and engineers
                to create experiences that feel effortless.
              </p>
              <p>
                When I&rsquo;m not designing, you&rsquo;ll find me writing about design,
                reading about typography, or experimenting with new tools and techniques.
              </p>
            </div>
          </div>
        </div>
      </section>

      <hr className="section-divider container" />

      <section className="about__skills section">
        <div className="container">
          <p className="section-label">Skills & Tools</p>
          <h2>What I work with</h2>
          <div className="skills__grid">
            {skills.map((group) => (
              <div key={group.category} className="skills__group">
                <h4>{group.category}</h4>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="section-divider container" />

      <section className="about__experience section">
        <div className="container">
          <p className="section-label">Experience</p>
          <h2>Where I&rsquo;ve worked</h2>
          <div className="experience__list">
            {experience.map((job, i) => (
              <div key={i} className="experience__item">
                <div className="experience__period">{job.period}</div>
                <div className="experience__details">
                  <h3>{job.role}</h3>
                  <span className="experience__company">{job.company}</span>
                  <p>{job.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
